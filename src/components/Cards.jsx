import { useCard } from '../hooks/useCard'
import { Card } from './Card'

export function Cards () {
  const { todo } = useCard()
  return (
    <ul>
      {
        todo && todo.map((todo, key) => {
          return (
            <Card key={key} todo={todo} />
          )
        })
      }
    </ul>
  )
}
