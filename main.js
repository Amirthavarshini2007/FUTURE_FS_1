(function () {
  
  emailjs.init("RJbSU44Qtt3vFKolD");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_s83mzqo",     
    "template_k8lexus",    
    this
  ).then(
    function () {
      document.getElementById("form-status").innerText =
        "Message sent successfully!";
    },
    function (error) {
      document.getElementById("form-status").innerText =
        "Failed to send message. Please try again.";
      console.error("EmailJS Error:", error);
    }
  );

  this.reset();
});
