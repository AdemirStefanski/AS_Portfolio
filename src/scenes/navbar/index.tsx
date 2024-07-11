
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";

import Logo2 from "@/assets/logo2.png";

// Definição dos tipos de props aceitos pelo componente Navbar
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

// Componente Navbar
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // Classe utilitária para flexbox
  const flexBetween = "flex items-center justify-between";
  // Estado para controlar o toggle do menu
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // Hook para verificar se a tela é maior que 900px
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  // Determina a classe de background do navbar baseado na posição da página
  const navbarBackground = isTopOfPage ? "" : "bg-my-colors-green drop-shadow";
  // Ref para o contêiner do menu
  const menuRef = useRef<HTMLDivElement>(null);

  // Função para fechar o menu ao clicar fora dele
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuToggled(false);
    }
  };

  // useEffect para adicionar/remover o evento de clique fora do menu
  useEffect(() => {
    if (isMenuToggled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuToggled]);

  return (
    <nav>
      {/* Contêiner principal do cabeçalho */}
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Contêiner central do cabeçalho */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Contêiner interno do cabeçalho */}
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Lado esquerdo */}
            <img alt="logo" src={Logo2} />

            {/* Lado direito */}
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between pr-2  ">
                <div className={`${flexBetween} gap-8 text-lg font-medium font-ubuntu`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-my-colors-green-10 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-primary-50" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu móvel */}
      {!isAboveMediumScreens && (
        <AnimatePresence>
          {isMenuToggled && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            >
              {/* Ícone de fechar */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(false)}>
                  <XMarkIcon className="h-6 w-6 text-my-colors-green-10 mt-[-14px] xsl:ml-[-49px]" />
                </button>
              </div>

              {/* Itens do menu */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="ml-[33%] flex flex-col gap-10 text-2xl font-ubuntu"
              >
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;
