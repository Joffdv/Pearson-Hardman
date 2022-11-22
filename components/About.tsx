import { Briefcase, Book, Person, Building, Trophy } from 'react-bootstrap-icons'

export default function About() {
  return (
    <section id="about" className="flex flex-wrap items-center gap-8">
      <div id="about-text" className="bg-pattern bg-cover bg-center text-primaryTextColor flex-1 flex flex-col justify-center gap-4 py-16 px-12">
        <p className="section-subtitle">Sobre nós</p>
        <h3 className="section-title">
          Uma empresa que tem o foco no cliente, aconselhando da melhor forma e
          conseguindo os melhores resultados
        </h3>
        <div className="flex items-center">
          <div className="i"><Briefcase /></div>
          <div>
            <h4 className="text-[1.4rem] mb-4">Advogados atualizados</h4>
            <p>
              Nós promovemos treinamentos mensais a todos os nossos
              colaboradores
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="i"><Book /></div>
          <div>
            <h4 className="text-[1.4rem] mb-4">Domínio das leis</h4>
            <p>
              Nossos colaboradores são especializados em várias áreas do
              Direito, dominando as principais leis em suas especialidades
            </p>
          </div>
        </div>
      </div>
      <div id="about-data" className="flex-1 flex flex-wrap p-8">
        <div className="data w-2/4 flex flex-col items-center justify-center p-8 mt-[-1px] ml-[-1px]">
          <div className="i"><Person /></div>
          <p className="text-[4rem] font-black">50</p>
          <p className="uppercase">Advogados</p>
        </div>
        <div className="data w-2/4 flex flex-col items-center justify-center p-8 mt-[-1px] ml-[-1px]">
          <div className="i">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16"> <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/> </svg>
          </div>
          <p className="text-[4rem] font-black">789</p>
          <p className="uppercase">Casos resolvidos</p>
        </div>
        <div className="data w-2/4 flex flex-col items-center justify-center p-8 mt-[-1px] ml-[-1px]">
          <div className="i"><Building /></div>
          <p className="text-[4rem] font-black">40</p>
          <p className="uppercase">Clientes</p>
        </div>
        <div className="data w-2/4 flex flex-col items-center justify-center p-8 mt-[-1px] ml-[-1px]">
          <div className="i"><Trophy /></div>
          <p className="text-[4rem] font-black">7</p>
          <p className="uppercase">Prêmios empresariais</p>
        </div>
      </div>
    </section>
  )
}