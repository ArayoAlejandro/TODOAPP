import { useState } from 'react'
import { CardPagesRouters, menuGetLocalStorage } from '../utils'
import { useCard } from './useCard'

export const useFilter = () => {
  const { todo } = useCard()

  const [filterSelected, setFiltersSelected] = useState(CardPagesRouters[menuGetLocalStorage?.page] || CardPagesRouters.all)

  const filteredTodos = todo.filter(todo => {
    if (filterSelected === CardPagesRouters.made) return todo.isCompleted
    if (filterSelected === CardPagesRouters.working) return !todo.isCompleted
    return todo
  })

  return { setFiltersSelected, filteredTodos, filterSelected }
}
