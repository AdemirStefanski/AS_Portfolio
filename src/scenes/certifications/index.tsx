import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import CertificateIcon from "@/assets/icons/color/certificate.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Certifications = ({ setSelectedPage }: Props) => {
  return (
    <section id="certifications" className="w-full py-40 bg-white">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity:1, x:0},
          }}
        >
          <div className="md:w-3/5">
            <TextTitles>Certifications</TextTitles>
          </div>
          <p className="py-5">
            Explore my certifications that demonstrate my dedication and proficiency in various essential front-end development technologies and tools.
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div className="flex flex-wrap justify-center items-center gap-1 p-4 h-screen">
        <motion.div className="flex items-center justify-center">
          <div className="w-8 min-w-8">
            <motion.img src={CertificateIcon} alt="" className="w-8 h-8 object-contain min-w-[22px]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          <div>
            <p className="font-semibold pl-2">
            Full-Stack Software Development and Software Architecture
            </p>
          </div>
        </motion.div>

      </motion.div>

    </section>
  )
}

export default Certifications