import { Play } from "phosphor-react";

import { HomeContainer, FormContainer, CounterdownContainer, Separator, StartCounterdownButton } from "./styles";

export function Home() {
    return(
    <HomeContainer>
        <form action="">
            <FormContainer>
                <label htmlFor="">Vou trabalhar em</label>
                <input type="task" />

                <label htmlFor="">durante</label>
                <input type="number" id="minutesAmount" />

                <span>minutos.</span>
            </FormContainer>

            <CounterdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CounterdownContainer>
            <StartCounterdownButton disabled type="submit">
                <Play size={24}/>
                Começar
            </StartCounterdownButton>
        </form>
    </HomeContainer>
    )
}