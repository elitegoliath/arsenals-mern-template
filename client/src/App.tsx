import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, BaseProvider } from 'baseui'

const styletronEngine = new Styletron()

const App = () => {
  return (
    <StyletronProvider value={styletronEngine}>
      <BaseProvider theme={DarkTheme}>
        <div>Welcome to the jungle.</div>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
