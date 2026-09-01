/* ==========================================================================
   RUTVIK BAMBHANIYA - DESIGNER-GRADE BENTO ANALYTICS COMMAND CENTER (app.js)
   React 18 Component Engine + Interactive Code Inspector + Chart Visualizer
   ========================================================================== */

const { useState, useEffect, useRef, useMemo } = React;

// --- RICH PROJECTS DATA WITH CODE & QUERY INSPECTOR ---
const PROJECTS_DATA = [
  {
    id: "project1",
    title: "Credit Loan Disbursement & Recovery Analysis",
    category: ["sql", "powerbi"],
    categoryLabels: ["SQL", "Power BI"],
    badge: "SQL & Power BI",
    img: "assets/credit_loan_dashboard.svg",
    desc: "End-to-end loan portfolio tracking system analyzing disbursement trends, overdue recovery rates, default percentages, and customer risk profiles using MySQL and Power BI.",
    meta: "SQL, Power BI, DAX, Star Schema Data Modeling",
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
    codeSnippet: `-- MySQL Query: Monthly Loan Disbursement & Recovery Ratio Summary
SELECT 
  DATE_FORMAT(Disbursement_Date, '%Y-%m') AS Loan_Month,
  COUNT(Loan_ID) AS Total_Accounts,
  SUM(Disbursed_Amount) AS Total_Disbursed,
  SUM(Recovered_Amount) AS Total_Recovered,
  ROUND((SUM(Recovered_Amount) / SUM(Disbursed_Amount)) * 100, 2) AS Recovery_Ratio_Pct,
  SUM(CASE WHEN Overdue_Days >= 90 THEN Disbursed_Amount ELSE 0 END) AS NPA_Overdue_Amount
FROM Fact_Loan_Disbursements
GROUP BY Loan_Month
ORDER BY Loan_Month DESC;

-- DAX Measure: Overdue Recovery Rate (%)
Recovery Rate % = 
DIVIDE(
    SUM(Fact_Loan_Disbursements[Recovered_Amount]),
    SUM(Fact_Loan_Disbursements[Disbursed_Amount]),
    0
) * 100`,
    github: "https://github.com/Rutvik1429/Credit-Loan-Disbursement-Recovery-Analysis-SQL-Power_BI"
  },
  {
    id: "project2",
    title: "Vendor Performance Analysis",
    category: ["powerbi", "sql", "python"],
    categoryLabels: ["Power BI", "SQL", "Python"],
    badge: "Power BI, SQL & Python",
    img: "assets/vendor_performance_dashboard.svg",
    desc: "Evaluates supplier efficiency, sales contribution, profit margins, and on-time delivery rates across vendors to optimize procurement workflows.",
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
    codeSnippet: `# Python (Pandas): Data Cleaning & On-Time Delivery Metric Computation
import pandas as pd

df = pd.read_csv('vendor_orders.csv')
df['Delivery_Delay'] = (pd.to_datetime(df['Actual_Date']) - pd.to_datetime(df['Promised_Date'])).dt.days
df['On_Time_Flag'] = df['Delivery_Delay'].apply(lambda x: 1 if x <= 0 else 0)

vendor_kpis = df.groupby('Vendor_Name').agg(
    Total_Orders=('PO_ID', 'count'),
    On_Time_Rate=('On_Time_Flag', 'mean'),
    Gross_Profit=('Profit', 'sum')
).reset_index()

# SQL: Vendor Return Rate Ranking
SELECT Vendor_Name, SUM(Returned_Qty) / SUM(Ordered_Qty) * 100 AS Return_Rate_Pct
FROM Vendor_Orders GROUP BY Vendor_Name ORDER BY Return_Rate_Pct DESC;`,
    github: "https://github.com/Rutvik1429/Vendor_Performance_Analysis-Power_BI-SQL-Python"
  },
  {
    id: "project3",
    title: "Customer Churn Analysis (Python EDA)",
    category: ["python", "excel"],
    categoryLabels: ["Python", "EDA", "Excel"],
    badge: "Python & Excel",
    img: "assets/customer_churn_dashboard.svg",
    desc: "Exploratory Data Analysis (EDA) on customer attrition to uncover churn triggers, demographic correlations, and contract type impacts.",
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
    codeSnippet: `# Python Seaborn & Pandas: Churn Rate Heatmap Analysis
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('telecom_churn.csv')
df['Tenure_Bin'] = pd.cut(df['tenure'], bins=[0, 12, 24, 48, 72], labels=['0-1 Yr', '1-2 Yrs', '2-4 Yrs', '4+ Yrs'])

churn_pivot = pd.crosstab(df['Contract'], df['Tenure_Bin'], values=df['Churn_Numeric'], aggfunc='mean') * 100

plt.figure(figsize=(8, 5))
sns.heatmap(churn_pivot, annot=True, fmt=".1f", cmap="YlOrRd", cbar_kws={'label': 'Churn Rate (%)'})
plt.title('Customer Churn Rate (%) by Contract Type & Tenure')
plt.show()`,
    github: "https://github.com/Rutvik1429/Customer_Churn_Analysis-Excel-ML-EDA-Python-Project"
  },
  {
    id: "project4",
    title: "NYC Yellow Taxi Trip Report & Hypothesis Testing",
    category: ["python", "tableau"],
    categoryLabels: ["Python", "Hypothesis Testing", "Tableau"],
    badge: "Python & Tableau",
    img: "assets/yellow_taxi_dashboard.svg",
    desc: "Analyzed million-row trip datasets, performed two-sample t-tests on tipping behaviors, and mapped trip spatial density using Tableau.",
    meta: "Python, SciPy, Tableau, Hypothesis Testing",
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
    codeSnippet: `# Python SciPy: Two-Sample T-Test for Payment Type Tip Differences
from scipy import stats

card_tips = df[df['payment_type'] == 1]['tip_amount'] # Credit Card
cash_tips = df[df['payment_type'] == 2]['tip_amount'] # Cash

t_stat, p_val = stats.ttest_ind(card_tips, cash_tips, equal_var=False)

print(f"T-Statistic: {t_stat:.4f}")
print(f"P-Value: {p_val:.4e}")
# Result: P-value < 0.001. Reject Null Hypothesis -> Credit card users tip significantly higher!`,
    github: "https://github.com/Rutvik1429/Yellow-Taxi-Trips-Report-Python-Hypothesis_testing--Tableau"
  },
  {
    id: "project5",
    title: "Blinkit Business Performance & Operational Analysis",
    category: ["excel"],
    categoryLabels: ["Excel ETL", "MIS"],
    badge: "Excel ETL & MIS",
    img: "assets/blinkit_performance_dashboard.svg",
    desc: "Evaluated sales performance, item category velocity, store location efficiency, and outlet size productivity using Power Query & Pivot Tables.",
    meta: "Excel, Power Query, Pivot Tables, MIS Reporting",
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
    codeSnippet: `// Advanced Excel Formulas & Power Query M Formula
=SUMIFS(Sales[Total_Sales], Sales[Outlet_Location], "Tier 1", Sales[Item_Fat], "Low Fat")

// Power Query M Language: Data Cleaning & Grouping
let
    Source = Csv.Document(File.Contents("Blinkit_Data.csv"),[Delimiter=",", Encoding=1252]),
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
    id: "project6",
    title: "Customer Performance Dashboard (Power BI Star Schema)",
    category: ["powerbi"],
    categoryLabels: ["Power BI", "DAX", "Star Schema"],
    badge: "Power BI & DAX",
    img: "assets/customer_performance_dashboard.svg",
    desc: "Power BI analytics model utilizing a relational star schema data architecture and time-intelligence DAX measures to track customer lifetime value and sales volume.",
    meta: "Power BI, DAX, Star Schema Data Modeling",
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
    codeSnippet: `// DAX Time Intelligence: Year-over-Year Growth & Cumulative Sales
Sales YoY Growth % = 
VAR CurrentSales = [Total Sales]
VAR PriorYearSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Dim_Date'[Date]))
RETURN
DIVIDE(CurrentSales - PriorYearSales, PriorYearSales, 0) * 100

// DAX: Customer Lifetime Value (CLV) Rank
Customer Revenue Rank = 
RANKX(
    ALL(Dim_Customer[Customer_Name]),
    [Total Sales],
    ,
    DESC,
    Dense
)`,
    github: "https://github.com/Rutvik1429/Customer-Performance-Dashboard-DAX-Power-BI"
  }
];

// --- SKILLS MATRIX DATA ---
const SKILLS_DATA = [
  {
    icon: "fa-solid fa-database",
    title: "Database & SQL",
    desc: "Querying, data aggregation, multi-table JOINs, subqueries, CTEs, and window functions.",
    tags: ["SQL", "MySQL", "Data Querying", "Joins & Aggregations", "Subqueries", "CTE & Windowing"],
    accent: "blue"
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Business Intelligence",
    desc: "Data modeling, interactive dashboard design, DAX measures, and enterprise reporting.",
    tags: ["Power BI", "DAX Measures", "Power Query ETL", "Star Schema Modeling", "Tableau"],
    accent: "cyan"
  },
  {
    icon: "fa-solid fa-table",
    title: "Data Analysis & Excel",
    desc: "Advanced spreadsheet operations, pivot tables, data hygiene, and automated MIS reporting.",
    tags: ["Advanced Excel", "Pivot Tables", "VLOOKUP / XLOOKUP", "Data Cleaning", "MIS Reporting"],
    accent: "emerald"
  },
  {
    icon: "fa-brands fa-python",
    title: "Python & Analytics",
    desc: "Exploratory Data Analysis (EDA), statistical modeling, and data manipulation.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Hypothesis Testing"],
    accent: "purple"
  }
];

// --- WORKFLOW PIPELINE DATA ---
const WORKFLOW_DATA = [
  {
    step: "01",
    icon: "fa-solid fa-lightbulb",
    title: "Business Problem",
    desc: "Identify business objectives, key performance indicators (KPIs), and stakeholder goals."
  },
  {
    step: "02",
    icon: "fa-solid fa-file-import",
    title: "Data Collection",
    desc: "Query SQL databases or extract CSV/Excel datasets via Python & Power Query ETL."
  },
  {
    step: "03",
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Clean & Model",
    desc: "Handle missing values, standardize data types, and construct relational Star Schema models."
  },
  {
    step: "04",
    icon: "fa-solid fa-chart-line",
    title: "Analyze & Visualize",
    desc: "Perform Exploratory Data Analysis (EDA) and engineer interactive Power BI/Tableau dashboards."
  },
  {
    step: "05",
    icon: "fa-solid fa-comments",
    title: "Deliver Insights",
    desc: "Extract actionable recommendations and present findings to empower decision makers."
  }
];

// --- DASHBOARD SHOWCASE DATA ---
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

// --- SPOTLIGHT MOUSE HOOK ---
function useSpotlight() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };
  return { onMouseMove: handleMouseMove };
}

// --- INTERACTIVE CHART COMPONENT ---
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
            label: "Practical Competency Index (%)",
            data: [92, 90, 95, 84, 80, 88],
            backgroundColor: [
              "rgba(37, 99, 235, 0.85)",
              "rgba(2, 132, 199, 0.85)",
              "rgba(16, 185, 129, 0.85)",
              "rgba(245, 158, 11, 0.85)",
              "rgba(139, 92, 246, 0.85)",
              "rgba(236, 72, 153, 0.85)"
            ],
            borderRadius: 8,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              titleFont: { family: "Plus Jakarta Sans", size: 13, weight: "bold" },
              bodyFont: { family: "Plus Jakarta Sans", size: 12 },
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
              ticks: { color: "#334155", font: { family: "Plus Jakarta Sans", size: 11, weight: "700" } }
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
            label: "Verified Repos",
            data: [3, 2, 2, 2, 1],
            backgroundColor: ["#2563eb", "#0284c7", "#10b981", "#f59e0b", "#8b5cf6"],
            borderWidth: 3,
            borderColor: "#ffffff"
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: { font: { family: "Plus Jakarta Sans", size: 13, weight: "600" }, color: "#1e293b", padding: 16 }
            }
          }
        }
      };
    } else {
      dataConfig = {
        type: "line",
        data: {
          labels: ["Data Querying", "ETL Cleaning", "Data Modeling", "DAX Formulas", "Dashboard UI", "Insight Delivery"],
          datasets: [{
            label: "Accuracy & Quality Metrics",
            data: [75, 88, 92, 95, 97, 99],
            fill: true,
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            borderColor: "#2563eb",
            borderWidth: 3,
            pointBackgroundColor: "#2563eb",
            pointRadius: 5,
            tension: 0.35
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 100, grid: { color: "rgba(226, 232, 240, 0.8)" } },
            x: { grid: { display: false } }
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
          <button className={`chart-tab-btn ${chartMode === "skills" ? "active" : ""}`} onClick={() => setChartMode("skills")}>
            <i className="fa-solid fa-chart-column"></i> Tech Skill Matrix
          </button>
          <button className={`chart-tab-btn ${chartMode === "projects" ? "active" : ""}`} onClick={() => setChartMode("projects")}>
            <i className="fa-solid fa-chart-pie"></i> Tool Distribution
          </button>
          <button className={`chart-tab-btn ${chartMode === "workflow" ? "active" : ""}`} onClick={() => setChartMode("workflow")}>
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

// --- PROJECT BENTO CARD COMPONENT WITH CODE INSPECTOR TABS ---
function BentoProjectCard({ project, openModal }) {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'code' | 'insights'
  const spotlightProps = useSpotlight();

  return (
    <div className="bento-card project-bento-card spotlight-card" {...spotlightProps}>
      <div className="project-card-header">
        <div className="p-header-top">
          <span className="badge badge-blue">{project.badge}</span>
          <div className="p-card-tabs">
            <button className={`p-tab-btn ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>
              <i className="fa-solid fa-align-left"></i> Overview
            </button>
            <button className={`p-tab-btn ${activeTab === "code" ? "active" : ""}`} onClick={() => setActiveTab("code")}>
              <i className="fa-solid fa-code"></i> Query / Code
            </button>
            <button className={`p-tab-btn ${activeTab === "insights" ? "active" : ""}`} onClick={() => setActiveTab("insights")}>
              <i className="fa-solid fa-lightbulb"></i> Insights
            </button>
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
      </div>

      <div className="project-card-body">
        {activeTab === "overview" && (
          <div className="p-tab-content animate-fadeIn">
            <p className="project-desc">{project.desc}</p>
            <div className="project-meta-pill">
              <i className="fa-solid fa-wrench"></i> <span>{project.meta}</span>
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="p-tab-content animate-fadeIn">
            <div className="code-inspector-box">
              <div className="code-box-header">
                <span className="code-box-title"><i className="fa-solid fa-terminal"></i> SQL / DAX / Python Inspector</span>
                <span className="code-box-lang">UTF-8</span>
              </div>
              <pre className="code-snippet-pre">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === "insights" && (
          <div className="p-tab-content animate-fadeIn">
            <ul className="project-insights-mini">
              {project.insights.map((ins, i) => (
                <li key={i}><i className="fa-solid fa-circle-check text-blue"></i> {ins}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="project-card-footer">
        <button className="btn btn-sm btn-primary hover-magnetic" onClick={() => openModal(project)}>
          <i className="fa-solid fa-eye"></i> View Full Case Study
        </button>
        <a href={project.github} target="_blank" rel="noopener" className="btn btn-sm btn-outline hover-magnetic">
          <i className="fa-brands fa-github"></i> Repository
        </a>
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

  const spotlightProps = useSpotlight();

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
      {/* Background Animated Ambient Orbs & Grid */}
      <div className="ambient-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
        <div className="bg-grid-overlay"></div>
      </div>

      {/* Header Navigation */}
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
        {/* Hero Section with Bento Command Layout */}
        <section className="hero-section" id="home">
          <div className="container">
            <div className="bento-hero-grid">
              
              {/* Bento Card 1: Main Introduction */}
              <div className="bento-card bento-hero-main spotlight-card" {...spotlightProps}>
                <div className="badge badge-accent animate-fadeIn">
                  <i className="fa-solid fa-circle-dot pulsate"></i> Open for Data Analyst Opportunities
                </div>
                <h1 className="hero-title">
                  Hi, I'm <span className="text-highlight">Rutvik Bambhaniya</span>
                </h1>
                <h2 className="hero-subtitle">Data Analyst | Power BI & SQL Specialist</h2>
                <p className="hero-description">
                  Turning complex datasets into actionable business intelligence using <strong>SQL, Excel, Power BI, Python & Tableau</strong>. BCA Graduate with a 6-month Data Analyst internship and specialized ExcelR training in ETL & Star Schema data modeling.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary btn-lg hover-magnetic">
                    <i className="fa-solid fa-diagram-project"></i> View Analytics Projects
                  </a>
                  <a href="assets/resume.pdf" target="_blank" className="btn btn-secondary btn-lg hover-magnetic">
                    <i className="fa-solid fa-file-pdf"></i> Download Resume
                  </a>
                </div>
              </div>

              {/* Bento Card 2: Key Metrics Widget */}
              <div className="bento-card bento-hero-stats spotlight-card" {...spotlightProps}>
                <div className="stat-widget-header">
                  <span className="stat-widget-title"><i className="fa-solid fa-chart-line"></i> Analytics KPI Highlights</span>
                </div>
                <div className="stat-widget-grid">
                  <div className="stat-box hover-glow">
                    <span className="stat-num">6 Mo.</span>
                    <span className="stat-label">Internship Exp.</span>
                  </div>
                  <div className="stat-box hover-glow">
                    <span className="stat-num">7+</span>
                    <span className="stat-label">GitHub Repos</span>
                  </div>
                  <div className="stat-box hover-glow">
                    <span className="stat-num">SQL & BI</span>
                    <span className="stat-label">Core Toolbox</span>
                  </div>
                  <div className="stat-box hover-glow">
                    <span className="stat-num">BCA</span>
                    <span className="stat-label">Degree Grad.</span>
                  </div>
                </div>
              </div>

              {/* Bento Card 3: Social & Quick Connect */}
              <div className="bento-card bento-hero-socials spotlight-card" {...spotlightProps}>
                <span className="social-card-title">Quick Connect</span>
                <div className="social-buttons-grid">
                  <a href="https://www.linkedin.com/in/rutvik-bambhaniya-34621732b" target="_blank" rel="noopener" className="social-pill hover-bounce">
                    <i className="fa-brands fa-linkedin text-blue"></i> LinkedIn
                  </a>
                  <a href="https://github.com/Rutvik1429" target="_blank" rel="noopener" className="social-pill hover-bounce">
                    <i className="fa-brands fa-github text-blue"></i> GitHub
                  </a>
                  <a href="mailto:rutvikbambhaniya14@gmail.com" className="social-pill hover-bounce">
                    <i className="fa-solid fa-envelope text-blue"></i> Email Me
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Me Section (Bento Grid) */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Background & Objective</span>
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </div>

            <div className="bento-about-grid">
              <div className="bento-card spotlight-card bio-bento" {...spotlightProps}>
                <h3><i className="fa-solid fa-user-graduate text-blue"></i> Early-Career Data Analyst</h3>
                <p>
                  I am a motivated <strong>Data Analyst</strong> with a degree in <strong>Bachelor of Computer Applications (BCA)</strong> and professional training from <strong>ExcelR</strong>. My background includes a <strong>6-month Data Analyst internship</strong>, where I solved business-centric data challenges using structured query languages, statistical tools, and interactive BI dashboards.
                </p>
                <p>
                  I specialize in taking unstructured raw datasets, cleaning and transforming them through ETL pipelines, establishing robust relational data models (Star Schema), and developing intuitive dashboards that empower non-technical stakeholders to make evidence-based decisions.
                </p>
                <div className="target-roles-cloud">
                  <span className="role-pill"><i className="fa-solid fa-check text-blue"></i> Data Analyst</span>
                  <span className="role-pill"><i className="fa-solid fa-check text-blue"></i> MIS Analyst</span>
                  <span className="role-pill"><i className="fa-solid fa-check text-blue"></i> Data Operations Analyst</span>
                  <span className="role-pill"><i className="fa-solid fa-check text-blue"></i> Business Analyst</span>
                </div>
              </div>

              <div className="bento-card spotlight-card edu-bento" {...spotlightProps}>
                <h3><i className="fa-solid fa-award text-blue"></i> Education & Certifications</h3>
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

        {/* Technical Skills & Interactive Chart Workspace */}
        <section className="section bg-alt skills-section" id="skills">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Toolbox & Expertise</span>
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">Verified tools and analytical competencies built through real-world projects and internship experience.</p>
              <div className="section-divider"></div>
            </div>

            <div className="skills-bento-grid">
              {SKILLS_DATA.map((s, idx) => (
                <div key={idx} className="bento-card spotlight-card skill-bento-card" {...spotlightProps}>
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

            {/* Interactive Data Studio Workspace */}
            <div className="bento-card spotlight-card studio-bento-card" {...spotlightProps}>
              <div className="studio-header">
                <h3><i className="fa-solid fa-chart-area text-blue"></i> Interactive Data Studio</h3>
                <p>Explore technical skill competency indexes, project tool distribution, and analytics quality metrics dynamically.</p>
              </div>
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

            <div className="bento-card spotlight-card experience-bento" {...spotlightProps}>
              <div className="exp-header">
                <div className="exp-role-info">
                  <h3 className="exp-title"><i className="fa-solid fa-briefcase text-blue"></i> Data Analyst Intern</h3>
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

            <div className="workflow-bento-grid">
              {WORKFLOW_DATA.map((wf, idx) => (
                <div key={idx} className="bento-card spotlight-card workflow-bento-card" {...spotlightProps}>
                  <div className="wf-step-badge">{wf.step}</div>
                  <div className="wf-icon"><i className={wf.icon}></i></div>
                  <h4>{wf.title}</h4>
                  <p>{wf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Projects (With Code Inspector Tabs) */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Practical Applications</span>
              <h2 className="section-title">Analytics Projects</h2>
              <p className="section-subtitle">Real-world data analytics projects built using SQL, Power BI, Python, Excel, and Tableau. Click tabs inside cards to inspect actual SQL & DAX code!</p>
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

            <div className="projects-bento-grid">
              {filteredProjects.map((p) => (
                <BentoProjectCard key={p.id} project={p} openModal={openProjectModal} />
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Showcase */}
        <section className="section bg-alt dashboards-section" id="dashboards">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Data Visualizations</span>
              <h2 className="section-title">Dashboard Showcase</h2>
              <p className="section-subtitle">High-resolution preview gallery of Power BI, Tableau, and Excel analytical reports.</p>
              <div className="section-divider"></div>
            </div>

            <div className="dashboards-bento-grid">
              {DASHBOARDS_DATA.map((d, idx) => (
                <div key={idx} className="bento-card spotlight-card dash-bento-item" {...spotlightProps} onClick={() => openLightbox(d)}>
                  <div className="dash-img-container">
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>
                  <div className="dash-bento-caption">
                    <h4>{d.title}</h4>
                    <span className="dash-tech">{d.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Download Section */}
        <section className="section resume-section" id="resume">
          <div className="container">
            <div className="bento-card spotlight-card resume-bento-banner" {...spotlightProps}>
              <div className="resume-content">
                <span className="badge badge-accent"><i className="fa-solid fa-file-contract"></i> Professional Credentials</span>
                <h2>Ready to Review My Full Resume?</h2>
                <p>
                  Download my complete resume detailing my BCA degree, ExcelR Data Analyst training, 6-month internship experience, and technical skill set.
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

            <div className="contact-bento-grid">
              <div className="bento-card spotlight-card contact-info-bento" {...spotlightProps}>
                <h3><i className="fa-solid fa-address-card text-blue"></i> Contact Information</h3>
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

              <div className="bento-card spotlight-card contact-cta-bento" {...spotlightProps}>
                <h3><i className="fa-solid fa-handshake text-blue"></i> Open for Job Opportunities</h3>
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
                <span className="badge badge-blue">{selectedProject.badge}</span>
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
                <h4><i className="fa-solid fa-code text-blue"></i> SQL / DAX Query Snippet</h4>
                <pre className="code-snippet-pre">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
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
                style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", border: "1px solid var(--border-color)" }}
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
