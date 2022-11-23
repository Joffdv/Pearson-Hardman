import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="relative mb-8">
      <span className="square"></span>
      <h2 className="text-5xl text-center max-w-[1000px] my-0 mx-auto relative z-20">
        A <span className="text-mainColor">Pearson Hardman</span> tem um time de especialistas a sua
        disposição
      </h2>
      <div className="employees flex gap-8 p-8 text-center">
        <div>
          <Image src="mike.jpg" alt="Mike Ross" />
          <p className="text-mainColor uppercase text-[1.2rem] font-bold my-2 mx-0">Mike Ross</p>
          <p>Advogado</p>
        </div>
        <div>
          <Image src="harvey.png" alt="Harvey Specter" />
          <p className="text-mainColor uppercase text-[1.2rem] font-bold my-2 mx-0">Harvey Specter</p>
          <p>Advogado Sênior</p>
        </div>
        <div>
          <Image src="louis.jpg" alt="Louis Litt" />
          <p className="text-mainColor uppercase text-[1.2rem] font-bold my-2 mx-0">Louis Litt</p>
          <p>Advogado</p>
        </div>
        <div>
          <Image src="jessica.jpg" alt="Jessica Pearson" />
          <p className="text-mainColor uppercase text-[1.2rem] font-bold my-2 mx-0">Jessica Pearson</p>
          <p>CEO</p>
        </div>
      </div>
    </section>
  )
}