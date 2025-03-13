import './styles/global.css'
import './styles/reset.css'
import './styles/variables.css'
import { createRoot}  from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router'
import router from './router/index'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
