// Tab switching with extra effects
const links = document.querySelectorAll('#navbar a');
const tabs = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');

    // deactivate all
    links.forEach(a => a.classList.remove('active'));
    tabs.forEach(sec => {
      sec.classList.remove('active');
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(30px) scale(0.95)';
    });

    // activate clicked
    link.classList.add('active');
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');

    // animation
    setTimeout(() => {
      activeTab.style.opacity = 1;
      activeTab.style.transform = 'translateY(0) scale(1)';
    }, 50);
  });
});
