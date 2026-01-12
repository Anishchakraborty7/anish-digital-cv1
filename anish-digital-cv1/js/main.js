// =====================================
// MAIN DASHBOARD SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------------
  // SIDEBAR NAVIGATION (CENTER CONTENT)
  // -------------------------------------

  const navItems = document.querySelectorAll(".nav-item[data-section]");
  const sections = document.querySelectorAll(".content-section");

  let activeSection = "summary"; // default section

  function resetSections() {
    navItems.forEach(item => item.classList.remove("active"));
    sections.forEach(section => section.classList.remove("active"));
  }

  function activateSection(sectionId) {
    if (sectionId === activeSection) return;

    resetSections();

    const navItem = document.querySelector(
      `.nav-item[data-section="${sectionId}"]`
    );
    const section = document.getElementById(sectionId);

    if (navItem && section) {
      navItem.classList.add("active");
      section.classList.add("active");
      activeSection = sectionId;
    }
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-section");
      activateSection(target);
    });
  });

  // Ensure default state
  activateSection(activeSection);


  // -------------------------------------
  // CONTACT & HIRE MODALS
  // -------------------------------------

  const contactBtn = document.querySelector(".btn.ghost");
  const hireBtn = document.querySelector(".btn.primary");

  const contactModal = document.getElementById("contactModal");
  const hireModal = document.getElementById("hireModal");

  const closeButtons = document.querySelectorAll(".close-modal");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      contactModal.classList.add("active");
    });
  }

  if (hireBtn) {
    hireBtn.addEventListener("click", () => {
      hireModal.classList.add("active");
    });
  }

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      contactModal.classList.remove("active");
      hireModal.classList.remove("active");
    });
  });

  // Close modal when clicking outside content
  document.querySelectorAll(".ui-modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

});
