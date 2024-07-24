import React, { useEffect } from 'react';
import { Course } from "@/shared/types";
import { XMarkIcon } from "@heroicons/react/24/solid";


interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  content: Course | null;
}

// Função para desabilitar o scroll da página
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

// Função para habilitar o scroll da página
const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content  }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica se o clique foi no overlay do modal (fora da área do conteúdo)
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal apenas se clicado fora da área do conteúdo
    }
  };

  if (!isOpen) return null; // Não renderiza o modal se isOpen for falso

  // Verifica se content é nulo antes de acessar suas propriedades
  if (!content) return null;
  

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
            <img src={content.imageUrl} alt="Certification" className="rounded-lg max-w-full h-auto shadow-xl" />
          </div>
          <div className="pl-4 mt-4 md:mt-0 md:w-auto">
            <div className="pb-1">
              <p className="font-semibold">Course duration:</p>
              <p className="font-semibold pl-1 text-my-colors-green-10">{content.duration}</p>
            </div>
            <div >
              <p className="font-semibold pb-1">Course Syllabus:</p>
              <div className="text-sm">
                {content.syllabus.map((item, index) => (
                  <p key={index}><span className="text-my-colors-green-10">-</span> {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Modal;


