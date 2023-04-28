import styles from "../styles";
import { home } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins text-gradient font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80.8px] leading-[60px]">
            Hi, I'm Bobby Amali
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[40px] text-[28px] text-white ss:leading-70.8px] leading-[45px] w-full">
          I build really cool web and mobile apps
        </h1>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={home} alt="Coding Hero Image" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

      </div>
    </section>
  );
};

export default Hero;