// FitFoodies landing page interactions
// WhatsApp number is configured in the HTML links. Update it there if needed.

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

function openWhatsApp(message) {
  const phoneNumber = "916375777464"; // Country code + phone number, digits only
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".order-product").forEach((button) => {
  button.addEventListener("click", () => {
    openWhatsApp(`Hi FitFoodies! I'd like to know more about ${button.dataset.product}. Please share today's availability and price.`);
  });
});

document.querySelectorAll(".plan-order").forEach((button) => {
  button.addEventListener("click", () => {
    openWhatsApp(`Hi FitFoodies! I'm interested in your ${button.dataset.plan}. Please share the pricing, inclusions and delivery details.`);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
