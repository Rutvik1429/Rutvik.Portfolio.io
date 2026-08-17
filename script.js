/* ==========================================================================
   RUTVIK BAMBHANIYA - DATA ANALYST PORTFOLIO INTERACTIVITY (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Copyright Year Automatically
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 3. Scrollspy & Active Navigation Link
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // 4. Project Filter Functional Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 5. Project Detail Modal Data
    const projectData = {
        project1: {
            title: "Credit Loan Disbursement & Recovery Analysis",
            badge: "SQL & Power BI",
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
        project2: {
            title: "Vendor Performance Analysis",
            badge: "Power BI, SQL & Python",
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
        project3: {
            title: "Customer Churn Analysis (Python EDA)",
            badge: "Python & Excel",
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
        project4: {
            title: "NYC Yellow Taxi Trip Report & Hypothesis Testing",
            badge: "Python & Tableau",
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
        project5: {
            title: "Blinkit Business Performance Analysis",
            badge: "Excel ETL & MIS",
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
        project6: {
            title: "Customer Performance Dashboard",
            badge: "Power BI & DAX",
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
    };

    // Modal Elements
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Open Modal
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projKey = btn.getAttribute('data-project');
            const data = projectData[projKey];

            if (data && modal && modalBody) {
                let processListHtml = data.process.map(step => `<li>${step}</li>`).join('');
                let toolsHtml = data.tools.map(t => `<span class="tech-tag">${t}</span>`).join('');
                let insightsHtml = data.insights.map(i => `<li>${i}</li>`).join('');

                modalBody.innerHTML = `
                    <div class="modal-header">
                        <span class="badge badge-accent">${data.badge}</span>
                        <h3 class="modal-title">${data.title}</h3>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-circle-exclamation"></i> Business Problem</h4>
                        <p>${data.problem}</p>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-bullseye"></i> Objective</h4>
                        <p>${data.objective}</p>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-database"></i> Dataset Source</h4>
                        <p>${data.data}</p>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-gears"></i> Analytical Workflow</h4>
                        <ul>${processListHtml}</ul>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-chart-line"></i> Key Insights & Outcomes</h4>
                        <ul>${insightsHtml}</ul>
                    </div>

                    <div class="modal-section">
                        <h4><i class="fa-solid fa-wrench"></i> Technologies & Tools</h4>
                        <div class="tag-cloud" style="margin-top: 0.5rem;">${toolsHtml}</div>
                    </div>

                    <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                        <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary width-full">
                            <i class="fa-brands fa-github"></i> View GitHub Repository
                        </a>
                    </div>
                `;

                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal Logic
    if (modalCloseBtn && modal) {
        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    // 6. Dashboard Image Lightbox Viewer
    const dashItems = document.querySelectorAll('.dashboard-item');
    dashItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.getAttribute('data-title') || "Dashboard Preview";

            if (img && modal && modalBody) {
                modalBody.innerHTML = `
                    <div style="text-align: center;">
                        <h3 class="modal-title" style="margin-bottom: 1rem;">${title}</h3>
                        <img src="${img.src}" alt="${title}" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--border-color);">
                    </div>
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
});
