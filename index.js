// Dynamic Skill Data
const skillsData = {
  aiml: [
    { name: "Federated Learning", desc: "FedAvg & FedProx privacy-preserving decentralized modeling", icon: "fa-solid fa-network-wired" },
    { name: "Multi-Agent Systems", desc: "Orchestrating agentic workflows using LangGraph", icon: "fa-solid fa-robot" },
    { name: "Computer Vision", desc: "Object detection, YOLOv8 tracking, and frame ingestion", icon: "fa-solid fa-eye" },
    { name: "Deep Learning", desc: "CNN backbones, MobileNetV2 optimization, and fine-tuning", icon: "fa-solid fa-brain" },
    { name: "RAG & Vector Search", desc: "Retrieval architectures with semantic embedding indexing", icon: "fa-solid fa-magnifying-glass-chart" },
    { name: "Machine Learning", desc: "Predictive modeling, regression, and data analytics", icon: "fa-solid fa-chart-line" }
  ],
  frameworks: [
    { name: "PyTorch", desc: "Core backbone for training deep learning classifiers", icon: "fa-solid fa-fire" },
    { name: "LangGraph", desc: "Stateful orchestration of multi-agent graphs", icon: "fa-solid fa-diagram-project" },
    { name: "FastAPI", desc: "Asynchronous backend API router with WebSockets", icon: "fa-solid fa-bolt" },
    { name: "OpenCV", desc: "Real-time image matrix and video stream analysis", icon: "fa-solid fa-photo-film" },
    { name: "Scikit-Learn", desc: "Statistical modeling, clustering, and regressions", icon: "fa-solid fa-gears" },
    { name: "TensorFlow", desc: "Model architecture building and inference runs", icon: "fa-solid fa-cubes" }
  ],
  languages: [
    { name: "Python", desc: "Primary language for data pipelines, AI models, and scripts", icon: "fa-brands fa-python" },
    { name: "SQL (Server & PG)", desc: "Database schemas, window functions, and migrations", icon: "fa-solid fa-database" },
    { name: "C++", desc: "High-performance data structure and algorithm implementation", icon: "fa-solid fa-code" },
    { name: "pgvector", desc: "Vector indexing extensions for hybrid semantic search", icon: "fa-solid fa-magnifying-glass" },
    { name: "PostgreSQL", desc: "Relational data store with async database client integrations", icon: "fa-solid fa-server" }
  ],
  cloud: [
    { name: "AWS Bedrock", desc: "Generative model APIs (Nova models, Claude scaling)", icon: "fa-solid fa-cloud" },
    { name: "Docker & Compose", desc: "Containerized deployments and local staging environments", icon: "fa-brands fa-docker" },
    { name: "Google Cloud Run", desc: "Serverless container hosting for microservices", icon: "fa-solid fa-cloud-sun" },
    { name: "WebSockets", desc: "Real-time bidirectional frame telemetry protocols", icon: "fa-solid fa-satellite-dish" },
    { name: "Git / GitHub", desc: "Version control workflows, pipelines, and releases", icon: "fa-brands fa-github" }
  ]
};

