document.addEventListener("DOMContentLoaded", () => {
  // Show time
  function updateTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toLocaleString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Date input min: today
  const today = new Date().toISOString().split("T")[0];
  const birthdateInput = document.getElementById("Date");
  birthdateInput.setAttribute("min", today);

  // Form submission
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("outputName").textContent = document.getElementById("name").value;
    document.getElementById("outputDate").textContent = document.getElementById("Date").value;
    document.getElementById("outputGender").textContent = form.gender.value;
    document.getElementById("outputMessage").textContent = document.getElementById("messageText").value;
  });
});

// Modal name
function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Nama tidak boleh kosong!");
    return;
  }

  document.getElementById("userName").textContent = name;
  document.getElementById("nameModal").classList.add("hidden"); // ubah display ke class tailwind
}
