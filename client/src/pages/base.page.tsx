import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { styled } from 'baseui'
import { SomePage } from './somePage'
import { LoginPage } from './login'
import { useUserSelectors } from '../redux/user'

/**
 * This is a style component.
 * This is just a very basic example.
 */
const CenteredContent = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: $theme.colors.backgroundPrimary,
  color: $theme.colors.primary,
}))

interface iProtectedRouteProps {
  isAuthenticated: boolean
  path: string
  component: ReactNode
}

const ProtectedRoute = (_props: iProtectedRouteProps) => (
  <Route path={_props.path}>
    {_props.isAuthenticated ? _props.component : <Redirect to='/' />}
  </Route>
)

const BasePage = () => {
  const { authUser } = useUserSelectors()
  const isAuthed = authUser?.isAuthenticated || false

  return (
    <Router>
      <CenteredContent>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <ProtectedRoute isAuthenticated={isAuthed} path='/some-page' component={SomePage} />
        </Switch>
      </CenteredContent>
    </Router>
  )
}

export default BasePage
