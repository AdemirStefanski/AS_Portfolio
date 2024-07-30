
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
          <p className="text-center md:text-start">© 2024 Ademir Stefanski.</p>
        </div>
        {/* linkedin and github external links */}
        <div className="xsl:mt-4 basis-1/4 md:mt-0 flex flex-col xls:justify-start text-center">
          <div className="flex flex-row justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-4 md:hidden xsl:mb-4 w-3/5"/>
          </div>
          <h4 className="font-bold w-auto text-center">Links</h4>
          <motion.div className="flex gap-4 xls:justify-start w-auto pt-4 justify-center">
              {/* linkedin links */}
              <a href="https://www.linkedin.com/in/ademir-stefanski/" target="_blank" rel="noopener noreferrer">
                <motion.div className="w-8 h-8 object-contain content-linkedinnocolor hover:content-linkedincolor"/>
              </a>
              {/* github links */}
              <a href="https://github.com/AdemirStefanski" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor"/>
              </a>
              {/* resume links */}
              <a href="https://drive.google.com/file/d/1Bq2tP5_OcawT3PWi0N14gy3X820UibT3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 object-contain content-resumenocolor hover:content-resumecolor"/>
              </a>   
          </motion.div>
        </div>
        {/* Contact me links */}
        <div className="xsl:mt-4 basis-1/4 md:mt-0 text-center md:text-start">
          <div className="flex flex-row justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-4 md:hidden w-3/5"/>  
          </div>
          <h4 className="font-bold">Contact Me</h4>
          <div className="flex justify-center items-center md:justify-start">
            <img src={Phone} alt="" className=" h-6 pr-1 " />
            <p className="my-5">+55 11 98141-2507 </p>
          </div>
          <p>To get in touch, please send me an <a href="#" onClick={(e) => { e.preventDefault(); openMail(); }} className="font-extrabold text-my-colors-green-10">e-mail</a>.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer