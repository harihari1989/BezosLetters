const letterPdfPath = "jeff-bezos-amazon-shareholder-letters-1997_2020.pdf";

const letterDetails = [
  {
    year: 1997,
    page: 1,
    strategy:
      "Established the Day 1 stance: prioritize long-term market leadership and customer obsession over short-term optics.",
    metrics:
      "Reported 1.5 million customer accounts and 838% revenue growth to $147.8 million.",
    operations:
      "Scaled core infrastructure with larger fulfillment capacity, deeper inventory, and stronger systems support.",
    people:
      "Set a very high hiring bar and reinforced an intense builder culture around hard work and ownership.",
  },
  {
    year: 1998,
    page: 6,
    strategy:
      "Pushed toward becoming the place customers use to find and discover anything online.",
    metrics:
      "Sales grew from $148 million to $610 million and customer accounts grew from 1.5 million to 6.2 million.",
    operations:
      "Expanded into music, video, and gifts while launching and scaling the UK and Germany stores.",
    people:
      "Codified hiring quality with explicit interview standards and emphasis on raising the talent bar.",
  },
  {
    year: 1999,
    page: 11,
    strategy:
      "Invested aggressively in distribution, systems, and brand to build a multi-billion dollar platform.",
    metrics:
      "Reached $1.64 billion in sales, 16.9 million cumulative accounts, and higher repeat purchase rates.",
    operations:
      "Scaled worldwide fulfillment rapidly while adding major new categories and marketplace capabilities.",
    people:
      "Focused on process depth and bench strength to absorb complexity and sustain execution quality.",
  },
  {
    year: 2000,
    page: 16,
    strategy:
      "Stayed committed to long-term positioning during market stress while tightening financial discipline.",
    metrics:
      "Expanded to roughly 20 million customers with strong top-line growth despite capital market pressure.",
    operations:
      "Improved cost structure and operating leverage with a clear focus on sustainable economics.",
    people:
      "Reinforced resilience and execution rigor through a difficult macro and capital environment.",
  },
  {
    year: 2001,
    page: 18,
    strategy:
      "Clarified the differentiated model: broad selection, convenience, low prices, and customer trust.",
    metrics:
      "Highlighted improving customer satisfaction and a growing base of repeat customer behavior.",
    operations:
      "Used inventory, personalization, and marketplace mechanisms to make the store more useful over time.",
    people:
      "Emphasized disciplined day-to-day execution after a period of extreme growth and volatility.",
  },
  {
    year: 2002,
    page: 21,
    strategy:
      "Positioned Amazon as a structurally different retailer designed for long-horizon customer value.",
    metrics:
      "Centered performance on durable economic outputs rather than short-cycle market narratives.",
    operations:
      "Continued to combine technology systems with retail mechanics to improve customer outcomes.",
    people:
      "Sustained the ownership mindset as a behavior standard for leaders and teams.",
  },
  {
    year: 2003,
    page: 24,
    strategy:
      "Framed long-term thinking as both requirement and consequence of true ownership behavior.",
    metrics:
      "Evaluated decisions by future cash-flow impact and long-run value creation for owners.",
    operations:
      "Reinvested improvements back into customer experience to support compounding advantages.",
    people:
      "Contrasted owner behavior with short-term tenancy to reinforce decision discipline.",
  },
  {
    year: 2004,
    page: 26,
    strategy:
      "Made free cash flow per share the principal financial objective for long-term company health.",
    metrics:
      "Prioritized cash generation and efficient capital use over earnings optics and narrative management.",
    operations:
      "Managed operating cycle efficiency and reinvested cash into high-return customer initiatives.",
    people:
      "Asked leaders to think like long-term allocators of scarce capital and attention.",
  },
  {
    year: 2005,
    page: 29,
    strategy:
      "Balanced data-driven decision systems with experienced judgment for high-impact choices.",
    metrics:
      "Connected efficiency improvements directly to lower prices, stronger demand, and larger free cash flow.",
    operations:
      "Used forecasting and network planning to improve inventory position, speed, and cost structure.",
    people:
      "Reinforced decision quality by matching decision type to the right mix of analysis and judgment.",
  },
  {
    year: 2006,
    page: 31,
    strategy:
      "Planted seeds for new businesses while maintaining strict quality thresholds for major bets.",
    metrics:
      "Expected new initiatives to show credible long-term return potential before large scaling.",
    operations:
      "Built incubation mechanisms that allowed small teams to launch and iterate new platforms.",
    people:
      "Protected a culture where experimentation and patience could coexist with high standards.",
  },
  {
    year: 2007,
    page: 33,
    strategy:
      "Made a category-defining bet on Kindle and digital reading as a long-cycle platform move.",
    metrics:
      "Introduced Kindle with a large digital catalog and early evidence of strong customer pull.",
    operations:
      "Integrated hardware, store, and wireless delivery into a single customer experience system.",
    people:
      "Executed a multi-year cross-functional program requiring deep product and technical alignment.",
  },
  {
    year: 2008,
    page: 35,
    strategy:
      "Stayed long-term and customer-obsessed through turbulent global economic conditions.",
    metrics:
      "Focused on operating outputs that signal future value rather than near-term external noise.",
    operations:
      "Expanded service quality and fulfillment reliability while continuing selective innovation.",
    people:
      "Maintained operating focus and organizational calm during broad uncertainty.",
  },
  {
    year: 2009,
    page: 37,
    strategy:
      "Explained how years of incremental customer improvements compound into durable financial strength.",
    metrics:
      "Linked better customer inputs to stronger output metrics over multi-year windows.",
    operations:
      "Improved selection, shipping speed, and cost mechanics to keep the flywheel turning.",
    people:
      "Used annual planning mechanisms that anchored teams on controllable levers.",
  },
  {
    year: 2010,
    page: 39,
    strategy:
      "Treated technical depth as a strategic lever across retail and infrastructure businesses.",
    metrics:
      "Showed technology investments translating into stronger scale and economic performance.",
    operations:
      "Scaled service-oriented architecture, ranking systems, and distributed data capabilities.",
    people:
      "Relied on deep engineering talent and long-term technical craftsmanship.",
  },
  {
    year: 2011,
    page: 41,
    strategy:
      "Focused on invention through self-service platforms that let others build at scale.",
    metrics:
      "Highlighted large growth in AWS usage, FBA throughput, and KDP author participation.",
    operations:
      "Expanded platform primitives so developers, sellers, and authors could move faster.",
    people:
      "Positioned Amazon teams as enablers of entrepreneurship and creator independence.",
  },
  {
    year: 2012,
    page: 44,
    strategy:
      "Prioritized proactive customer delight rather than reactive moves driven by competition.",
    metrics:
      "Demonstrated continued Prime expansion and usage growth across shipping and digital benefits.",
    operations:
      "Scaled mechanisms like proactive refunds and service improvements that earn customer trust.",
    people:
      "Reinforced internal motivation to invent on behalf of customers before being forced to.",
  },
  {
    year: 2013,
    page: 46,
    strategy:
      "Advanced a broad portfolio of customer-facing initiatives across commerce, media, and devices.",
    metrics:
      "Reported continued Prime momentum and broad uptake of new service features.",
    operations:
      "Improved Prime, seller tools, content offerings, and support experiences in parallel.",
    people:
      "Relied on decentralized judgment from teams operating with shared principles.",
  },
  {
    year: 2014,
    page: 53,
    strategy:
      "Outlined the dreamy business framework: customer love, large scale, strong returns, and durability.",
    metrics:
      "Pointed to strong momentum in AWS and marketplace ecosystems as proof of compounding bets.",
    operations:
      "Continued to reinforce links among devices, Prime benefits, and fulfillment capabilities.",
    people:
      "Maintained leadership expectations around invention, ownership, and long-term thinking.",
  },
  {
    year: 2015,
    page: 58,
    strategy:
      "Showed how independent long-term bets can mature into multiple large, reinforcing businesses.",
    metrics:
      "Reached $100 billion annual sales scale while AWS approached a $10 billion annual run rate.",
    operations:
      "Scaled global infrastructure and service breadth across both retail and cloud.",
    people:
      "Worked to preserve builder energy and velocity despite rapidly increasing company scale.",
  },
  {
    year: 2016,
    page: 64,
    strategy:
      "Defined Day 2 risk and established mechanisms to keep the organization in Day 1 mode.",
    metrics:
      "Connected decision speed and experimentation quality to long-term competitive durability.",
    operations:
      "Recommended making most decisions with about 70% information and iterating quickly.",
    people:
      "Called for curiosity, external focus, and anti-bureaucratic behavior at every level.",
  },
  {
    year: 2017,
    page: 67,
    strategy:
      "Framed high standards as teachable, domain-specific systems instead of personality traits.",
    metrics:
      "Highlighted continued top customer satisfaction outcomes and broad service adoption.",
    operations:
      "Emphasized clear quality bars, realistic scope, and tight feedback loops.",
    people:
      "Focused on coaching, examples, and shared understanding of what great work looks like.",
  },
  {
    year: 2018,
    page: 73,
    strategy:
      "Combined disciplined customer listening with wandering exploration for outsized invention.",
    metrics:
      "Showed third-party seller share expansion and major scale in Alexa and AWS services.",
    operations:
      "Scaled machine learning services, specialty databases, voice platforms, and new store concepts.",
    people:
      "Normalized large experiments and accepted that meaningful invention includes notable failures.",
  },
  {
    year: 2019,
    page: 77,
    strategy:
      "Responded to an extraordinary crisis while maintaining customer service continuity at scale.",
    metrics:
      "Expanded hiring, temporary wage increases, relief funding, and major operational investments.",
    operations:
      "Prioritized essential goods, anti-price-gouging controls, and health-focused AWS support programs.",
    people:
      "Directed substantial attention and spending toward frontline safety and workforce support.",
  },
  {
    year: 2020,
    page: 82,
    strategy:
      "Summarized long-term stakeholder value creation and reinforced enduring Day 1 commitments.",
    metrics:
      "Outlined value created across customers, employees, sellers, and shareholders over the long arc.",
    operations:
      "Linked future resilience to climate commitments, reinvestment, and continued invention.",
    people:
      "Marked leadership transition while stressing cultural continuity under the next CEO.",
  },
];

