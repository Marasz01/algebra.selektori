const toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function() {
  if (toggleIcon.innerHTML === String.fromCharCode(parseInt("f101", 16))) {
    toggleIcon.innerHTML = String.fromCharCode(parseInt("f100", 16));
  } else {
    toggleIcon.innerHTML = String.fromCharCode(parseInt("f101", 16));
  }
});