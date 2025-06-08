import React, { useState } from 'react';
import Lightbox from './Lightbox'; // Importe o componente Lightbox

// Prints do Sistema InfoMaster
const infomasterPrints = [
  '/prints/LOGIN.png',
  '/prints/HOME.png',
  '/prints/LISTAGEM DE VIAGENS.png',
  '/prints/TELA DE HORAS.png',
  '/prints/TELA AGENDAMENTO.png',
];

// Prints do Sistema da Associação Comercial
const associacaoPrints = [
  '/prints/associacao/login.png',
  '/prints/associacao/home.png',
  '/prints/associacao/cadastros.png',
  '/prints/associacao/agendamentos.png',
  '/prints/associacao/buscas.png',
  '/prints/associacao/relatorios.png',
];

export default function App() {
  // Estados para o Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImagesSet, setCurrentImagesSet] = useState([]); // Armazena qual set de imagens está sendo exibido no lightbox

  // Função para abrir o lightbox
  const openLightbox = (index, imagesSet) => {
    setCurrentImageIndex(index);
    setCurrentImagesSet(imagesSet);
    setLightboxOpen(true);
  };

  // Função para fechar o lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0); // Resetar o índice ao fechar
    setCurrentImagesSet([]); // Resetar o set de imagens
  };

  return (
    <div className="bg-[#0f0f1c] text-white min-h-screen font-sans antialiased">
      <header className="bg-[#1a1a2e] p-6 text-center text-2xl font-bold shadow-md text-purple-300">
        Mateus Chichera - Desenvolvedor Backend
      </header>

      <main className="p-8 space-y-16 max-w-6xl mx-auto">
        {/* Sobre mim */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold border-b pb-3 border-purple-500 text-purple-200">Sobre Mim</h2>
          <p className="text-lg leading-relaxed">
            Olá! Sou um desenvolvedor **Backend** com ênfase em **Node.js** e vasta experiência em integrações com sistemas reais para empresas. 
            Minha paixão é construir soluções robustas e escaláveis, com foco em otimização de processos e automação. 
            Atualmente, estou aprimorando minhas habilidades cursando Análise e Desenvolvimento de Sistemas, 
            e tenho um histórico comprovado no desenvolvimento de sistemas em produção, como controle de ponto, 
            gestão de viagens e sistemas de autenticação, sempre buscando a excelência na arquitetura de software.
          </p>
        </section>

        {/* Projetos */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold border-b pb-3 border-purple-500 text-purple-200">Meus Projetos</h2>

          {/* Projeto InfoMaster */}
          <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg border border-purple-800">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Sistema de Agendamento e Controle - InfoMaster</h3>
            <p className="mt-2 text-md leading-relaxed">
              Este sistema é uma solução completa para a gestão de agendamentos de viagens e controle de horas dos técnicos implantadores, 
              atualmente em produção. Ele moderniza processos internos, permitindo a importação de planilhas Excel para agendamentos, 
              disparo automático de mensagens via WhatsApp com detalhes de viagens, e o acompanhamento de horas e relatórios de viagem 
              pelos técnicos. O backend, desenvolvido em **Node.js com Express**, gerencia integrações complexas, como a leitura de arquivos Excel 
              e a comunicação bidirecional com o WhatsApp, enquanto o frontend em **EJS** garante uma interface eficiente. 
              O sistema é hospedado em uma **VM Ubuntu na Oracle Cloud**, assegurando escalabilidade e confiabilidade.
              Possui autenticação robusta por hash e controle de rotas autenticadas.
            </p>

            {/* Grid de Imagens do Projeto InfoMaster */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {infomasterPrints.map((print, index) => (
                <img
                  key={index}
                  src={print}
                  alt={`Screenshot InfoMaster ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(index, infomasterPrints)}
                />
              ))}
            </div>
          </div>

          {/* Projeto Associação Comercial - Agora com prints */}
          <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg border border-purple-800">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Sistema para Associação Comercial</h3>
            <p className="mt-2 text-md leading-relaxed">
              Desenvolvi um sistema completo para a Associação Comercial de Presidente Prudente, focado na gestão eficiente 
              de usuários, agendamento de salas e controle de consumo. Este projeto utilizou **React** para o frontend, 
              proporcionando uma experiência de usuário dinâmica e responsiva, e **Node.js** para o backend, 
              garantindo a robustez e a segurança das operações.
            </p>
            
            {/* Grid de Imagens do Projeto Associação Comercial */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {associacaoPrints.map((print, index) => (
                <img
                  key={index}
                  src={print}
                  alt={`Screenshot Associação Comercial ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(index, associacaoPrints)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-bold border-b pb-3 border-purple-500 text-purple-200">Entre em Contato</h2>
          <p className="text-lg">
            Sinta-se à vontade para entrar em contato para oportunidades de trabalho ou colaborações.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6">
            <a href="mailto:mateeusz17@hotmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xl flex items-center gap-2">
              <i className="fas fa-envelope"></i> mateeusz17@hotmail.com
            </a>
            <a href="https://github.com/MateusChichera" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xl flex items-center gap-2">
              <i className="fab fa-github"></i> github.com/MateusChichera
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a2e] text-center p-6 text-sm text-gray-400 mt-16">
        © {new Date().getFullYear()} Mateus Chichera. Todos os direitos reservados.
      </footer>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          images={currentImagesSet}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNavigate={(newIndex) => setCurrentImageIndex(newIndex)}
        />
      )}
    </div>
  );
}