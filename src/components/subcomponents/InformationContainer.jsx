import {AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../../styles/components/informationContainer.sass'

const InformationContainer = () => {
    return (
        <section id='information'>
            <div className='info-card'>
                <AiOutlineMail  id='mail-icon'/>
                <div>
                    <h3>Email</h3>
                    <p>jose.freires.dev@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment  id='pin-icon'/>
                <div>
                    <h3>Localização</h3>
                    <p>São Paulo - SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer;