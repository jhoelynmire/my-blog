document.addEventListener("DOMContentLoaded", function() {
    console.log("Weblog Test Loaded Successfully");

    $("nav a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});