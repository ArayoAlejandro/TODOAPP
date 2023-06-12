import './App.css'
import { Cards } from './components/Cards'
import { Form } from './components/Form'
import { Modal } from './components/Modal'
import { ModdaInner } from './components/ModalInner'

function App () {
  return (
    <main>
      <h1>TODO APP</h1>
      <Form />
      <Cards />
      <Modal>
        <ModdaInner />
      </Modal>
    </main>
  )
}
export default App
