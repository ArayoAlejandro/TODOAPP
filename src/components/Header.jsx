import { Modal } from './Modal'
import { Form } from './Form'
import { useModal } from '../hooks/useModal'

export const Header = () => {
  const { modal, closeModal, openModal } = useModal()

  return (
    <>
      <header>
        <h1>TO-DO APP</h1>
        <button onClick={openModal}>
          NUEVA TAREA
        </button>
      </header>

      <Modal isOpen={modal} closeModal={closeModal}>
        <Form closeModal={closeModal} />
      </Modal>
    </>
  )
}
