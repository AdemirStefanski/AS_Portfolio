import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectImg from "@/assets/projects/project_screens/siteprint001.jpg";
import ProjectImg2 from "@/assets/projects/project_screens/projectPokemonMonitor.png";

//Importing the stack icons. 
import HTML5IconColor from "@/assets/icons/color/html5.png";
//import CSSColor from "@/assets/icons/color/css3.png";
//import JSColor from "@/assets/icons/color/javascript.png";
import ReactColor from "@/assets/icons/color/react.png";
import TSColor from "@/assets/icons/color/Typescript.png";
//import TailwindColor from "@/assets/icons/color/tailwindcss.png";
//import AxiosColor from "@/assets/icons/color/axios.png";
//import NextColor from "@/assets/icons/color/nextjs.png";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {

  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado da div ao clicar no botão
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };


  return (
    <section id="projects" 
    className="mx-auto min-h-full py-10  flex p-4  md:mt-10 bg-primary-50"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className=" w-full"
      >
        <div className="mdd:my-5 mdd:w-auto flex flex-col justify-center">
          <motion.div
            className="flex flex-row justify-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.1, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-30},
              visible: {opacity:1, x:0},
            }}
          >
            <TextTitles>Projects</TextTitles>
          </motion.div>

         
          <div className=" h-auto  flex flex-row justify-items-center z-10 pt-4">
            <div className="">
              <div className="rounded-lg mb-2 bg-card-background88 h-350 w-363 2-auto pt-4 bg-contain bg-no-repeat m-2 flex flex-col justify-between">
                <div className="flex flex-row justify-center items-center">
                  <img src={ProjectImg} alt="" className="rounded-lg w-3/5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] opacity-80" />
                </div>
                <div className="flex flex-row justify-center items-center py-2 pt-4  ">
                  <div className="w-3/5 bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg ">
                    <p className="text-center m-1 font-semibold text-sm">
                    Clone do YouTube: recriação fiel da plataforma de vídeos com foco na experiência do usuário.
                    </p>
                  </div>
                </div>
                <div>
                <motion.div className="flex gap-4 pb-4 justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay: 0.1, duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x:-30},
                    visible: {opacity:1, x:0},
                  }}
                >
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <motion.div className="w-8 h-8 object-contain content-livenocolor hover:content-livecolor"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                    />
                  </a>

                  <a href="" target="_blank" rel="noopener noreferrer">
                    <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                    />
                  </a>

                  <div>
                    <motion.div className="w-8 h-8 object-contain content-stacknocolor hover:content-stackcolor cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                      onClick={toggleOpen}
                    />
                      <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute bg-white w-auto p-4 mt-2 rounded-lg shadow-md ${isOpen ? 'block' : 'hidden'}`}
                      >
                        <div className="flex justify-start space-x-4 ">
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={HTML5IconColor} alt="" />
                          </motion.div>
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={TSColor} alt="" />
                          </motion.div>
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={ReactColor} alt="" />
                          </motion.div>
                        </div>
                      </motion.div>
                    
                  </div>
                  

                </motion.div>
                </div>
              </div>

              

            </div>

            <div className="">
              <div className="rounded-lg mb-2 bg-card-background88 h-350 w-363 2-auto pt-4 bg-contain bg-no-repeat m-2 flex flex-col justify-between">
                <div className="flex flex-row justify-center items-center">
                  <img src={ProjectImg2} alt="" className="rounded-lg w-3/5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="flex flex-row justify-center items-center py-2 pt-4  ">
                  <div className="w-3/5 bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg ">
                    <p className="text-center m-1 font-semibold text-sm">
                    Clone do YouTube: recriação fiel da plataforma de vídeos com foco na experiência do usuário.
                    </p>
                  </div>
                </div>
                <div>
                <motion.div className="flex gap-4 pb-4 justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay: 0.1, duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x:-30},
                    visible: {opacity:1, x:0},
                  }}
                >
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <motion.div className="w-8 h-8 object-contain content-livenocolor hover:content-livecolor"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                    />
                  </a>

                  <a href="" target="_blank" rel="noopener noreferrer">
                    <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                    />
                  </a>

                  <div>
                    <motion.div className="w-8 h-8 object-contain content-stacknocolor hover:content-stackcolor cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      //whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                      //whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                      onClick={toggleOpen}
                    />
                      <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute bg-white w-auto p-4 mt-2 rounded-lg shadow-md ${isOpen ? 'block' : 'hidden'}`}
                      >
                        <div className="flex justify-start space-x-4 ">
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={HTML5IconColor} alt="" />
                          </motion.div>
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={TSColor} alt="" />
                          </motion.div>
                          <motion.div 
                            animate={{
                              scale: [1, 1.2, 1.2, 1, 1],
                              rotate: [0, 0, 180, 180, 0],
                              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              times: [0, 0.2, 0.5, 0.8, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="w-6 h-6 flex justify-center items-center"
                          >
                            <img src={ReactColor} alt="" />
                          </motion.div>
                        </div>
                      </motion.div>
                    
                  </div>
                  

                </motion.div>
                </div>
              </div>

              

            </div>

          </div>
          
        </div>  
      </motion.div>

      
    </section>
  )
}

export default Projects