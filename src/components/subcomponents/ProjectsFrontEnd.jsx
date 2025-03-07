import CardProject from "./CardProject"

import { FaReact } from "react-icons/fa";

const projects = [
    {name: "Studio Ghibli", ano: "2023", content: "Esse projeto foi criado com o objetivo de exercitar o consumo de uma API. Pela primeira vez peguei imagens de uma API e coloquei na aplicação, além de vários outras informações que a API oferece.",
    language:<FaReact /> , status: "Concluído", link: "https://github.com/JoseFreires/Studio-Ghibli"},
    {name: "Developer Form", ano: "2023", content: "Esse projeto foi criado com o objetivo de exercitar a criação de um formulário no React, além de também ter uma ferramenta muito usada nos tempos atuais que é o Dark Mode.",
    language:<FaReact /> , status: "Concluído", link: "https://github.com/JoseFreires/Form-Developer"},
    {name: "Tela de Login", ano: "2023", content: "Um projeto criado com o intuito de praticar a lógica e a aparência de uma página de Login.",
    language:<FaReact /> , status: "Concluído", link: "https://github.com/JoseFreires/simple-login"},
]

const ProjectsFrontEnd = () => {
    return(
        <div>
            <div>
                <h2>FrontEnd</h2>
            </div>
            <div className="containerCards">
                {projects.map((item) => (
                    <CardProject 
                        name={item.name}
                        content={item.content}
                        status={item.status}
                        language={item.language}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsFrontEnd;