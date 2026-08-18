/* ==========================================================================
   RUTVIK BAMBHANIYA - REACT LIGHT-THEME DATA ANALYST PORTFOLIO (app.js)
   ========================================================================== */

const { useState, useEffect, useRef, useMemo } = React;

// --- PROJECT CASE STUDIES DATA ---
const PROJECTS_DATA = [
  {
    id: "project1",
    title: "Credit Loan Disbursement & Recovery Analysis",
    category: ["sql", "powerbi"],
    categoryLabels: ["SQL", "Power BI"],
    badge: "SQL & Power BI",
    img: "assets/credit_loan_dashboard.svg",
    desc: "End-to-end loan portfolio tracking system to analyze disbursement trends, monitor overdue amounts, evaluate customer repayment behavior, and track default rates using SQL queries and interactive Power BI dashboards.",
    meta: "SQL, Power BI, DAX, Data Modeling",
    problem: "Financial institutions require constant monitoring of loan portfolios to identify high-risk borrowers, mitigate default rates, and track repayment timelines.",
    objective: "Build an operational data model and dashboard to track monthly loan disbursements, total outstanding recovery, non-performing asset (NPA) percentages, and customer risk profiles.",
    data: "Relational SQL database containing loan accounts, customer demographic information, payment schedules, and default records.",
    process: [
      "Extracted and merged raw loan datasets using MySQL multi-table JOINs and aggregation functions.",
      "Transformed data in Power Query, handling null payment dates and standardizing interest rate formats.",
      "Constructed a Star Schema model linking Fact_Loan_Disbursements with Dim_Customer and Dim_Branch.",
      "Authored DAX measures for Total Disbursed Amount, Total Recovered, Recovery Ratio (%), and Overdue 90+ Days.",
      "Built an interactive Power BI report with dynamic slicers for branch performance, loan tenure, and credit score tiers."
    ],
    tools: ["SQL", "Power BI", "DAX", "Power Query", "Data Modeling"],
    insights: [
      "Identified key trends in loan repayment behavior across different customer demographic brackets.",
      "Highlighted overdue recovery hotspots, enabling the recovery team to focus collections on high-risk accounts.",
      "Streamlined monthly executive loan performance reporting with automated DAX measures."
    ],
    github: "https://github.com/Rutvik1429/Credit-Loan-Disbursement-Recovery-Analysis-SQL-Power_BI"
  },
  {
    id: "project2",
    title: "Vendor Performance Analysis",
    category: ["powerbi", "sql", "python"],
    categoryLabels: ["Power BI", "SQL", "Python"],
    badge: "Power BI, SQL & Python",
    img: "assets/vendor_performance_dashboard.svg",
    desc: "Evaluates vendor efficiency, sales contribution, profitability margins, and inventory turnover across suppliers to optimize vendor selection and operational procurement workflows.",
    meta: "Python, SQL, Power BI, DAX",
    problem: "Supply chain and procurement managers face difficulty evaluating vendor efficiency, delivery consistency, profit margins, and inventory turn rates.",
    objective: "Create a multi-tool analytical dashboard to benchmark vendor sales contribution, product quality rates, and profit margins to support vendor renewal decisions.",
    data: "Vendor purchase orders, inventory stock logs, product sales records, and delivery timetables.",
    process: [
      "Performed data ingestion and pre-processing in Python (Pandas) to clean missing shipping logs.",
      "Ran SQL queries to summarize total purchase orders, gross margins, and return counts by vendor.",
      "Integrated dataset into Power BI to construct vendor scorecard visuals.",
      "Created DAX metrics for On-Time Delivery Rate (%), Return Rate (%), and Vendor Profitability Contribution."
    ],
    tools: ["Power BI", "SQL", "Python", "Pandas", "DAX"],
    insights: [
      "Discovered top 20% vendors generating over 70% of total revenue margins.",
      "Pinpointed vendor delivery bottleneck patterns during peak demand cycles.",
      "Provided actionable data for procurement negotiations and vendor contract renewals."
    ],
    github: "https://github.com/Rutvik1429/Vendor_Performance_Analysis-Power_BI-SQL-Python"
  },
  {
    id: "project3",
    title: "Customer Churn Analysis (Python EDA)",
    category: ["python", "excel"],
    categoryLabels: ["Python", "EDA", "Excel"],
    badge: "Python & Excel",
    img: "assets/customer_churn_dashboard.svg",
    desc: "Exploratory Data Analysis (EDA) on customer attrition data to identify key churn indicators, demographic correlation, contract type impact, and actionable customer retention strategies.",
    meta: "Python, Pandas, Matplotlib, Seaborn, Excel",
    problem: "Telecommunications/service companies lose significant revenue due to customer churn without clear visibility into churn triggers.",
    objective: "Perform Exploratory Data Analysis (EDA) in Python to identify key variables correlating with customer churn and formulate data-backed retention recommendations.",
    data: "Customer demographic data, account tenure, monthly charges, contract types, and churn flag status.",
    process: [
      "Executed data cleaning in Jupyter Notebook: handled missing values, converted data types, and encoded categorical features.",
      "Calculated summary statistics and distribution metrics using NumPy and Pandas.",
      "Generated univariate, bivariate, and multivariate visualizations using Matplotlib and Seaborn.",
      "Evaluated churn rates against contract types (Month-to-month vs Annual), tenure, and monthly billing amount."
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel"],
    insights: [
      "Month-to-month contract holders exhibited significantly higher churn risk compared to 1 or 2-year contract customers.",
      "Higher monthly charges strongly correlated with early customer attrition (0-6 months tenure).",
      "Recommended targeted contract upgrade incentives for high-risk customer segments."
    ],
    github: "https://github.com/Rutvik1429/Customer_Churn_Analysis-Excel-ML-EDA-Python-Project"
  },
  {
    id: "project4",
    title: "NYC Yellow Taxi Trip Report & Hypothesis Testing",
    category: ["python", "tableau"],
    categoryLabels: ["Python", "Hypothesis Testing", "Tableau"],
    badge: "Python & Tableau",
    img: "assets/yellow_taxi_dashboard.svg",
    desc: "Analysis of NYC taxi trips, investigating passenger behavior, trip duration, fare metrics, and statistical hypothesis testing (t-tests) with interactive Tableau visualizations.",
    meta: "Python, SciPy, Tableau, EDA",
    problem: "City transportation authorities require empirical insights into taxi trip patterns, fare structures, and tip behaviors across trip distances.",
    objective: "Analyze million-row trip datasets, perform statistical hypothesis testing (t-tests), and visualize trip density via Tableau dashboards.",
    data: "NYC Taxi & Limousine Commission (TLC) trip record dataset detailing pickup/dropoff times, trip distance, fare breakdown, and payment types.",
    process: [
      "Processed large-scale trip logs in Python using Pandas for feature engineering (trip duration, fare per mile).",
      "Executed statistical hypothesis testing (Two-sample t-test) to evaluate tip differences between credit card vs cash payments.",
      "Ingested cleaned datasets into Tableau Desktop to create interactive spatial maps and temporal heatmaps.",
      "Built Tableau Story points highlighting peak rush hours, airport trip patterns, and fare distributions."
    ],
    tools: ["Python", "SciPy (Stats)", "Tableau", "Matplotlib", "Data Cleaning"],
    insights: [
      "Hypothesis testing confirmed statistically significant higher tip percentages for credit card payment transactions.",
      "Identified peak surge hours and location hotspots for trip origin points, providing insights for driver allocation.",
      "Visualized fare-to-distance relationships, revealing key anomalies in flat-rate airport trips."
    ],
    github: "https://github.com/Rutvik1429/Yellow-Taxi-Trips-Report-Python-Hypothesis_testing--Tableau"
  },
  {
    id: "project5",
    title: "Blinkit Business Performance & Operational Analysis",
    category: ["excel"],
    categoryLabels: ["Excel ETL", "MIS"],
    badge: "Excel ETL & MIS",
    img: "assets/blinkit_performance_dashboard.svg",
    desc: "Evaluated sales trends, item category performance, store location efficiency, and customer satisfaction metrics to streamline quick-commerce operational workflows.",
    meta: "Excel, Power Query, Pivot Tables, Formulas",
    problem: "Quick-commerce retail platforms require real-time visibility into sales metrics, inventory outlet performance, and item category demand.",
    objective: "Develop a robust Excel-based Business Performance Report using Power Query and Pivot Tables to evaluate metrics across outlets.",
    data: "Blinkit sales transaction data including item types, fat content, outlet size, location tier, and customer ratings.",
    process: [
      "Imported raw sales tables into Excel Power Query for data cleansing and data type assignment.",
      "Built custom calculated columns for sales metrics, average item rating, and total outlet volume.",
      "Constructed dynamic Pivot Tables and Pivot Charts broken down by Outlet Location Tier (Tier 1, Tier 2, Tier 3).",
      "Configured slicers and KPI cards to enable instant executive filtering by outlet type."
    ],
    tools: ["Advanced Excel", "Power Query", "Pivot Tables", "MIS Reporting"],
    insights: [
      "Analyzed total sales breakdown across low fat vs regular item categories.",
      "Established clear outlet performance rankings based on location tier and outlet establishment year.",
      "Delivered an easily maintainable Excel MIS template requiring zero software licensing costs."
    ],
    github: "https://github.com/Rutvik1429/Business-Performance-Report-Blinkit_Analysis--ETL-EXCEL"
  },
  {
    id: "project6",
    title: "Customer Performance Dashboard (Power BI Star Schema)",
    category: ["powerbi"],
    categoryLabels: ["Power BI", "DAX", "Star Schema"],
    badge: "Power BI & DAX",
    img: "assets/customer_performance_dashboard.svg",
    desc: "Power BI analytics dashboard using a relational star schema data model and custom DAX measures to analyze customer purchase frequency, sales distribution, and key revenue metrics.",
    meta: "Power BI, DAX, Star Schema Modeling",
    problem: "Retail stakeholders needed a single source of truth dashboard to evaluate customer lifetime value, order frequency, and revenue metrics.",
    objective: "Design a relational data model with custom DAX measures to track customer purchasing behaviors.",
    data: "Sales transactions, customer master directory, product catalog, and regional territory data.",
    process: [
      "Designed a clean Star Schema data model in Power BI Desktop connecting Fact Sales with Dimension tables.",
      "Engineered complex DAX measures including YTD Sales, Total Orders, Average Order Value (AOV), and Customer Lifetime Sales.",
      "Implemented drill-through pages and tooltips for deeper individual customer transaction analysis.",
      "Published optimized report layout with responsive visual cards and dark-theme aesthetics."
    ],
    tools: ["Power BI", "DAX", "Data Modeling", "Power Query"],
    insights: [
      "Provided executive visibility into customer segment profitability.",
      "Enabled sales leadership to track dynamic month-over-month growth metrics using DAX time intelligence.",
      "Optimized data refresh model for high report rendering speed."
    ],
    github: "https://github.com/Rutvik1429/Customer-Performance-Dashboard-DAX-Power-BI"
  }
];

// --- SKILLS MATRIX DATA ---
const SKILLS_DATA = [
  {
    icon: "fa-solid fa-database",
    title: "Database & SQL",
    desc: "Querying, data aggregation, multi-table JOINs, subqueries, and window functions.",
    tags: ["SQL", "MySQL", "Data Querying", "Joins & Aggregations", "Subqueries", "CTE & Windowing"]
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Business Intelligence",
    desc: "Data modeling, interactive dashboard design, DAX measures, and enterprise reporting.",
    tags: ["Power BI", "DAX Measures", "Power Query ETL", "Star Schema Modeling", "Tableau"]
  },
  {
    icon: "fa-solid fa-table",
    title: "Data Analysis & Excel",
    desc: "Advanced spreadsheet operations, pivot tables, data hygiene, and automated MIS reporting.",
    tags: ["Advanced Excel", "Pivot Tables", "VLOOKUP / XLOOKUP", "Data Cleaning", "MIS Reporting"]
  },
  {
    icon: "fa-brands fa-python",
    title: "Python & Analytics",
    desc: "Exploratory Data Analysis (EDA), statistical modeling, and data manipulation.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Hypothesis Testing"]
  }
];

