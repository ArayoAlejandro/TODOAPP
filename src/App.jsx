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
function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Menu />,
      loader: async () => <Loader />,
      children: [
        {
          path: CardPagesRouters.all,
          element: <CardPage imgOutre={alert} description='Añade ya una nueva tarea!' />
        },
        {
          path: CardPagesRouters.working,
          element: <CardPage imgOutre={check} description='No hay tareas pendientes, felicidades!' />
        },
        {
          path: CardPagesRouters.made,
          element: <CardPage imgOutre={lightbulb} description='No hay tareas terminadas empieza o acaba alguna' />
        }
      ]
    }
  ])

  return (
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
  )
}
export default App
