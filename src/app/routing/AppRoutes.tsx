import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useAuth } from '@zeus/@hooks/auth/useAuth.tsx'
import { PrivateRoutes } from './PrivateRoutes'

import { App } from '../App'
import { AuthPage, Logout } from '../modules/_auth'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { SgrrhhPage } from '../modules/sgrrhh/SgrrhhPage'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env

export const AppRoutes: FC = () => {
  const { currentUser } = useAuth()
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/home' />} />
              <Route path='/sistema-rrhh' element={<SgrrhhPage />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
