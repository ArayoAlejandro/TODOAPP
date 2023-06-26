import { useReducer, createContext } from 'react'

import { cardInitialState, cardReducer } from '../reducer/card'

export const ContextCard = createContext()

function useCardReducer () {
  const [state, dispatch] = useReducer(cardReducer, cardInitialState)

  const addToCard = card => dispatch({
    type: 'ADD_TO_CARD',
    payload: card
  })

  const getCardsNotCompleted = () => dispatch({
    type: 'GET_CARDS_NOT_COMPLETED'
  })

  const getCardsCompleted = () => dispatch({
    type: 'GET_CARDS_COMPLETED'
  })

  const removeCardId = card => dispatch({
    type: 'REMOVE_CARD',
    payload: card
  })

  const removeCardsCompleted = () => dispatch({
    type: 'REMOVE_COMPLETED_CARD'
  })

  const modifyCard = card => dispatch({
    type: 'MODIFY_CARD',
    payload: card
  })

  return {
    state,
    addToCard,
    getCardsNotCompleted,
    getCardsCompleted,
    removeCardId,
    removeCardsCompleted,
    modifyCard
  }
}

export function CardProvider ({ children }) {
  const {
    state,
    addToCard,
    removeCardId,
    removeCardsCompleted,
    modifyCard
  } = useCardReducer()

  return (
    <ContextCard.Provider value={{
      todo: state,
      addToCard,
      modifyCard,
      removeCardId,
      removeCardsCompleted
    }}
    >
      {children}
    </ContextCard.Provider>
  )
}
