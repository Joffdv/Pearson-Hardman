import { Quote } from 'react-bootstrap-icons'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-wrap items-center gap-8">
      <div className="text-container flex-[2_1_0] flex flex-col gap-8 justify-center text-right p-12">
        <p className="uppercase font-bold text-mainColor">Depoimentos de clientes</p>
        <h3 className="section-title">
          A Pearson Hardman resolveu meu caso muito rápido, recomendo a todos.
        </h3>
        <div className="flex justify-end items-center gap-4">
          <div>
            <p className="text-mainColor uppercase text-[1.3rem] font-bold mb-4">Jhon Doe</p>
            <p className="text-secondaryTextColor">CEO da Empresa X</p>
          </div>
          <Image src="author_1.jpg" alt="Jhon Doe" className="w-[100px] h-[100px]"/>
        </div>
        <h3 className="section-title">
          O melhor escritório que eu já contratei, conseguimos resolver um caso
          que durava décadas.
        </h3>
        <div className="flex justify-end items-center gap-4">
          <div>
            <p className="text-mainColor uppercase text-[1.3rem] font-bold mb-4">Paul Clinton</p>
            <p className="text-secondaryTextColor">Gerente de Projetos</p>
          </div>
          <Image src="author_2.jpg" alt="Paul Clinton" className="w-[100px] h-[100px]"/>
        </div>
      </div>
      <div className="image-container flex-[1_1_300px] relative">
        <div className="i absolute"><Quote /></div>
        <Image src="court.jpg" alt="Advogado em um tribunal" />
      </div>
    </section>
  )
}