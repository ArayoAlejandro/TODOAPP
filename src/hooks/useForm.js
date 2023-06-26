import { useState, useEffect } from 'react'
import { useCard } from './useCard'
import { enableClickBody } from '../utils'

const MAX_CHAR_INPUT = 20

export const useForm = ({ closeModal = undefined }) => {
  const { addToCard } = useCard()
  const [inputChar, setInputChar] = useState()
  const [maxChar, setmaxChar] = useState(MAX_CHAR_INPUT)
  const [error, setError] = useState()

  useEffect(() => {
    if (inputChar?.length === undefined) return
    setmaxChar(MAX_CHAR_INPUT - inputChar.length)
  }, [inputChar])

  const onChange = e => {
    e.preventDefault()
    if (e.target.value.length <= MAX_CHAR_INPUT) {
      setInputChar(e.target.value)
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
    addToCard({
      title: textInput,
      description: textArea
    })
  }

  return { maxChar, error, handleSubmit, onChange, inputChar, setInputChar }
}
