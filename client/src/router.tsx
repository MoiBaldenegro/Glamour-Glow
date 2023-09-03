// router
import { createBrowserRouter } from 'react-router-dom'
// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.tsx'
// error component
import NotFound from './pages/NotFound/NotFound.tsx'
// component
import Forms from './pages/Forms/Forms.tsx'
import BusinessDetail from './pages/BusinessDetail/BusinessDetail.tsx'
import FormBusiness from './components/FormCreateBusiness/FormCreateBusiness.tsx'
import BusinessCardsView from './pages/BusinessCardsView/BusinessCardsView.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      // home
      {
        index: true,
        element: <Home />
      },
      {
        path: '/detail/:id',
        children: [
          {
            index: true,
            element: <BusinessDetail />
          }]
      },
      {
        path: '/business',
        children: [
          {
            index: true,
            element: <BusinessCardsView />
          }]
      },
      {
        path: '/login',
        children: [
          {
            index: true,
            element: <Forms />
          }
        ]
      },
      {
        path: '/businessRegister',
        children: [
          {
            index: true,
            element: <FormBusiness />
          }
        ]
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/admin',
        children: [
          {
            index: true,
            element: <AdminDashboard />
          }
        ]
      }
    ]
  }
])

export default router
