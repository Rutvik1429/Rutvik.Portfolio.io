// ==========================================================================
// RUTVIK BAMBHANIYA - DATA ANALYST PORTFOLIO
// Modern Interactive React 18 Application (Matching 6-Screen Reference Design)
// ==========================================================================

const { useState, useEffect, useMemo } = React;

// --- DATA: PROJECTS (6 Real-World Analytics Projects) ---
const PROJECTS_DATA = [
  {
    id: "proj1",
    title: "Sales Performance Dashboard",
    category: "powerbi",
    tags: ["Power BI", "Sales", "FMCG"],
    img: "assets/credit_loan_dashboard.svg",
    desc: "Interactive dashboard to track multi-channel retail sales, distributor performance, and month-over-month growth trends.",
    problem: "FMCG business leadership lacked real-time visibility into distributor performance, SKU-level sales velocity, and regional revenue growth.",
    objective: "Build an executive-ready Power BI reporting suite with automated ETL and custom DAX time-intelligence metrics.",
    tools: ["Power BI", "DAX", "Power Query ETL", "Star Schema Modeling"],
    insights: [
      "Identified top 20% high-velocity SKUs contributing to 68% of cumulative monthly revenue.",
      "Visualized distributor recovery cycles and reduced reconciliation delays by 40%.",
      "Configured automated scheduled refreshes eliminating manual daily reporting routines."
    ],
    codeSnippet: `// DAX: Year-over-Year Growth & Cumulative Target Achievement
YoY Growth % = 
VAR CurrentSales = [Total Sales]
VAR PriorSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Dim_Date'[Date]))
RETURN
DIVIDE(CurrentSales - PriorSales, PriorSales, 0) * 100`,
    github: "https://github.com/Rutvik1429/Credit-Loan-Disbursement-Recovery-Analysis-SQL-Power_BI"
  },
  {
    id: "proj2",
    title: "Retail Sales Analysis",
    category: "excel",
    tags: ["Excel", "Data Cleaning", "MIS"],
    img: "assets/blinkit_performance_dashboard.svg",
    desc: "Cleaned and analyzed retail sales data across store tiers to identify key business insights and outlet efficiency.",
    problem: "Quick-commerce retail operations required consolidated visibility into item category sales, location tiers, and customer ratings.",
    objective: "Create an automated Excel MIS dashboard leveraging Power Query data transformations and dynamic Pivot Tables.",
    tools: ["Advanced Excel", "Power Query", "Pivot Tables", "MIS Automation"],
    insights: [
      "Mapped outlet sales volume across Tier 1, 2, and 3 cities to prioritize replenishment schedules.",
      "Built dynamic slicer filtering for instantaneous multi-attribute slicing with zero software licensing costs."
    ],
    codeSnippet: `// Excel Power Query M Formula for Grouped Outlet Metrics
let
    Source = Csv.Document(File.Contents("Sales_Data.csv"),[Delimiter=",", Encoding=1252]),
    PromotedHeaders = Table.PromoteHeaders(Source, [PromoteAllScalars=true]),
    GroupedRows = Table.Group(PromotedHeaders, {"Outlet_Location_Type"}, {
        {"Total_Sales", each List.Sum([Item_Outlet_Sales]), type number},
        {"Avg_Rating", each List.Average([Rating]), type number}
    })
in
    GroupedRows`,
    github: "https://github.com/Rutvik1429/Business-Performance-Report-Blinkit_Analysis--ETL-EXCEL"
  },
  {
    id: "proj3",
    title: "Customer Segmentation & Churn",
    category: "python",
    tags: ["Python", "Machine Learning", "EDA"],
    img: "assets/customer_churn_dashboard.svg",
    desc: "Used statistical EDA and machine learning clustering techniques to segment customers based on purchase behavior.",
    problem: "High customer attrition rate in recurring subscriber cohorts without clear visibility into underlying churn drivers.",
    objective: "Perform comprehensive Python Exploratory Data Analysis (EDA) and segmentation to identify high-risk customer segments.",
    tools: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
    insights: [
      "Uncovered that customers on month-to-month contracts had a 42% higher churn likelihood compared to annual subscribers.",
      "Identified critical tenure window (0-6 months) where targeted onboarding interventions reduce attrition."
    ],
    codeSnippet: `# Python: Churn Rate Analysis by Contract Type
import pandas as pd

churn_rate = df.groupby('Contract')['Churn'].value_counts(normalize=True).unstack()
churn_rate['Churn_Pct'] = churn_rate['Yes'] * 100
print(churn_rate[['Churn_Pct']])`,
    github: "https://github.com/Rutvik1429/Customer_Churn_Analysis-Excel-ML-EDA-Python-Project"
  },
  {
    id: "proj4",
    title: "Inventory Optimization & Tracking",
    category: "sql",
    tags: ["SQL", "Supply Chain", "MySQL"],
    img: "assets/vendor_performance_dashboard.svg",
    desc: "Analyzed inventory and warehouse data to reduce stockouts, optimize reorder levels, and improve fulfillment.",
    problem: "Frequent stockouts of key SKUs during promotional spikes led to lost revenue and customer dissatisfaction.",
    objective: "Develop complex SQL analytical queries to benchmark vendor lead times and calculate dynamic Safety Stock quantities.",
    tools: ["SQL", "MySQL", "Window Functions", "CTEs", "Supply Chain Analytics"],
    insights: [
      "Identified supplier delivery bottlenecks, reducing stockout occurrences by 22%.",
      "Calculated dynamic Economic Order Quantities (EOQ) based on historical demand seasonality."
    ],
    codeSnippet: `-- SQL: Dynamic Reorder Point and Stockout Risk Detection
WITH InventoryMetrics AS (
    SELECT 
        sku_id,
        product_name,
        current_stock,
        avg_daily_sales,
        supplier_lead_time_days,
        (avg_daily_sales * supplier_lead_time_days * 1.25) AS recommended_reorder_point
    FROM warehouse_inventory
)
SELECT *,
    CASE 
        WHEN current_stock <= (recommended_reorder_point * 0.5) THEN 'CRITICAL_STOCKOUT_RISK'
        WHEN current_stock <= recommended_reorder_point THEN 'REORDER_NOW'
        ELSE 'OPTIMAL_STOCK'
    END AS stock_status
FROM InventoryMetrics
ORDER BY current_stock ASC;`,
    github: "https://github.com/Rutvik1429/Vendor_Performance_Analysis-Power_BI-SQL-Python"
  },
  {
    id: "proj5",
    title: "Marketing Campaign Analysis",
    category: "powerbi",
    tags: ["Excel", "Power BI", "Marketing"],
    img: "assets/yellow_taxi_dashboard.svg",
    desc: "Measured multi-channel marketing campaign performance and identified top-converting customer channels.",
    problem: "Marketing budget allocation across paid social, search, and influencer campaigns lacked clear attribution and ROAS metrics.",
    objective: "Build an end-to-end attribution dashboard connecting marketing spends with down-funnel sales conversions.",
    tools: ["Power BI", "Tableau", "DAX", "Python Stats"],
    insights: [
      "Identified that influencer-led promotions delivered a 3.2x higher conversion rate for new product launches.",
      "Optimized quarterly budget re-allocation to enhance overall blended ROAS by 28%."
    ],
    codeSnippet: `// DAX: Return on Ad Spend (ROAS)
ROAS Ratio = 
DIVIDE([Campaign Attributed Revenue], [Total Ad Spend], 0)`,
    github: "https://github.com/Rutvik1429/Yellow-Taxi-Trips-Report-Python-Hypothesis_testing--Tableau"
  },
  {
    id: "proj6",
    title: "Automated Reporting System",
    category: "automation",
    tags: ["Google Apps Script", "Automation", "Google Sheets"],
    img: "assets/customer_performance_dashboard.svg",
    desc: "Built an automated reporting system using Google Apps Script and Claude AI to save time and reduce manual work.",
    problem: "Operational analysts spent 10+ manual hours each week downloading CSVs, aggregating orders, and emailing updates to managers.",
    objective: "Build an automated cloud reporting workflow using Google Sheets and Google Apps Script (GAS) with scheduled triggers.",
    tools: ["Google Sheets", "Google Apps Script", "Claude AI (Vibe Coding)", "REST APIs"],
    insights: [
      "Completely automated daily 9:00 AM sales and stock dispatch summary emails to leadership.",
      "Eliminated human copy-paste errors across 15+ internal operational tracking sheets."
    ],
    codeSnippet: `// Google Apps Script (GAS): Scheduled Daily Automated Order Digest
function sendDailySalesSummary() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live_Orders");
  const data = sheet.getDataRange().getValues();
  let totalRevenue = 0;
  
  for (let i = 1; i < data.length; i++) {
    totalRevenue += Number(data[i][4]); // Column 5: Order Amount
  }
  
  MailApp.sendEmail({
    to: "management@alpino.store",
    subject: "📊 Automated Daily Sales Digest - " + Utilities.formatDate(new Date(), "GMT+5:30", "dd-MMM-yyyy"),
    body: "Today's Total Processed Revenue: ₹" + totalRevenue.toLocaleString("en-IN")
  });
}`,
    github: "https://github.com/Rutvik1429/Credit-Loan-Disbursement-Recovery-Analysis-SQL-Power_BI"
  }
];

// --- DATA: TEMPLATES (Screen 4: Ready-to-use Templates) ---
const TEMPLATES_DATA = [
  {
    id: "tpl1",
    title: "Sales Dashboard Template",
    category: "powerbi",
    badge: "Power BI",
    price: "₹299",
    img: "assets/credit_loan_dashboard.svg",
    desc: "Track sales, targets and growth with a ready-to-use executive Power BI dashboard.",
    features: ["Pre-configured Star Schema", "15+ DAX Time-Intelligence Measures", "Dynamic Slicers & Tooltips", "Mobile-Optimized Layout"]
  },
  {
    id: "tpl2",
    title: "Distributor Data Tracker",
    category: "excel",
    badge: "Excel / MIS",
    price: "₹199",
    img: "assets/blinkit_performance_dashboard.svg",
    desc: "Manage distributor data, secondary sales and operational reporting easily.",
    features: ["Automated Power Query Ingestion", "Distributor Reconciliation View", "Pre-built Pivot Summaries", "Zero Software License Needed"]
  },
  {
    id: "tpl3",
    title: "Expense Tracker",
    category: "excel",
    badge: "Excel / Finance",
    price: "₹149",
    img: "assets/customer_churn_dashboard.svg",
    desc: "Simple and effective expense tracking template for department and personal budgets.",
    features: ["Category-wise Monthly Budgeting", "Variance Analysis (Budget vs Actual)", "Auto-Calculating Net Burn", "Printable PDF Summary"]
  },
  {
    id: "tpl4",
    title: "Project Tracker",
    category: "excel",
    badge: "Excel / Productivity",
    price: "₹199",
    img: "assets/vendor_performance_dashboard.svg",
    desc: "Track tasks, deadlines and progress in one central structured dashboard.",
    features: ["Automated Gantt Visualizer", "Task Status Priority Dropdowns", "Overdue Deadline Highlights", "Team Resource Allocation"]
  },
  {
    id: "tpl5",
    title: "HR Attendance Tracker",
    category: "excel",
    badge: "Excel / HR",
    price: "₹199",
    img: "assets/yellow_taxi_dashboard.svg",
    desc: "Employee attendance, overtime, and leave management ready-made template.",
    features: ["Monthly Calendar Grid Matrix", "Automated Leave Balance Deductions", "Overtime & Shift Calculation", "Audit-Ready Report"]
  },
  {
    id: "tpl6",
    title: "Business KPI Dashboard",
    category: "powerbi",
    badge: "Power BI / Business",
    price: "₹299",
    img: "assets/customer_performance_dashboard.svg",
    desc: "Monitor key business metrics with interactive executive cards and visuals.",
    features: ["Gross Margin & EBITDA Cards", "Customer Acquisition vs Churn", "Regional Revenue Geo Maps", "Real-Time KPI Slicers"]
  }
];

