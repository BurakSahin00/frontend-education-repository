// BEM ve modülerlik için ana fonksiyonlar

export async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Veri alınamadı');
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export function renderCards(data) {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';
  data.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'info-card';

    // Görsel
    if (card.image) {
      const img = document.createElement('img');
      img.src = card.image;
      img.alt = card.title;
      img.className = 'info-card__image';
      cardEl.appendChild(img);
    }

    // Başlık
    const title = document.createElement('h3');
    title.className = 'info-card__title';
    title.textContent = card.title;
    cardEl.appendChild(title);

    // Açıklama
    const desc = document.createElement('p');
    desc.className = 'info-card__desc';
    desc.textContent = card.description;
    cardEl.appendChild(desc);

    // Liste
    if (Array.isArray(card.list) && card.list.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'info-card__list';
      card.list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      cardEl.appendChild(ul);
    }

    container.appendChild(cardEl);
  });
}

export function handleForm(data) {
  const form = document.getElementById('add-card-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const list = form.list.value.trim()
      ? form.list.value.split(',').map(i => i.trim()).filter(Boolean)
      : [];
    const image = form.image.value.trim();
    const newCard = {
      id: Date.now(),
      title,
      description,
      list,
      image
    };
    data.push(newCard);
    renderCards(data);
    form.reset();
  });
}
