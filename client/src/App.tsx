import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { AppStore } from './redux'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, BaseProvider } from 'baseui'
import { BasePage } from './pages'

const styletronEngine = new Styletron()

const App = () => {
  return (
    <ReduxProvider store={AppStore}>
      <StyletronProvider value={styletronEngine}>
        <BaseProvider theme={DarkTheme}>
          <BasePage />
        </BaseProvider>
      </StyletronProvider>
    </ReduxProvider>
  )
}

export default App
