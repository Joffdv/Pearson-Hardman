import { GeoAlt, Telephone, Envelope, Facebook, Twitter, Linkedin, Instagram } from 'react-bootstrap-icons'


export default function Footer() {
  return (
    <footer id="footer" className="text-primaryTextColor bg-secondaryBgColor flex justify-around pt-12 px-12 pb-20">
      <div className="contact-info w-1/5">
        <div className="footer-brand mb-8">
          <h2 className="bg-mainColor mb-2 p-4">Pearson Hardman</h2>
          <p>O advogado certo para a sua empresa</p>
        </div>
        <p className="mb-4"><div className="i"><GeoAlt /></div> Rua dos Advogados, 1415</p>
        <p className="mb-4"><div className="i"><Telephone /></div> (99) 9999-9999</p>
        <p className="mb-4"><div className="i"><Envelope /></div> contato@pearsonhardman.com</p>
        <div>
          <p className="mb-4">Siga-nos:</p>
          <div className="networks mt-8 flex gap-4">
            <a href="#" className=""><div className="i"><Facebook /></div></a>
            <a href="#" className=""><div className="i"><Twitter /></div></a>
            <a href="#" className=""><div className="i"><Linkedin /></div></a>
            <a href="#" className=""><div className="i"><Instagram /></div></a>
          </div>
        </div>
      </div>
      <div className="links-container w-1/5">
        <h4 className="uppercase mb-12">Outros serviços</h4>
        <nav className="flex flex-col">
          <a href="#">Propriedade intelectual</a>
          <a href="#">LGPD</a>
          <a href="#">Direito internacional</a>
          <a href="#">Processos</a>
        </nav>
      </div>
      <div className="links-container w-1/5">
        <h4 className="uppercase mb-12">Páginas</h4>
        <nav className="flex flex-col">
          <a href="#">Termos e condições</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Fale com um especialista</a>
          <a href="#">FAQ</a>
        </nav>
      </div>
      <div className="links-container w-1/5">
        <h4 className="uppercase mb-12">Consulta grátis</h4>
        <div className="phone-number">
          <div className="i"><Telephone /></div>
          <p>(99) 9999-9999</p>
        </div>
        <p className="text-secondaryColor">
          Este telefone é especial para tratar de casos já em andamento
        </p>
      </div>
    </footer>
  )
}