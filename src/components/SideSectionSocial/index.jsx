import './styles.css'
import{ LuGithub, LuLinkedin, LuInstagram} from 'react-icons/lu'
export default function SideSectionSocial(){

    return(
        <aside className='SectionSocial'>
            <div className='asideSocialIcons'>
                <a href="http://"><LuGithub/></a>
                <a href="http://"><LuLinkedin/></a>
                <a href="http://"><LuInstagram/></a>
            </div>
        </aside>
    )
}