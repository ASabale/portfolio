import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Akshay",
  lastName: "Sabale",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Engineer & ML Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [ ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Data Engineer and Machine Learning expert with deep expertise in neural networks, real-time data processing, and AI systems.
      Currently pursuing a Master's in Computer Science at the University of Texas at Arlington, specializing in Big Data Management and Intelligent Systems.
      Technical expertise includes TensorFlow, PyTorch, Apache Kafka, Apache Flink, Python, Java, Kubernetes, and AWS cloud services.
      Sharing insights on building production ML systems, real-time data pipelines, and scalable distributed architectures.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ASabale",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akshaysabale",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:akshaysabale07169@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Engineer & ML Engineer</>,
  subline: (
    <>
      I'm {person.name}, a data engineer and machine learning expert specializing in real-time data processing and neural networks. With expertise in Apache Kafka, Apache Flink, TensorFlow, PyTorch, and distributed systems, I build intelligent solutions that bridge the gap between data engineering and artificial intelligence.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Texas, USA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Akshay is a data engineer and machine learning expert currently working at Ribbon Communications, 
        specializing in real-time data processing systems with Apache Kafka, Apache Flink, and Kubernetes. 
        With deep expertise in neural networks, deep learning, and AI systems, combined with proficiency in 
        cloud computing, big data processing, and scalable system design, he builds intelligent solutions 
        that bridge the gap between data engineering and machine learning. He leverages cutting-edge 
        technologies including TensorFlow, PyTorch, and distributed computing frameworks to develop 
        high-performance, production-ready ML and data systems at scale.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ribbon Communications",
        timeframe: "July 2025 – Present",
        role: "Data Engineer",
        achievements: [
          <>
            Architected and developed real-time data processing systems using Apache Kafka and Apache Flink, enabling high-throughput stream processing for mission-critical telecommunications data.
          </>,
          <>
            Built configurable pipeline framework in Java that dynamically generates and processes data workflows, optimized for both stream and batch processing modes.
          </>,
          <>
            Designed and implemented OpenAPI-based microservices deployed on Kubernetes, providing scalable and resilient data processing infrastructure.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Texas at Arlington",
        timeframe: "Aug 2024 – May 2025",
        role: "Graduate Teaching Assistant (Data Structures & Database Systems)",
        achievements: [
          <>
            Conducted weekly sessions on data structures and algorithms, leading to a 25% improvement in student exam performance.
          </>,
          <>
            Designed and implemented a full-stack project using JavaScript and PostgreSQL, enhancing students' real-world software development skills.
          </>,
          <>
            Provided guidance on database design and complex SQL queries, bridging theoretical concepts with practical applications.
          </>,
        ],
        images: [],
      },
      {
        company: "Integral Ad Science",
        timeframe: "Sept 2020 – Sept 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Reduced processing costs by 65% and time by 71% by transitioning from Hadoop based on-premises infrastructure to AWS.
          </>,
          <>
            Designed Kinesis data pipeline handling 200k+ messages/sec, improving processing latency by 56%.
          </>,
          <>
            Automated workflows and multi-layered validations, reducing errors by 90% in reporting.
          </>,
          <>
            Introduced Cloudwatch-based monitoring and alerting, cutting downtime by 85% and ensuring 99.9% system availability.
          </>,
          <>
            Led the design of Airflow-based ETL pipelines to aggregate over 2 billion daily records, reducing processing time by 60%.
          </>,
          <>
            Created customizable reporting systems using Looker and Snowflake, improving analytics accessibility by 40%.
          </>,
          <>
            Engineered a multithreaded Java service to process ad sessions, accelerating report generation by 65%.
          </>,
          <>
            Built RESTful APIs enabling real-time data retrieval, enhancing user report generation speed by 50%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Texas at Arlington",
        description: <>Master's in Computer Science, specializing in Big Data Management and Intelligent Systems. Expected May 2025.</>,
      },
      {
        name: "Vishwakarma Institute of Technology, Pune",
        description: <>B.Tech in Computer Engineering, graduated in October 2020.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Machine Learning & Neural Networks",
        description: <>Expert in neural networks, deep learning, and AI systems using TensorFlow, PyTorch, and Keras. Specialized in designing and training models for computer vision, NLP, and predictive analytics. Experienced in model optimization, deployment, and MLOps practices to bring AI solutions to production at scale.</>,
        images: [],
      },
      {
        title: "Real-Time Data Processing",
        description: <>Expert in building real-time streaming systems using Apache Kafka and Apache Flink for high-throughput data processing. Experienced in designing configurable pipeline frameworks optimized for both stream and batch processing, enabling real-time ML inference pipelines.</>,
        images: [],
      },
      {
        title: "Cloud & Container Orchestration",
        description: <>Proficient in Kubernetes for deploying and managing microservices and ML models at scale. Extensive experience with AWS services including SageMaker, Kinesis, EMR, S3, EC2, ECS, DynamoDB, and infrastructure automation using AWS CDK for both data engineering and ML workloads.</>,
        images: [],
      },
      {
        title: "Big Data & ETL Pipelines",
        description: <>Designed and optimized data processing pipelines using Apache PySpark, Airflow, Snowflake, and AWS EMR to handle petabyte-scale data. Experience with distributed computing, feature engineering, and building data infrastructure for ML model training and inference.</>,
        images: [],
      },
      {
        title: "Backend Development & APIs",
        description: <>Proficient in Java and Python for building RESTful APIs, microservices with OpenAPI specifications, and scalable backend systems. Skilled in developing ML model serving infrastructure, authentication, security, and real-time data processing capabilities.</>,
        images: [],
      },
      {
        title: "Database & Storage Systems",
        description: <>Extensive experience with MySQL, PostgreSQL, Snowflake, and AWS S3 for data warehousing, efficient querying, and scalable storage solutions. Skilled in database design, optimization, and building data lakes for ML feature stores and model training.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech and life",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/Virginia_tech_1.jpg",
      alt: "image",
      orientation: "horizontal", // vertical | horizontal
    },
    {
      src: "/images/gallery/UTA-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/UTA-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/grad-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/grad-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/TA-of-the-month.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    ],
};

const contact = {
  label: "Contact",
  title: "Get in Touch",
  description: `Connect with ${person.name} - Let's discuss opportunities or just say hello!`,
  mission: {
    display: true,
    title: "My Mission",
    description: "I am part of a movement to guide the world towards enlightenment through technology. My constant effort is to find innovative ways to help people understand and solve complex problems, contributing to collective wisdom and the betterment of humanity. If you share this vision or have ideas on how technology can create a more peaceful and enlightened world, I'd love to connect.",
  },
  messageForm: {
    title: "Send a Message",
    description: "Have a question or want to collaborate? Send me a message and I'll get back to you soon.",
  },
  meetingScheduler: {
    title: "Schedule a Meeting",
    description: "Book a time to discuss projects, opportunities, or just have a chat.",
    calendarLink: "https://calendly.com/akshaysabale07169",
  },
  contactInfo: {
    email: "akshaysabale07169@gmail.com",
    location: "Brighton, Massachusetts, USA",
    availability: "Available for freelance projects and full-time opportunities",
  },
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
