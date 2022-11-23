import { People, Bank, Bricks, Building } from 'react-bootstrap-icons'
import Image from 'next/image'

export default function ExpetiseAreas() {
  return (
    <main id="expertise-areas" className="flex flex-wrap gap-8">
      <div className="text-container flex-[2_1_0] flex gap-8 flex-col justify-center text-right">
        <p className="uppercase font-bold text-mainColor">Áreas de atuação</p>
        <h3 className="text-secondaryTextColor text-[2rem]">
          Nossos especialistas podem ajudar você em Direito Civil, Ambiental,
          Empresarial.
        </h3>
        <a href="#" className="btn">Saiba Mais</a>
      </div>
      <div className="image-container flex-[1_1_300px] relative">
        <div className="i absolute">
          <People />
        </div>
        <Image src="employees_banner.jpg" alt="banner employees"  />
      </div>
      <div id="other-services" className="w-full flex gap-8 p-8">
        <div className="relative">
          <Image src="bank.jpg" alt="Banco" />
          <div className="i absolute top-0 left-0"><Bank /></div>
          <div className="bg-tertiaryColor px-[1.4rem] py-8 z-20 min-h-[250px] mt-[-3rem] relative">
            <h4 className="text-[1.8rem] mb-4 uppercase">Bancos e Finanças pessoais</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, numquam accusantium! Ex dolores, autem itaque adipisci,
              facilis quam eligendi consequuntur reprehenderit quas aliquid
              corrupti quibusdam voluptates. Repellendus suscipit quo veniam?
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src="construction.jpg" alt="Construção" />
          <div className="i absolute top-0 left-0"><Bricks /></div>
          <div className="bg-tertiaryColor px-[1.4rem] py-8 z-20 min-h-[250px] mt-[-3rem] relative">
            <h4 className="text-[1.8rem] mb-4 uppercase">Construção de Imóveis sem escritura</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, numquam accusantium! Ex dolores, autem itaque adipisci,
              facilis quam eligendi consequuntur reprehenderit quas aliquid
              corrupti quibusdam voluptates. Repellendus suscipit quo veniam?
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src="company.jpg" alt="Empresa" />
          <div className="i absolute top-0 left-0"><Building /></div>
          <div className="bg-tertiaryColor px-[1.4rem] py-8 z-20 min-h-[250px] mt-[-3rem] relative">
            <h4 className="text-[1.8rem] mb-4 uppercase">Empresas e funcionários e outros</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, numquam accusantium! Ex dolores, autem itaque adipisci,
              facilis quam eligendi consequuntur reprehenderit quas aliquid
              corrupti quibusdam voluptates. Repellendus suscipit quo veniam?
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}