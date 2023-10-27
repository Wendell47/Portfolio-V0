/* eslint-disable react/prop-types */
import './styles.css'

export default function Section({title, description,animationName,SectionId,children}){
    return(
        <section className='content' id={SectionId}>
            <div className={`grid animation ${animationName}`}>
               <section className='title'>
                <h3>{title}</h3>
                <p>{description}</p>
               </section>
               {children}
            </div>
        </section>
    )
}