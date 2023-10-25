

import Header from '../../components/Header'
import SideSectionName from '../../components/SideSectionName'
import SideSectionSocial from '../../components/SideSectionSocial'
import './App.css'
import img from '../../assets/img-test.webp'
import { useEffect } from 'react'
import { useState } from 'react'

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
            <span>Olá 👋</span>
            <h1>Sou Wendel.</h1>
            <h2>Um designer/desenvolvedor front-end apaixonado por designer modernos e bonitos. </h2>
           </div>
        </section>
        <section className='content' id='projects'>
            <div className='grid animation animation1'>
               <section className='title'>
                <h3>Projetos</h3>
                <p>veja alguns dos meus projeto já realizados.</p>
               </section>

                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
               
            </div>
            
        </section>
        <section className='content' id='about'>
            <div className='grid animation animation2'>
               <section className='title'>
                <h3>Projetos</h3>
                <p>veja alguns dos meus projeto já realizados.</p>
               </section>

                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
               
            </div>
            
        </section>
        <section className='content' id='about'>
            <div className='grid animation animation3'>
               <section className='title'>
                <h3>Projetos</h3>
                <p>veja alguns dos meus projeto já realizados.</p>
               </section>

                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
                  <div>
                    <div className='card'>
                      <img src={img} alt="" />
                      <section>
                        <h4>Cripy</h4>
                        <p>uma aplicação web que faz criptografia e descriptografia de mensagem.</p>
                      </section>
                    </div>
                  </div>
               
            </div>
            
        </section>
   </main>
   <SideSectionSocial/>
   <SideSectionName/>
    </div>
   </div>
   
    </>
  )
}

export default App
