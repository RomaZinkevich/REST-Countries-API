import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter} from 'react-router-dom'
import Homepage from "./components/Homepage"
import CountryDetailedPage from './components/CountryDetailedPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:"/country/:id",
    element:<CountryDetailedPage />
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
