
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";

import Phone from "@/assets/icons/color/phone-cal-styled.png";

const Footer = ( ) => {

  const openMail = () => {
    window.open('mailto:ademirstefanski@gmail.com?subject=We%20Want%20to%20Hire%20You&body=Hello%2C%20I%20would%20like%20to%20discuss%20further%20details%20with%20you...', '_blank');
  };
  
  return (
    <footer className=" bg-primary-50 md:py-8 py-4 font-semibold ">
      <div className="xsl:justify-content mx-auto w-5/6 md:gap-16 md:flex md:flex-row flex flex-col justify-center">
        {/* Logo, phrase and copyright */}
        <div className="mt-4 basis-1/2 md:mt-0 ">
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="" className="h-8  object-contain" />
          </div>
          <p className="my-5 text-center md:text-start">
          I hope you enjoyed exploring my projects. If you're interested in discussing opportunities or collaborating, feel free to reach out. I look forward to connecting and contributing!
          </p>
          <p className="text-center md:text-start">Copyright © 2024. All rights are reserved</p>
        </div>
        {/* linkedin and github external links */}
        <div className="xsl:mt-4 basis-1/4 md:mt-0 flex flex-col xls:justify-start text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-4 md:hidden xsl:mb-4"/>
          <h4 className="font-bold w-auto text-center">Links</h4>
          <motion.div className="flex gap-4 xls:justify-start w-auto pt-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.1, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:-30},
                visible: {opacity:1, x:0},
              }}
          >
              {/* linkedin links */}
              <a href="https://www.linkedin.com/in/ademir-stefanski/" target="_blank" rel="noopener noreferrer">
                <motion.div className="w-8 h-8 object-contain content-linkedinnocolor hover:content-linkedincolor"
                  whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                  whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                />
              </a>
              {/* github links */}
              <a href="https://github.com/AdemirStefanski" target="_blank" rel="noopener noreferrer">
                <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor"
                  whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                  whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                />
              </a>  
          </motion.div>
        </div>
        {/* Contact me links */}
        <div className="xsl:mt-4 basis-1/4 md:mt-0 text-center md:text-start">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-4 md:hidden"/>
          <h4 className="font-bold">Contact Me</h4>
          <div className="flex justify-center items-center md:justify-start">
            <img src={Phone} alt="" className=" h-6 pr-1 " />
            <p className="my-5">+55 11 981412-507 </p>
          </div>
          <p>To get in touch, please send me an <a href="#" onClick={(e) => { e.preventDefault(); openMail(); }} className="font-extrabold text-my-colors-green-10">e-mail</a>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer