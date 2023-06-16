import { useState } from 'react'
import './App.css'
import { AllCardsPage } from './components/AllCardsPage'
import { Header } from './components/Header'
import { WorkCardsPage } from './components/WorkCardsPage'
import { MadeCardsPage } from './components/MadeCardsPage'

function App () {
  const CardPage = {
    all: <AllCardsPage />,
    work: <WorkCardsPage />,
    made: <MadeCardsPage />
  }

  const [page, setPage] = useState(CardPage.all)

  return (
    <main>
      <Header />

      <div className='bg' style={{ translate: 'var(--left) var(--top)', width: 'var(--width)', height: 'var(--height)' }} />
      <nav>
        <div>
          <p onClick={() => setPage(CardPage.all)}>TODOS</p>
        </div>
        <div>
          <p onClick={() => setPage(CardPage.work)}>TRABAJANDO</p>
        </div>
        <div>
          <p onClick={() => setPage(CardPage.made)}>HECHOS</p>
        </div>
      </nav>
      {
        page
      }
    </main>
  )
}
export default App
