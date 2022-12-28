import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StarCountdawnButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em: </label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto. "
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
        <StarCountdawnButton type="submit">
          <Play size={24} />
          Começar
        </StarCountdawnButton>
      </form>
    </HomeContainer>
  )
}
