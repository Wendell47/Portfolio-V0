import { useState } from 'react'
import './styles.css'
import {LuMenu} from 'react-icons/lu'
export default function Header(){
    const [isHidden,setIsHidden]= useState('hide')
    
    function handleMenuHidden(){
        isHidden ? setIsHidden('') : setIsHidden('hide')
    }
    return(
        <header>
            <div className="container">
            <img src="src/assets/logo.svg"/>
            <nav>
               <ul className={`menu ${isHidden}`}>
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
               </ul>
               <button onClick={handleMenuHidden}>
                <LuMenu/>
               </button>
            </nav>
            </div>
        </header>
    )
}