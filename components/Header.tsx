import { Bank } from 'react-bootstrap-icons'

export default function Header() {
  return (
    <header className="min-h-[90%] text-primaryTextColor mb-8 relative">
      <div className="flex">
        <h2 className="bg-mainColor p-4">Pearson Hardman</h2>
        <nav className="flex gap-16 uppercase mr-8 text-primaryTextColor font-bold">
          <a>Início</a>
          <a>Serviços</a>
          <a>Sobre</a>
          <a>Time</a>
          <a>Contato</a>
        </nav>
      </div>
      <div>
        <span></span>
        <h2>Melhores experts em direito do país</h2>
        <p>
          Os advogados mais bem qualificados estão aqui, agende uma reunião e
          conheça nosso time
        </p>
      </div>
      <div>
        <span></span>
        <h2>Conheça o nosso time</h2>
        <p>
          Veja as especialidades dos nossos advogados, e entenda como eles podem
          lhe ajudar
        </p>
      </div>
      <div>
        <span></span>
        <h2>Os nossos resultados</h2>
        <p>
          Confira as nossas métricas e conheça os resultados que já obtivemos
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}