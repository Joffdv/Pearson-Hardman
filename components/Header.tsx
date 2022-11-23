import { Bank, List, XLg } from 'react-bootstrap-icons'

export default function Header() {
  return (
    <header id="header" className="min-h-[90vh] bg-main-banner-4 bg-cover bg-center text-primaryTextColor mb-8 relative">
      <div className="flex justify-between items-center">
        <h2 className="bg-mainColor p-4">Pearson Hardman</h2>
        <nav id="navbar" className="flex gap-16 uppercase mr-8 text-primaryTextColor font-bold">
          <a href="#header">Início</a>
          <a href="#expertise-areas">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#team">Time</a>
          <a href="#contact">Contato</a>
        </nav>
        <div className="i" id="menu"><List /></div>
        <nav id="mobile-navbar">
          <i className="i" id="close-menu"><XLg /></i>
          <a href="#header">Início</a>
          <a href="#expertise-areas">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#team">Time</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
      <div className="banner active max-w-[50%] p-16 absolute">
        <span className="square"></span>
        <h2 className="text-[4rem] mb-[1.2rem] relative z-20">Melhores experts em direito do país</h2>
        <p className="text-[1.5rem]">
          Os advogados mais bem qualificados estão aqui, agende uma reunião e
          conheça nosso time
        </p>
      </div>
      <div className="banner">
        <span></span>
        <h2>Conheça o nosso time</h2>
        <p>
          Veja as especialidades dos nossos advogados, e entenda como eles podem
          lhe ajudar
        </p>
      </div>
      <div className="banner">
        <span></span>
        <h2>Os nossos resultados</h2>
        <p>
          Confira as nossas métricas e conheça os resultados que já obtivemos
        </p>
      </div>
      <div className="flex gap-8 absolute bottom-12 left-12">
        <div className="dot active w-5 h-5"></div>
        <div className="dot w-5 h-5"></div>
        <div className="dot w-5 h-5"></div>
      </div>
    </header>
  )
}