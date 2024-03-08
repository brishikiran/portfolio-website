type Experience = {
  company: string;
  logo: string; // path to the company logo
  jobRole: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  responsibilities: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Stevens Institute of Technology",
    logo: "data:image/png;base64,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",
    jobRole: "Graduate Teaching Assistant",
    employmentType: "Part-time",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    duration: "4 mos",
    location: "Hoboken, New Jersey, United States",
    responsibilities: [
      "Collaborated on React development for enhanced user experience, creating dynamic web pages for courses and faculty information. Played a key role in formulating effective communication strategies, crafting targeted emails, and boosting engagement for enrollment targets. Utilized a diverse skill set, including HTML, CSS, Contentful, Microsoft Excel, SQL, and Trello, ensuring successful project execution."
      // Add more responsibilities as needed
    ],
    skills: ["Python", "R", "Data Analysis", "Machine Learning"],
  },
  {
    company: "Option Matrix InfoTech",
    logo: "data:image/jpeg;base64,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",
    jobRole: "Software Engineer",
    employmentType: "Full-time",
    startDate: "Aug 2020",
    endDate: "Oct 2022",
    duration: "2 yrs 3 mos",
    location: "Hyderabad, Telangana, India",
    responsibilities: [
      "Implemented and enhanced diverse facets of a web application's architecture, contributing to elevated user engagement and satisfaction. My responsibilities ranged from React development for intuitive interfaces, seamless integration with external systems using RESTful APIs, to optimizing SQL Server database queries. Leveraging technologies like Docker, Kubernetes, Angular 12, Kendo UI, and various CI/CD tools, I ensured efficient deployment, scalability, and code quality. The result: a 15% improvement in application responsiveness and significant enhancements across user experience metrics."
      // Add more responsibilities as needed
    ],
    skills: ["React.js", "Angular", "ASP.NET", "SQL Server", "Node.js", "Azure", "AWS", "Docker/Kubernetes"],
  },
  {
    company: "heu.ai",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7w74i_L__UMeYYT1ZOah59eVHc6tiATq4qacIIyIeliaUlMQcENInBkUlekNpnVtEo-A&usqp=CAU",
    jobRole: "Full Stack Developer",
    employmentType: "Freelance",
    startDate: "Apr 2021",
    endDate: "Aug 2021",
    duration: "5 mos",
    location: "Hyderabad, Telangana, India · Remote",
    responsibilities: [
      "Developed and implemented a Python and Puppeteer-based Zoom meeting chatbot, slashing meeting preparation time by 50% and elevating user satisfaction. Integrated Rev.ai's ASR API for real-time speech-to-text transcription, enhancing accessibility and fostering a seamless meeting experience. Collaborated with cross-functional teams to gather technical requirements and successfully deployed the chatbot into the Zoom environment. The result: an enriched virtual meeting experience, promoting smoother communication and effective collaboration among participants."
      // Add more responsibilities as needed
    ],
    skills: ["Python", "Django", "Puppeteer", "MongoDB", "DialogFLow", "TensorFLow"],
  },
  {
    company: "Electronics Corporation of India Limited (ECIL), Department of Atomic Energy, Government of India",
    logo: "data:image/jpeg;base64,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", // Replace with the actual path to ECIL's logo
    jobRole: "Mobile Application Developer",
    employmentType: "Internship",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    duration: "3 mos",
    location: "Hyderabad, Telangana, India · On-site",
    responsibilities: [
      "Led the development of a dynamic Data Mart Management Software for Android, enabling seamless data organization and analysis on mobile devices. Pioneered an intuitive interface, seamlessly integrating data for advanced analytics and real-time reporting. Utilized cutting-edge technologies to ensure optimal performance and security. This project underscores my commitment to leveraging mobile platforms for efficient data management, ultimately contributing to enhanced business insight.",
      // Add more responsibilities as needed
    ],
    skills: ["Java", "SpringBoot", "Git"],
  },
];
