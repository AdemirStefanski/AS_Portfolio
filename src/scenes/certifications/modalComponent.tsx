// ModalComponent.tsx

import React, { useEffect } from 'react';


import { XMarkIcon } from "@heroicons/react/24/solid";

import Certification001 from "@/assets/certification/certification_001.jpg"

interface ModalProps {
  onClose: () => void;
}

// Função para desabilitar o scroll da página
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

// Função para habilitar o scroll da página
const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

const ModalComponent: React.FC<ModalProps> = ({ onClose  }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica se o clique foi no overlay do modal (fora da área do conteúdo)
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal apenas se clicado fora da área do conteúdo
    }
  };

  // Efeito para desabilitar o scroll ao abrir o modal
  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []); // Executa apenas uma vez ao montar o componente
  

  return (
    <div 
  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur z-40"
  onClick={handleOverlayClick}
  role="dialog"
  style={{ backdropFilter: 'blur(8px)' }}
>
  <div 
    className="bg-white p-8 rounded-lg relative w-full md:w-3/4 max-w-screen-md h-60vmin md:h-auto max-h-full overflow-auto"
    onClick={(e) => e.stopPropagation()} // Para evitar fechamento ao clicar dentro do modal
  >
    <button 
      className="absolute top-0 right-0 mt-4 mr-4"
      onClick={onClose}
      aria-label="Close"
    >
      <XMarkIcon className="h-6 w-6 text-my-colors-green-10" />
    </button>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-2/5 flex items-center justify-center">
        <img src={Certification001} alt="Certification" className="rounded-lg max-w-full h-auto shadow-xl" />
      </div>
      <div className="pl-4 mt-4 md:mt-0 md:w-auto">
        <div className="pb-1">
          <p className="font-semibold">Course duration:</p>
          <p className="font-semibold pl-1 text-my-colors-green-10">110 hours</p>
        </div>
        <div >
          <p className="font-semibold pb-1">Course Syllabus:</p>
          <div className="text-sm">
            {/* Lista de itens do curso */}
            <p><span className="text-my-colors-green-10">-</span> Modern HTML, CSS, and Basic JavaScript</p>
            <p><span className="text-my-colors-green-10">-</span> Intermediate JavaScript and Programming Logic</p>
            <p><span className="text-my-colors-green-10">-</span> Typing, TypeScript in Practice, and Introduction to Networks and Protocols</p>
            <p><span className="text-my-colors-green-10">-</span> SPA, SSR, SSG Under the Hood</p>
            <p><span className="text-my-colors-green-10">-</span> Getting Started with React and Scalable Professional Architecture</p>
            <p><span className="text-my-colors-green-10">-</span> Local/Remote Repositories (Git and GitHub)</p>
            <p><span className="text-my-colors-green-10">-</span> Node.js Overview and Building Scalable APIs with/without Express</p>
            <p><span className="text-my-colors-green-10">-</span> Databases, SQL, and Practical Projects (YouTube, WhatsApp Web)</p>
            <p><span className="text-my-colors-green-10">-</span> Introduction to DevOps and Real-Time Applications</p>
            <p><span className="text-my-colors-green-10">-</span> Micro-FrontEnds, Micro-Services, and Mobile App Development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default ModalComponent;


