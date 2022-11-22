import { Envelope } from 'react-bootstrap-icons'

export default function Contact() {
  return (
    <section id="contact" className="flex flex-wrap bg-mainColor">
      <div className="flex-[1_1_300px] relative">
        <img src="office.jpg" alt="Advogados no escritório" />
      </div>
      <div className="relative flex-[1_1_0%] flex gap-8 flex-col justify-center text-left p-12">
        <div className="i"><Envelope /></div>
        <p className="uppercase font-bold text-primaryTextColor">Entre em contato</p>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <input type="text" name="phone" id="phone" placeholder="Telefone" />
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
          ></textarea>
          <input type="submit" value="Enviar" className="btn hover:bg-primaryTextColor hover:text-mainColor" />
        </form>
      </div>
    </section>
  )
}