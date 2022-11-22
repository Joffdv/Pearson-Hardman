import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import ExpertiseAreas from '../components/ExpertiseAreas'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ExpertiseAreas/>
      <About/>
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}