const gift = document.getElementById("gift");

gift.addEventListener("click", () => {
  document.body.classList.add("opened");
  gift.setAttribute("aria-hidden", "true");
});
