document.addEventListener('DOMContentLoaded', (event) => {
    const youtubeLink = document.querySelector('.youtube-link');

    youtubeLink.addEventListener('mouseenter', () => {
        youtubeLink.style.transition = 'transform 0.3s ease';
        youtubeLink.style.transform = 'scale(1.2)';
    });

    youtubeLink.addEventListener('mouseleave', () => {
        youtubeLink.style.transform = 'scale(1)';
    });
});
