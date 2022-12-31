const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");
const sideC = document.getElementById("side-c");
const btnCalcArea = document.getElementById("calculate-area");
const btnClear = document.getElementById("clear");
const warning = document.getElementById("warning");
const result = document.getElementById("result");

const triangleExists = (x, y, z) => {
  const a = Number(x);
  const b = Number(y);
  const c = Number(z);
  const existence = a < b + c && b < c + a && c < a + b;
  if (existence) {
    return true;
  } else {
    return false;
  }
};

const calculateArea = (x, y, z) => {
  const a = Number(x);
  const b = Number(y);
  const c = Number(z);
  const t = (a + b + c) / 2;
  return Math.sqrt(t * (t - a) * (t - b) * (t - c));
};

btnClear.addEventListener("click", () => {
  warning.innerHTML = "";
  result.innerHTML = "";
  sideA.value = "";
  sideB.value = "";
  sideC.value = "";
});

btnCalcArea.addEventListener("click", () => {
  if (sideA.value !== "" && sideB.value !== "" && sideC.value !== "") {
    if (sideA.value <= 0 || sideB.value <= 0 || sideC.value <= 0) {
      result.innerHTML = "";
      warning.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Τα μήκη των πλευρών του τριγώνου πρέπει να ναι θετικοί αριθμοί
      </div>`;
      return;
    }

    if (!triangleExists(sideA.value, sideB.value, sideC.value)) {
      result.innerHTML = "";
      warning.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Δεν υπάρχει τρίγωνο με μήκη πλευρών που δώσατε.
        Τα μήκη των πλευρών του τριγώνου, α,β,γ πρέπει να ικανοποιούν τις εξής ανισότητες:
        α < β + γ, β < γ + α, γ < β + α 
      </div>`;
      return;
    }

    warning.innerHTML = `
    <div class="alert alert-info" role="alert">
  Εμβαδό Τριγώνου = ${calculateArea(sideA.value, sideB.value, sideC.value)}
</div>`;
  }
});
