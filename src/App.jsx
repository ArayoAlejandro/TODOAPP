import './App.css'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { CardPage } from './components/CardPage'
import alert from './assets/alert-outre.svg'
import { useFilter } from './hooks/useFilters'
import { Footer } from './components/Footer'

function App () {
  const { filteredTodos, filterSelected, setFiltersSelected } = useFilter()
  return (
    <>
      <div
        className='bg'
        style={{
          top: 'var(--top)',
          left: 'var(--left)',
          width: 'var(--width)',
          height: 'var(--height)'
        }}
      />
      <main>
        <div>
          <Header />
          <Menu setFilter={setFiltersSelected} filterSelected={filterSelected} />
          <CardPage
            imgOutre={alert}
            description='Añade ya una nueva tarea!'
            todo={filteredTodos}
          />
        </div>
        <Footer />
      </main>
    </>
  )
}
export default App