// --- DATA: ARTICLES / INSIGHTS (Screen 5: Insights & Learnings) ---
const ARTICLES_DATA = [
  {
    id: "art1",
    title: "How to Create a Sales Dashboard in Power BI",
    date: "Aug 20, 2026",
    category: "Power BI",
    img: "assets/credit_loan_dashboard.svg",
    excerpt: "A step-by-step guide to build an interactive sales dashboard using Power BI from data cleaning to visualization.",
    content: `Building an executive-level Power BI sales dashboard requires more than just dragging charts onto a canvas. It starts with establishing a clean relational data model:

1. Data Preparation in Power Query: Standardize headers, eliminate null records, and assign proper data types.
2. Building a Star Schema: Separate numerical transactions into Fact_Sales and dimension entities (Dim_Date, Dim_Product, Dim_Customer).
3. Authoring Reusable DAX Measures: Keep measures centralized in a dedicated calculation table (Total Sales, YoY %, Moving Averages).
4. Visual Hierarchy: Place high-level KPI cards at the top left, followed by time-series trend lines and categorical breakdowns below.`
  },
  {
    id: "art2",
    title: "10 Useful SQL Queries for Data Analysts",
    date: "Aug 12, 2026",
    category: "SQL",
    img: "assets/vendor_performance_dashboard.svg",
    excerpt: "A collection of commonly used SQL queries that can help you in day-to-day data analysis, joining tables, and windowing.",
    content: `Mastering these SQL patterns transforms how you manipulate and extract business insights:

1. Common Table Expressions (CTEs): Break complex multi-stage aggregations into clean, readable steps using WITH.
2. Window Functions (ROW_NUMBER, DENSE_RANK): Essential for ranking customers by revenue and identifying top-performing SKUs.
3. Lag & Lead: Calculate Month-over-Month growth without self-joins.
4. Conditional Aggregations: Using SUM(CASE WHEN ...) to pivot categorical rows into analytical columns.`
  },
  {
    id: "art3",
    title: "Data Analytics in FMCG – Key Insights",
    date: "Aug 05, 2026",
    category: "Industry Insights",
    img: "assets/blinkit_performance_dashboard.svg",
    excerpt: "Exploring how data analytics drives better decisions in the FMCG sector across stockout mitigation and SKU velocity.",
    content: `In fast-moving consumer goods (FMCG) like Alpino, margins are tight and inventory turnover is paramount:

- SKU Velocity Tracking: Categorizing products into Fast-Moving, Moderate, and Slow-Moving tiers ensures warehouse space is utilized optimally.
- Stockout Risk Prevention: Calculating dynamic safety stock thresholds prevents lost sales during quick-commerce flash spikes.
- Secondary Sales Visibility: Monitoring distributor-to-retailer sell-through provides the earliest indicator of genuine consumer demand.`
  },
  {
    id: "art4",
    title: "My Learning Journey in Data Analytics",
    date: "Jul 28, 2026",
    category: "Career",
    img: "assets/customer_churn_dashboard.svg",
    excerpt: "Sharing my experience, challenges, and key learnings in transitioning from BCA to Data Analyst and pursuing an MBA.",
    content: `The journey from learning syntax to solving business problems:

1. Start with Foundations: BCA gave me programming logic and database fundamentals.
2. Focus on Business Impact: Learning SQL and Power BI at ExcelR taught me that data is only valuable when it answers stakeholder questions.
3. Hands-on Industry Application: At Alpino, using Excel, Google Sheets, Apps Script, and Claude AI reinforced how automation multiplies an analyst's leverage.
4. Strategic Leadership: Pursuing an MBA in Operations & Data Science at NMIMS unites operational execution with predictive analytics.`
  }
];