// Project Blueprint Blueprint Details
const blueprints = {
  sagesense: {
    title: "SageSense Architecture",
    category: "Attendance Intelligence System",
    desc: "A hybrid edge-cloud attendance system utilizing facial recognition, liveness checks, and WebRTC streaming for time-based classroom presence analytics (Patent Pending).",
    flow: `
      <div style="font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid var(--border-color); margin-top: 1rem;">
        <span style="color: var(--primary-cyan);">[Classroom IP Camera / RTSP]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(WebRTC Stream Ingestion)<br>
        <span style="color: var(--primary-cyan);">[Edge Gateway (go2rtc)]</span> ---> Extracts classroom frames<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--accent-emerald);">[FastAPI AI Engine]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Face Detection (InsightFace) & Tracking (Centroid)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Embedding Matching (AES Encrypted Embeddings)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Liveness Verification (ONNX Anti-Spoof Model)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(Compute Presence Duration)<br>
        <span style="color: var(--primary-cyan);">[Attendance Logic Engine]</span> ---> Present (>=80%) | Partial (50-79%) | Absent (&lt;50%)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> PostgreSQL DB Staging & Institutional ERP Sync<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> LLM + Structured RAG Insight Copilot Dashboard
      </div>
    `,
    details: `
      <li><strong>Liveness Anti-Spoofing:</strong> Prevents photo/video proxy attendance using ONNX-based liveness verification directly in the face processing pipeline.</li>
      <li><strong>Temporal Attendance Score:</strong> Tracks exact presence duration (Time Present / Total Session Time) instead of single-point check-ins to record actual classroom time.</li>
      <li><strong>Biometric Privacy & Encryption:</strong> No raw facial images are stored on the database; face templates are generated locally and stored as AES-encrypted embeddings.</li>
      <li><strong>Insight Copilot:</strong> Combines LLMs and structured RAG to let administrators generate automated, explainable class risk reports and alert indices.</li>
    `,
    screenshots: [
      { url: "./images/sagesense_dashboard.png", label: "Admin Operations Dashboard" },
      { url: "./images/sagesense_live_monitor.png", label: "Real-time Presence Monitor" },
      { url: "./images/sagesense_automation.png", label: "Automation Hub & Cameras" },
      { url: "./images/sagesense_analytics.png", label: "Performance & Risk Analytics" },
      { url: "./images/sagesense_enrollment.png", label: "Student Enrollment Console" },
      { url: "./images/sagesense_faculty.png", label: "Faculty Management" },
      { url: "./images/sagesense_intake.png", label: "Biometric Ingestion Portal" },
      { url: "./images/sagesense_login.png", label: "Secure Gateway Login" }
    ]
  },
  krishimitra: {
    title: "KrishiMitra Architecture",
    category: "Precision Agriculture Platform",
    desc: "A fully decentralized AI-driven ecosystem targeting agricultural yield optimization and crop health management for localized farming contexts.",
    flow: `
      <div style="font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid var(--border-color); margin-top: 1rem;">
        <span style="color: var(--primary-cyan);">[Client App]</span> (Hindi UI / Voice Input)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(WebSocket / HTTP)<br>
        <span style="color: var(--primary-cyan);">[FastAPI Core]</span> Router & Health Monitor<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> <span style="color: var(--accent-emerald);">[LangGraph Orchestrator]</span> (AWS Bedrock Nova Models)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Crop Diagnostic Agent (Leaf Image)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3b82f6;">[PyTorch MobileNetV2 CNN]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Satellite Advisor Agent<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3b82f6;">[Google Earth Engine API]</span> (NDVI)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Price Indexer Agent (Data.gov API)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--primary-cyan);">[PostgreSQL / SQLite]</span> & <span style="color: var(--primary-cyan);">[S3 Object Store]</span>
      </div>
    `,
    details: `
      <li><strong>Multi-Agent Core:</strong> Modeled using LangGraph on AWS Bedrock to coordinate task-specific sub-agents, handling fallback routes if API quotas fail.</li>
      <li><strong>CNN Image Ingestion:</strong> Crop disease recognition triggers a local PyTorch inference endpoint running fine-tuned MobileNetV2 weights (95%+ accuracy).</li>
      <li><strong>Satellite Analytics:</strong> GEE integration queries spectral band data to return live NDVI ratings mapping historical soil moisture constraints.</li>
      <li><strong>Production Infrastructure:</strong> Designed to run in a Docker Compose container cluster proxied by Caddy with scheduled PostgreSQL backups to AWS S3.</li>
    `,
    screenshots: [
      { url: "./images/krishimitra_dashboard.png", label: "AI Operations Command Center" },
      { url: "./images/krishimitra_ndvi.png", label: "NDVI Spectral Analytics" },
      { url: "./images/krishimitra_crops.png", label: "Crop Ingestion Console" },
      { url: "./images/krishimitra_farmers.png", label: "Farmer Registration DB" },
      { url: "./images/krishimitra_soil.png", label: "Soil Health Matrix" },
      { url: "./images/krishimitra_marketplace.png", label: "Localized Price Indexer" },
      { url: "./images/krishimitra_login.png", label: "Admin Access Console" }
    ]
  },
  rakshakai: {
    title: "Rakshak Surveillance Architecture",
    category: "Smart Telemetry System",
    desc: "A custom real-time computer vision surveillance system built to monitor, catalog, and alert security nodes of physical threats and restricted-zone intrusions.",
    flow: `
      <div style="font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid var(--border-color); margin-top: 1rem;">
        <span style="color: var(--primary-cyan);">[CCTV Camera / Video Source]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(OpenCV Frame Extraction)<br>
        <span style="color: var(--primary-cyan);">[FastAPI Telemetry Ingestion]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--accent-emerald);">[Ultralytics YOLOv8 Inference]</span> ---> Detects weapons, fire, falls, zone bounds<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--accent-emerald);">[ByteTrack Frame Tracker]</span> ---> Evaluates motion sequences & vectors<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Threat Scoring & Scene Memory (Redis-backed)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(Trigger Critical Event)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3b82f6;">[Ollama LMM scene summary]</span> + <span style="color: #3b82f6;">[Twilio SMS/Email alerts]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(WebSocket Frame Broadcast)<br>
        <span style="color: var(--primary-cyan);">[React Telemetry Dashboard]</span>
      </div>
    `,
    details: `
      <li><strong>High-Speed Telemetry:</strong> Implements asynchronous frame processing over WebSockets, minimizing latency to retain fluid telemetry dashboard updates.</li>
      <li><strong>Intelligent Polygon Masking:</strong> Admin dashboards allow security personnel to draw custom exclusion zones, using ray-casting algorithms to compute dynamic polygon intersections.</li>
      <li><strong>Local Scene Decoupling:</strong> Integrates Ollama (local Llama3-Vision) to run descriptive descriptions on flagged frames offline, preventing public data leakage.</li>
      <li><strong>Deduplication Logic:</strong> Redis buffers alert sequences to prevent alarm fatigue by tracking target persistence vectors temporally.</li>
    `,
    screenshots: [
      { url: "./images/rakshak_dashboard.png", label: "Surveillance Feed Control" },
      { url: "./images/rakshak_analytics.png", label: "Threat Analytics Ledger" },
      { url: "./images/rakshak_detection.png", label: "Inference Object History" },
      { url: "./images/rakshak_alerts.png", label: "Dispatched Emergency Alerts" }
    ]
  },
  careernavigator: {
    title: "SAGE AI Career OS Architecture",
    category: "Placement Intelligence OS",
    desc: "An enterprise RAG application focused on program decision-support, student readiness indicators, and document extraction workflows.",
    flow: `
      <div style="font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; font-size: 0.85rem; border: 1px solid var(--border-color); margin-top: 1rem;">
        <span style="color: var(--primary-cyan);">[Student Resume / Document PDF]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(Admin Ingest Portal)<br>
        <span style="color: var(--primary-cyan);">[PDF/DOCX Extraction Pipeline]</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--accent-emerald);">[AWS Bedrock Embedding Pass]</span> ---> Generates 1536-dim vectors<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;(Bulk Migration)<br>
        <span style="color: var(--primary-cyan);">[PostgreSQL DB with pgvector]</span> ---> HNSW Indexes<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---> Counselor Hybrid Retriever (Semantic match + Lexical search)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Expectation Reality Check (AWS Bedrock / OpenAI)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br>
        <span style="color: var(--primary-cyan);">[Placement Intelligence UI]</span> (Skill Radar & Outcome Simulation)
      </div>
    `,
    details: `
      <li><strong>Hybrid Retrieval:</strong> Builds a retrieval sequence combining semantic DB querying via pgvector with lexical checks to ensure key compliance targets match catalog entries.</li>
      <li><strong>Cognitive Resume Parsing:</strong> Employs structured LLM outputs to index candidate profiles, scoring readiness metrics deterministically.</li>
      <li><strong>Admission Intelligence:</strong> Leverages XIIth student metrics to construct risk assessments regarding wrong-branch alignment.</li>
      <li><strong>Database Governance:</strong> Normalized 3NF structure enforcing triggers and index backfills via transactional background operations.</li>
    `,
    screenshots: [
      { url: "./images/career_project/Screenshot 2026-05-28 110441.png", label: "Platform Capabilities Overview" },
      { url: "./images/career_project/Screenshot 2026-05-28 110458.png", label: "Multi-Agent Copilot Workflows" },
      { url: "./images/career_project/Screenshot 2026-05-28 110734.png", label: "Institution Command Center (Admin Dashboard)" },
      { url: "./images/career_project/Screenshot 2026-05-28 111055.png", label: "Career Analysis & Recommendations" },
      { url: "./images/career_project/Screenshot 2026-05-28 111105.png", label: "Resume Analysis Workspace" },
      { url: "./images/career_project/Screenshot 2026-05-28 111125.png", label: "Internship Readiness Dashboard" }
    ]
  }
};