// --- WORKFLOW DATA ---
const WORKFLOW_DATA = [
  {
    step: "01",
    icon: "fa-solid fa-lightbulb",
    title: "Understand Business Problem",
    desc: "Identify business objectives, key performance indicators (KPIs), and critical stakeholders' requirements."
  },
  {
    step: "02",
    icon: "fa-solid fa-file-import",
    title: "Collect & Prepare Data",
    desc: "Query relational databases via SQL or ingest CSV/Excel sources using Power Query & Python ETL scripts."
  },
  {
    step: "03",
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Clean & Transform Data",
    desc: "Handle null values, standardize data types, resolve anomalies, and construct relational data models (Star Schema)."
  },
  {
    step: "04",
    icon: "fa-solid fa-chart-line",
    title: "Analyze & Build Dashboards",
    desc: "Perform Exploratory Data Analysis (EDA) and build intuitive dashboards with DAX metrics and filtering controls."
  },
  {
    step: "05",
    icon: "fa-solid fa-comments",
    title: "Deliver Business Insights",
    desc: "Extract meaningful trends, document actionable recommendations, and communicate results clearly to decision makers."
  }
];

// --- DASHBOARDS SHOWCASE DATA ---
const DASHBOARDS_DATA = [
  {
    title: "Credit & Loan Performance Report",
    tech: "Power BI & SQL",
    img: "assets/credit_loan_dashboard.svg"
  },
  {
    title: "Vendor Performance Analysis",
    tech: "Power BI & Python",
    img: "assets/vendor_performance_dashboard.svg"
  },
  {
    title: "Customer Retention & Churn EDA",
    tech: "Python & Excel",
    img: "assets/customer_churn_dashboard.svg"
  },
  {
    title: "NYC Taxi Passenger & Fare Report",
    tech: "Tableau & Python",
    img: "assets/yellow_taxi_dashboard.svg"
  }
];

