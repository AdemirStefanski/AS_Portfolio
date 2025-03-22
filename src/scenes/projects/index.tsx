import TextTitles from "@/shared/TextTitles";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";


//PROJECT REFORMAFÁCIL PRINT/LOGO IMPORT
import ReformaFacilImg from "@/assets/projects/project_screens/sitePrintReformaFácil.jpg";
import ReformaFacilLogo from "@/assets/projects/logos/ReformaFacilLogo.png";

//PROJECT YOUTUBE PRINT/LOGO IMPORT
import YouTubeImg from "@/assets/projects/project_screens/sitePrintYouTube.jpg";
import ProjectYouTubeLogo from "@/assets/projects/logos/YouTubeLogo.png";


//PROJECT POKEMON PRINT/LOGO IMPORT
import ProjectPokemonImg from "@/assets/projects/project_screens/sitePrintPokéHouse.jpg";
import ProjectPokemonLogo from "@/assets/projects/logos/PokeHouseLogo.png";

//PROJECT THE BATMAN PRINT/LOGO IMPORT
import ProjectTheBatmanImg from "@/assets/projects/project_screens/sitePrintBatman.jpg";
import ProjectTheBatmanLogo from "@/assets/projects/logos/TheBatmanLogo.png";

//PROJECT KAZE NO MORI PRINT/LOGO IMPORT
import KazeNoMoriImg from "@/assets/projects/project_screens/siteKazeNoMori.jpg";
import KazeNoMoriLogo from "@/assets/projects/logos/KazeNoMoriLogo.png";

//PROJECT KAZE NO GEDUI PRINT/LOGO IMPORT
import GeduiImg from "@/assets/projects/project_screens/siteGedui.jpg";
import GeduiLogo from "@/assets/projects/logos/GeduiLogo.png";

//PROJECT KAZE NO IRONSIDE PRINT/LOGO IMPORT
import IGTImg from "@/assets/projects/project_screens/siteIGT.jpg";
import IGTLogo from "@/assets/projects/logos/IGTLogo.png";




//Importing the stack icons. 
import HTML5IconColor from "@/assets/icons/color/html5.png";
import CSSColor from "@/assets/icons/color/css3.png";
import JSColor from "@/assets/icons/color/javascript.png";
import ReactColor from "@/assets/icons/color/react.png";
import ReduxColor from "@/assets/icons/color/redux.png";
import GraphSQLColor from "@/assets/icons/color/graphql.png";
import FirebaseColor from "@/assets/icons/color/firebase.png";
import TSColor from "@/assets/icons/color/Typescript.png";
import StyledComponentsColor from "@/assets/icons/color/styledcomponents.png";
import AxiosColor from "@/assets/icons/color/axios.png";
import WebpackColor from "@/assets/icons/color/webpack-original.png";
import RRDColor from "@/assets/icons/color/react-router.png";
import NodeJS from "@/assets/icons/color/nodejs.png";
import Bootstrap from "@/assets/icons/color/bootstrap.png";
import Postman from "@/assets/icons/color/postman.png";
import Figma from "@/assets/icons/color/figma.png";
import WordPress from "@/assets/icons/color/WordPress.png";
import Illustrator from "@/assets/icons/color/illustrator.png";







