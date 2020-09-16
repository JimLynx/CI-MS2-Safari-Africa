// Function adapted from CI tutorial for emailjs in mini-project walkthrough
function sendMail(contactForm) {
    emailjs.send("lynx", "ci-ms2", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value
    })
        .then(
            // Function to activate success modal
            function (response) {
                successModal();
            },
            // On error, using standard browser alert
            function (error) {
                alert("FAILED", error)
            })
    return false;
}

function successModal(e) {
    $("#emailSuccess").modal("show");
}
