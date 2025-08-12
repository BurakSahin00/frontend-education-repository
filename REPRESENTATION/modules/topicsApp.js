// Modüler, BEM uyumlu JS

export async function fetchTopics(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Veri alınamadı');
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export function renderMenu(topics) {
  const menu = document.getElementById('topics-menu');
  menu.innerHTML = '';
  const ul = document.createElement('ul');
  ul.className = 'topics-menu';
  topics.forEach((topic, idx) => {
    const li = document.createElement('li');
    li.className = 'topics-menu__item' + (idx === 0 ? ' topics-menu__item--active' : '');
    li.textContent = topic.title;
    li.tabIndex = 0;
    li.dataset.id = topic.id;
    ul.appendChild(li);
  });
  menu.appendChild(ul);
}

export function renderDetail(topic) {
  const detail = document.getElementById('topic-detail');
  detail.innerHTML = '';
  if (!topic) return;

  // Görsel
  if (topic.image) {
    const img = document.createElement('img');
    img.src = topic.image;
    img.alt = topic.title;
    img.className = 'topic-detail__image';
    detail.appendChild(img);
  }

  // Başlık
  const title = document.createElement('h2');
  title.className = 'topic-detail__title';
  title.textContent = topic.title;
  detail.appendChild(title);

  // Açıklama
  const desc = document.createElement('p');
  desc.className = 'topic-detail__desc';
  desc.textContent = topic.description;
  detail.appendChild(desc);

  // Liste
  if (Array.isArray(topic.list) && topic.list.length > 0) {
    const ul = document.createElement('ul');
    ul.className = 'topic-detail__list';
    topic.list.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    detail.appendChild(ul);
  }
}

export function handleMenuClicks(topics) {
  const menu = document.querySelector('.topics-menu');
  if (!menu) return;
  menu.addEventListener('click', e => {
    if (e.target.classList.contains('topics-menu__item')) {
      document.querySelectorAll('.topics-menu__item').forEach(item => item.classList.remove('topics-menu__item--active'));
      e.target.classList.add('topics-menu__item--active');
      const id = Number(e.target.dataset.id);
      const topic = topics.find(t => t.id === id);
      renderDetail(topic);
    }
  });
  // Klavye ile erişilebilirlik
  menu.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.classList.contains('topics-menu__item')) {
      e.target.click();
    }
  });
}
