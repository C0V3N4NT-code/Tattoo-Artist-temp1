const dialog = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxType = document.querySelector("#lightbox-type");
const lightboxTitle = document.querySelector("#lightbox-title");
const closeButton = document.querySelector("#close-lightbox");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxType.textContent = card.dataset.type;
    lightboxTitle.textContent = card.dataset.title;

    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";

  navLinks.style.display = isOpen ? "none" : "flex";

  if (!isOpen) {
    Object.assign(navLinks.style, {
      position: "absolute",
      top: "70px",
      right: "7%",
      flexDirection: "column",
      padding: "20px",
      background: "#111",
      border: "1px solid #333"
    });
  }
});