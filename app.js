const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-wrap nav");
const navLinks = document.querySelectorAll(".nav-wrap nav a");
const form = document.querySelector(".quote-form");

menuBtn?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open", Boolean(open));
  menuBtn.setAttribute("aria-expanded", String(Boolean(open)));
  document.body.style.overflow = open ? "hidden" : "";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuBtn?.classList.remove("is-open");
    menuBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const text = [
    "Merhaba, Burhan Acar Sigorta Acentesi sitesinden yazıyorum.",
    `Ad Soyad: ${data.get("name")}`,
    `Telefon: ${data.get("phone")}`,
    `Sigorta türü: ${data.get("service")}`,
    data.get("message") ? `Not: ${data.get("message")}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(
    `https://wa.me/905488258585?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  );
});
