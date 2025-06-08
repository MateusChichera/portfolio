import React, { useState } from 'react';

const prints = [
  '/prints/LOGIN.png',
  '/prints/HOME.png',
  '/prints/LISTAGEM DE VIAGENS.png',
  '/prints/TELA DE HORAS.png',
  '/prints/TELA AGENDAMENTO.png',
];

export default function App() {
  const [currentPrint, setCurrentPrint] = useState(0);

  const nextPrint = () => setCurrentPrint((prev) => (prev + 1) % prints.length);
  const prevPrint = () => setCurrentPrint((prev) => (prev - 1 + prints.length) % prints.length);

  return (
    <div className="bg-[#0f0f1c] text-white min-h-screen font-sans antialiased">
      {/* Header atualizado para enfatizar o foco em Backend */}
      <header className="bg-[#1a1a2e] p-6 text-center text-2xl font-bold shadow-md text-purple-300">
        Mateus Chichera - Desenvolvedor Backend
      </header>

      <main className="p-8 space-y-16 max-w-6xl mx-auto"> {/* Aumentado o espaçamento entre seções e centralizado o conteúdo */}
        {/* Sobre mim - Descrição mais focada em backend */}
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
        <section className="space-y-10"> {/* Espaçamento maior entre os projetos */}
          <h2 className="text-3xl font-bold border-b pb-3 border-purple-500 text-purple-200">Meus Projetos</h2>

          {/* Projeto InfoMaster - Melhorias visuais para as imagens e descrição */}
          <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg border border-purple-800"> {/* Bordas e sombreamento aprimorados */}
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

            {/* Carousel de Imagens com indicadores e transições */}
            <div className="mt-8 relative w-full max-w-4xl mx-auto">
              <img
                src={prints[currentPrint]}
                alt={`Screenshot do Sistema InfoMaster - ${currentPrint + 1}`}
                className="w-full h-[450px] object-contain rounded-lg shadow-xl border-2 border-purple-700 transition-opacity duration-500 ease-in-out"
              />
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                <button
                  onClick={prevPrint}
                  className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full text-white text-xl transition-colors duration-300 shadow-md"
                  aria-label="Previous print"
                >
                  &lt;
                </button>
                <button
                  onClick={nextPrint}
                  className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full text-white text-xl transition-colors duration-300 shadow-md"
                  aria-label="Next print"
                >
                  &gt;
                </button>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {prints.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${index === currentPrint ? 'bg-purple-500' : 'bg-gray-600'} transition-all duration-300`}
                    onClick={() => setCurrentPrint(index)}
                    aria-label={`View print ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Projeto Associação Comercial - Manter a estrutura e aprimorar estilo */}
          <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg border border-purple-800">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Sistema para Associação Comercial</h3>
            <p className="mt-2 text-md leading-relaxed">
              Desenvolvi um sistema completo para a Associação Comercial de Presidente Prudente, focado na gestão eficiente 
              de usuários, agendamento de salas e controle de consumo. Este projeto utilizou **React** para o frontend, 
              proporcionando uma experiência de usuário dinâmica e responsiva, e **Node.js** para o backend, 
              garantindo a robustez e a segurança das operações.
            </p>
            <div className="mt-8 flex justify-center">
              <video controls className="w-full max-w-4xl rounded-lg shadow-xl border-2 border-purple-700">
                <source src="/prints/Video Apresentação.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="space-y-4 text-center"> {/* Centralizado e com ícones */}
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
            {/* Adicione um link para o LinkedIn se tiver um */}
            {/* <a href="LINK_DO_SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xl flex items-center gap-2">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a> */}
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a2e] text-center p-6 text-sm text-gray-400 mt-16"> {/* Aumentado padding e margin-top */}
        © {new Date().getFullYear()} Mateus Chichera. Todos os direitos reservados.
      </footer>
    </div>
  );
}