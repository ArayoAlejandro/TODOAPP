import { useContext } from 'react'
import { ContextCard } from '../context/context'
import { cardSetLocalStorage } from '../utils'

export const useCard = () => {
  const { id, setId, todo, setTodo } = useContext(ContextCard)

  const changeCompleteCard = (id) => {
    const newTodo = todo
    const cardIndex = newTodo.findIndex((c) => c.id === id)
    const card = newTodo.find((c) => c.id === id)

    card.isCompleted = !card.isCompleted
    const part1 = newTodo.slice(0, cardIndex)
    const part2 = newTodo.slice(cardIndex + 1, newTodo[newTodo.length])
    const cards = [...part1, card, ...part2]

    cardSetLocalStorage(cards)
    setTodo(cards)
  }

  const removeCard = (id) => {
    setTodo(prev => {
      const newCards = prev.filter(e => e.id !== id)
      cardSetLocalStorage(newCards)
      return newCards
    })
  }

  const getCardId = () => {
    return todo.find((c) => c.id === id)
  }

  const cardFiltersTodoNotCompleted = () => {
    return todo.filter(todo => todo.isCompleted === false)
  }

  const cardFiltersTodoIsCompleted = () => {
    return todo.filter(todo => todo.isCompleted === true)
  }

  return {
    setId,
    todo,
    setTodo,
    cardFiltersTodoIsCompleted,
    cardFiltersTodoNotCompleted,
    removeCard,
    changeCompleteCard,
    getCardId
  }
}
