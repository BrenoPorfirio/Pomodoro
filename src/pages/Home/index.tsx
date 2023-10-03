import { Play } from "phosphor-react";

import { HomeContainer, FormContainer, CounterdownContainer, Separator, StartCounterdownButton, TaskInput, MinutesAmountInput } from "./styles";

export function Home() {
    return(
    <HomeContainer>
        <form action="">

            <FormContainer>
                <label htmlFor="">Vou trabalhar em</label>
                <TaskInput 
                id="task"
                placeholder="Dê um nome para seu projeto"
                />

                <label htmlFor="">durante</label>
                <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                />

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