// Initialize EmailJS
(function () {
  emailjs.init("9pqB7hySi5e0x4L9Y"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_3ir6p6g", "template_x3dv4hb", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Try again later.");
      console.error("EmailJS Error:", error);
    });
});
