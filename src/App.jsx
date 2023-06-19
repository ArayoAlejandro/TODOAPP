import './App.css'
import { Header } from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu'
import { CardPagesRouters } from './utils'
import { Loader } from './components/Loader'
import { CardPage } from './components/CardPage'

import lightbulb from './assets/lightbulb-outre.svg'
import check from './assets/check-outre.svg'
import alert from './assets/alert-outre.svg'
import { useCard } from './hooks/useCard'
function App () {
  const { cardFiltersTodoIsCompleted, cardFiltersTodoNotCompleted, todo } = useCard()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Menu />,
      loader: async () => <Loader />,
      children: [
        {
          path: CardPagesRouters.all,
          element: <CardPage
            imgOutre={alert}
            description='Añade ya una nueva tarea!'
            todo={todo}
                   />
        },
        {
          path: CardPagesRouters.working,
          element: <CardPage
            imgOutre={check}
            description='No hay tareas pendientes, felicidades!'
            todo={cardFiltersTodoNotCompleted()}
                   />
        },
        {
          path: CardPagesRouters.made,
          element: <CardPage
            imgOutre={lightbulb}
            description='No hay tareas terminadas empieza o acaba alguna'
            todo={cardFiltersTodoIsCompleted()}
                   />
        }
      ]
    }
  ])

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
          <RouterProvider router={router} />
        </div>
        <footer>
          <p>Made with ❤️ by  👉<a href='https://aarayo-portfolio.vercel.app/' target='_blank' rel='noreferrer'>Alejandro Arayo</a></p>
          <p>Ilustrations by  👉<a href='https://www.charco.design/' target='_blank' rel='noreferrer'>Charco</a></p>
        </footer>
      </main>
    </>
  )
}
export default App
