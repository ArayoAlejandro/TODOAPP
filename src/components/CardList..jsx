import { useState } from 'react'
import { Card } from './Card'
import { ModdaInner } from './ModalInner'
import { Modal } from './Modal'

export const CardsList = ({ todo }) => {
  if (todo.lenght === 0) return
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <ul>
        {
        todo.map((todo, key) => {
          return (
            <Card key={key} todo={todo} setModal={setModal} />
          )
        })
        }
      </ul>
      <Modal isOpen={modal} closeModal={closeModal}>
        <ModdaInner />
      </Modal>
    </>
  )
}
