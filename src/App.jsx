import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter} from 'react-router-dom'
import Homepage from "./components/Homepage"
import CountryDetailed from './components/CountryDetailed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:"/country/:id",
    element:<CountryDetailed />
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
