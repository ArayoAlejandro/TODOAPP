import { useCard } from '../hooks/useCard'
import { Card } from './Card'

export function Cards () {
  const { todo } = useCard()
  return (
    <ul>
      {
        todo && todo.map((card, key) => {
          return (
            <Card key={key} card={card} />
          )
        })
      }
    </ul>
  )
}
