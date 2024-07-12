// import { useState, useEffect } from 'react';
// import TextTitles from "@/shared/TextTitles";
// import { SelectedPage } from "@/shared/types";
// import { motion } from "framer-motion";

// import AboutImage from "@/assets/aboutImage.jpg";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// }

// function About({ setSelectedPage }: Props) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 600);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   }

//   const textContent = (
//     <>
//       <p className="text-base leading-6 pb-4">I am Ademir Stefanski, a front-end developer with a diverse background. I began my career as a data processing technician, gaining a solid foundation in programming logic, Oracle database queries, and development in C and C++, along with basic knowledge in Cobol.</p>
//       <p className="text-base leading-6 pb-4">Beyond my initial technical experiences, I transitioned to mechanical engineering, a field that allowed me to develop my analytical and problem-solving abilities deeply. However, my passion for software development remained strong.</p>
//       <p className="text-base leading-6 pb-4">Parallel to my technical career, I have also dedicated many years to photography, beginning as early as a ten-year-old. In time, I became one of the top professionals in image restoration. My work spanned creating designs for companies ranging from small businesses to large enterprises. I photographed weddings, graduations, baptisms, social events, models, and pets, and even ventured into cave photography — a challenging and thrilling endeavor that I thoroughly enjoyed.</p>
//       <p className="text-base leading-6 pb-4">Furthermore, sports have played a significant role in my life. I played rugby for many years and practiced judo, experiences that shaped my discipline and dedication. Rugby, in particular, taught me the importance of teamwork and effective collaboration, skills I carry with me in all my professional tasks.</p>
//     </>
//   );

//   return (
//     <section
//       id="about"
//       className="mx-auto min-h-full md:w-10/12 pt-10 pb-10 flex px-4"
//     >
//       <motion.div
//         onViewportEnter={() => setSelectedPage(SelectedPage.About)}
//         className="flex items-center justify-items-center"
//       >
//         {/* Header */}
//         <div className="mdd:my-5 mdd:w-auto flex flex-col justify-center">
//           <motion.div
//             className="flex flex-row justify-center text-center pb-4 md:mb-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.2 }}
//             variants={{
//               hidden: { opacity: 0, x: -10 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <TextTitles>About Me</TextTitles>
//           </motion.div>

//           <div className="grid grid-cols-1 md:flex md:gap-x-10 md:gap-y-10 justify-items-center md:w-full sm:w-3/5 w-4/5 self-center">
//             <motion.div
//               className="overflow-hidden md:min-w-80 max-w-80 mb-4 md:mb-0 drop-shadow-lg"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: 0.1, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, x: -30 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//             >
//               <img src={AboutImage} alt="" className="w-full h-full object-cover rounded-lg" />
//             </motion.div>

//             <motion.div
//               className="rounded-md border-2 border-my-colors-menu-hover flex flex-col items-center drop-shadow-lg mt-8 md:mt-0"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: 0.1, duration: 0.5 }}
//               variants={{
//                 hidden: { opacity: 0, x: 30 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//             >
//               <div className="p-8 flex flex-col relative">
//                 <div className={`text-base leading-6 ${isSmallScreen && !isExpanded ? 'line-clamp-3' : ''}`} style={{ maskImage: isSmallScreen && !isExpanded ? 'linear-gradient(180deg, black 60%, transparent)' : 'none' }}>
//                   {textContent}
//                 </div>
//                 {isSmallScreen && !isExpanded && (
//                   <button
//                     className="mt-2 text-blue-500 text-sm absolute bottom-2 right-2"
//                     style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
//                     onClick={handleToggle}
//                   >
//                     Read more
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default About;


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
      <p className="text-base leading-6 pb-4">I am Ademir Stefanski, a front-end developer with a diverse background. I began my career as a data processing technician, gaining a solid foundation in programming logic, Oracle database queries, and development in C and C++, along with basic knowledge in Cobol.</p>
      <p className="text-base leading-6 pb-4">Beyond my initial technical experiences, I transitioned to mechanical engineering, a field that allowed me to develop my analytical and problem-solving abilities deeply. However, my passion for software development remained strong.</p>
      <p className="text-base leading-6 pb-4">Parallel to my technical career, I have also dedicated many years to photography, beginning as early as a ten-year-old. In time, I became one of the top professionals in image restoration. My work spanned creating designs for companies ranging from small businesses to large enterprises. I photographed weddings, graduations, baptisms, social events, models, and pets, and even ventured into cave photography — a challenging and thrilling endeavor that I thoroughly enjoyed.</p>
      <p className="text-base leading-6 pb-4">Furthermore, sports have played a significant role in my life. I played rugby for many years and practiced judo, experiences that shaped my discipline and dedication. Rugby, in particular, taught me the importance of teamwork and effective collaboration, skills I carry with me in all my professional tasks.</p>
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
