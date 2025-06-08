import React, { useEffect, useCallback } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const navigate = useCallback((direction) => {
    const totalImages = images.length;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = totalImages - 1;
    } else if (newIndex >= totalImages) {
      newIndex = 0;
    }
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  // Fechar no ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        navigate(-1);
      } else if (event.key === 'ArrowRight') {
        navigate(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, navigate]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Fecha ao clicar fora da imagem
    >
      <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}> {/* Impede que o clique na imagem feche */}
        <button
          className="absolute top-2 right-2 text-white text-3xl p-2 hover:text-gray-300 transition-colors duration-200"
          onClick={onClose}
        >
          &times; {/* Ícone de fechar (X) */}
        </button>

        <img
          src={images[currentIndex]}
          alt={`Visualização ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
        />

        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-2xl shadow-md"
              onClick={() => navigate(-1)}
            >
              &lt;
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-2xl shadow-md"
              onClick={() => navigate(1)}
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Lightbox;