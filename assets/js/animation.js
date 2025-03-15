const animation = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 300,
    reset: true,
    easing: 'ease'
});

animation.reveal('.content-top', {
    delay: 200,
    origin: 'bottom'
});

animation.reveal('.heading h1', {
    delay: 300,
    origin: 'bottom',
    interval: 200
});

animation.reveal('.heading p', {
    delay: 400,
    origin: 'bottom',
    interval: 200
});

animation.reveal('.heading .release', {
    delay: 500,
    origin: 'bottom',
    interval: 200
});

animation.reveal('footer', {
    delay: 600,
    origin: 'bottom',
    interval: 200
});
