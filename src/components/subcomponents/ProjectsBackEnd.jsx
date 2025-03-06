import CardProject from "./CardProject"

const projects = [
    {name: "Xadrez Java", ano: "2024", content: "Projeto em Java para exercitar os conceitos de lista, enumeração, polimorfia, entre outros.",
    status:"Em andamento...",link: "https://github.com/JoseFreires/ToDoList_Java"},

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
                        status={item.status}
                        ano={item.ano}
                        icons={item.language}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsBackEnd;