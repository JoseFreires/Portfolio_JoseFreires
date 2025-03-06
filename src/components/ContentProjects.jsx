import ProjectsFrontEnd from "./subcomponents/ProjectsFrontEnd";

import '../styles/components/ContentProjects.sass'
import ProjectsBackEnd from "./subcomponents/ProjectsBackEnd";


const ContentProjects = () => {
    return(
        <section id="containerProjects">
            <ProjectsFrontEnd />
            <ProjectsBackEnd />
        </section>
    )
}

export default ContentProjects;