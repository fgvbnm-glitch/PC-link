document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const status = document.createElement("p");
  status.className = "site-status";
  status.textContent = `Status: Ready for publishing • ${today.toLocaleDateString()}`;

  const pageShell = document.querySelector(".page-shell");
  if (pageShell) {
    pageShell.appendChild(status);
  }
});
