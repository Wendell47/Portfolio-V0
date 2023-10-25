import './styles.css'
import{ LuChevronDown} from 'react-icons/lu'
export default function SideSectionName(){

    return(
        <aside className='SectionTitle'>
            <div className="asideLine"></div>
            <div className='asideTitle'>
                <p>Project</p>
            </div>
            <button className='asideButton'>
                <LuChevronDown/>
            </button>
        </aside>
    )
}