import CardProject from "./CardProject"
import { FaJava } from "react-icons/fa";

const projects = [
    {name: "Xadrez Java", ano: "2024", content: "Um projeto feito em Java com o intuito de exercitar os temas aprendidos do curso de Java da plataforma Udemy",
    language: <FaJava />, status:"Em andamento...",link: "https://github.com/JoseFreires/ToDoList_Java"},
    {name: "JDBC DAO", ano: "2025", content: "Esse projeto é um complemento do repositório 'JDBC Básico' a qual o intuito é praticar o que foi ensinado em um programa completo. Cada commit presente nesse repositório demonstra a evolução do programa.",
    language: <FaJava />, status:"Completo",link: "https://github.com/JoseFreires/Projeto-JDBC-DAO"},
    {name: "To Do List", ano: "2025", content: "Projeto em Java para exercitar os conceitos de lista, enumeração, polimorfia, entre outros.",
    language: <FaJava />, status:"Em andamento...",link: "https://github.com/JoseFreires/ToDoList_Java"},
]

const ProjectsBackEnd = () => {
    return(
        <div>
            <div>
                <h2>BackEnd</h2>
            </div>
            <div className="containerCards">
                {projects.map((item) => (
                    <CardProject 
                        name={item.name}
                        content={item.content}
                        language={item.language}
                        status={item.status}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsBackEnd;