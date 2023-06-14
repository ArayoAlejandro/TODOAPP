import { useState } from 'react'
import { useCard } from '../hooks/useCard'
import { Card } from './Card'
import { Modal } from './Modal'
import { ModdaInner } from './ModalInner'

export function Cards () {
  const { todo } = useCard()
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <ul>
        {
        todo.length !== 0
          ? todo.map((todo, key) => {
            return (
              <Card key={key} todo={todo} setModal={setModal} />
            )
          })
          : 'Crea una nueva card'
      }
      </ul>
      <Modal isOpen={modal} closeModal={closeModal}>
        <ModdaInner />
      </Modal>
    </>
  )
}
