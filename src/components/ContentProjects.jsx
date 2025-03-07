import { FaArrowLeft } from "react-icons/fa";

import ProjectsBackEnd from "./subcomponents/ProjectsBackEnd";
import ProjectsFrontEnd from "./subcomponents/ProjectsFrontEnd";

import '../styles/components/contentProjects.sass'


const ContentProjects = () => {
    return(
        <section id="containerProjects">
            <ProjectsFrontEnd />
            <ProjectsBackEnd />
            <a href="/" className="btn">
                <FaArrowLeft /> 
            </a>
        </section>
    )
}

export default ContentProjects;