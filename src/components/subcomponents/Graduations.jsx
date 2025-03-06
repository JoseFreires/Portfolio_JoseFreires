import { FaUserGraduate } from "react-icons/fa";

import "../../styles/components/graduation.sass"

const schools = [
    {name: "Senai Santo Amaro - Suíço-Brasileira", duracao:"3 semestres", anoConclusao: "2022", link:"https://sp.senai.br/unidade/suicobrasileira/"},
    {name: "FATEC Zona Sul - Dom Paulo Evaristo Arns", duracao:"6 semestres", anoConclusao: "2026", link:"https://fateczonasul.edu.br"}
]

const Graduations = () => {
    return (
        <section id="container-graduations">
            { schools.map((item) => (
                <a href={item.link} className="graduation-button" id={item.name} key={item.name} target="_blank">
                    <FaUserGraduate />
                    <div className="container-content">
                        <h3>{item.name}</h3>
                        <div id="tempo">
                            <p>Duração: {item.duracao}</p>
                            <p>Ano de Conclusão: {item.anoConclusao}</p>
                        </div>
                    </div>
                    
                </a>
            ))}
        </section>
    )
}

export default Graduations;