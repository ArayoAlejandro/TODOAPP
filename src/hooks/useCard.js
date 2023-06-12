import { useContext } from 'react'
import { ContextCard } from '../context/context'

export const useCard = () => {
  const { modal, setModal, todo, setTodo } = useContext(ContextCard)

  const changeCompleteCard = (uuid) => {
    const newTodo = todo
    const cardIndex = newTodo.findIndex((c) => c.uuid === uuid)

    const card = newTodo.find((c) => c.uuid === uuid)
    card.isCompleted = !card.isCompleted
    const part1 = newTodo.slice(0, cardIndex)
    const part2 = newTodo.slice(cardIndex + 1, newTodo[newTodo.length])

    setTodo([...part1, card, ...part2])
  }

  const getCardUuid = () => {
    const uuid = modal.uuid
    return todo.find((c) => c.uuid === uuid)
  }

  return {
    modal,
    setModal,
    todo,
    setTodo,
    changeCompleteCard,
    getCardUuid
  }
}
