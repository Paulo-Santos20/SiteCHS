const topics = document.querySelectorAll('.topic');

topics.forEach(topic => {
  topic.addEventListener('click', function() {
    const subTopic = this.querySelector('.sub-topic');
    if (subTopic.style.display === 'none') {
      subTopic.style.display = 'block';
    } else {
      subTopic.style.display = 'none';
    }
  });
});