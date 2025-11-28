const levels = document.querySelectorAll('.level');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const infos = entry.target.querySelectorAll('.info');
    const light = entry.target.querySelector('.light');

    if (entry.isIntersecting) {
      infos.forEach(info => info.classList.add('active'));
      if (light) light.classList.add('active');
    } else {
      infos.forEach(info => info.classList.remove('active'));
      if (light) light.classList.remove('active');
    }
  });
}, {
  threshold: 0.5 // adjust as needed
});

levels.forEach(level => observer.observe(level));
