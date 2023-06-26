import { useContext } from 'react'
import { ContextCard } from '../context/card'

export const useCard = () => {
  const context = useContext(ContextCard)

  if (context === undefined) {
    throw new Error('useCard must be used within a CartProvider')
  }

  return context
}
