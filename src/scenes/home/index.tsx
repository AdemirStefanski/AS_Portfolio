import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { SelectedPage } from "@/shared/types"

// perfil picture importation.
import HomePic from "@/assets/profile_pic.png";

//Icons importation.
//importando logo do HTML5(color e no color).
import HTML5IconColor from "@/assets/icons/color/html5.png";
import HTML5IconPeB from "@/assets/icons/baw/html5.png";

//importando logo do CSS3(color e no color).
import CSSColor from "@/assets/icons/color/css3.png";
import CSSPB  from "@/assets/icons/baw/css3.png";

//importando logo do JavaScript(color e no color).
import JSColor from "@/assets/icons/color/javascript.png";
import JSPB from "@/assets/icons/baw/javascript.png";

//importando logo do React(color e no color).
import ReactColor from "@/assets/icons/color/react.png";
import ReactPB from "@/assets/icons/baw/react.png";

//importando logo do TypeScript(color e no color).
import TSColor from "@/assets/icons/color/Typescript.png";
import TSPB from "@/assets/icons/baw/Typescript.png";

//importando logos do Tailwind(color e no color).
import TailwindColor from "@/assets/icons/color/tailwindcss.png";
import TailwindPB from "@/assets/icons/baw/tailwindcss.png";

//importando logos do Axios(color e no color).
import AxiosColor from "@/assets/icons/color/axios.png";
import AxiosPB from "@/assets/icons/baw/axios.png";

