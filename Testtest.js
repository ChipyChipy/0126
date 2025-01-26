function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

const links = document.querySelectorAll('.dynamic-link');

links.forEach(link => {
    if (!isMobileDevice()) {
        link.setAttribute('target', '_blank');
    } else {
        link.removeAttribute('target');
    }
});