const detailGrid = document.getElementById("detailGrid");
const yearPills = document.getElementById("yearPills");
const detailSearch = document.getElementById("detailSearch");
const focusArea = document.getElementById("focusArea");
const sortOrder = document.getElementById("sortOrder");

const state = {
  query: "",
  sort: "asc",
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const searchableText = (item) =>
  [item.year, item.strategy, item.metrics, item.operations, item.people].join(" ").toLowerCase();

const getFilteredItems = () => {
  const query = state.query.trim().toLowerCase();
  let filtered = letterDetails.filter((item) => (query ? searchableText(item).includes(query) : true));

  filtered = filtered.sort((a, b) => (state.sort === "desc" ? b.year - a.year : a.year - b.year));
  return filtered;
};

const renderYearPills = () => {
  if (!yearPills) {
    return;
  }

  const pills = [...letterDetails]
    .sort((a, b) => a.year - b.year)
    .map(
      (item) =>
        `<button class="year-pill" type="button" data-pill-year="${item.year}" data-pill-page="${item.page}">
          ${item.year}
        </button>`
    )
    .join("");

  yearPills.innerHTML = pills;
};

const renderCards = () => {
  if (!detailGrid) {
    return;
  }

  const items = getFilteredItems();

  if (!items.length) {
    detailGrid.innerHTML = `
      <article class="detail-card">
        <div class="detail-head">
          <div class="detail-year-wrap">
            <p class="year">No matches</p>
            <h3 class="detail-year">Try a different search term</h3>
          </div>
        </div>
      </article>
    `;
    return;
  }

  const html = items
    .map(
      (item) => `
        <article class="detail-card" id="year-${item.year}">
          <div class="detail-head">
            <div class="detail-year-wrap">
              <p class="year">${item.year}</p>
              <h3 class="detail-year">Letter Deep Details</h3>
              <p class="detail-page">PDF start page: ${item.page}</p>
            </div>
            <a
              class="detail-link"
              href="${letterPdfPath}#page=${item.page}&view=FitH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
          </div>
          <div class="detail-sections">
            <section class="section-block" data-cat="strategy">
              <h3>Strategy</h3>
              <p>${escapeHtml(item.strategy)}</p>
            </section>
            <section class="section-block" data-cat="metrics">
              <h3>Metrics</h3>
              <p>${escapeHtml(item.metrics)}</p>
            </section>
            <section class="section-block" data-cat="operations">
              <h3>Operations</h3>
              <p>${escapeHtml(item.operations)}</p>
            </section>
            <section class="section-block" data-cat="people">
              <h3>People</h3>
              <p>${escapeHtml(item.people)}</p>
            </section>
          </div>
        </article>
      `
    )
    .join("");

  detailGrid.innerHTML = html;
};

if (detailGrid) {
  document.body.dataset.focus = "all";
  renderYearPills();
  renderCards();

  detailSearch?.addEventListener("input", (event) => {
    state.query = event.target.value || "";
    renderCards();
  });

  sortOrder?.addEventListener("change", (event) => {
    state.sort = event.target.value === "desc" ? "desc" : "asc";
    renderCards();
  });

  focusArea?.addEventListener("change", (event) => {
    const value = event.target.value;
    document.body.dataset.focus =
      value === "strategy" || value === "metrics" || value === "operations" || value === "people"
        ? value
        : "all";
  });

  yearPills?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pill-year]");
    if (!button) {
      return;
    }

    const year = button.getAttribute("data-pill-year");
    if (!year) {
      return;
    }

    state.query = year;
    if (detailSearch) {
      detailSearch.value = year;
    }
    renderCards();

    const targetCard = document.getElementById(`year-${year}`);
    targetCard?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
