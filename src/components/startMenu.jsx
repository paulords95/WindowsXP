import React from 'react'
import './startMenu.css'
import github from '../imgs/github.png'
import linkedin from '../imgs/linkedin.png'
import avatar from '../imgs/avatar.jfif'




const StartMenu = () => {
    return (
        <div className='startMenuWrapper'>
            <div className='userName noselect'>
                <img alt='avatar' id='userAvatar' src={avatar}></img>
                <h1 id='avatarName'>Paulo Ricardo da Silva</h1>
            </div>
            <div className='startContentLeft noselect'>
                <ul>
                    <li className='itemList' onClick={()=> {
                        let url = 'https://github.com/paulords95'
                        const win = window.open(url, '_blank');
                        win.focus();
                    }}>
                        <img alt='logo' id='gh' src={github}></img>
                        <div className='titleWrap'>
                            <h1 className='leftTitle'>GitHub</h1>
                            <h2 className='leftDescription'>Meu GitHub</h2>
                        </div>
                    </li>
                    <li className='itemList' onClick={()=> {
                        let url = 'https://www.linkedin.com/in/paulo-ricardo-97360573/'
                        const win = window.open(url, '_blank');
                        win.focus();
                    }}>
                        <img alt='logo' id='linkedin' src={linkedin}></img>
                        <div className='titleWrap'>
                            <h1 className='leftTitle'>Linkedin</h1>
                            <h2 className='leftDescription'>Meu Linkedin</h2>
                        </div>
                    </li>
                    <hr></hr>
                </ul>
            </div>
            <div className='startContentRight'></div>
        </div>
    )
}


export default StartMenu