//importando logo do Next.JS(color e no color).
import NextColor from "@/assets/icons/color/nextjs.png";
import NextPB from "@/assets/icons/baw/nextjs.png";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

  //contante usada para definir quebra de página a 900px e com isso mudar o elemento que contem as stacks.
  const isMobile = useMediaQuery('(max-width: 900px)');

  //const usando useState para definor se o elemento esta carregado e poder mudar esse estado.
  const [loaded, setLoaded] = useState(false);

  //função para animação dos ícones de stacks onde eles começão preto e branco, aumenta e volta ao tamanho natural colorido.
  useEffect(() => {
    // Função para simular o carregamento e animação
    const simulateLoadAndAnimate = () => {
        setLoaded(true); // Ativa a animação imediatamente

        // Após 300 ms, a imagem é trocada e volta ao tamanho original
        setTimeout(() => {
            setLoaded(false); // Desativa a animação
        }, 300); // Tempo em milissegundos para trocar a imagem e voltar ao tamanho original
    };

    simulateLoadAndAnimate(); // Chama a função ao montar o componente
  }, []);
  
  
  return (
    
    
    <section
      id="home"
      className="gap-16 bg-primary-50 py-10 mdd:h-full mdd:pb-0 "
    >
           
      {/* welcome screen and techs */}
      <motion.div
        className="py-10 mdd:h-full mdd:pb-0 flex-col justify-center "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}  
      >
        
        {/* Welcome text and image */}
        <div className="flex flex-col-reverse mdd:flex-row mx-auto mdd:w-3/6 max-w-[70%] items-center justify-center mdd:h-auto">
    
          {/* welcome text */}
          <motion.div className=" z-10 mdd:mt-32 mt-6 align-bottom mdd:basis-8/12 mdd:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity:1, x:0},
          }}
          >
            
            <div className="flex mdd:-mt-20 text-3xl mdd:justify-end xsl:flex-wrap items-end">
              {/* "Hi" Text */}
              <div className="">
                <p className="self-end xsl:text-nowrap">Hi, I'm</p>
              </div>
              {/* Name */}
              <div className="justify-self-end">
                <p className="ml-2 font-museomoderno text-4xl xsl:text-nowrap"> Ademir Stefanski</p>
              </div>
            </div>
            
            {/* breve descrição sobre mim */}
            <div>
              <p className="mt-2 mdd:text-right">
              Welcome to my portfolio! I'm a Front-end Developer passionate about creating dynamic and intuitive web interfaces. Here you'll find a selection of my best work. Feel free to take a look and get to know more about my career and projects.
              </p>

            </div>
            {/* linkedin and github links */}
            <motion.div className="flex gap-4 mdd:justify-end mt-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.1, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:-30},
                visible: {opacity:1, x:0},
              }}
            >
              <a href="https://www.linkedin.com/in/ademir-stefanski/" target="_blank" rel="noopener noreferrer">
                <motion.div className="w-8 h-8 object-contain content-linkedinnocolor hover:content-linkedincolor"
                  whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                  whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                />
              </a>

              <a href="https://github.com/AdemirStefanski" target="_blank" rel="noopener noreferrer">
                <motion.div className="w-8 h-8 object-contain content-githubnocolor hover:content-githubcolor"
                  whileHover={{ y: -5, transition: { duration: 0.1 } }} // Define o movimento para cima de 5 pixels com uma transição de 0.1 segundos
                  whileTap={{ scale: 0.9 }} // Escala do ícone ao clicar
                />
              </a>  

            </motion.div>


          </motion.div>
          
          {/* profile picture */}
          <div className="min-w-60 flex justify-center" >
            <img src={HomePic} alt="Ademir Stefanski" className="h-[50vh] mdd:max-h-[460px] justify-self-center mdd:mt-20 object-contain"/>
          </div>
        </div>


          {/* Tech Stack, existe a condicional onde ela quebra a 900px, mesmo ponto onde muda o alinhamento do texto e foto. Abaixo disso existe uma organização em coluna das divs e acima disso em linha. */}
        {isMobile ? (
            <div className="flex-col justify-center items-center pt-8">

            <div className="flex items-center justify-center">
              <p className="text-lg font-bold">Tech Stack</p>
            </div>
            <div className="flex items-center justify-center pt-1">
              <div className="w-1/4 h-px bg-black  "></div>
            </div>


              <div className="flex flex-wrap mx-auto mdd:w-3/6 max-w-[70%] items-center justify-center mdd:max-h-[460px] py-4 px-2 gap-4">
              
              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? HTML5IconPeB : HTML5IconColor }
                  alt="HTML 5" title="HTML 5"
                  className={`max-w-full max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>
              
              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? CSSPB : CSSColor }
                  alt="CSS 3" title="CSS 3"
                  className={`max-w-full h-10 max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out object-cover`}
              />            
              </div>

              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? JSPB : JSColor }
                  alt="JavaScripty" title="JavaScripty"
                  className={`max-w-full max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>
                      
              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? TSPB : TSColor }
                  alt="TypeScripty" title="TypeScripty"
                  className={`w-auto h-auto transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>

              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? ReactPB : ReactColor }
                  alt="React" title="React"
                  className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>

              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? TailwindPB : TailwindColor }
                  alt="Tailwind" title="Tailwind"
                  className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>

              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? AxiosPB : AxiosColor }
                  alt="Axios" title="Axios"
                  className={`max-w-full h-10 max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out object-cover`}
              />            
              </div>

              <div className="w-10 h-10 flex justify-center items-center">
              <img
                  src={loaded ? NextPB : NextColor }
                  alt="Next.JS" title="Next.JS"
                  className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
              />            
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap mx-auto mdd:w-3/6 max-w-[70%] items-center justify-center mdd:max-h-[460px] py-8 px-2 gap-4">
            <div>
              <p className="text-lg font-bold">Tech Stack</p>
            </div>
            <div className="w-px h-5 bg-black mx-2"></div>
            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? HTML5IconPeB : HTML5IconColor }
                alt="HTML 5" title="HTML 5"
                className={`max-w-full max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>
            
            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? CSSPB : CSSColor }
                alt="CSS 3" title="CSS 3"
                className={`max-w-full max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? JSPB : JSColor }
                alt="JavaScripty" title="JavaScripty"
                className={`max-w-full max-h-full transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>
                    
            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? TSPB : TSColor }
                alt="TypeScripty" title="TypeScripty"
                className={`w-auto h-auto transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? ReactPB : ReactColor }
                alt="React" title="React"
                className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? TailwindPB : TailwindColor }
                alt="Tailwind" title="Tailwind"
                className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? AxiosPB : AxiosColor }
                alt="Axios" title="Axios"
                className={`max-w-full h-10 transform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
            <img
                src={loaded ? NextPB : NextColor }
                alt="Next.JS" title="Next.JS"
                className={`max-w-full max-h-fulltransform ${loaded ? 'scale-125' : 'scale-100'} transition-transform duration-1000 ease-out`}
            />            
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Home;