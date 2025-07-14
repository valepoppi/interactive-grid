const grid = document.getElementById("grid");

// Crear 10 x 10 celdas
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", () => {
    cell.style.backgroundColor =
      cell.style.backgroundColor === "lightgray" ? "skyblue" : "lightgray";
  });

  grid.appendChild(cell);
}
