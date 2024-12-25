document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    document.querySelector('.bottom-nav').appendChild(indicator);

    // Function to update the active item based on the current page
    function setActiveByURL() {
        const currentPage = window.location.pathname; // Get the current page path
        navItems.forEach(item => {
            const link = item.getAttribute('href');
            if (currentPage.includes(link)) {
                item.classList.add('active');
                updateIndicator(item);
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Function to update the indicator's position
    function updateIndicator(item) {
        indicator.style.width = `${item.offsetWidth}px`;
        indicator.style.left = `${item.offsetLeft}px`;
    }

    // Set the active item on page load
    setActiveByURL();
});
