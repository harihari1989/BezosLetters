const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const revealEls = document.querySelectorAll(".reveal");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sectionIds = navLinks
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.startsWith("#"))
  .map((id) => document.querySelector(id))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current || !current.target.id) {
      return;
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current.target.id}`;
      link.style.color = isActive ? "var(--brand-deep)" : "";
      link.style.textDecoration = isActive ? "underline" : "";
      link.style.textUnderlineOffset = isActive ? "0.2rem" : "";
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.25, 0.5, 0.75] }
);

sectionIds.forEach((section) => sectionObserver.observe(section));

const pdfPath = "jeff-bezos-amazon-shareholder-letters-1997_2020.pdf";
const yearSelect = document.getElementById("yearSelect");
const letterViewer = document.getElementById("letterViewer");
const viewerMeta = document.getElementById("viewerMeta");
const openPdfTab = document.getElementById("openPdfTab");
const yearJumpLinks = Array.from(document.querySelectorAll("[data-year-jump]"));
const archiveCards = Array.from(document.querySelectorAll(".archive-card"));

const setActiveArchiveCard = (year) => {
  archiveCards.forEach((card) => {
    const isActive = card.getAttribute("data-year") === String(year);
    card.classList.toggle("is-active", isActive);
  });
};

const setViewerYear = (year, page) => {
  const safeYear = String(year);
  const safePage = Number(page) || 1;
  const fragment = `#page=${safePage}&view=FitH`;

  if (letterViewer) {
    letterViewer.setAttribute("src", `${pdfPath}${fragment}`);
  }

  if (openPdfTab) {
    openPdfTab.setAttribute("href", `${pdfPath}${fragment}`);
  }

  if (viewerMeta) {
    viewerMeta.textContent = `Showing ${safeYear} letter start (page ${safePage}).`;
  }

  if (yearSelect) {
    yearSelect.value = safeYear;
  }

  setActiveArchiveCard(safeYear);
};

if (yearSelect && letterViewer) {
  const initialOption = yearSelect.options[yearSelect.selectedIndex];
  const initialYear = initialOption?.value || "1997";
  const initialPage = initialOption?.dataset.page || "1";
  setViewerYear(initialYear, initialPage);

  yearSelect.addEventListener("change", (event) => {
    const option = event.target.selectedOptions?.[0];
    if (!option) {
      return;
    }
    setViewerYear(option.value, option.dataset.page);
  });

  yearJumpLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const year = link.getAttribute("data-year-jump");
      const page = link.getAttribute("data-page");
      if (!year || !page) {
        return;
      }
      setViewerYear(year, page);
    });
  });
}
