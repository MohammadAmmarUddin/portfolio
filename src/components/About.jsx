import { BiLogoNetlify, BiLogoTailwindCss } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBootstrap,
  FaChrome,
  FaDocker,
  FaGithub,
  FaNode,
  FaNodeJs,
  FaReact,
  FaRobot,
} from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNpm,
} from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import {

  SiDbeaver,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPrisma,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandVscode } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { DiLinux } from "react-icons/di";
AOS.init();
const About = () => {
  return (
    <div name="about" className="pt-32 mb-10">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
        About Me
      </h2>
      <div className="md:flex justify-between ">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:w-1/2 text-center md:text-left md:mr-10 p-5 xl:p-0"
        >
          <h2 className="lg:text-3xl text-2xl pb-1 font-semibold text-white">
            Mohammad Ammar Uddin
          </h2>
          <h4 className="lg:text-xl font-semi text-white">MERN DEVELOPER</h4>
          <span>
            <hr className="pb-5" />
          </span>
          <p className="text-white md:text-left text-[15px] md:text-lg">
            I'm a Junior Software Engineer with 3+ months of hands-on experience
            in full-stack development. I'm proficient in C/C++, JavaScript,
            TypeScript, Python, and a variety of modern web technologies. I’ve
            worked in agile environments, contributing to debugging, building
            new features, and optimizing APIs to enhance performance and
            scalability. With a solid foundation in competitive
            programming—having solved over 300 problems—I’ve sharpened my
            analytical thinking and problem-solving skills. I'm a fast learner
            with a growth mindset, always eager to take on new challenges and
            continuously improve. Passionate about building scalable,
            high-performance systems, I’m enthusiastic about contributing to
            impactful projects and collaborating with driven, like-minded
            individuals. Let’s connect if you’d like to collaborate or discuss
            exciting opportunities!
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="md:w-1/2 pt-10 md:pt-0 md:text-left text-center lg:p-5 xl:p-0 md:p-0"
        >
          <h2 className="lg:text-3xl text-2xl  font-semibold text-white pb-8">
            Education
          </h2>

          <span>
            <hr className="pb-5" />
          </span>
          <p className="text-white md:text-left text-[15px] md:text-lg">
            Graduated with a B.Sc. Honours in Computer Science & Engineering
            <br />
            International Islamic University Chittagong
          </p>
          <p className="flex justify-center md:justify-end text-white italic text-[15px] md:text-lg">2020-2025</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {" "}
        <h2 className="text-center text-4xl  font-semibold text-sky-500 ">Tech Stack</h2>
      </div>
      <div className="flex justify-center items-center ">
        <Tabs
          className="md:w-1/2 p-6 rounded-2xl shadow-lg"
          selectedTabClassName="border-b-2 border-blue-500 text-blue-600"
        >
          <TabList className="flex justify-center space-x-4 mb-4 border-b border-gray-200">
            <Tab className="px-4 py-2 w-full text-sm text-center font-medium  hover:text-blue-600 focus:outline-none text-whtie">
              FrontEnd
            </Tab>
            <Tab className="px-4 py-2 w-full text-sm text-center font-medium  hover:text-blue-600 focus:outline-none">
              BackEnd
            </Tab>
            <Tab className="px-4 py-2 w-full text-sm text-center font-medium  hover:text-blue-600 focus:outline-none">
              Others
            </Tab>
          </TabList>

          <TabPanel className={"flex flex-wrap gap-x-5"}>
            <div data-aos="flip-left">
              <IoLogoHtml5 className="text-[#00eeef] animate-pulse" size={50} />
              <span className="pl-1 font-semibold">HTML</span>
            </div>
            <div className="">
              {" "}
              <BiLogoTailwindCss
                className="text-[#00eeef] animate-pulse"
                size={50}
              />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div>
              {" "}
              <IoLogoCss3 className="text-[#00eeef] animate-pulse" size={50} />
              <span className="pl-1 font-semibold ">CSS3</span>
            </div>
            <div>
              {" "}
              <TbBrandJavascript
                className="text-[#00eeef] animate-pulse"
                size={50}
              />
              <span className="font-semibold">JavaScript</span>
            </div>
            <div>
              {" "}
              <IoLogoJavascript
                className="text-[#00eeef] animate-pulse"
                size={50}
              />
              <span className="font-semibold">ES6</span>
            </div>
            <div>
              {" "}
              <FaReact className="text-[#00eeef] animate-pulse" size={50} />
              <span className=" font-semibold">ReactJS</span>
            </div>
            <div>
              {" "}
              <RiNextjsFill
                className="text-[#00eeef] animate-pulse"
                size={50}
              />
              <span className=" font-semibold">NextJS</span>
            </div>
          </TabPanel>
          <TabPanel className={"flex flex-wrap gap-x-5"}>
            <div>
              {" "}
              <SiMysql className="text-[#00eeef] animate-pulse" size={50} />
              <span className=" font-semibold">Mysql</span>
            </div>
            <div>
              {" "}
              <IoLogoFirebase
                className="text-[#00eeef] animate-pulse"
                size={50}
              />
              <span className=" font-semibold">Firebase</span>
            </div>
            <div>
              {" "}
              <SiPrisma className="text-[#00eeef] animate-pulse" size={50} />
              <span className=" font-semibold">Prisma</span>
            </div>
            <div>
              {" "}
              <SiMongodb className="text-[#00eeef] animate-pulse" size={50} />
              <span className=" font-semibold">MongoDB</span>
            </div>
            <div>
              {" "}
              <FaNode className="text-[#00eeef] animate-pulse" size={50} />
              <span className=" font-semibold ">NodeJS</span>
            </div>
          </TabPanel>
          <TabPanel className={"flex gap-x-5 flex-wrap"}>
            <div>
              {" "}
              <DiLinux className="animate-pulse text-[#00eeef]" size={50} />
              <span className=" font-semibold ">Linux</span>
            </div>
            <div>
              {" "}
              <SiMariadb size={40} className="animate-pulse text-[#00eeef] " />
              <span>MariaDB</span>
            </div>
            <div>
              {" "}
              <SiDbeaver size={40} className="animate-pulse text-[#00eeef] " />
              <span>DBeaver</span>
            </div>
            <div>
              {" "}
              <IoLogoVercel
                size={40}
                className="animate-pulse text-[#00eeef] "
              />
              <span>Vercel</span>
            </div>
            <div>
              {" "}
              <FaDocker size={40} className="animate-pulse text-[#00eeef] " />
              <span>Docker</span>
            </div>
            <div>
              {" "}
              <TbBrandVscode
                size={40}
                className="animate-pulse text-[#00eeef] "
              />
              <span>VS Code</span>
            </div>
            <div>
              {" "}
              <FaChrome size={40} className="animate-pulse text-[#00eeef] " />
              <span>Chrome</span>
            </div>
            <div>
              {" "}
              <FaGithub size={40} className="animate-pulse text-[#00eeef] " />
              <span>Github</span>
            </div>
            <div>
              {" "}
              <FiFigma size={40} className="animate-pulse text-[#00eeef] " />
              <span>Figma</span>
            </div>
            <div>
              {" "}
              <IoLogoNpm size={40} className="animate-pulse text-[#00eeef] " />
              <span>NPM</span>
            </div>
            <div>
              {" "}
              <SiPostman size={40} className="animate-pulse text-[#00eeef] " />
              <span>Postman</span>
            </div>
            <div>
              {" "}
              <FaRobot size={40} className="animate-pulse text-[#00eeef] " />
              <span>Ai</span>
            </div>

            <div>
              {" "}
              <BiLogoNetlify
                size={40}
                className="animate-pulse text-[#00eeef] "
              />
              <span>Netlify</span>
            </div>
            <div>
              {" "}
              <DiLinux size={40} className="animate-pulse text-[#00eeef] " />
              <span>Linux</span>
            </div>
          </TabPanel>
        </Tabs>
      </div>

   
    </div>
  );
};

export default About;
