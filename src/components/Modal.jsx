import { useCard } from '../hooks/useCard'

export function Modal ({ children }) {
  const { modal } = useCard()

  if (!modal.isOpen) return
  return (
    <aside className='modal'>
      {children}
    </aside>
  )
}
