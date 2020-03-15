const button = document.getElementById("dark-mode");

function darkToggle() {
  const el1 = document.getElementById("dark-reader");
  if (el1.disabled) {
    el1.disabled = false;
    localStorage.setItem("darkreader", "enabled");
  } else {
    el1.disabled = true;
    localStorage.setItem("darkreader", "disabled");
  }
}

button.addEventListener("click", () => {
  darkToggle();
});
