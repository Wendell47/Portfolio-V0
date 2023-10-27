

import Header from '../../components/Header'
import SideSectionName from '../../components/SideSectionName'
import SideSectionSocial from '../../components/SideSectionSocial'
import './App.css'
import bin from '../../assets/con-binario.webp'
import cripto from '../../assets/cripto.webp'
import caffeine from '../../assets/caffeinenotes.webp'
import img from '../../assets/img-test.webp'
import { useEffect } from 'react'
import { useState } from 'react'
import Section from '../../components/Section'
import Card from '../../components/Card'

  function App() {
    // Primeiro, obtenha a altura da janela do usuário
    const [resized,setResided] =useState(window.innerHeight * 0.01)
    function Resize(){
      const size =window.innerHeight * 0.01
      setResided(size)
    }
  
    document.documentElement.style.setProperty('--vh', `${resized}px`);
    window.onresize = Resize
    useEffect(() =>{

    document.documentElement.style.setProperty('--vh', `${resized}px`);
  },[resized])

  return (
    <>
    <div className='maskBackground maskTop'></div>
    <div className='maskBackground maskBottom'></div>
  <div className='container'>
    <div className='gridTemplate'>
    <Header/>
   <main className='main_content'  id='main_content'>
        <section className='content' id='hero'>
           <div className='hero animation animationHero'>
            <span>Hello 👋</span>
            <h1>I'm a Designer/Front-End <span>Developer.</span> </h1>
            <h2>Eu trabalho com desenvolvimento front-end, gosto de designs modernos e futuristas e sou apaixonado por design gráfico e artes vetoriais.</h2>
           </div>
        </section>
        <Section
          title='Projetos'
          description='Veja alguns dos meus projeto.'
          SectionId='projects'
          animationName='animation1'
          >
          
            <Card
              img={cripto}
              title='Cripto'
              description='uma aplicação web que faz criptografia e descriptografia de mensagem.'
              cardBackgroundColor="#A97979"
              urlProject='#'
              urlGithub='#'
              gridColum='1'
              gridRow='2/4'
            />
            
            <Card
              img={bin}
              title='Cripto'
              description='uma aplicação web para conversão de número decimal em binário.'
              cardBackgroundColor="#F9F9F9"
              urlProject='#'
              urlGithub='#'
            />
            <Card
              img={caffeine}
              title='Caffeine Notes - figma'
              description='Protótipo de uma aplicação web registro de notas.'
              cardBackgroundColor="#F8F6F1"
              urlFigma='#'
            />
            

        </Section>
        <Section
          title='Sobre mim'
          description=''
          SectionId='about'
          animationName='animation2'
          >
           
              <img src={img} alt="" />
         
            <div>
            <h4>Eu tenho aperfeiçoado e praticado programação por 2 anos</h4>
              <p>
                A im a dev junior that love make good designs 
                and imerge in the world of tecnlogy, searching
                learn more and more and keep makeing better.

                I have made some courses in the area, that give 
                to me a big knology about web developer and
                make me more pasion for this.
              </p>
            </div>
          </Section>
        <Section
          title='Contato'
          description=''
          SectionId='about'
          animationName='animation3'
          >
            
            <div>
            <h4>Vamos nos conectar, você pode me encontar no linkeInd.</h4>
              <p>
               
              </p>
            </div>
           
              <img src={img} alt="" />
           
          </Section>

   </main>
   <SideSectionSocial/>
   <SideSectionName/>
    </div>
   </div>
   
    </>
  )
}

export default App
