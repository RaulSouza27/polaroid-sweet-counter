// Rotaciona a polaroid um pouco aleatoriamente pra ficar mais fofa no carregamento
window.addEventListener("DOMContentLoaded", () => {
  const polaroid = document.getElementById("polaroid");
  if (polaroid) {
    const angle = (Math.random() * 10 - 5) - 4; // entre -9 e +1 graus
    polaroid.style.transform = `rotate(${angle.toFixed(2)}deg)`;
  }
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
