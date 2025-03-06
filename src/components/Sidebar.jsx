import Avatar from '../img/eukk.jpg'
import SocialNetwork from './subcomponents/SocialNetwork'
import InformationContainer from './subcomponents/InformationContainer'
import Graduations from './subcomponents/Graduations'

import "../styles/components/sidebar.sass"



const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt='José Freires' />
        <p className="title">Desenvolvedor BackEnd</p>
        <SocialNetwork />
        <InformationContainer />
        <Graduations />
        <a href="" className='btn'>
            Download curriculo
        </a>
    </aside>
}

export default Sidebar;