import { HeaderContainer } from "./styles";

import LogoPomodoro from "../../assets/LogoPomodoro.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoPomodoro} />
      <nav>
        <NavLink to="/Pomodoro" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/Pomodoro/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