// Typwriter Animation in Hero
const typedTextSpan = document.getElementById("typed-text");
const keywords = ["Multi-Agent AI Systems", "Computer Vision Pipelines", "Privacy-Preserving Federated Learning", "Advanced RAG Pipelines"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = keywords[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  
  typedTextSpan.textContent = currentWord.substring(0, charIndex);
  
  let typeSpeed = 100;
  
  if (isDeleting) {
    typeSpeed /= 2;
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Wait at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % keywords.length;
    typeSpeed = 500; // Pause before next word
  }
  
  setTimeout(type, typeSpeed);
}

// Tech Matrix Category Switching
const categoryButtons = document.querySelectorAll(".skill-category-btn");
const skillsGrid = document.getElementById("skills-grid-container");

function loadSkills(category) {
  skillsGrid.style.opacity = 0;
  
  setTimeout(() => {
    skillsGrid.innerHTML = "";
    const items = skillsData[category] || [];
    
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "glass skill-card";
      card.innerHTML = `
        <i class="${item.icon} skill-card-icon"></i>
        <h4>${item.name}</h4>
        <span>${item.desc}</span>
      `;
      skillsGrid.appendChild(card);
    });
    
    skillsGrid.style.opacity = 1;
  }, 200);
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    loadSkills(button.dataset.category);
  });
});

