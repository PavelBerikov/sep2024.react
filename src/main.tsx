import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

const router = createBrowserRouter([
    {
        path: '/', element:<MainLayout/>, children: [
            {path: 'about', element: <AboutPage/>},
            {path: 'contact', element: <ContactPage/>}
        ]
    }
])
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
