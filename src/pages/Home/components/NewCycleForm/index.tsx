import { useForm } from "react-hook-form"
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
    .min(1, 'O ciclo precisa de no minimo 5 minutos')
    .max(60, 'O ciclo precisa de no máximo 60 minutos'),
})


type NewCycleFormData  = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    return (
        <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput 
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                disabled={!!activeCycle}
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
                min={1}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true})}
                />

                <span>minutos.</span>
            </FormContainer>
    )
}