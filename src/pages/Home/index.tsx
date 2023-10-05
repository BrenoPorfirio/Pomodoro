import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

import {
    HomeContainer,
    FormContainer,
    CounterdownContainer, 
    Separator, 
    StartCounterdownButton, 
    TaskInput, 
    MinutesAmountInput
    } from "./styles";


export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(data: unknown) {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return(
    <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
            <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput 
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                {...register('task')}
                />

                <datalist id="task-suggestions">
                    <option value="Projeto 1"></option>
                    <option value="Beber água"></option>
                    <option value="Programar"></option>
                    <option value="Descansar"></option>
                </datalist>

                <label htmlFor="">durante</label>
                <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true})}
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
            <StartCounterdownButton  disabled={isSubmitDisabled} type="submit">
                <Play size={24}/>
                Começar
            </StartCounterdownButton>
        </form>
    </HomeContainer>
    )
}