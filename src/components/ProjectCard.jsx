const ProjectCard = ({ content, title, img, link }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <p className="font-poppins font-semibold text-[24px] text-dimWhite">
      {title}
    </p>
    <p className="font-poppins font-normal text-[16px] leading-[22.4px] text-white mt-4 mb-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={title} className="w-[480px] h-[160px]" />
    </div>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}>
      <a href={link} target="_blank">Visit site</a>
    </button>
  </div>
);


export default ProjectCard;