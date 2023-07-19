import { useState } from 'react'
import { Card } from './Card'
import { CardViewModal } from './CardViewModal'
import { Modal } from './Modal'
import { useModal } from '../hooks/useModal'
import { useCard } from '../hooks/useCard'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const CardsList = ({ todo }) => {
  if (todo.lenght === 0) return
  const { removeCardsCompleted } = useCard()
  const { modal, closeModal, openModal } = useModal()
  const [card, setCard] = useState({})
  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <>
      <ul className='cards' ref={parent}>
        {
          todo.map((todo, key) => {
            return (
              <Card
                key={key}
                todo={todo}
                openModal={openModal}
                closeModal={closeModal}
                setCard={setCard}
              />
            )
          })
        }
      </ul>
      {
         todo.filter(c => c.isCompleted === true).length !== 0 &&
         (
           <p className='delete-cards' onClick={removeCardsCompleted}>Borrar tareas completas</p>
         )
      }

      <Modal isOpen={modal} closeModal={closeModal}>
        <CardViewModal card={card} closeModal={closeModal} />
      </Modal>
    </>
  )
}
