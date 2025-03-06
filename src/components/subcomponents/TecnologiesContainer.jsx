import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiJava,
    DiPython
} from "react-icons/di";

import { SiCplusplus } from "react-icons/si";

import '../../styles/components/technologiesContainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, body: "Aprendi essa linguagem em 2021 no curso de Desenvolvimento de Sistemas." },
    { id: "css", name: "CSS3", icon: <DiCss3 />,  body: "Aprendi essa linguagem em 2021 no curso de Desenvolvimento de Sistemas." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />,  body: "Aprendi essa linguagem em 2021 no curso de Desenvolvimento de Sistemas." },
    { id: "java", name: "Java", icon: <DiJava />, body: "Aprendi essa linguagem em 2024 em um curso da Udemy" },
    { id: "cpp", name: "C++", icon: <SiCplusplus />, body: "Estou aprendendo essa linguagem no curso de Análise e Desenvolvimento de Sistemas"},
    { id: "py", name: "Python", icon: <DiPython />, body: "Aprendi essa linguagem em 2022 no curso de Desenvolvimento de Sistemas." },
  ];


const TecnologiesContainer = () => {
    return(
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technologies-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3> {tech.name}</h3>
                            <p>{tech.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TecnologiesContainer;