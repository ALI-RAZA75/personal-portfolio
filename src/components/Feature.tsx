import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaWordpress, FaCode } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
            title="WordPress Website"
            des="I create customized WordPress websites that are visually appealing, user-friendly, and optimized for performance and SEO."
            icon={<FaWordpress />}
          />
          <Card
            title="Front-End Development"
            des="I build responsive and visually appealing front-end interfaces, using the latest technologies to ensure a seamless user experience."
            icon={<FaCode />}
          />
          <Card
            title="Business Stratagy"
            des="I craft strategic plans that drive business growth and enhance market presence, aligning with your unique goals and objectives."
            icon={null}
          />
          <Card
            title="App Development"
            des="I specialize in developing dynamic, user-friendly applications tailored to your needs, ensuring seamless performance and scalability."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="Enhance your online visibility with my SEO optimization services, ensuring your site ranks higher and attracts the right audience."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Development"
            des="I develop intuitive and high-performing mobile applications, delivering seamless user experiences across all devices."
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="I design intuitive and engaging user experiences, focusing on usability and aesthetics to enhance user satisfaction and interaction."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="I offer reliable and secure website hosting services, ensuring your site is always available and performs optimally."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
