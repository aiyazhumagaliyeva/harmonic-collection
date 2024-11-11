let lastScrollTop = 0;

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.vorn-section .vorn-content');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            if (scrollTop > lastScrollTop) {
                section.classList.add('vorn-active');
                section.classList.remove('vorn-inactive');
            }
        } else {
            if (scrollTop < lastScrollTop) {
                section.classList.add('vorn-inactive');
                section.classList.remove('vorn-active');
            }
        }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
