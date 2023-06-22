import { Modal } from './Modal'
import { Form } from './Form'
import { useState } from 'react'

export const Header = () => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <header>
        <h1>TO-DO APP</h1>
        <button onClick={() => setModal(true)}>
          Nueva tarea
        </button>
      </header>

      <Modal isOpen={modal} closeModal={closeModal}>
        <Form closeModal={closeModal} />
      </Modal>
    </>
  )
}