// Modal Drawer Trigger
const exploreButtons = document.querySelectorAll(".explore-btn");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");
const drawerTitle = document.getElementById("drawer-title");
const drawerContent = document.getElementById("drawer-content");

// Lightbox Elements
const lightboxOverlay = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

function openDrawer(projectId) {
  const bp = blueprints[projectId];
  if (!bp) return;
  
  drawerTitle.textContent = bp.title;
  drawerContent.innerHTML = `
    <div>
      <h4 class="drawer-section-title">System Role & Focus</h4>
      <p class="drawer-desc" style="font-weight: 500; color: #fff; margin-bottom: 0.4rem;">${bp.category}</p>
      <p class="drawer-desc">${bp.desc}</p>
    </div>
    
    <div>
      <h4 class="drawer-section-title">System Architecture Blueprint</h4>
      ${bp.flow}
    </div>
    
    <div>
      <h4 class="drawer-section-title">Core Implementation Pillars</h4>
      <ul class="drawer-list">
        ${bp.details}
      </ul>
    </div>

    <div>
      <h4 class="drawer-section-title">System Interface Showcase</h4>
      <div class="drawer-showcase-grid">
        ${bp.screenshots.map(s => `
          <div class="drawer-showcase-item" style="background-image: url('${s.url}');" onclick="openLightbox('${s.url}')">
            <div class="drawer-showcase-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  drawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeDrawer() {
  drawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

exploreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    openDrawer(btn.dataset.project);
  });
});

drawerClose.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", (e) => {
  if (e.target === drawerOverlay) {
    closeDrawer();
  }
});

// Lightbox Functions
function openLightbox(url) {
  lightboxImg.src = url;
  lightboxOverlay.classList.add("active");
}

function closeLightbox() {
  lightboxOverlay.classList.remove("active");
  // Clean up source when closed to prevent flashing old image on next open
  setTimeout(() => lightboxImg.src = "", 300);
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", (e) => {
  if (e.target === lightboxOverlay) {
    closeLightbox();
  }
});

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  // Start typewriter
  if (keywords.length) setTimeout(type, 1000);
  
  // Load default skills category
  loadSkills("aiml");
});
