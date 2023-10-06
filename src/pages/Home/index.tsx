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
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
    .min(5, 'O ciclo precisa de no minimo 5 minutos')
    .max(60, 'O ciclo precisa de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//     task: string
//     minutesAmount: number
// }

type NewCycleFormData  = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null > (null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const id = String(new Date().getTime());

    function handleCreateNewCycle(data: NewCycleFormData) {
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount
        }
        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)

        reset()
    }

    const activeCycle = cycles.find((cycles) => cycles.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

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