// ModalComponent.tsx

import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica se o clique foi no overlay do modal (fora da área do conteúdo)
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal apenas se clicado fora da área do conteúdo
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm" onClick={handleOverlayClick}>
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Certifications Details</h2>
          {/* Aqui você pode adicionar o conteúdo desejado, como informações e imagem */}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
