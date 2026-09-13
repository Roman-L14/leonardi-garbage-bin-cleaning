const PHONE = "12155122205";

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => mainNav.classList.remove("open"))
);

// Quote form -> builds a pre-filled text message instead of a backend submission
const quoteForm = document.getElementById("quote-form");
quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const address = data.get("address").trim();
  const cans = data.get("cans");
  const freq = data.get("freq");

  const message =
    `Hi Leonardi's, I'd like a quote for bin cleaning.\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Address: ${address}\n` +
    `Cans: ${cans}\n` +
    `Service: ${freq}`;

  const smsUrl = `sms:${PHONE}?&body=${encodeURIComponent(message)}`;
  window.location.href = smsUrl;
});
