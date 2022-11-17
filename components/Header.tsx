import { Bank } from 'react-bootstrap-icons'

export default function Header() {
  return (
    <header className="min-h-[90vh] bg-main-banner-4 bg-cover bg-center text-primaryTextColor mb-8 relative">
      <div className="flex justify-between items-center">
        <h2 className="bg-mainColor p-4">Pearson Hardman</h2>
        <nav className="flex gap-16 uppercase mr-8 text-primaryTextColor font-bold">
          <a>Início</a>
          <a>Serviços</a>
          <a>Sobre</a>
          <a>Time</a>
          <a>Contato</a>
        </nav>
      </div>
      <div className="banner active max-w-[50%] p-16 absolute">
        <span className="block w-[150px] h-[150px] bg-mainColor absolute z-10 left-[20px] top-[40px]"></span>
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