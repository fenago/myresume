
import { Publication, ImpactStat, Experience, SkillGroup } from './types';

export const IMPACT_STATS: ImpactStat[] = [
  {
    label: "Threat Detection",
    value: "40%",
    description: "Accuracy improvement using advanced NLP techniques in risk assessment systems.",
    icon: "ShieldAlert"
  },
  {
    label: "Processing Speed",
    value: "60%",
    description: "Reduction in data processing time through automated Azure pipelines.",
    icon: "Zap"
  },
  {
    label: "Customer Support",
    value: "35%",
    description: "Improvement in response times and customer satisfaction via LLM deployment.",
    icon: "MessageSquare"
  },
  {
    label: "Scale",
    value: "100K+",
    description: "Students reached globally through Blockchain & AI education initiatives.",
    icon: "Users"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Non-invasive driver drowsiness detection system",
    authors: "HUR Siddiqui, AA Saleem, R Brown, B Bademci, E Lee, F Rustam",
    journal: "Sensors 21 (14), 4833",
    year: 2021
  },
  {
    title: "Sentiment Analysis and Topic Modeling on Tweets about Online Education during COVID-19",
    authors: "M Mujahid, E Lee, F Rustam, PB Washington, S Ullah, AA Reshi, I Ashraf",
    journal: "Applied Sciences 11 (18), 8438",
    year: 2021
  },
  {
    title: "Analysis and Evaluation of Barriers Influencing Blockchain Implementation in Moroccan Sustainable Supply Chain Management",
    authors: "O Boutkhoum, M Hanine, M Nabil, F El Barakaz, E Lee, F Rustam, I Ashraf",
    journal: "Mathematics 9 (14), 1601",
    year: 2021
  },
  {
    title: "Integrating Learning Analytics and Collaborative Learning for Improving Student's Academic Performance",
    authors: "A Rafique, MS Khan, MH Jamal, M Tasadduq, F Rustam, E Lee",
    journal: "IEEE Access",
    year: 2021
  },
  {
    title: "Predicting Pulsars from Imbalanced Dataset with Hybrid Resampling Approach",
    authors: "E Lee, F Rustam, W Aljedaani, A Ishaq, V Rupapara, I Ashraf",
    journal: "Advances in Astronomy",
    year: 2021
  },
  {
    title: "Deepfake tweets classification using stacked Bi-LSTM and words embedding",
    authors: "V Rupapara, F Rustam, A Amaar, PB Washington, E Lee, I Ashraf",
    journal: "PeerJ Computer Science 7, e745",
    year: 2021
  },
  {
    title: "Malicious Traffic Detection in IoT and Local Networks Using Stacked Ensemble Classifier",
    authors: "RDPL Indrasiri, E Lee, V Rupapara, F Rustam, I Ashraf",
    journal: "ResearchGate/Preprint",
    year: 2021
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Trivera Technologies",
    role: "Lead Data Scientist and Innovation Officer",
    period: "2020 – Present",
    description: [
      "Led exploration and application of LLMs and Generative AI.",
      "Developed AI solutions using Azure AI services, Databricks, and Synapse.",
      "Architected ML pipelines using TensorFlow, PyTorch, and Caffe.",
      "Optimized threat detection accuracy by 40% through NLP."
    ]
  },
  {
    company: "Miami Dade College",
    role: "Assistant Professor",
    period: "2022 – Present",
    description: [
      "Teaches Data Analytics and Data Science in the Bachelor's Program.",
      "AI Task Force member for college-wide AI integration.",
      "Co-Principal Investigator for an NSF grant."
    ]
  },
  {
    company: "TechBlue, Inc.",
    role: "Chief Data Officer",
    period: "2018 – 2020",
    description: [
      "Provided data-driven solutions for Government clients (IRS, DHS, FDA).",
      "Cloud Architect for Kubernetes and Docker infrastructures.",
      "Developed Blockchain HyperLedger Fabric Proof of Concepts."
    ]
  },
  {
    company: "Blockchain Training Alliance",
    role: "COO and Founder",
    period: "2018 – 2020",
    description: [
      "Scaled company to over 100,000 students via Linux Foundation/EdX.",
      "Sold company to a publicly traded entity in April 2021."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI & Deep Learning",
    skills: ["Generative AI", "LLMs", "NLP", "TensorFlow", "PyTorch", "Computer Vision"]
  },
  {
    category: "Cloud & Data Engineering",
    skills: ["Azure (Certified)", "AWS (Certified)", "Databricks", "Kubernetes", "Data Pipelines", "CI/CD"]
  },
  {
    category: "Emerging Tech",
    skills: ["Blockchain", "Hyperledger Fabric", "Ethereum", "Microservices", "Big Data Architecture"]
  }
];
