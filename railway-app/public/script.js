// Upload da foto polaroid
const input = document.getElementById("photo-input");
const photoArea = document.getElementById("photo-area");
const polaroid = document.getElementById("polaroid");

input.addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    photoArea.innerHTML = "";
    const img = document.createElement("img");
    img.src = ev.target.result;
    img.alt = "Sua foto";
    photoArea.appendChild(img);

    // Rotaciona a polaroid um pouco aleatoriamente pra ficar mais fofa
    const angle = (Math.random() * 10 - 5) - 4; // entre -9 e +1 graus
    polaroid.style.transform = `rotate(${angle.toFixed(2)}deg)`;
  };
  reader.readAsDataURL(file);
});

// Contadores
const counts = { count1: 0, count2: 0 };

document.querySelectorAll(".btn-plus").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    counts[target] += 1;
    const el = document.getElementById(target);
    el.textContent = counts[target];
    el.classList.remove("bump");
    // trigger reflow para reiniciar animação
    void el.offsetWidth;
    el.classList.add("bump");
    setTimeout(() => el.classList.remove("bump"), 200);
  });
});
