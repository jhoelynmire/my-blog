document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 1500);


    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});