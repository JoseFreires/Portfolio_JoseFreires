import AboutContainer from './subcomponents/AboutContainer';
import ProjectsContainer from './subcomponents/ProjectsContainer';
import TechnologiesContainer from './subcomponents/TecnologiesContainer'

import "../styles/components/maincontent.sass";


const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
}

export default MainContent;