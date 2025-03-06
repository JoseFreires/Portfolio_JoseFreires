import {FaLinkedin, FaGithub} from 'react-icons/fa'

import "../../styles/components/socialNetwork.sass"

const socialNetworks = [
    {name:"linkedin", icon: <FaLinkedin />, link:"https://www.linkedin.com/in/josefreires/"},
    {name:"github", icon: <FaGithub />, link:"https://github.com/JoseFreires"},
]

const SocialNetwork = () => {
    return (
        <section id='socialNetworks'> 
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetwork;