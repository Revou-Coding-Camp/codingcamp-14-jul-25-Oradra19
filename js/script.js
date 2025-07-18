document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toLocaleString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("outputName").textContent = document.getElementById("name").value;
    document.getElementById("outputEmail").textContent = document.getElementById("email").value;
    document.getElementById("outputPhone").textContent = document.getElementById("phone").value;
    document.getElementById("outputMessage").textContent = document.getElementById("messageText").value;
  });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    Swal.fire({
      icon: "warning",
      title: "Oops!",
      text: "Nama tidak boleh kosong!",
      confirmButtonText: "OK"
    });
    return;
  }
  document.getElementById("userName").textContent = name;
  document.getElementById("nameModal").classList.add("hidden");
}
