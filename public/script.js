window.addEventListener("DOMContentLoaded", () => {
  const polaroid = document.getElementById("polaroid");
  if (polaroid) {
    const angle = (Math.random() * 10 - 5) - 4;
    polaroid.style.transform = `rotate(${angle.toFixed(2)}deg)`;
  }
});

const counts = { count1: 0, count2: 0 };

document.querySelectorAll(".btn-plus").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    counts[target] += 1;
    const el = document.getElementById(target);
    el.textContent = counts[target];
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
    setTimeout(() => el.classList.remove("bump"), 200);
  });
});

document.querySelectorAll(".btn-minus").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    counts[target] -= 1;
    const el = document.getElementById(target);
    el.textContent = counts[target];
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
    setTimeout(() => el.classList.remove("bump"), 200);
  });
});
