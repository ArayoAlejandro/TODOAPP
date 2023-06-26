import { cardGetLocalStorage, cardSetLocalStorage, sliceCardWithID } from '../utils'
import { v4 as uuidv4 } from 'uuid'

export const CARD_ACTION_TYPES = {
  ADD_TO_CARD: 'ADD_TO_CARD',
  GET_CARDS_NOT_COMPLETED: 'GET_CARDS_NOT_COMPLETED',
  GET_CARDS_COMPLETED: 'GET_CARDS_COMPLETED',
  REMOVE_CARD: 'REMOVE_CARD',
  REMOVE_COMPLETED_CARD: 'REMOVE_COMPLETED_CARD',
  MODIFY_CARD: 'MODIFY_CARD'
}

const UPDATE_STATE_BY_ACTION = {
  [CARD_ACTION_TYPES.ADD_TO_CARD]: (state, action) => {
    const { title, description } = action.payload
    const id = uuidv4()
    const date = new Date().toLocaleDateString()
    const isCompleted = false

    const newCard = { title, description, id, date, isCompleted }
    return [...state, newCard]
  },
  [CARD_ACTION_TYPES.REMOVE_CARD]: (state, action) => {
    const { id } = action.payload

    const newCards = state.filter(e => e.id !== id)
    cardSetLocalStorage(newCards)
    return newCards
  },
  [CARD_ACTION_TYPES.REMOVE_COMPLETED_CARD]: (state) => {
    const carsNotCompleted = state.filter(card => card.isCompleted === false)
    cardSetLocalStorage(carsNotCompleted)
    return carsNotCompleted
  },
  [CARD_ACTION_TYPES.MODIFY_CARD]: (state, action) => {
    const { id, title, description, isCompleted } = action.payload

    const { part1, part2, cardSelectId } = sliceCardWithID(id, state)

    cardSelectId.title = title
    cardSelectId.description = description
    cardSelectId.isCompleted = isCompleted

    const cards = [...part1, cardSelectId, ...part2]

    cardSetLocalStorage(cards)
    return cards
  }
}

export const cardInitialState = cardGetLocalStorage || []

export const cardReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
