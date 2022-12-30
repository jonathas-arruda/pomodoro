import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StarCountdawnButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutsAmmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

interface NewCycleFormData {
  task: string
  minutsAmmount: number
}
export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutsAmmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em: </label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto. "
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Testando 1" />
            <option value="Testando 2" />
            <option value="Testando 3" />
            <option value="Testando 4" />
            <option value="Testando 5" />
            <option value="Testando 6" />
          </datalist>
          <label htmlFor="minutsAmmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutsAmmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutsAmmount', { valueAsNumber: true })}
          />

          <span>minutos. </span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StarCountdawnButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StarCountdawnButton>
      </form>
    </HomeContainer>
  )
}
