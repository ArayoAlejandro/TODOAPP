import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import { useCard } from './useCard'
import { cardSetLocalStorage, enableClickBody } from '../utils'

const MAX_CHAR_INPUT = 20

export const useForm = ({ closeModal = undefined }) => {
  const { setTodo } = useCard()
  const [input, setInput] = useState()
  const [number, setNumber] = useState(MAX_CHAR_INPUT)
  const [error, setError] = useState()

  useEffect(() => {
    if (input?.length === undefined) return
    setNumber(MAX_CHAR_INPUT - input.length)
  }, [input])

  const onChange = e => {
    e.preventDefault()
    if (e.target.value.length <= MAX_CHAR_INPUT) {
      setInput(e.target.value)
      setError('')
    } else {
      setError('El título es demasiado grande')
    }
  }

  const closeModalExist = () => {
    if (closeModal === undefined) return
    closeModal()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const textInput = e.target.title.value
    const textArea = e.target.description.value
    if (textArea === '' || textInput === '') {
      setError('Falta campos por rellenar')
      return
    }
    e.target.reset()
    enableClickBody()
    closeModalExist()
    setTodo(prev => {
      const newCards =
          [
            ...prev,
            {
              id: uuidv4(),
              title: textInput,
              description: textArea,
              date: new Date().toLocaleDateString(),
              isCompleted: false
            }
          ]

      cardSetLocalStorage(newCards)

      return newCards
    })
  }

  return { number, error, handleSubmit, onChange, input }
}
