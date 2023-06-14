import { disableClickBody, enableClickBody } from '../utils'

export function Modal ({ children, isOpen, closeModal, title = 'Modal' }) {
  if (!isOpen) return

  if (isOpen) disableClickBody()
  const handleClick = () => {
    closeModal()
    enableClickBody()
  }

  return (
    <aside className='modal'>
      <header>
        <h2>{title}</h2>
        <button onClick={handleClick}>✖</button>
      </header>
      <div>
        {children}
      </div>
    </aside>
  )
}
