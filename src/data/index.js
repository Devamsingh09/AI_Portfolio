export const projects = [
  {
    id: 1,
    number: "01 / 03",
    title: "AI Powered SQL-Agent",
    date: "February 2026",
    description:
      "A natural language-to-SQL agent that empowers non-technical users to query any CSV dataset in plain English through a robust 4-node LangGraph pipeline. Zero SQL knowledge required.",
    highlights: [
      "Engineered a 4-node LangGraph pipeline: generate → validate → execute → summarize",
      "Read-only safety enforced at 3 levels — LLM prompt, validation node & retry logic — with auto-retry up to 3×",
      "One-click dataset profiling via ydata-profiling with downloadable HTML reports",
      "Dockerized with Supervisor (FastAPI + Streamlit in one container); deployed on Render + Streamlit Cloud",
    ],
    tech: ["Python", "LangGraph", "Groq Llama 3.3-70B", "FastAPI", "Streamlit", "SQLite", "Docker", "Render"],
    github: "https://github.com/Devamsingh09/sql_agent",
    demo: "https://da-agent.streamlit.app/",
    hasDemo: true,
  },
  {
    id: 2,
    number: "02 / 03",
    title: "Synapse AI — Agentic Chatbot",
    date: "December 2025",
    description:
      "A full-stack agentic chatbot with LangGraph orchestration supporting multi-tool calling, real-time token streaming, voice input, and multi-thread conversation management.",
    highlights: [
      "Tool calling: web search, RAG, stock price, calculator, datetime — all in one agent",
      "Real-time token streaming via Server-Sent Events (SSE) in FastAPI",
      "Short-term memory via SQLite checkpointing; multi-thread conversation management",
      "React.js frontend with voice input & markdown rendering; deployed on Vercel + HuggingFace Spaces",
    ],
    tech: ["LangGraph", "LangChain", "Groq Llama 3.3-70B", "FastAPI", "React.js", "SSE", "SQLite", "HuggingFace"],
    github: "https://github.com/Devamsingh09/SynapseAI",
    demo: "https://synapse-ai-orcin.vercel.app/",
    hasDemo: true,
  },
  {
    id: 3,
    number: "03 / 03",
    title: "Sentiment Analysis App",
    date: "January 2025",
    description:
      "A deep learning-powered sentiment prediction system using a custom multi-layer LSTM trained on a vocabulary of 10,000 tokens — outperforming classical ML baselines significantly.",
    highlights: [
      "Designed and trained a multi-layer LSTM with 10,000-token vocabulary for sequence-based prediction",
      "Achieved 89% accuracy and 88% F1-score, outperforming TF-IDF + Logistic Regression baselines",
      "Deployed as an interactive Streamlit app with real-time inference",
    ],
    tech: ["Python", "Scikit-learn", "NLP", "LSTM", "TensorFlow", "Streamlit"],
    github: "https://github.com/Devamsingh09/Sentiment_Analysis_App",
    demo: null,
    hasDemo: false,
  },
];

export const skills = [
  {
    icon: "💻",
    title: "Languages",
    tags: ["Python", "C++", "SQL"],
  },
  {
    icon: "🧠",
    title: "Generative AI",
    tags: ["LangChain", "LangGraph", "RAG", "ChromaDB", "OpenAI API", "Groq"],
  },
  {
    icon: "⚙️",
    title: "ML / Deep Learning",
    tags: ["Scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas", "LSTM"],
  },
  {
    icon: "🚀",
    title: "Backend & DevOps",
    tags: ["FastAPI", "Docker", "Git", "Streamlit", "Render"],
  },
  {
    icon: "📊",
    title: "Data & Visualization",
    tags: ["Matplotlib", "Seaborn", "Pandas Profiling", "ydata-profiling"],
  },
  {
    icon: "🔬",
    title: "ML Expertise",
    tags: ["Regression", "Classification", "Clustering", "NLP", "Feature Engineering", "Hyperparameter Tuning"],
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Prashnottar",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Performed student clustering using unsupervised learning (K-Means, DBSCAN) to group students by learning patterns",
      "Classified students into performance-based categories, revealing actionable insights to improve academic outcomes",
      "Visualised clustering patterns with Matplotlib & Seaborn, enabling data-driven decisions for curriculum optimisation",
    ],
  },
];

export const achievements = [
  {
    icon: "🥇",
    title: "Top 3% — JEE Mains",
    desc: "Ranked among the top 3% of candidates nationally in India's most competitive engineering entrance exam.",
    type: "ach",
  },
  {
    icon: "🥈",
    title: "Rank 5 — UPJEECUP",
    desc: "Secured Rank 5 in the UPJEECUP State-Level Diploma Exam across Uttar Pradesh.",
    type: "ach",
  },
];

export const certifications = [
  {
    icon: "🏅",
    title: "IBM Professional Data Science Certificate",
    desc: "Covers data visualization, web scraping, preprocessing, machine learning, and SQL. Industry-recognized credential from IBM.",
    type: "cert",
  },
];

export const tickerItems = [
  "Python", "LangGraph", "Generative AI", "FastAPI", "LangChain",
  "Groq Llama 3.3", "Docker", "RAG Pipeline", "TensorFlow", "Streamlit",
  "React.js", "ChromaDB", "Deep Learning", "NLP", "Data Science",
  "Machine Learning", "IIIT Ranchi", "Available for Hire",
];