type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {



    
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
            className="flex flex-row justify-center text-center mt-12  mdd:mt-6"
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

         
          <div className="h-full w-full max-w-[1400px] mx-auto flex flex-wrap justify-center items-center z-10 pt-4">

            {/* project Gedui */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={GeduiLogo} alt="Gedui Logo" title="Gedui" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={GeduiImg} alt="Gedui Site" title="Gedui" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                    Maintenance and development of innovative solutions for an educational platform with more than 100,000 users.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="grid justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                    {/* REACT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={ReactColor} alt="React Icon" title="React" />
                    </div>
                    {/* TypeScript Icon */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={TSColor} alt="TypeScript Icon" title="TypeScript" />
                    </div>
                    {/* Bootstrap ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={Bootstrap} alt="Bootstrap Icon" title="Bootstrap" />
                    </div>
                    {/* STYLED COMPONENTS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={StyledComponentsColor} alt="Styled Components Icon" title="Styled Components" />
                    </div>
                    {/* NODE.JS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                    </div>
                    {/* POSTMAN ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={Postman} alt="Postman Icon" title="Postman" />
                    </div>
                    {/* FIGMA ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={Figma} alt="Figma Icon" title="Figma" />
                    </div>
                  </div>
                </div>
                {/* extern links (github and demo) */}
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 hidden">
                    {/* project github code link */}
                    <div className="flex justify-center items-center ">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                      <p className="text-text-color-blue font-bold">Code</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://gedui.com.br/en/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Website</motion.p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* project Ironside Global Trading */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={IGTLogo} alt="Ironside Global Trading Logo" title="Ironside Global Trading" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={IGTImg} alt="Ironside Global Trading Site" title="Ironside Global Trading Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                  Development of a custom and responsive landing page for an international company specialized in foreign trade.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="grid justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                    {/* WordPress ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={WordPress} alt="WordPress Icon" title="WordPress" />
                    </div>
                    {/* CSS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={CSSColor} alt="CSS Icon" title="CSS" />
                    </div>
                    {/* ILUSTRATOR ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={Illustrator} alt="Ilustrator Icon" title="Ilustrator" />
                    </div>
                  </div>
                </div>
                {/* extern links (github and demo) */}
                
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 hidden">
                    {/* project github code link */}
                    <div className="flex justify-center items-center ">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                      <p className="text-text-color-blue font-bold">Code</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://www.ironsideglobal.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Website</motion.p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* project ReformaFácil */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={ReformaFacilLogo} alt="Reforma Fácil Logo" title="Reforma Fácil" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={ReformaFacilImg} alt="Reforma Fácil Site" title="Reforma Fácil Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                  Construtech company website. It connects clients with construction and renovation professionals, offering free quotes and service hiring.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="grid justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                    {/* CSS3 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={CSSColor} alt="CSS3 Icon" title="CSS3" />
                    </div>
                    {/* JAVASCRIPT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={JSColor} alt="JavaScript Icon" title="JavaScript" />
                    </div>
                    {/* REACT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={ReactColor} alt="React Icon" title="React" />
                    </div>
                    {/* REDUX ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={ReduxColor} alt="Redux Icon" title="Redux" />
                    </div>
                    {/* GRAPHSQL ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={GraphSQLColor} alt="GraphSQL Icon" title="GraphSQL" />
                    </div>
                    {/* FIREBASE ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={FirebaseColor} alt="Firebase Icon" title="Firebase" />
                    </div>
                  </div>
                </div>
                {/* extern links (github and demo) */}
                
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 hidden">
                    {/* project github code link */}
                    <div className="flex justify-center items-center ">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                      <p className="text-text-color-blue font-bold">Code</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://reformafacil.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Website</motion.p>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* project Kaze No Mori */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={KazeNoMoriLogo} alt="Kaze No Mori Logo" title="Kaze No Mori" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={KazeNoMoriImg} alt="Kaze No Mori Site" title="Kaze No Mori Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                  Bonsai website showcasing species details, care guides, and an API-powered product catalog with a clean, responsive design.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="grid justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                  <div className="w-5 h-5 flex justify-center items-center">
                      <img src={TSColor} alt="TypeScript Icon" title="TypeScript" />
                    </div>
                    {/* STYLED COMPONENTS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={StyledComponentsColor} alt="Styled Components Icon" title="Styled Components" />
                    </div>
                    {/* REACT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={ReactColor} alt="React Icon" title="React" />
                    </div>
                    {/* NODE.JS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={NodeJS} alt="NodeJS Icon" title="NodeJS" />
                    </div>          
                  </div>
                </div>
                {/* extern links (github and demo) */}
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 hidden">
                    {/* project github code link */}
                    <div className="flex justify-center items-center ">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </a>
                      <p className="text-text-color-blue font-bold">Code</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2">
                    {/* project github code link */}
                    <div className="flex justify-center items-center">
                      <a href="https://github.com/AdemirStefanski/Kaze_no_Mori" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Code</motion.p>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://kaze-no-mori.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Demo</motion.p>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* project Youtube */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={ProjectYouTubeLogo} alt="YouTube" title="YouTube" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={YouTubeImg} alt="YouTube Demo" title="YouTube Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                  YouTube clone with user login, category management, and YouTube API integration. Features a sleek interface and is available as a web application.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="grid justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                    {/* TYPESCRIPT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={TSColor} alt="TypeScript Icon" title="TypeScript" />
                    </div>
                    {/* STYLED COMPONENTS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={StyledComponentsColor} alt="Styled Components Icon" title="Styled Components" />
                    </div>
                    {/* REACT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={ReactColor} alt="React Icon" title="React" />
                    </div>
                    {/* AXIOS ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={AxiosColor} alt="Axios Icon" title="Axios" className="object-contain w-auto h-5" />
                    </div>
                    {/* Webpack ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={WebpackColor} alt="Webpack Icon" title="Webpack" />
                    </div>
                    {/* RRDColor ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={RRDColor} alt="React Router DOM Icon" title="React Router DOM" />
                    </div>
                    
                    
                  </div>
                </div>
                {/* extern links (github and demo) */}
                
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2">
                    {/* project github code link */}
                    <div className="flex justify-center items-center">
                      <a href="https://github.com/AdemirStefanski/YouTube" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Code</motion.p>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://youtube-eosin-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Demo</motion.p>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* project card background PokéHouse */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between">
                {/* project logo */}
                <div className="flex justify-center items-center h-6-6667">
                  <img src={ProjectPokemonLogo} alt="PokéHouse" title="PokéHouse" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={ProjectPokemonImg} alt="PokéHouse Demo" title="PokéHouse Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] " 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold">
                  Project developed to query an API and display comprehensive information about all characters. Clicking on a Pokémon opens an overlay displaying its details.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="flex justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min ">
                    {/* HTML5 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={HTML5IconColor} alt="HTML5 Icon" title="HTML5" />
                    </div>
                    {/* CSS3 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={CSSColor} alt="CSS3 Icon" title="CSS3" />
                    </div>
                    {/* JAVASCRIPT ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={JSColor} alt="JavaScript Icon" title="JavaScript" />
                    </div>
                  </div>
                </div>
                {/* extern links (github and demo) */}
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project github code link */}
                    <div className="flex justify-center items-center">
                      <a href="https://github.com/AdemirStefanski/PokeHouse" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Code</motion.p>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://ademirstefanski-pokehouse.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Demo</motion.p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* project card background The Batman */}
            <div className=" w-350 h-600 bg-cardAbsBg flex items-center justify-center">
              {/* card blue border */}
              <div className="w-300 h-550 rounded-lg border-4 border-my-colors-card-border p-3 flex flex-col gap-3 justify-between ">
                {/* project logo */}
                <div className="relative flex justify-center items-center h-6-6667 ">
                  <img src={ProjectTheBatmanLogo} alt="Batman" title="Batman" className="object-contain h-full w-full" />
                </div>
                {/* project print */}
                <div className="flex justify-center items-center h-26-6667">
                <motion.img
                    whileHover={{ scale: 1.1 }}          
                    src={ProjectTheBatmanImg} alt="Batman Demo" title="Batman Demo" className="rounded-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" 
                  />
                </div>
                {/* project description */}
                <div className=" bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg h-29 flex justify-center items-center">
                  <p className="text-center m-1 text-text-color-blue text-sm p-2 font-semibold ">
                  Promotional project for 'The Batman' movie, featuring exclusive content from the main actors, the official trailer, and a contact page for fans.
                  </p>
                </div>
                {/* div to horizontally align the stack div */}
                <div className="flex justify-center items-center h-9">
                  {/* project stacks */}
                  <div className="flex bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-4 gap-4 w-min">
                    {/* HTML5 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={HTML5IconColor} alt="HTML5 Icon" title="HTML5" />
                    </div>
                    {/* CSS3 ICON */}
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img src={CSSColor} alt="CSS3 Icon" title="CSS3" />
                    </div>
                    
                  </div>
                </div>
                {/* extern links (github and demo) */}
                <div className="flex justify-center items-center gap-4  h-8-3333">
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project github code link */}
                    <div className="flex justify-center items-center">
                      <a href="https://github.com/AdemirStefanski/The-Batman" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Code</motion.p>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-white bg-opacity-65 backdrop-blur rounded-lg shadow-lg p-2 ">
                    {/* project demonstration link  */}
                    <div className="flex justify-center items-center">
                      <a href="https://ademirstefanski-the-batman.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <motion.div
                          className="w-7 h-7 object-contain content-demonograythird hover:content-democolor pr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                        <motion.p className="text-text-color-blue font-bold hover:text-my-colors-green-10"
                          whileHover={{ scale: 1.1 }}
                          transition={{ stiffness: 400, damping: 10 }}
                        >Demo</motion.p>
                      </a>
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