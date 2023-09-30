import { HeaderContainer } from "./styles";

export function Header () {
    return (
        <HeaderContainer>
            <span>Logo</span>
            <nav>
                <a href="">
                    Timer
                </a>
                <a href="">
                    History
                </a>
            </nav>
        </HeaderContainer>
    )
}