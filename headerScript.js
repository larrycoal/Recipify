const $ = (selector) => document.querySelector(selector);
window.addEventListener("load", () => {
  $(".menu").addEventListener("click", () => {
    if ($("#mobile").style.display === "none" || null) {
      $("#mobile").style.display = "block";
    } else {
      $("#mobile").style.display = "none";
    }
  });
});
