import React, { useState } from "react";
import {
  User,
  FlaskConical,
  BookOpen,
  ShieldCheck,
  Presentation,
  Library,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "research", label: "RESEARCH INTERESTS", icon: FlaskConical },
  { id: "books", label: "BOOKS", icon: BookOpen },
  { id: "patents", label: "PATENTS", icon: ShieldCheck },
  { id: "responsibilities", label: "RESPONSIBILITIES & ACADEMIC LEADERSHIP", icon: FileText },
  { id: "conferences", label: "CONFERENCES / SEMINARS", icon: Presentation },
  { id: "publications", label: "PUBLICATIONS", icon: Library },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 pb-10">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <h1 className="text-2xl font-semibold tracking-tight">Dr. Gholam Syedain Khan</h1>
          <p className="text-sm text-slate-600">Finance | Financial Economics | Academic Research</p>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-700 font-medium"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8 py-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {activeTab === "about" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">ABOUT</h2>

              <p className="leading-relaxed text-slate-700">
                Dr. Gholam Syedain Khan brings over 15 years of distinguished experience in higher education, having served as a faculty member at prestigious colleges under the University of Calcutta. A proud alumnus of St. Xavier’s College (Autonomous), Kolkata, Dr. G. S. Khan has contributed significantly to academia as an Assistant Professor of Finance at his alma mater before taking on his current role at the Department of Management & Business Administration, Aliah University, Kolkata.
              </p>

              <p className="leading-relaxed text-slate-700">
                With expertise in financial econometrics, time series analysis and financial modeling, Dr. G. S. Khan's academic journey includes serving as a Research Fellow at the Centre of Excellence in Financial Markets (CUCSE-CEFM), a joint initiative of the University of Calcutta and the Calcutta Stock Exchange, where he was in charge of editing its quarterly financial markets newsletter. He has authored a Financial Management textbook for BBA, B.Com and MBA programmes and has co-edited two books with national-level publishers. He also serves as a reviewer for Springer and other Scopus-indexed journals. He holds two Patents registered with the Indian Patent Office, a testament to his commitment to translating academic insight into practical impact.
              </p>

              <p className="leading-relaxed text-slate-700">
                Dr. G. S. Khan is an avid researcher in various fields of finance and has presented his research at various national and international conferences and seminars in India and abroad.
              </p>

              <h3 className="text-xl font-semibold">EDUCATION AND EXPERIENCE</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Ph.D from University of Calcutta</li>
                <li>M.Phil from University of Calcutta</li>
                <li>MBA from ICFAI University</li>
                <li>M.Com from St. Xavier’s College, under University of Calcutta</li>
                <li>Post Graduate Diploma in Human Resource Management (PGDHRM) from ICFAI University</li>
                <li>UGC NET</li>
              </ul>

              <h3 className="text-xl font-semibold">TEACHING EXPERIENCE</h3>
              <p className="text-slate-700">
                Subjects Taught: Corporate Finance, Financial Management, Investment Banking, Mergers and Acquisitions, Corporate Restructuring, Corporate Accounting, Financial Markets and Institutions, Business Ethics and Corporate Social Responsibility and allied subjects.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Assistant Professor – Aliah University, Kolkata (2016 – Present), Stage-II</li>
                <li>Assistant Professor – St. Xavier’s College (Autonomous), Kolkata (2014 – 2016)</li>
                <li>Lecturer – AJC Bose College & Kidderpore College, Kolkata (2011 – 2014)</li>
                <li>Junior Research Fellow – Department of Commerce, University of Calcutta (2013 – 2014)</li>
              </ul>

              <h3 className="text-xl font-semibold">PROFESSIONAL MEMBERSHIP</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Indian Accounting Association (IAA)</li>
                <li>Indian Accounting Association Research Foundation (IAARF)</li>
                <li>Commerce Alumni Association Calcutta University (CAACU)</li>
                <li>St. Xavier’s College Alumni Association (SXCAA)</li>
              </ul>

              <h3 className="text-xl font-semibold">IMPORTANT RESEARCH IDS</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Vidwan ID: 530101</li>
                <li>ORCID ID: 0000-0003-1591-7375</li>
                <li>Researcher ID: ADL-9641-2022</li>
                <li>Google Scholar ID: 8udR63AAAAAJ</li>
              </ul>

              <h3 className="text-xl font-semibold">CONTACT VIA EMAIL</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>syedain11@aliah.ac.in</li>
                <li>syedain11@gmail.com</li>
              </ul>
            </section>
          )}

          {activeTab === "research" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">RESEARCH INTERESTS</h2>

              <p className="leading-relaxed text-slate-700">
                FinTech and digital financial ecosystems, financial markets, volatility and market microstructure, behavioural finance and investor psychology, macro-financial linkages, financial economics, risk management and insurance penetration, financial inclusion and digital financial literacy, ESG and sustainable finance and data-driven financial analytics.
              </p>

              <h3 className="text-xl font-semibold">CURRENT AND FUTURE RESEARCH THEMES</h3>

              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Digital financial literacy and behavioural dimensions of financial decision-making, with emerging focus on technology-driven financial inclusion.</li>
                <li>Investor sentiment, financial market behaviour and stock market volatility, with future emphasis on market microstructure and data-driven analysis.</li>
                <li>Risk management and insurance penetration, particularly in the context of natural disasters, with prospective research on financial resilience and climate-related risks.</li>
              </ul>

              <h3 className="text-xl font-semibold">PHD GUIDANCE</h3>
              <p className="text-slate-700">Three (ongoing).</p>

              <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                <li>Dipannita Chatterjee, Asst. Professor, Bhawanipur Education Society College</li>
                <li>Amirul Islam, Asst. Professor, Amity University, Kolkata</li>
                <li>Naurin Sultana, Full-time Scholar</li>
              </ol>

              <p className="text-slate-700 font-medium">
                Published Papers: 25+ publications in peer-reviewed and Scopus-indexed journals
              </p>
            </section>
          )}

          {activeTab === "books" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">BOOKS</h2>

              <ol className="list-decimal pl-6 space-y-4 text-slate-700">
                <li>Sole Author of <span className="font-medium italic">Financial Management</span>, 1st Ed. 2025. Aryan Publishing House.</li>
                <li><span className="font-medium italic">Digital India: Navigating Sustainable Development Goals</span> (2024), Allied Publisher.</li>
                <li><span className="font-medium italic">Innovative Management Practices: An Interdisciplinary Approach</span> (2021), Allied Publisher.</li>
              </ol>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.aryanpublishinghouse.com/products/commerce-and-management/financial-management/financial-management-by-gholam-syedain-khan.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Buy Financial Management
                </a>

                <a
                  href="https://www.amazon.com/Innovative-Management-Practices-Interdisciplinary-reference/dp/9390951089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 transition"
                >
                  Buy Innovative Management Practices
                </a>

                <a
                  href="https://www.amazon.in/Digital-India-Navigating-Sustainable-Development/dp/9389934346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
                >
                  Buy Digital India: Navigating SDGs
                </a>
              </div>
            </section>
          )}

          {activeTab === "patents" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">PATENTS</h2>
              <ol className="list-decimal pl-6 space-y-6 text-slate-700">
                <li className="pl-2">
                  <span className="font-semibold block text-slate-900">Patent Granted by The Patent Office, Govt. of India</span>
                  <p className="mt-1">
                    <span className="font-medium">Title:</span> “Personal Plug and Play High Security Router”
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Design Accepted and Published | Journal No: 28/2025 | Journal Date: 11/07/2025 | Design No: 453768-001
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-semibold block text-slate-900">Patent Application Published</span>
                  <p className="mt-1">
                    <span className="font-medium">Title:</span> “An Artificially Intelligent System for Predictive Marketing and Financial Allocation with Blockchain Transparency”
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Official Journal of the Patent Office India | Application No: 202531013790 A | Patent Office Journal No: 10/2025, 23833 | Journal Date: 7.3.2025
                  </p>
                </li>
              </ol>
            </section>
          )}

          {activeTab === "responsibilities" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">RESPONSIBILITIES & ACADEMIC LEADERSHIP</h2>
              <p className="leading-relaxed text-slate-700">
                Dr. G. S. Khan has contributed significantly to Aliah University’s academic governance, administration, and institutional development through leadership roles in statutory bodies, committees, and sustained engagement in planning, quality assurance, student welfare, examinations, and infrastructure.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 border-l-4 border-blue-500 pl-3">Academic and Administrative Roles</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><span className="font-medium text-slate-900">Joint Convener, University Publishing Committee (2025):</span> Actively involved in planning, evaluation and publication of Annual Reports, Newsletters and other academic publications of the University.</li>
                    <li><span className="font-medium text-slate-900">Member, NSS Advisory Committee (2025):</span> Contributing to policy formulation and strategic planning for National Service Scheme activities.</li>
                    <li><span className="font-medium text-slate-900">Convener, Electoral Literacy Committee (2024–2025):</span> Led awareness programmes and workshops aimed at educating students on electoral rights, democratic values and civic responsibilities.</li>
                    <li><span className="font-medium text-slate-900">Convener, University Maintenance Committee (2024–2026):</span> Oversaw campus infrastructure, maintenance operations and development initiatives to enhance the academic environment.</li>
                    <li><span className="font-medium text-slate-900">Member, Saksham Committee (2024):</span> Participated in initiatives aimed at empowerment of women and promotion of inclusive practices on campus.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 border-l-4 border-blue-500 pl-3">Statutory, Governance and Committee Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><span className="font-medium text-slate-900">Programme Officer, National Service Scheme (NSS) (2023–2025):</span> Led university-driven social service initiatives, promoting student participation in community development and outreach programmes.</li>
                    <li><span className="font-medium text-slate-900">Member, Doctoral Research Committee (2023):</span> Involved in evaluation and monitoring of doctoral research activities.</li>
                    <li><span className="font-medium text-slate-900">Member, NAAC Sub-Committee for Documentation (2023):</span> Contributed to institutional data compilation and quality documentation for NAAC accreditation.</li>
                    <li><span className="font-medium text-slate-900">Member, Internal Audit Committee, Department of Management & Business Administration (2021):</span> Assisted in financial oversight and internal audit processes.</li>
                    <li><span className="font-medium text-slate-900">Member, Annual Report Committee (2021):</span> Contributed to preparation and compilation of the University’s Annual Report.</li>
                    <li><span className="font-medium text-slate-900">Chairman, Devising Water Treatment Plant Committee:</span> Supervised initiatives for installation of water treatment plants and RO machines across University campuses.</li>
                    <li><span className="font-medium text-slate-900">Vice-Chairman, Aliah University Admission Test (AUAT) Committee (2017):</span> Played a key role in planning and executing the admission process to ensure transparency and efficiency.</li>
                    <li><span className="font-medium text-slate-900">Chairman, Empanelment of Advertising Agency Committee (2017):</span> Oversaw the selection and approval of advertising agencies for University requirements.</li>
                    <li><span className="font-medium text-slate-900">Convener, Shifting and Auction Committee:</span> Responsible for coordination and supervision of logistics, shifting and auction-related activities.</li>
                    <li><span className="font-medium text-slate-900">Member, Payment Gateway Committee (2016):</span> Contributed to evaluation and implementation of digital payment solutions within the University.</li>
                    <li><span className="font-medium text-slate-900">Member, Security Tender Committee (2016):</span> Participated in policy formulation and enhancement of campus security systems.</li>
                    <li><span className="font-medium text-slate-900">Member, Board of Studies, Department of Management & Business Administration (2017–Present):</span> Actively involved in curriculum design, syllabus revision and alignment of academic programmes with industry and academic standards.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 border-l-4 border-blue-500 pl-3">Academic Engagements and Professional Services</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><span className="font-medium text-slate-900">Conference Organizer & Convener:</span> Organized and coordinated International and National Conferences, Seminars and Entrepreneurship Development Workshops, contributing to academic networking and knowledge dissemination.</li>
                    <li><span className="font-medium text-slate-900">Examiner and Paper Setter:</span> Served as examiner and paper setter for the University of Calcutta, St. Xavier’s College, Kolkata and Aliah University, ensuring academic rigor and assessment quality.</li>
                    <li><span className="font-medium text-slate-900">Reviewer:</span> Actively reviewing research articles for Springer journals and other Scopus-indexed journals, contributing to peer review and scholarly quality control.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 border-l-4 border-blue-500 pl-3">Additional Public Responsibility</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><span className="font-medium text-slate-900">Board Observer, West Bengal Joint Entrance Examination (WBJEE) (2017–2025):</span> Appointed to oversee the smooth conduct of WBJEE examinations, ensuring adherence to examination protocols, transparency and fairness.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeTab === "conferences" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">CONFERENCES / SEMINARS</h2>
              <p className="leading-relaxed text-slate-700">
                Participated in 50+ seminars, conferences and workshops, including 7 events organized, 5 invited lectures, 24 paper presentations and 20 participations.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Papers presented in International/National Conferences</h3>
                <ol className="list-decimal pl-6 space-y-4 text-slate-700 text-sm">
                  <li><strong>7th International Conference on Management and Business Practices - (ICMBP) 2025</strong>, organised by the Department of Management & Business Administration, Aliah University, 29-30 January, 2025. Paper titled: “Analyzing the Relationship between Stock Market Movement and Election Outcomes in India.”</li>
                  <li><strong>7th International Conference on Management and Business Practices - (ICMBP) 2025</strong>, organised by the Department of Management & Business Administration, Aliah University, 29-30 January, 2025. Paper titled: “Analyzing Investor Sentiment and Its Impact on Stock Market Returns: Evidence from India’s Stock Market.”</li>
                  <li><strong>7th International Conference on Management and Business Practices - (ICMBP) 2025</strong>, organised by Department of Management & Business Administration, Aliah University, 29-30 January, 2025. Paper titled: “An Analysis of Price Trends of Specific IPOs in India: Evidence from the National Stock Exchange (NSE).”</li>
                  <li><strong>2nd International Conference on Emerging Issues in Business & Technology</strong>, organised by School of Management & Commerce, Brainware University on 20th September 2024. Paper titled: “A Bibliometric Analysis of Financial Literacy and Behavioral Biases.”</li>
                  <li><strong>6th International Conference on Management and Business Practices - (ICMBP) 2024</strong>, organised by Department of Management & Business Administration, Aliah University, 21-22 February, 2024. Paper titled: “A Study of Price Performance of Select IPOs in India: with reference to NSE.”</li>
                  <li><strong>6th International Conference on Management and Business Practices - (ICMBP) 2024</strong>, organised by Department of Management & Business Administration, Aliah University, 21-22 February, 2024. Paper titled: “Exploring financial literacy: Understanding Knowledge, Attitudes and Behavioral Biases through a systematic review.”</li>
                  <li><strong>2 Day National Seminar on Opportunities and Challenges of Quality Research and Teaching in Higher Education Institutions (HEIs)</strong> on 19-20 December 2023 organized by IQAC, Vidyasagar University. Paper titled: “Empowering Financial Literacy: Leveraging ChatGPT for Enhanced Education.”</li>
                  <li><strong>International Seminar on Accounting, Finance, Business and Social Sciences (ISAFBS’2023)</strong>; 14th, 15th & 16th September’2023, Jointly organized by Dept. of Bus. Administration, Assam University, India; College of Business and Public Affairs, Alabama A&M University, USA and Dept. of Management, North Eastern Hill University, Shillong, India. Paper titled: “Enhancing Financial Literacy and Education through the Utilization of ChatGPT.”</li>
                  <li><strong>International Conference on Global Research Trends in Higher Education</strong>, jointly organized by Management Institute, The Warsaw University of Life Sciences, Poland, International Scientific Research Association, Research Culture Society and Swaraj Research Institute, 19-20 August 2023. Paper titled: “Role of FinTech in the Stock Market- an Indian Context.”</li>
                  <li><strong>2-Day International Virtual Conference on Digitization in Science and Humanities Education and Research (ICDSHER’23)</strong> organized by DDE, SRM Institute of Science and Technology, Chennai, 29-30 June 2023. Paper titled: “Fintech and its Impact on the Indian Stock Market.”</li>
                  <li><strong>5th International Conference on Management and Business Practices - (ICMBP) 2023</strong>, organised by Department of Management & Business Administration, Aliah University, 10-11 January, 2023. Paper titled: “A Review of India’s Macroeconomic Framework and the Indian Stock Market.”</li>
                  <li><strong>4th International Conference on Management and Business Practices - (ICMBP) 2021</strong>, organised by Department of Management & Business Administration, Aliah University, 8-9 February, 2021. Paper titled: “The reaction of stock markets to Covid-19 pandemic: Evidence from select most affected countries.”</li>
                  <li><strong>4th International Conference on Management and Business Practices - (ICMBP) 2021</strong>, organised by Department of Management & Business Administration, Aliah University, 8-9 February, 2021. Paper titled: “The Economic Consequences of COVID-19 Pandemic in India.”</li>
                  <li><strong>4th International Conference on Management and Business Practices - (ICMBP) 2021</strong>, organised by Department of Management & Business Administration, Aliah University, 8-9 February, 2021. Paper titled: “The Impact of Financial Leverage on the Profitability of the Select Retail Companies in India.”</li>
                  <li><strong>Two-Day International Conference on ‘Emerging issues in Finance and Banking’</strong> organised by Department of Commerce, Surendranath Evening College, Kolkata on 27th & 28th February, 2020. Paper titled: “Exploring the Causal Relationship between Interest Rate and the Indian Equity Market – Evidence from BSE Sensex.”</li>
                  <li><strong>3rd International Conference on ‘Management & Business Practices’</strong> organised by Department of Management & Business Administration, Aliah University on 16th & 17th January, 2019. Paper titled: “Causal Nexus between Economic Growth and the Indian Stock Market.”</li>
                  <li><strong>International Conference on Business and Sustainable Development (ICBSD) 2018</strong> organised by Faculty of Business Studies, Rajshahi University, Bangladesh. Paper titled: “Factors Responsible for not using Digital Banking Services in West Bengal: A Case Study of MSME Labour.”</li>
                  <li><strong>2nd International Conference on ‘Management & Business Practices’ ICMBP-2018</strong> organised by Department of Management & Business Administration, Aliah University on 4th & 5th January, 2018. Paper titled: “Oil Price and the Indian Stock Market.”</li>
                  <li><strong>1st International Conference on ‘Management & Business Practices’</strong> organised by Department of Management & Business Administration, Aliah University on 11th & 12th January, 2017. Paper titled: “The Future of Fund Management: A study with Special Reference to Nomura’s Simplex Equity Futures Strategy Fund.”</li>
                  <li><strong>1st International Conference on ‘Management & Business Practices’</strong> organised by Department of Management & Business Administration, Aliah University on 11th & 12th January, 2017. Paper titled: “Emergence of Ambush Marketing and its Present Scenario in India: An Overview.”</li>
                  <li><strong>Two Day National Seminar on ‘Contemporary Issues in Accounting and Finance’</strong> organised by The Department of Commerce, Umeschandra College, in collaboration with Indian Accounting Association, Midnapore Branch on 2nd & 3rd December, 2016. Paper titled: “Inflation Interest Rates and the Indian Stock Market.”</li>
                  <li><strong>UGC sponsored National Seminar on ‘FDI in Retail Sector: Economic & Commercial Perspectives’</strong> organised by Departments of Commerce & Economics, Vidyanagar College on 20th September, 2013. Paper titled: “FDI Inflows in Pre and Post Liberalization Period: An Empirical Analysis with Special Reference to India.”</li>
                  <li><strong>UGC sponsored National Seminar on ‘Advances in Theoretical and Empirical Economics with Applications to India’</strong> organised by Department of Economics, Rashtraguru Surendranath College and West Bengal State University, on 7th September, 2013.</li>
                  <li><strong>UGC sponsored 2-day National Seminar on ‘Changing Scenario in Indian Business Environment’</strong> organised by School of Humanities and Social Sciences, Netaji Subhash Open University on 8-9 August, 2014. Paper titled: “Impact of Foreign Direct Investment on Economic Growth: Empirical Evidence from India.”</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Invited Lectures & Conference Sessions</h3>
                <ul className="list-disc pl-6 space-y-4 text-slate-700 text-sm">
                  <li>Delivered a lecture on <strong>Bibliometric Analysis using VOSviewer</strong> at a one-day Workshop organized by the Department of Journalism and Mass Communication, Aliah University, Park Circus Campus (18th January 2025).</li>
                  <li>Delivered a session on <strong>Bibliometric Analysis using VOSviewer</strong> at a Six-Day Workshop on Research Methodology in Social Sciences, Bhawanipur Education Society College, Kolkata (November 2024).</li>
                  <li>Delivered a session on <strong>Financial Management</strong> in the ‘Training Programme on Financial Management and Hospitality Management’ for Self Help Groups of North 24 Parganas (April 2017) organized by MBA Department, Aliah University.</li>
                  <li>Served as <strong>Technical Session Chair</strong> at the International Conference on Industry 5.0: Connecting Human and Machine for Sustainable Development, organized by Brainware University, Kolkata (September 2024).</li>
                  <li>Chaired a <strong>Technical Session</strong> at ICMBP-2025, an International Conference on Management & Business Practices, organized by Aliah University, Kolkata (January 2025).</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Conference/Workshop Organized</h3>
                <ol className="list-decimal pl-6 space-y-4 text-slate-700 text-sm">
                  <li><strong>Convener of the Seminar on Securities Markets</strong>, jointly organized by the MBA Department, Aliah University, NSE and SEBI, held on October 9, 2023, at the University’s Newtown campus.</li>
                  <li><strong>Convener of the 4th International Conference on Management and Business Practices (ICMBP) 2021</strong> held on February 8-9, 2021.</li>
                  <li><strong>Convener of the Workshop on ‘Entrepreneurship as an Alternate Career Mode’</strong>, jointly organized by the MBA Department, Aliah University and the University of Calcutta on January 21, 2020.</li>
                  <li><strong>Convener of One Day State Level Seminar on ‘Recent Trends in Capital Markets and Financial Innovations’</strong> jointly organized by CUCSE-CEFM, Department of Commerce, Calcutta University and MBA Department, Aliah University, Kolkata on September 5, 2016 at New Town Campus.</li>
                  <li><strong>Organizing Committee Member</strong> for the International Conference of the MBA Department ICMBP 2017, ICMBP-2018, ICMBP-2019, ICMBP-2023, ICMBP-2024, ICMBP-2025.</li>
                  <li>Conducted <strong>Virtual Stock Market Game</strong> in National Library, organized by CUCSE-CEFM in 2013.</li>
                  <li>Actively participated and coordinated in organizing <strong>Investors’ Awareness Programs and International Seminar</strong> by CUCSE-CEFM, Department of Commerce, Calcutta University during 2013-14.</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Conference/Seminar/Workshop Participated</h3>
                <ol className="list-decimal pl-6 space-y-4 text-slate-700 text-sm">
                  <li>2 Week Capacity Building Programme organised by Department of Management & Business Management, Aliah University, Kolkata from 22nd November to 6th December 2023 at Aliah University, Newtown campus.</li>
                  <li>Online Refresher Course in Commerce (UGC Swayam ARPIT Course) organised by Shri Ram College of Commerce, University of Delhi from 1.9.2019 to 16.1.2020.</li>
                  <li>UGC Sponsored Specific Refresher Course in Commerce, organised by UGC-HRDC University of Calcutta, from 26.11.2019 to 9.12.2019.</li>
                  <li>UGC Sponsored Orientation Programme organised by UGC-HRDC University of Calcutta, from 4.9.2018 to 3.10.2018.</li>
                  <li>Global Summit 2017 organised by The Institute of Cost Accountants of India on 29-30 June 2017 at Science City Auditorium.</li>
                  <li>Financial Research Workshop 2016 organised by Indian Institute of Management, Calcutta (IIMC) on November 18-19, 2016 at IIM Calcutta.</li>
                  <li>2 Day Conference on “25 Years of Economic Reforms: Retrospect and Prospects” organised by Indian Institute of Management, Calcutta (IIM-C) and Observer Research Foundation (ORF) on October 24 -25, 2016 at Hotel Oberoi Grand, Kolkata.</li>
                  <li>One Day State Level Seminar on ‘Recent Trends in Capital Markets and Financial Innovations’ jointly organised by CUCSE-CEFM, Department of Commerce, Calcutta University and Department of Management & Business Administration, Aliah University, Kolkata on September 5, 2016 at Aliah University, New Town Campus.</li>
                  <li>Seminar on ‘Commerce Education and Beyond – the Professional Edge organised by Institute of Cost Accountants of India and Department of Commerce, University of Calcutta on August 27, 2016 at Centenary Hall, Calcutta University.</li>
                  <li>Workshop for faculty of colleges in India, Human Value Development Programme organised by All India Association for Christian Higher Education held at St. Xavier’s College, Kolkata on 18th November 2015.</li>
                  <li>UGC sponsored One-Day National Symposium on Overcoming Challenges for Sustainable Corporate Excellence organised by Department of Commerce (UG&PG), St. Xavier’s College (Autonomous), Kolkata on 21st March 2015.</li>
                  <li>International Seminar on ‘Economic Liberalisation and Capital Market Development: Indian Perspective’ organised by CUCSE-CEFM, Department of Commerce, University of Calcutta on 28th December, 2013 at The Park, Kolkata.</li>
                  <li>Conference on ‘Ethics and Corporate Governance’ organised by Institute of Company Secretaries of India (ICSI) and National Institute of Securities Markets (NISM) on 11th December, 2013 at The Park, Kolkata.</li>
                  <li>Investors’ Awareness Program organised by CUCSE-CEFM, Department of Commerce, University of Calcutta on 28th April, 2014 at Asutosh Hall, Calcutta University Campus.</li>
                  <li>Investors’ Awareness Program organised by CUCSE-CEFM, Department of Commerce, University of Calcutta on 9th April, 2014 at Asutosh Hall, Calcutta University Campus.</li>
                  <li>UGC sponsored Seminar on “Challenges and Opportunities in Commerce Education – A New Paradigm”, organised by Post Graduate Department of Commerce, St. Xavier’s College, 2010.</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Faculty Development Program</h3>
                <ul className="list-disc pl-6 space-y-4 text-slate-700 text-sm">
                  <li>FDP on <strong>Qualitative Techniques for Management and Social Science Research</strong> organized by Amity College of Commerce and Finance, Amity University, Kolkata from 24.6.2024 to 28.6.2024.</li>
                  <li>Two-Week Online FDP on <strong>Advanced Techniques and Tools in Social Science Researches</strong>, 24-11-2020 to 07-12-2020, organised by Department of Management & Business Administration, Aliah University, Kolkata.</li>
                  <li>7 Day Workshop on <strong>Research Methodology</strong> from 12th to 20th July, 2016 organised by Department of Management & Business Administration, Aliah University, Kolkata.</li>
                  <li>UGC Sponsored 7-Days National Workshop on <strong>Research Methodology Using SPSS</strong> from 1st to 8th October, 2015 organised by St. Xavier’s College (Autonomous), Kolkata.</li>
                </ul>
              </div>
            </section>
          )}

          {activeTab === "publications" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold">PUBLICATIONS</h2>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Journals and Chapters in Edited Books</h3>
                <p className="text-slate-600 italic">No. of publications: 25+</p>
                <ol className="list-decimal pl-6 space-y-4 text-slate-700 text-sm">
                  <li>Mondal, A. S., & Khan, G. S. (2025). Transforming financial education through conversational AI: A study on ChatGPT. <em>Pen Acclaim</em>, Vol. 39, June, pp. 328–342.</li>
                  <li>Chatterjee, D., Khan, G.S., Chakravarty, P., (2025), Impact of Loksabha Poll results on Nifty Fifty and Nifty 500 Indices- An Empirical Study. In Gargi and Bandyopadhyay, P. (Eds.) <em>Exploring Global Research Trends in Commerce and Management</em>, Rohini Nandan.</li>
                  <li>Sardar, A., & Khan, G. S. (2024). Investor Sentiment Dynamics and Stock Returns: Evidence from Indian Market. <em>Srusti Management Review</em>, XVII(II), 307–324.</li>
                  <li>Mondal. A., Khan, G. S. (2024). Fintech’s Revolution: Transforming Dynamics in the Indian Stock Market. In Chatterjee, S, Uddin, F., Khan, G.S. (Ed.), <em>Digital India: Navigating Sustainable Development Goals</em> (1st Ed, pp. 139–151). Allied Publishers, New Delhi.</li>
                  <li>Tasneem, S, Khan, G.S. (2024). Harmonizing Forces: Exploring the Integration of Corporate Governance and Social Responsibility. In Chatterjee, S., F. Uddin, Khan, G.S.(Ed.), <em>Digital India: Navigating Sustainable Development Goals</em>, Allied Publishers, New Delhi.</li>
                  <li>Khan, G. S. (2023). A Review of India’s Macroeconomic Framework and the Indian Stock Market. <em>Third Concept</em>, 36(432), 32.</li>
                  <li>Sarkar, A., & Khan, G. S. (2021). The Reaction of Stock Markets to Covid-19 Pandemic: Evidence from Select Most Affected Countries. In Khan, G. S. & Baksi, A. (Eds.), <em>Innovative Management Practices - An Interdisciplinary Approach</em> (1st Ed.). Allied Publishers, New Delhi.</li>
                  <li>Khan, G. S. (2021). The Economic Consequences of COVID-19 Pandemic in India. In Khan, G. S. & Baksi, A. (Eds.), <em>Innovative Management Practices - An Interdisciplinary Approach</em> (1st Ed.). Allied Publishers, New Delhi.</li>
                  <li>Hussain, I., & Khan, G. S. (2021). The Impact of Financial Leverage on the Profitability of the Select Retail Companies in India. In G. S. Khan & A. Baksi (Eds.), <em>Innovative Management Practices - An Interdisciplinary Approach</em> (1st Ed.). Allied Publishers, New Delhi.</li>
                  <li>Bhattacharyya, S., Khan, G. S., Kundu, A., Saha, M. (2017). Global Financial Crisis, Foreign Portfolio Investment and Volatility: Impact Analysis on Select Southeast Asian Markets, <em>Finance India</em>, 31(4), 1191-1210.</li>
                  <li>Khan, G. S., Saha. M., (2017). Monetary variables and stock market returns - the Indian Experience, <em>Research Bulletin</em>, 43(1), Institute of Cost Accountants of India, 135-154.</li>
                  <li>Khan, G. S. (2017). Inflation, Interest rates and the Indian Stock Market – An Econometric Analysis. <em>Contemporary Issues in Accounting and Finance</em> (pp. 196-218). UCC Publication.</li>
                  <li>Khan, G. S., Chattaraj, T. (2017). Artificial Intelligence: The future of fund management; A study with special reference to Nomura’s Simplex Equity Futures Strategy Fund. In A. Baksi, P. A. Alam, & K. Kundu (Eds.), <em>Exploring New Horizons in Management and Business Practices</em> (pp. 249-256). Kolkata, India: Aliah University Publication.</li>
                  <li>Khan, G. S. (2017). Emergence of Ambush Marketing and its present scenario in India – An Overview. In A. Baksi, P. A. Alam, & K. Kundu (Eds.), <em>Exploring New Horizons in Management and Business Practices</em> (pp. 189-200). Kolkata, India: Aliah University Publication.</li>
                  <li>Bhattacharyya, S., Khan, G. S., Kundu, A., Saha, M. (2016). Global Financial Crisis, Foreign Portfolio Investment and Volatility– A comparative Impact Analysis on Indonesia and India, <em>SIT Journal of Management</em>, 3(1), p.1-16.</li>
                  <li>Khan, G. S. (2015). Private Placements in the Indian Capital Market – with reference to the Companies Act, 2013, <em>Research Bulletin</em>, 41(1), Institute of Cost Accountants of India, 237-246.</li>
                  <li>Khan, G. S. (2014). Dynamic Interactions between Commodity Market and Capital Market – Evidence from India. <em>ASA University Review</em>, Bangladesh 8(1). 29-45.</li>
                  <li>Khan, G. S. (2014). Target Costing and Competitive Advantage –. <em>The Management Accountants</em>, Institute of Cost Accountants of India, 74–82.</li>
                  <li>Khan, G. S., & Mitra, P. (2014). Foreign Direct Investment Inflows in Pre & Post Liberalization Period: An Empirical Analysis in the Context of India. <em>United States of America Research Journal</em>, 4(4), 26-33.</li>
                  <li>Khan, G. S., & Mitra, P. (2014). A Causal Linkage between FDI Inflows with Select Macroeconomic Variables in India – An Econometric Analysis. <em>IOSR Journal of Economics and Finance</em>, 5(5), IOSR Journals, 124-133.</li>
                  <li>Mitra, P., & Khan, G. S. (2014). Twin Deficits Hypothesis: An Empirical Analysis in the Context of India. <em>International Journal of Commerce & Business Studies</em>, 2(2), 10–23.</li>
                  <li>Khan, G. S., Mitra, P., Sen, P. (2014). Impact of Foreign Direct Investment in Economic Growth – Empirical Evidence from India. <em>Changing Scenario in Indian Business Environment</em>, (pp. 178-190). NSOU Publication.</li>
                  <li>Khan, G. S. (2014). A Study of Exchange Rate Movement and Stock Market Returns: Evidence From Bombay Stock Exchange (BSE). <em>Advances in Theoretical and Empirical Economics with Application to India</em>, (pp. 196-218). BRSC Publication.</li>
                  <li>Mitra, P., & Khan, G. S. (2015). Indian Banking System: A Critical Evaluation of its Performance in Spreading Financial Inclusiveness. <em>United States of America Research Journal (USARJ)</em>, 5(1), USARJ Publishing 39-48.</li>
                  <li>Mitra, P., & Khan, G. S. (2014). Impact of Trade Openness, FDI Inflows and Total Exports on Economic Growth of India: An Econometric Approach. <em>IOSR Journal of Economics and Finance</em>, 4(5), 60–68.</li>
                  <li>Mitra, P., & Khan, G. S. (2014). An Analysis of Day-of-the-Week and Intraday Effects in the Indian Stock Market: Evidence from National Stock Exchange. <em>Journal of Contemporary Issues in Business Research</em>, Academic Journals, 3(3), 115-127.</li>
                  <li>Khan, G. S. (2013). A Causal Linkage Between Economic Indicators and Stock Market Returns – Evidence from National Stock Exchange, <em>Research Bulletin</em>, 38, Institute of Cost Accountants of India, 56-68.</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-3">Articles published in Daily Newspapers & website</h3>
                <ul className="list-disc pl-6 space-y-4 text-slate-700 text-sm">
                  <li><strong>Mechanics of the Mind</strong> – The Statesman, 28th November 2006.</li>
                  <li><strong>Value Added</strong> – The Statesman (Sunday Edition), 8th Day, 8th October 2006.</li>
                  <li><strong>Think Big Think CA</strong> – The Statesman (Sunday Edition), 8th Day, 28th August 2005.</li>
                  <li><strong>Word of Mouth</strong> – The Telegraph, Careergraph, 20th August 2003.</li>
                  <li><strong>Education System</strong> – The Times of India, Education Times, 15th October 2001.</li>
                  <li><strong>Study Steep</strong> – The Telegraph, Metro, 5th June 2001.</li>
                  <li><strong>Ecstasy of Mind</strong> – published in Internet website www.caalley.com</li>
                  <li><strong>Perfection of Faith</strong> – published in Internet website www.caalley.com</li>
                </ul>
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </div>
  );
}
