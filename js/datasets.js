document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".dataset-row");
  const countEl = document.getElementById("datasetCount");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const modal = document.getElementById("datasetModal");
  const modalTitle = document.getElementById("modalTitle");
  const closeModal = document.getElementById("closeModal");

  // COUNT DATASETS
  countEl.textContent = rows.length;

  // FILTER LOGIC
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      rows.forEach(row => {
        row.style.display =
          filter === "all" || row.dataset.status === filter
            ? "flex"
            : "none";
      });
    });
  });

  // ROW CLICK → MODAL
  rows.forEach(row => {
    row.addEventListener("click", () => {
      modalTitle.textContent = row.dataset.title;
      modal.classList.add("active");
    });
  });

  // CLOSE MODAL
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });
});
