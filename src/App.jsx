
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router/Router'

function App() {
  return (
    <div className="max-w[1440px] mx-5">
      <RouterProvider router={Router}></RouterProvider>
    </div>

  )
}

export default App
