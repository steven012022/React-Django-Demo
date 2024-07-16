import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Ching-Hung "Steven" Lin</h1>
      <p>Providence, Rhode Island, United States 02908</p>
      <p>
        Email:{" "}
        <a href="mailto:steven012022@gmail.com">steven012022@gmail.com</a>
      </p>
      <p>Phone: 401-239-8508</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/chinghunglin"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/chinghunglin
        </a>
      </p>

      <h2>Summary</h2>
      <p>
        Self-motivated, results-oriented Software Engineer willing to accept new
        assignments and complete them on time. Able to work under pressure even
        in different time zones. Experienced in AI using Watson to build
        chatbots. No visa sponsorship required.
      </p>

      <h2>Relevant Skills</h2>
      <ul>
        <li>Docker/Kubernetes</li>
        <li>Familiar with Git and Linux shell</li>
        <li>Public Cloud - Azure, AWS, IBM Cloud</li>
        <li>TypeScript/JavaScript/Java</li>
        <li>ReactJS/EJS/React Native</li>
        <li>Spring Boot, Node.js, Node.js Express Framework</li>
        <li>Deploy AI models with IBM Watson Assistant</li>
      </ul>

      <div className="work-experience">
        <h2>Work Experience</h2>

        <div className="job">
          <h3>
            Software Engineer, Taiwan Life, CTBC Financial Holding Co., Ltd
          </h3>
          <p>March 2022 - April 2023</p>
          <p>
            <a
              href="https://www.taiwanlife.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (CTBC Taiwan Life AI Chatbot)
            </a>
          </p>
          <ul>
            <li>
              Established the team's development process and adopted Git
              trunk-based development
            </li>
            <li>
              Designed customized AI chatbot systems for CTBC Taiwan Life in EJS
              and Express Node.js
            </li>
            <li>
              Designed Natural Language Recognition using IBM Watson Assistant
            </li>
            <li>Guided project development, deployment, and maintenance</li>
            <li>
              Assisted the company in cooperating with IBM to establish relevant
              project landing
            </li>
            <li>Deployed and developed projects using the Docker Swarm tool</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Developer, HotSauce Technologies</h3>
          <p>June 2021 - January 2022</p>
          <p>
            <a
              href="https://www.hotsaucepos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Hotsauce Home Page)
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=TWyEZ05MEAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Hotsauce - POS System - Video)
            </a>
          </p>
          <ul>
            <li>
              Development and maintenance of backend and frontend services,
              websites, and POS terminal application. Role encompassed every
              phase of software development life cycle
            </li>
            <li>
              Developed and managed Spring framework and Java backend services.
              Utilized Spring framework modules/features including Spring MVC,
              Spring Security and Spring Boot. Integrated with MS SQL Server or
              MongoDB for different projects
            </li>
            <li>
              Implemented and maintained online ordering and CRM websites
              written in ReactJS and Spring Boot
            </li>
            <li>
              Implemented and maintained mobile POS solution in React Native
            </li>
            <li>
              Assisted design and implementation of cross-functional
              communication system in ReactJS and Spring Boot
            </li>
            <li>
              Used Docker skills to deploy and develop projects on the AWS cloud
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Engineer, Pershing Technology Services Corporation</h3>
          <p>July 2020 - June 2021</p>
          <p>
            <a
              href="https://www.pershing.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Pershing Technology Services Corporation AI Chatbot)
            </a>
          </p>
          <p>
            <a
              href="https://www.toyota.com.tw/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Toyota Taiwan AI Chatbot)
            </a>
          </p>
          <p>
            <a
              href="https://www2.isu.edu.tw/en1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (I-SHOU University AI Chatbot)
            </a>
          </p>
          <ul>
            <li>
              Designed customized AI chatbot systems for different companies in
              ReactJS and Express Node.js
            </li>
            <li>
              Designed Natural Language Recognition using IBM Watson Assistant
              and IBM Watson Discovery
            </li>
            <li>
              Customized connection to internal and external systems of the
              enterprise
            </li>
            <li>Acted as a project technology transfer mentor</li>
            <li>Guided project development, deployment, and maintenance</li>
            <li>Deployed and developed projects using the Docker Swarm tool</li>
          </ul>
        </div>
      </div>

      <h2>Education</h2>
      <p>China University of Technology - Taipei, Taiwan</p>
      <p>Bachelor of Science Information Management</p>

      <h2>Licenses and Certifications</h2>
      <ul>
        <li>The Complete Node.js Developer Course (3rd Edition) - Udemy</li>
        <li>
          AI/Big Data Analyst Training Course Completion Certificate - Institute
          for Info Industry
        </li>
        <li>MPP (Microsoft Professional Program) – Microsoft</li>
      </ul>
    </div>
  );
};

export default Home;
