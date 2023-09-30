import { HeaderContainer } from './styles';

import LogoPomodoro from '../../assets/LogoPomodoro.svg'
import { Timer, Scroll } from 'phosphor-react';

export function Header () {
    return (
        <HeaderContainer>
            <img src={LogoPomodoro} />
            <span>Logo</span>
            <nav>
                <a href="">
                    <Timer size={24}/>
                </a>
                <a href="">
                    <Scroll size={24}/>
                </a>
            </nav>
        </HeaderContainer>
    )
}