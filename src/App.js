import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router}>
        {router}
      </RouterProvider>
      <Footer />
    </div>
  )
}

export default App
