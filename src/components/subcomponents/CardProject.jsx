import {FaGithub} from 'react-icons/fa'

import "../../styles/components/cardProject.sass"

export default function CardProject(props){
    return(
        <div className="cardProject">

            <div>
                <h2>{props.name}</h2>
                <p>{props.content}</p>
                <h3>STATUS: {props.status}</h3>
            </div>
            <div id='containerIcons'>
                <a href={props.link} target="_blank">
                    <FaGithub/ >
                </a>
                {props.language}
             </div>
        </div>
    )
}