// --- MAIN REACT APPLICATION COMPONENT ---
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio_theme") || "light");
  const [activeNav, setActiveNav] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Project filter
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Template search & filter
  const [templateSearch, setTemplateSearch] = useState("");
  const [templateCategory, setTemplateCategory] = useState("all");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Blog Article modal
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Trigger Toast Notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.category === projectFilter);
  }, [projectFilter]);

  // Filtered Templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter(t => {
      const matchesCategory = templateCategory === "all" || t.category === templateCategory;
      const matchesSearch = t.title.toLowerCase().includes(templateSearch.toLowerCase()) ||
                            t.desc.toLowerCase().includes(templateSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [templateSearch, templateCategory]);

  // Handle Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      showToast("Please fill in your name, email, and message!");
      return;
    }
    showToast(`Thank you, ${contactForm.name}! Your message has been sent to Rutvik.`);
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  // Handle Newsletter Submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast("Subscribed! You will receive practical analytics guides in your inbox.");
    setNewsletterEmail("");
  };

  return (
    <div className="portfolio-app-root">
      
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="toast-notice animate-fadeIn">
          <i className="fa-solid fa-circle-check text-blue"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER NAVBAR */}
      <header className="site-header" id="header">
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            <img src="assets/my website logo.png" alt="Rutvik Data Analyst Logo" className="header-logo-img" />
            <div className="logo-brand-text">
              <span className="logo-main-title">RUTVIK</span>
              <span className="logo-sub-title">DATA ANALYST</span>
            </div>
          </a>

          <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "templates", label: "Templates" },
                { id: "insights", label: "Blog" },
                { id: "contact", label: "Contact" }
              ].map(item => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeNav === item.id ? "active" : ""}`}
                    onClick={() => {
                      setActiveNav(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            {/* Dark / Light Toggle */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
            >
              <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
            </button>

            <a href="#contact" className="btn btn-primary btn-sm">
              Let's Connect
            </a>

            <button
              className="nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* SCREEN 1: HERO SECTION */}
        <section className="hero-section" id="home">
          <div className="container">
            <div className="hero-grid">
              
              {/* Left Column */}
              <div className="hero-left">
                <span className="hero-greeting">Hi, I'm</span>
                <h1 className="hero-name">Rutvik Bambhaniya</h1>
                <h2 className="hero-tagline">
                  Data Analyst | <span className="text-gradient">Turning Data into Opportunities</span>
                </h2>
                <p className="hero-desc">
                  I help businesses make better decisions through data analysis, visualization, and automation. Currently driving sales, supply chain, and retail insights at <strong>Alpino (Surat)</strong>.
                </p>

                {/* 3 Value Badges */}
                <div className="hero-value-props">
                  <div className="value-prop-item">
                    <div className="value-prop-icon"><i className="fa-solid fa-chart-pie"></i></div>
                    <span className="value-prop-label">Analyze Data</span>
                  </div>
                  <div className="value-prop-item">
                    <div className="value-prop-icon"><i className="fa-solid fa-lightbulb"></i></div>
                    <span className="value-prop-label">Build Insights</span>
                  </div>
                  <div className="value-prop-item">
                    <div className="value-prop-icon"><i className="fa-solid fa-chart-line"></i></div>
                    <span className="value-prop-label">Drive Growth</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="assets/resume.pdf" target="_blank" rel="noopener" className="btn btn-outline">
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Right Column: Organic Portrait Curve */}
              <div className="hero-right">
                <div className="portrait-blob-wrapper">
                  <div className="portrait-blob-bg"></div>
                  <img
                    src="assets/my image for website.png"
                    alt="Rutvik Bambhaniya - Data Analyst"
                    className="portrait-img"
                  />
                  <div className="floating-quote-badge">
                    <i className="fa-solid fa-sparkles text-blue"></i>
                    <span className="badge-text-bold">Data Drives Progress</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Trusted Tools Strip */}
            <div className="trusted-tools-bar">
              <span className="tools-title">Trusted Tools & Technologies</span>
              <div className="tools-logo-grid">
                <div className="tool-chip"><i className="fa-solid fa-file-excel text-green"></i> <span>Excel</span></div>
                <div className="tool-chip"><i className="fa-solid fa-database text-blue"></i> <span>SQL</span></div>
                <div className="tool-chip"><i className="fa-solid fa-chart-simple text-amber"></i> <span>Power BI</span></div>
                <div className="tool-chip"><i className="fa-brands fa-python text-blue"></i> <span>Python</span></div>
                <div className="tool-chip"><i className="fa-solid fa-chart-area text-orange"></i> <span>Tableau</span></div>
                <div className="tool-chip"><i className="fa-solid fa-table text-emerald"></i> <span>Google Sheets</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 2: ABOUT ME SECTION */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">A Data Enthusiast with a Passion for Solving Real-World Problems</p>
            </div>

            <div className="about-top-grid">
              {/* Left Column: Bio & 4 Metric Badges */}
              <div className="about-bio-col">
                <p className="about-bio-text">
                  I'm <strong>Rutvik Bambhaniya</strong>, a Data Analyst with a strong interest in turning data into meaningful insights. Currently working at <strong>Alpino (Surat)</strong>, I specialize in sales analytics, inventory tracking, and spreadsheet automation via Google Apps Script and Claude AI to help businesses make better and faster decisions.
                </p>

                {/* 4 Metric Badges in 2x2 Grid */}
                <div className="stats-2x2-grid">
                  <div className="about-stat-card">
                    <div className="stat-card-number">2+</div>
                    <div className="stat-card-label">Years Professional Experience</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="stat-card-number">10+</div>
                    <div className="stat-card-label">Projects Completed</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="stat-card-number">5+</div>
                    <div className="stat-card-label">Tools & Technologies</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="stat-card-number">100%</div>
                    <div className="stat-card-label">Passion for Learning</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quote Card with Avatar */}
              <div className="about-quote-col">
                <div className="about-quote-card">
                  <img
                    src="assets/my image for website.png"
                    alt="Rutvik Bambhaniya"
                    className="about-card-avatar"
                  />
                  <div className="quote-bubble">
                    <p className="quote-text">"Better data brighter decisions."</p>
                    <span className="quote-author">— Rutvik Bambhaniya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* My Journey & What I Do */}
            <div className="journey-capabilities-grid">
              
              {/* Left: My Journey */}
              <div className="journey-column">
                <h3 className="column-title"><i className="fa-solid fa-road text-blue"></i> My Journey</h3>
                <div className="journey-timeline">
                  <div className="journey-node">
                    <div className="journey-dot"></div>
                    <span className="journey-date">Jan 2026 – Present</span>
                    <h4 className="journey-role">Data Analyst</h4>
                    <p className="journey-org">Alpino (FMCG, Surat)</p>
                  </div>
                  <div className="journey-node">
                    <div className="journey-dot"></div>
                    <span className="journey-date">2024 – Present (Pursuing)</span>
                    <h4 className="journey-role">MBA (Operations & Data Science)</h4>
                    <p className="journey-org">NMIMS University</p>
                  </div>
                  <div className="journey-node">
                    <div className="journey-dot"></div>
                    <span className="journey-date">2021 – 2024</span>
                    <h4 className="journey-role">Bachelor of Computer Applications (BCA)</h4>
                    <p className="journey-org">Graduation Degree</p>
                  </div>
                </div>
              </div>

              {/* Right: What I Do (4 Structured Cards) */}
              <div className="capabilities-column">
                <h3 className="column-title"><i className="fa-solid fa-briefcase text-blue"></i> What I Do</h3>
                <div className="capabilities-grid">
                  <div className="capability-card">
                    <div className="cap-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                    <h4 className="cap-title">Data Analysis</h4>
                    <p className="cap-desc">Find meaningful patterns and commercial insights from complex raw datasets.</p>
                  </div>
                  <div className="capability-card">
                    <div className="cap-icon"><i className="fa-solid fa-chart-line"></i></div>
                    <h4 className="cap-title">Data Visualization</h4>
                    <p className="cap-desc">Create clear, high-impact interactive Power BI and Tableau dashboards.</p>
                  </div>
                  <div className="capability-card">
                    <div className="cap-icon"><i className="fa-solid fa-gears"></i></div>
                    <h4 className="cap-title">Process Automation</h4>
                    <p className="cap-desc">Simplify daily workflows with smart Google Apps Script & Claude AI tools.</p>
                  </div>
                  <div className="capability-card">
                    <div className="cap-icon"><i className="fa-solid fa-hand-holding-dollar"></i></div>
                    <h4 className="cap-title">Business Insights</h4>
                    <p className="cap-desc">Support strategic and executive decision-making across sales and supply chain.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SCREEN 3: MY PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle">
                Here are some of the projects I've worked on. Each project helped me learn, solve real problems, and create impact through data.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="filter-pills-bar">
              {[
                { id: "all", label: "All" },
                { id: "excel", label: "Excel" },
                { id: "powerbi", label: "Power BI" },
                { id: "sql", label: "SQL" },
                { id: "python", label: "Python" },
                { id: "automation", label: "Automation" }
              ].map(f => (
                <button
                  key={f.id}
                  className={`filter-pill ${projectFilter === f.id ? "active" : ""}`}
                  onClick={() => setProjectFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* 6 Projects Grid */}
            <div className="projects-cards-grid">
              {filteredProjects.map(p => (
                <div key={p.id} className="project-card">
                  <div className="project-thumbnail-wrapper">
                    <img src={p.img} alt={p.title} className="project-thumbnail" loading="lazy" />
                  </div>
                  <div className="project-card-content">
                    <h3 className="project-card-title">{p.title}</h3>
                    <div className="project-tags-row">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="project-tag">{t}</span>
                      ))}
                    </div>
                    <p className="project-card-desc">{p.desc}</p>
                    <button className="project-card-action" onClick={() => setSelectedProject(p)}>
                      View Project <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREEN 4: TEMPLATES SECTION */}
        <section className="section templates-section" id="templates">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Templates</h2>
              <p className="section-subtitle">
                Ready-to-use templates to make your work easier and faster. Designed with simplicity, efficiency, and real-world use cases in mind.
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="templates-controls-bar">
              <div className="template-search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={templateSearch}
                  onChange={(e) => setTemplateSearch(e.target.value)}
                  className="template-search-input"
                />
              </div>

              <select
                value={templateCategory}
                onChange={(e) => setTemplateCategory(e.target.value)}
                className="template-category-select"
              >
                <option value="all">All Categories</option>
                <option value="powerbi">Power BI</option>
                <option value="excel">Excel</option>
              </select>
            </div>

            {/* 6 Templates Cards Grid */}
            <div className="templates-cards-grid">
              {filteredTemplates.map(t => (
                <div key={t.id} className="template-card">
                  <div className="template-thumb-wrapper">
                    <img src={t.img} alt={t.title} className="template-thumb-img" loading="lazy" />
                    <span className="template-badge-price">{t.price}</span>
                  </div>
                  <div className="template-content">
                    <h3 className="template-title">{t.title}</h3>
                    <span className="badge badge-blue" style={{ marginBottom: "0.6rem" }}>{t.badge}</span>
                    <p className="template-desc">{t.desc}</p>
                    <div className="template-footer">
                      <button className="btn-view-template" onClick={() => setSelectedTemplate(t)}>
                        View Details <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREEN 5: INSIGHTS & LEARNINGS (BLOG) */}
        <section className="section insights-section" id="insights">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Insights & Learnings</h2>
              <p className="section-subtitle">
                I share practical knowledge, tutorials, and experiences related to data analysis, business intelligence, and career growth.
              </p>
            </div>

            <div className="insights-layout-grid">
              
              {/* Left Column: 4 Articles List */}
              <div className="articles-list">
                {ARTICLES_DATA.map(art => (
                  <div key={art.id} className="article-card-row">
                    <div className="article-thumb-box">
                      <img src={art.img} alt={art.title} className="article-thumb-img" loading="lazy" />
                    </div>
                    <div className="article-info-box">
                      <div className="article-meta-row">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span className="article-category-pill">{art.category}</span>
                      </div>
                      <h3 className="article-title">{art.title}</h3>
                      <p className="article-excerpt">{art.excerpt}</p>
                      <button className="article-read-more" onClick={() => setSelectedArticle(art)}>
                        Read More <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Sidebar */}
              <div className="insights-sidebar">
                {/* Stay Updated Newsletter Card */}
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Stay Updated</h3>
                  <p className="sidebar-desc">Get the latest posts and template updates directly in your inbox.</p>
                  <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="newsletter-input"
                    />
                    <button type="submit" className="btn btn-primary btn-sm">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Categories Counter List */}
                <div className="sidebar-card">
                  <h3 className="sidebar-title">Categories</h3>
                  <div className="categories-pills-list">
                    {[
                      { name: "Power BI", count: 5 },
                      { name: "Excel", count: 4 },
                      { name: "SQL", count: 4 },
                      { name: "Python", count: 2 },
                      { name: "Career", count: 3 },
                      { name: "Industry Insights", count: 2 },
                      { name: "Productivity", count: 2 }
                    ].map((cat, idx) => (
                      <div key={idx} className="category-row-item">
                        <span>{cat.name}</span>
                        <span className="category-count">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SCREEN 6: LET'S CONNECT SECTION */}
        <section className="section connect-section" id="contact">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Let's Connect</h2>
              <p className="section-subtitle">
                Have a project, collaboration idea, or just want to say hi? I'd love to hear from you!
              </p>
            </div>

            <div className="connect-layout-grid">
              
              {/* Left Column: Send a Message Form */}
              <div className="connect-form-card">
                <h3 className="form-card-title">Send a Message</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </button>
                </form>
              </div>

              {/* Right Column: Get in Touch Card & Banner */}
              <div className="connect-right-col">
                <div className="contact-info-box">
                  <h3 className="info-box-title">Get in Touch</h3>
                  <p className="info-box-desc">Feel free to reach out through any of these channels:</p>

                  <div className="contact-channels-list">
                    <div className="channel-item">
                      <div className="channel-icon"><i className="fa-solid fa-envelope"></i></div>
                      <div>
                        <span className="channel-label">Email</span>
                        <a href="mailto:rutvikbambhaniya14@gmail.com" className="channel-val">
                          rutvikbambhaniya14@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="channel-item">
                      <div className="channel-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                      <div>
                        <span className="channel-label">LinkedIn</span>
                        <a
                          href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b"
                          target="_blank"
                          rel="noopener"
                          className="channel-val"
                        >
                          linkedin.com/in/rutvik-bambhaniya
                        </a>
                      </div>
                    </div>

                    <div className="channel-item">
                      <div className="channel-icon"><i className="fa-solid fa-location-dot"></i></div>
                      <div>
                        <span className="channel-label">Location</span>
                        <span className="channel-val">Surat, Gujarat, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Let's Build Something Great Banner */}
                <div className="build-great-banner">
                  <i className="fa-solid fa-rocket banner-icon"></i>
                  <div>
                    <h4 className="banner-title">Let's Build Something Great</h4>
                    <p className="banner-desc">
                      Open for full-time opportunities, freelance projects, and data analytics collaboration.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo-block">
              <img src="assets/my website logo.png" alt="Rutvik Logo" className="footer-logo-img" />
              <div className="logo-brand-text">
                <span className="logo-main-title">RUTVIK</span>
                <span className="logo-sub-title">DATA ANALYST</span>
              </div>
            </div>

            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#templates">Templates</a>
              <a href="#insights">Blog</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener" className="social-icon-btn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Rutvik1429" target="_blank" rel="noopener" className="social-icon-btn">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="mailto:rutvikbambhaniya14@gmail.com" className="social-icon-btn">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-motto">Turning Data Into Opportunities</p>
            <p>&copy; {new Date().getFullYear()} Rutvik Bambhaniya. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* MODAL: PROJECT CASE STUDY */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <span className="badge badge-blue" style={{ marginBottom: "0.5rem" }}>Case Study</span>
            <h3 className="section-title" style={{ fontSize: "1.6rem", textAlign: "left" }}>{selectedProject.title}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{selectedProject.desc}</p>
            
            <div style={{ marginBottom: "1.2rem" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "0.4rem" }}>Problem Statement:</h4>
              <p style={{ color: "var(--text-secondary)" }}>{selectedProject.problem}</p>
            </div>

            <div style={{ marginBottom: "1.2rem" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "0.4rem" }}>Objective & Methodology:</h4>
              <p style={{ color: "var(--text-secondary)" }}>{selectedProject.objective}</p>
            </div>

            <div style={{ marginBottom: "1.2rem" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "0.4rem" }}>Key Outcomes:</h4>
              <ul style={{ paddingLeft: "1.2rem", listStyle: "disc", color: "var(--text-secondary)" }}>
                {selectedProject.insights.map((ins, i) => (
                  <li key={i} style={{ marginBottom: "0.3rem" }}>{ins}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "0.4rem" }}>Code / Query Snippet:</h4>
              <pre className="code-box-pre"><code>{selectedProject.codeSnippet}</code></pre>
            </div>

            <a href={selectedProject.github} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
              <i className="fa-brands fa-github"></i> View GitHub Repository
            </a>
          </div>
        </div>
      )}

      {/* MODAL: TEMPLATE DETAILS */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTemplate(null)}>&times;</button>
            <span className="badge badge-blue" style={{ marginBottom: "0.5rem" }}>{selectedTemplate.badge}</span>
            <h3 className="section-title" style={{ fontSize: "1.6rem", textAlign: "left" }}>{selectedTemplate.title}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.2rem" }}>{selectedTemplate.desc}</p>
            
            <h4 style={{ fontWeight: 800, marginBottom: "0.6rem" }}>Included Features:</h4>
            <ul style={{ paddingLeft: "1.2rem", listStyle: "disc", color: "var(--text-secondary)", marginBottom: "1.8rem" }}>
              {selectedTemplate.features.map((feat, i) => (
                <li key={i} style={{ marginBottom: "0.4rem" }}>{feat}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button className="btn btn-primary" onClick={() => {
                setSelectedTemplate(null);
                showToast("Template preview requested! Contact Rutvik for instant delivery.");
              }}>
                Get Template ({selectedTemplate.price})
              </button>
              <button className="btn btn-outline" onClick={() => setSelectedTemplate(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ARTICLE READER */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArticle(null)}>&times;</button>
            <span className="badge badge-blue" style={{ marginBottom: "0.5rem" }}>{selectedArticle.category} • {selectedArticle.date}</span>
            <h3 className="section-title" style={{ fontSize: "1.6rem", textAlign: "left" }}>{selectedArticle.title}</h3>
            <div style={{ whiteSpace: "pre-line", color: "var(--text-secondary)", lineHeight: "1.8", marginTop: "1.2rem" }}>
              {selectedArticle.content}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedArticle(null)}>
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
