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
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);
revealElements.forEach((el) => observer.observe(el));
