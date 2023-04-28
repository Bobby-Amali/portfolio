import React from 'react';
import styles from "../styles"

const SkillCard = ({content}) => (
  <div>
    <span class="text-cyan-300 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </span>{content}
  </div>
);

const About = () => (
  <section id="about" class="text-white font-poppins">    
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 className={styles.heading2}>About Me</h1>
      <p class="text-white leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">
      I am a full-stack developer with a keen eye for creating user-friendly and responsive web and mobile applications.
      <br/><br/>
      I am passionate about delivering innovative solutions that are both functional and beautiful. My expertise in React, React Native, and 
      Amazon Web Services enables me to create high-quality applications that are optimized for performance and scalability.
      <br/><br/>
      Thank you for taking the time to learn about me and my skills as a developer, If you have any questions or would like to discuss a potential project, please don't hesitate to get in touch. I am excited to hear from you!
      </p>
    </div>
    <h1 className={styles.heading2}>My skills</h1>
    <div class="flex flex-wrap ">
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <div class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
          <SkillCard content={"HTML"}/>
          <SkillCard content={"CSS"}/>
          <SkillCard content={"SASS"}/>
          <SkillCard content={"Tailwind CSS"}/>
        </div>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <div class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
          <SkillCard content={"Javascript"}/>
          <SkillCard content={"React"}/>
          <SkillCard content={"React Native"}/>
          <SkillCard content={"Amazon Web Services (AWS)"}/>
        </div>
      </div>
      <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
        <div class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
          <SkillCard content={"Node.js"}/>
          <SkillCard content={"GraphQL"}/>
          <SkillCard content={"Serverless Computing"}/>
          <SkillCard content={"Git & Github"}/>
        </div>
      </div>
    </div>
  </div>
  </section>
  )

export default About