import { fetchTopics, renderMenu, renderDetail, handleMenuClicks } from './modules/topicsApp.js';

document.addEventListener('DOMContentLoaded', async () => {
  const topics = await fetchTopics('data.json');
  renderMenu(topics);
  renderDetail(topics[0]);
  handleMenuClicks(topics);
});
