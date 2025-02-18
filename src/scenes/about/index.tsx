import { useState, useEffect } from 'react';
import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import AboutImage from "@/assets/aboutImage.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function About({ setSelectedPage }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  const textContent = (
    <>
      <p className="text-base leading-6 pb-4">I am Ademir Stefanski, a full-stack developer with a strong foundation in React, TypeScript, Node.js, and SQL, creating scalable and high-performance applications with a focus on user experience. My journey in technology began in data processing, where I built a solid understanding of programming logic, C, C++, and Oracle databases. Later, I expanded my analytical and problem-solving skills through mechanical engineering, which gave me a structured approach to tackling complex challenges in software development.</p>
      <p className="text-base leading-6 pb-4">With experience in both front-end and back-end technologies, I work with Next.js, Tailwind CSS, and RESTful APIs, following industry best practices and agile methodologies like Scrum and Kanban. I am passionate about crafting efficient, maintainable, and user-friendly applications, always aiming for clean architecture and optimized performance.</p>
      <p className="text-base leading-6 pb-4">Beyond technology, my background in professional photography and design has sharpened my attention to detail and ability to create visually appealing and intuitive interfaces. Years of working with image restoration and branding have strengthened my understanding of UI/UX principles, which I incorporate into my development process.</p>
      <p className="text-base leading-6 pb-4">Additionally, my experience in rugby and judo has instilled in me a strong sense of discipline, teamwork, and adaptability—qualities that are essential for collaborating effectively in dynamic development environments.</p>
    </>
  );

  return (
    <section
      id="about"
      className="mx-auto min-h-full md:w-10/12 pt-10 pb-10 flex px-4"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className="flex items-center justify-items-center"
      >
        {/* Header */}
        <div className="mdd:my-5 mdd:w-auto flex flex-col justify-center">
          <motion.div
            className="flex flex-row justify-center text-center pb-4 md:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TextTitles>About Me</TextTitles>
          </motion.div>

          <div className="grid grid-cols-1 md:flex md:gap-x-10 md:gap-y-10 justify-items-center md:w-full sm:w-3/5 w-4/5 self-center">
            <motion.div
              className="overflow-hidden md:min-w-80 max-w-80 mb-4 md:mb-0 drop-shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={AboutImage} alt="" className="w-full h-full object-cover rounded-lg" />
            </motion.div>

            <motion.div
              className="rounded-md border-2 border-my-colors-menu-hover flex flex-col items-center drop-shadow-lg mt-8 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="p-8 flex flex-col relative">
                <div className={`text-base leading-6 ${isSmallScreen && !isExpanded ? 'line-clamp-5' : ''}`} style={{ maskImage: isSmallScreen && !isExpanded ? 'linear-gradient(180deg, black 75%, transparent)' : 'none' }}>
                  {textContent}
                </div>
                {isSmallScreen && !isExpanded && (
                  <button
                    className="mt-2 text-text-color-blue text-sm absolute bottom-2 right-2"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onClick={handleToggle}
                  >
                    Read more
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