// --- HOVER TILT CARD HOOK ---
function useMouseTilt() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}

// --- INTERACTIVE CHART COMPONENT (Chart.js) ---
function InteractiveChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartMode, setChartMode] = useState("skills"); // 'skills' | 'projects' | 'workflow'

  useEffect(() => {
    if (!window.Chart || !chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    let dataConfig = {};

    if (chartMode === "skills") {
      dataConfig = {
        type: "bar",
        data: {
          labels: ["SQL & MySQL", "Power BI & DAX", "Excel & Power Query", "Python & EDA", "Tableau", "Data Modeling"],
          datasets: [{
            label: "Proficiency & Practical Competency (%)",
            data: [90, 88, 92, 82, 78, 85],
            backgroundColor: [
              "rgba(37, 99, 235, 0.8)",
              "rgba(2, 132, 199, 0.8)",
              "rgba(16, 185, 129, 0.8)",
              "rgba(245, 158, 11, 0.8)",
              "rgba(139, 92, 246, 0.8)",
              "rgba(236, 72, 153, 0.8)"
            ],
            borderColor: [
              "#2563eb", "#0284c7", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"
            ],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              titleFont: { family: "Plus Jakarta Sans", size: 14, weight: "bold" },
              bodyFont: { family: "Plus Jakarta Sans", size: 13 },
              padding: 12,
              cornerRadius: 8
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: { color: "rgba(226, 232, 240, 0.8)" },
              ticks: {
                color: "#64748b",
                font: { family: "Plus Jakarta Sans", size: 12 },
                callback: (val) => val + "%"
              }
            },
            x: {
              grid: { display: false },
              ticks: { color: "#334155", font: { family: "Plus Jakarta Sans", size: 12, weight: "600" } }
            }
          }
        }
      };
    } else if (chartMode === "projects") {
      dataConfig = {
        type: "doughnut",
        data: {
          labels: ["Power BI Reports", "SQL Queries", "Python & EDA", "Excel MIS Reports", "Tableau Stories"],
          datasets: [{
            label: "Projects Completed",
            data: [3, 2, 2, 2, 1],
            backgroundColor: [
              "#2563eb",
              "#0284c7",
              "#10b981",
              "#f59e0b",
              "#8b5cf6"
            ],
            borderWidth: 3,
            borderColor: "#ffffff",
            hoverOffset: 12
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: {
                font: { family: "Plus Jakarta Sans", size: 13, weight: "600" },
                color: "#1e293b",
                padding: 15
              }
            },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              padding: 12,
              cornerRadius: 8
            }
          }
        }
      };
    } else {
      dataConfig = {
        type: "line",
        data: {
          labels: ["Raw Data Ingestion", "Data Cleaning ETL", "Star Schema Modeling", "DAX / Formula Math", "Dashboard Design", "Insight Delivery"],
          datasets: [{
            label: "Workflow Efficiency & Accuracy Index",
            data: [70, 85, 90, 94, 96, 98],
            fill: true,
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            borderColor: "#2563eb",
            borderWidth: 3,
            pointBackgroundColor: "#2563eb",
            pointBorderColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 9,
            tension: 0.35
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              padding: 12,
              cornerRadius: 8
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: { color: "rgba(226, 232, 240, 0.8)" },
              ticks: { color: "#64748b", font: { family: "Plus Jakarta Sans", size: 12 } }
            },
            x: {
              grid: { display: false },
              ticks: { color: "#334155", font: { family: "Plus Jakarta Sans", size: 11, weight: "600" } }
            }
          }
        }
      };
    }

    chartInstance.current = new window.Chart(ctx, dataConfig);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartMode]);

  return (
    <div className="interactive-chart-container">
      <div className="chart-controls">
        <div className="chart-tabs">
          <button
            className={`chart-tab-btn ${chartMode === "skills" ? "active" : ""}`}
            onClick={() => setChartMode("skills")}
          >
            <i className="fa-solid fa-chart-column"></i> Tech Skill Matrix
          </button>
          <button
            className={`chart-tab-btn ${chartMode === "projects" ? "active" : ""}`}
            onClick={() => setChartMode("projects")}
          >
            <i className="fa-solid fa-chart-pie"></i> Tool Distribution
          </button>
          <button
            className={`chart-tab-btn ${chartMode === "workflow" ? "active" : ""}`}
            onClick={() => setChartMode("workflow")}
          >
            <i className="fa-solid fa-chart-line"></i> Analytics Quality Index
          </button>
        </div>
      </div>
      <div className="chart-canvas-wrapper">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedLightbox, setSelectedLightbox] = useState(null);

  const tiltProps = useMouseTilt();

  // Scroll spy & Header scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category.includes(projectFilter));
  }, [projectFilter]);

  // Open & Close Modal helpers
  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const openLightbox = (item) => {
    setSelectedLightbox(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedLightbox(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="portfolio-wrapper">
      {/* Background Animated Orbs & Grid */}
      <div className="ambient-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="bg-grid-overlay"></div>
      </div>

      {/* Site Header Navigation */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`} id="header">
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            <span className="logo-icon"><i className="fa-solid fa-chart-pie"></i></span>
            <span className="logo-text">Rutvik Bambhaniya</span>
          </a>

          <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`} id="nav-menu">
            <ul className="nav-list">
              {[
                { id: "home", label: "Home", icon: "fa-house" },
                { id: "about", label: "About", icon: "fa-user" },
                { id: "skills", label: "Skills", icon: "fa-layer-group" },
                { id: "experience", label: "Experience", icon: "fa-briefcase" },
                { id: "projects", label: "Projects", icon: "fa-chart-column" },
                { id: "dashboards", label: "Dashboards", icon: "fa-table-cells-large" },
                { id: "contact", label: "Contact", icon: "fa-envelope" }
              ].map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeNav === item.id ? "active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`fa-solid ${item.icon}`}></i> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="assets/resume.pdf" target="_blank" className="btn btn-outline btn-sm hover-magnetic">
              <i className="fa-solid fa-file-arrow-down"></i> Resume
            </a>
            <button
              className="nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="badge badge-accent animate-fadeIn">
                <i className="fa-solid fa-circle-dot pulsate"></i> Open for Data Analyst Opportunities
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="text-highlight">Rutvik Bambhaniya</span>
              </h1>
              <h2 className="hero-subtitle">Data Analyst | Power BI & SQL Specialist</h2>

              <p className="hero-description">
                Turning complex business data into actionable insights using <strong>SQL, Excel, Power BI, Python & Tableau</strong>. BCA Graduate with a 6-month analytics internship and specialized ExcelR training in business intelligence & data modeling.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary btn-lg hover-magnetic">
                  <i className="fa-solid fa-diagram-project"></i> View Analytics Projects
                </a>
                <a href="assets/resume.pdf" target="_blank" className="btn btn-secondary btn-lg hover-magnetic">
                  <i className="fa-solid fa-file-pdf"></i> Download Resume
                </a>
              </div>

              <div className="hero-socials">
                <span className="social-label">Connect with me:</span>
                <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener" className="social-icon hover-bounce" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Rutvik1429" target="_blank" rel="noopener" className="social-icon hover-bounce" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:rutvikbambhaniya14@gmail.com" className="social-icon hover-bounce" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              {/* Interactive KPI Card */}
              <div className="dashboard-hero-card interactive-tilt" {...tiltProps}>
                <div className="card-header-bar">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="card-title-text"><i className="fa-solid fa-chart-line"></i> Analytics KPI Highlights</span>
                </div>

                <div className="hero-kpi-grid">
                  <div className="kpi-box hover-glow">
                    <span className="kpi-label">Internship Exp.</span>
                    <span className="kpi-value">6 Months</span>
                    <span className="kpi-trend positive"><i className="fa-solid fa-check"></i> Active Industry Work</span>
                  </div>
                  <div className="kpi-box hover-glow">
                    <span className="kpi-label">Analytics Repos</span>
                    <span className="kpi-value">7+ Projects</span>
                    <span className="kpi-trend positive"><i className="fa-solid fa-arrow-trend-up"></i> Verified on GitHub</span>
                  </div>
                  <div className="kpi-box hover-glow">
                    <span className="kpi-label">Core Toolbox</span>
                    <span className="kpi-value">SQL & Power BI</span>
                    <span className="kpi-trend neutral"><i className="fa-solid fa-database"></i> Star Schema / DAX</span>
                  </div>
                  <div className="kpi-box hover-glow">
                    <span className="kpi-label">Education</span>
                    <span className="kpi-value">BCA Degree</span>
                    <span className="kpi-trend positive"><i className="fa-solid fa-graduation-cap"></i> ExcelR Certified</span>
                  </div>
                </div>

                {/* Abstract Interactive Visual Chart Bar */}
                <div className="hero-chart-preview">
                  <div className="chart-bars">
                    {[
                      { label: "Excel", height: "85%", icon: "fa-file-excel" },
                      { label: "SQL", height: "92%", icon: "fa-database" },
                      { label: "Power BI", height: "90%", icon: "fa-chart-pie" },
                      { label: "Python", height: "82%", icon: "fa-brands fa-python" },
                      { label: "Tableau", height: "78%", icon: "fa-chart-line" }
                    ].map((b, i) => (
                      <div key={i} className="chart-bar-wrapper">
                        <div className="chart-bar hover-bar-expand" style={{ "--height": b.height }} data-label={b.label}></div>
                        <span className="chart-bar-title">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Background & Objective</span>
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </div>

            <div className="about-grid">
              <div className="about-card main-bio interactive-tilt" {...tiltProps}>
                <h3><i className="fa-solid fa-user-graduate"></i> Early-Career Data Analyst</h3>
                <p>
                  I am a motivated <strong>Data Analyst</strong> with a degree in <strong>Bachelor of Computer Applications (BCA)</strong> and professional training from <strong>ExcelR</strong>. My background includes a <strong>6-month Data Analyst internship</strong>, where I solved business-centric data challenges using structured query languages, statistical tools, and interactive BI dashboards.
                </p>
                <p>
                  I specialize in taking unstructured raw datasets, cleaning and transforming them through ETL pipelines, establishing robust relational data models (Star Schema), and developing intuitive dashboards that empower non-technical stakeholders to make evidence-based decisions.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item hover-slide-right">
                    <i className="fa-solid fa-circle-check"></i>
                    <span><strong>Target Roles:</strong> Data Analyst, MIS Analyst, Data Operations Analyst, Business Analyst, Operations Analyst.</span>
                  </div>
                  <div className="highlight-item hover-slide-right">
                    <i className="fa-solid fa-circle-check"></i>
                    <span><strong>Problem Solving Focus:</strong> Customer churn reduction, vendor performance optimization, loan disbursement tracking, and website traffic analysis.</span>
                  </div>
                </div>
              </div>

              <div className="about-card education-card interactive-tilt" {...tiltProps}>
                <h3><i className="fa-solid fa-award"></i> Education & Certifications</h3>
                <ul className="timeline-list">
                  <li className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">Graduated</span>
                      <h4>Bachelor of Computer Applications (BCA)</h4>
                      <p className="timeline-org">University Level Degree</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">Professional Program</span>
                      <h4>Data Analyst Training Program</h4>
                      <p className="timeline-org">ExcelR</p>
                      <p className="timeline-desc">Hands-on training in SQL query optimization, Advanced Excel formulas, Power BI DAX calculations, Python EDA, and data modeling.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="section bg-alt skills-section" id="skills">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Toolbox & Expertise</span>
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">Verified tools and analytical competencies built through real-world projects and internship experience.</p>
              <div className="section-divider"></div>
            </div>

            <div className="skills-grid">
              {SKILLS_DATA.map((s, idx) => (
                <div key={idx} className="skill-card interactive-tilt hover-glow" {...tiltProps}>
                  <div className="skill-icon"><i className={s.icon}></i></div>
                  <h3>{s.title}</h3>
                  <p className="skill-desc">{s.desc}</p>
                  <div className="tag-cloud">
                    {s.tags.map((t, i) => (
                      <span key={i} className="tech-tag hover-scale">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Data Chart Section */}
            <div className="chart-section-block">
              <h3 className="chart-block-title"><i className="fa-solid fa-chart-area"></i> Interactive Competency Visualizer</h3>
              <p className="chart-block-subtitle">Explore my technical skill depth and analytical workflow metrics dynamically below.</p>
              <InteractiveChart />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Professional Journey</span>
              <h2 className="section-title">Work Experience</h2>
              <div className="section-divider"></div>
            </div>

            <div className="experience-card interactive-tilt" {...tiltProps}>
              <div className="exp-header">
                <div className="exp-role-info">
                  <h3 className="exp-title"><i className="fa-solid fa-briefcase"></i> Data Analyst Intern</h3>
                  <span className="exp-company">Data Analytics Team</span>
                </div>
                <div className="exp-duration">
                  <span className="badge badge-accent"><i className="fa-regular fa-calendar"></i> 6 Months Duration</span>
                </div>
              </div>

              <div className="exp-body">
                <p className="exp-summary">
                  Participated in end-to-end data analytics activities including data extraction, cleaning, Exploratory Data Analysis (EDA), interactive dashboard development, and business stakeholder reporting.
                </p>

                <h4 className="exp-subheading">Key Responsibilities & Contributions:</h4>
                <ul className="exp-list">
                  {[
                    "Extracted and consolidated business data from multiple flat files and relational databases using SQL queries.",
                    "Cleaned, preprocessed, and handled missing data fields using Excel and Python (Pandas/NumPy) to ensure data accuracy.",
                    "Designed and published interactive Power BI and Tableau dashboards to track key performance indicators (KPIs) and operational metrics.",
                    "Built star-schema data models and engineered reusable DAX calculations to automate recurring monthly MIS reports.",
                    "Presented data-backed findings to operational managers to support workflow improvements and inventory tracking."
                  ].map((item, i) => (
                    <li key={i} className="hover-slide-right"><i className="fa-solid fa-circle-check text-blue"></i> {item}</li>
                  ))}
                </ul>

                <div className="exp-tools">
                  <span className="tools-label">Tools Used:</span>
                  <div className="tag-cloud">
                    {["SQL", "Power BI", "Excel", "Python (Pandas/NumPy)", "Tableau", "DAX"].map((t, i) => (
                      <span key={i} className="tech-tag hover-scale">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Analytics Workflow Section */}
        <section className="section bg-alt workflow-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Structured Approach</span>
              <h2 className="section-title">My Data Analytics Workflow</h2>
              <p className="section-subtitle">How I translate raw datasets into measurable business value.</p>
              <div className="section-divider"></div>
            </div>

            <div className="workflow-steps">
              {WORKFLOW_DATA.map((wf, idx) => (
                <React.Fragment key={idx}>
                  <div className="workflow-step interactive-tilt hover-lift" {...tiltProps}>
                    <div className="step-number">{wf.step}</div>
                    <div className="step-icon"><i className={wf.icon}></i></div>
                    <h4>{wf.title}</h4>
                    <p>{wf.desc}</p>
                  </div>
                  {idx < WORKFLOW_DATA.length - 1 && (
                    <div className="workflow-arrow"><i className="fa-solid fa-angle-right"></i></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Practical Applications</span>
              <h2 className="section-title">Analytics Projects</h2>
              <p className="section-subtitle">Real-world data analytics projects built using SQL, Power BI, Python, Excel, and Tableau. Click any project to view complete details & business insights.</p>
              <div className="section-divider"></div>
            </div>

            {/* Project Category Filters */}
            <div className="project-filters">
              {[
                { id: "all", label: "All Projects" },
                { id: "powerbi", label: "Power BI" },
                { id: "sql", label: "SQL" },
                { id: "python", label: "Python / EDA" },
                { id: "tableau", label: "Tableau" },
                { id: "excel", label: "Excel" }
              ].map((f) => (
                <button
                  key={f.id}
                  className={`filter-btn ${projectFilter === f.id ? "active" : ""}`}
                  onClick={() => setProjectFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((p) => (
                <div key={p.id} className="project-card interactive-tilt hover-glow" {...tiltProps}>
                  <div className="project-image-wrapper">
                    <img src={p.img} alt={p.title} loading="lazy" className="project-img" />
                    <div className="project-tags-overlay">
                      {p.categoryLabels.map((lbl, i) => (
                        <span key={i} className="p-tag">{lbl}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-meta">
                      <span><i className="fa-solid fa-wrench"></i> {p.meta}</span>
                    </div>
                    <div className="project-actions">
                      <button
                        className="btn btn-sm btn-primary hover-magnetic"
                        onClick={() => openProjectModal(p)}
                      >
                        <i className="fa-solid fa-eye"></i> View Case Study
                      </button>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-sm btn-outline hover-magnetic"
                      >
                        <i className="fa-brands fa-github"></i> Repository
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Showcase Section */}
        <section className="section bg-alt dashboards-section" id="dashboards">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Data Visualizations</span>
              <h2 className="section-title">Dashboard Showcase</h2>
              <p className="section-subtitle">High-resolution visualization preview of Power BI, Tableau, and Excel analytical reports.</p>
              <div className="section-divider"></div>
            </div>

            <div className="dashboard-gallery">
              {DASHBOARDS_DATA.map((d, idx) => (
                <div
                  key={idx}
                  className="dashboard-item interactive-tilt hover-zoom"
                  {...tiltProps}
                  onClick={() => openLightbox(d)}
                >
                  <img src={d.img} alt={d.title} loading="lazy" />
                  <div className="dash-caption">
                    <h4>{d.title}</h4>
                    <span className="dash-tech">{d.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Banner */}
        <section className="section resume-section" id="resume">
          <div className="container">
            <div className="resume-banner interactive-tilt" {...tiltProps}>
              <div className="resume-content">
                <span className="badge badge-accent"><i className="fa-solid fa-file-contract"></i> Professional Credentials</span>
                <h2>Ready to Review My Full Resume?</h2>
                <p>
                  Download my complete resume detailing my BCA education, ExcelR Data Analyst training, 6-month internship experience, and technical skill set.
                </p>
              </div>
              <div className="resume-cta">
                <a href="assets/resume.pdf" target="_blank" className="btn btn-primary btn-lg hover-magnetic">
                  <i className="fa-solid fa-download"></i> Download Resume (PDF)
                </a>
                <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener" className="btn btn-outline btn-lg hover-magnetic">
                  <i className="fa-brands fa-linkedin"></i> View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-alt contact-section" id="contact">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Get In Touch</span>
              <h2 className="section-title">Contact Me</h2>
              <p className="section-subtitle">Interested in hiring a Data Analyst or discussing analytics opportunities? Let's connect!</p>
              <div className="section-divider"></div>
            </div>

            <div className="contact-grid">
              <div className="contact-info-card interactive-tilt" {...tiltProps}>
                <h3><i className="fa-solid fa-address-card"></i> Contact Information</h3>
                <p>Feel free to reach out directly via email, LinkedIn, or GitHub.</p>

                <div className="contact-methods">
                  <div className="contact-item hover-slide-right">
                    <div className="c-icon"><i className="fa-solid fa-envelope"></i></div>
                    <div className="c-details">
                      <span className="c-label">Email</span>
                      <a href="mailto:rutvikbambhaniya14@gmail.com" className="c-value">rutvikbambhaniya14@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-item hover-slide-right">
                    <div className="c-icon"><i className="fa-brands fa-linkedin"></i></div>
                    <div className="c-details">
                      <span className="c-label">LinkedIn</span>
                      <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener" className="c-value">linkedin.com/in/rutvik-bambhaniya-34621732b</a>
                    </div>
                  </div>

                  <div className="contact-item hover-slide-right">
                    <div className="c-icon"><i className="fa-brands fa-github"></i></div>
                    <div className="c-details">
                      <span className="c-label">GitHub</span>
                      <a href="https://github.com/Rutvik1429" target="_blank" rel="noopener" className="c-value">github.com/Rutvik1429</a>
                    </div>
                  </div>

                  <div className="contact-item hover-slide-right">
                    <div className="c-icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="c-details">
                      <span className="c-label">Location Preference</span>
                      <span className="c-value">India (Open to Remote & Onsite Roles)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta-card interactive-tilt" {...tiltProps}>
                <h3><i className="fa-solid fa-handshake"></i> Open for Job Opportunities</h3>
                <p>I am actively applying for the following full-time or contract roles:</p>
                <ul className="role-list">
                  {[
                    "Data Analyst",
                    "MIS Analyst / MIS Executive",
                    "Data Operations Analyst",
                    "Business Analyst (Entry Level)",
                    "Operations Analyst"
                  ].map((role, i) => (
                    <li key={i} className="hover-slide-right"><i className="fa-solid fa-chevron-right text-blue"></i> {role}</li>
                  ))}
                </ul>
                <div className="cta-box">
                  <a href="mailto:rutvikbambhaniya14@gmail.com" className="btn btn-primary width-full hover-magnetic">
                    <i className="fa-solid fa-paper-plane"></i> Send an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">Rutvik Bambhaniya</a>
            <p>Data Analyst | Turning raw data into business intelligence.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Rutvik1429" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            <a href="mailto:rutvikbambhaniya14@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Rutvik Bambhaniya. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={closeProjectModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal} aria-label="Close modal">&times;</button>
            <div className="modal-body">
              <div className="modal-header">
                <span className="badge badge-accent">{selectedProject.badge}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-circle-exclamation text-blue"></i> Business Problem</h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-bullseye text-blue"></i> Objective</h4>
                <p>{selectedProject.objective}</p>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-database text-blue"></i> Dataset Source</h4>
                <p>{selectedProject.data}</p>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-gears text-blue"></i> Analytical Workflow</h4>
                <ul>
                  {selectedProject.process.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-chart-line text-blue"></i> Key Insights & Outcomes</h4>
                <ul>
                  {selectedProject.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4><i className="fa-solid fa-wrench text-blue"></i> Technologies & Tools</h4>
                <div className="tag-cloud" style={{ marginTop: "0.5rem" }}>
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="tech-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                <a href={selectedProject.github} target="_blank" rel="noopener" className="btn btn-primary width-full hover-magnetic">
                  <i className="fa-brands fa-github"></i> View GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedLightbox && (
        <div className="modal-overlay active" onClick={closeLightbox}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeLightbox} aria-label="Close modal">&times;</button>
            <div className="modal-body" style={{ textAlign: "center" }}>
              <h3 className="modal-title" style={{ marginBottom: "1rem" }}>{selectedLightbox.title}</h3>
              <img
                src={selectedLightbox.img}
                alt={selectedLightbox.title}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", border: "1px solid var(--border-color)" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Render React App
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
