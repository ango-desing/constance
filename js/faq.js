const faqs = document.querySelectorAll(".asked"); 
faqs.forEach((faq) => {
faq.addEventListener("click", () => {
faq.classList.toggle("active");
});
}); 