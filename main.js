const gotIt = document.getElementById("got-it");
const notification = document.querySelector(".notification-wrapper");
const faTimes = document.querySelector(".fa-times");
const newsletter = document.querySelector(".newsletter-panel");         

// Notification Animation
gotIt.addEventListener('click', () => {
    notification.classList.toggle('hide-notification');
})

// Newsletter Animation
window.addEventListener('scroll', newsletterPanel);
window.onscroll = function() {
    windowScroll = document.documentElement.scrollTop;
};

function newsletterPanel() {
    const newsletterpoint = 400;

    if(windowScroll = newsletterpoint) {
        newsletter.classList.add('active');
    }

}

faTimes.addEventListener('click', () => {
    newsletter.classList.toggle('hide-newsletter');
    setTimeout(function(){ newsletter.classList.add('active'); }, 600000);
})
