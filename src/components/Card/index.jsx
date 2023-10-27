/* eslint-disable react/prop-types */
import './styles.css'
import {LuArrowUpRight, LuGithub,LuFigma} from 'react-icons/lu'
export default function Card({img, title, description,cardBackgroundColor ,gridColum, gridRow, urlProject,urlGithub, urlFigma}){
    // Cria um novo elemento de estilo
    let estilo = document.createElement('cardsColor');

    // Define o conteúdo do elemento de estilo
    estilo.innerHTML = `
        .minhaClasse {
            background-color: #000;
        }
    `;

    // Adiciona o elemento de estilo ao cabeçalho do documento
    document.head.appendChild(estilo);


    return(
        <div className='card' style={{backgroundColor: cardBackgroundColor, gridColumn: gridColum, gridRow: gridRow}}>
            <img src={img} alt={description} />
            <section>
                <div className='topContent'>
                    
                    <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className='cardButtons'>
                        {urlFigma && <button><a href={urlFigma}><LuFigma/></a></button>}
                        {urlGithub && <button><a href={urlGithub}><LuGithub/></a></button>}
                        {urlProject && <button><a href={urlProject}><LuArrowUpRight/></a></button>}
                    </div>
                </div>

                <div className='tagsWrapper'>
                    <span className='tag'>html</span>
                    <span className='tag'>html</span>
                    <span className='tag'>html</span>
                </div>
            </section>
        </div>
    )
}