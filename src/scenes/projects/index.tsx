import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";

//PROJECT POKEMON PRINT/LOGO IMPORT
import ProjectPokemonImg from "@/assets/projects/project_screens/siteprint001.jpg";
import ProjectPokemonLogo from "@/assets/projects/logos/PokeHouseLogo.png";


//Importing the stack icons. 
import HTML5IconColor from "@/assets/icons/color/html5.png";
import CSSColor from "@/assets/icons/color/css3.png";
import JSColor from "@/assets/icons/color/javascript.png";
//import ReactColor from "@/assets/icons/color/react.png";
//import TSColor from "@/assets/icons/color/Typescript.png";
//import TailwindColor from "@/assets/icons/color/tailwindcss.png";
//import AxiosColor from "@/assets/icons/color/axios.png";
//import NextColor from "@/assets/icons/color/nextjs.png";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {

//  const [isOpen, setIsOpen] = useState(false);

// Função para alternar o estado da div ao clicar no botão
// const toggleOpen = () => {
//   setIsOpen(!isOpen);
//  };

    
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

         
          <div className=" h-full w-full  flex flex-row justify-items-center z-10 pt-4">

            {/* project card background */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-4 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center">
                  <img src={ProjectPokemonLogo} alt="PokéHouse" title="PokéHouse" className=" w-2/4	" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={ProjectPokemonImg} alt="PokéHouse Demo" title="PokéHouse Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] opacity-80" 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg">
                  <p className="text-center m-1 text-text-color-blue text-15px p-2">
                  PokéHouse project was developed to query an API and display comprehensive information about all Pokémon on a website. Clicking on a Pokémon opens an overscreen displaying its name and details.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="flex justify-center items-center">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min">
                    {/* HTML5 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={HTML5IconColor} alt="HTML5 Icon" />
                    </div>
                    {/* CSS3 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={CSSColor} alt="CSS3 Icon" />
                    </div>
                    {/* JAVASCRIPT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={JSColor} alt="JavaScript Icon" />
                    </div>
                  </div>
                </div>
                {/* extern links (github and demo) */}
                <div className="flex justify-center items-center gap-4">
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project github code link */}
                    <div className="flex justify-center items-center">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                      <p className="text-text-color-blue">Demo</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <motion.div className="w-7 h-7 object-contain content-demonograytwo hover:content-democolor pr-2"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          />
                        </a>
                        <p>Code</p>
                      </div>
                  </div>

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