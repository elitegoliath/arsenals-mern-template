import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { styled } from 'baseui'
import { SomePage } from './somePage'

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

const BasePage = () => {
  return (
    <Router>
      <CenteredContent>
        <Switch>
          <Route path='/' exact component={SomePage} />
        </Switch>
      </CenteredContent>
    </Router>
  )
}

export default BasePage
