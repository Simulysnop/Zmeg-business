document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you for contacting FreshCut Barbershop! " +
                "We will get back to you soon."
            );

            form.reset();
        });

    }

});