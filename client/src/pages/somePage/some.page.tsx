import React from 'react'
import { SomePageComponent } from '.'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { useCounterActions, useCounterSelectors } from '../../redux'

const SomePage = () => {
  const { setCounter } = useCounterActions()
  const { count } = useCounterSelectors()

  const onSubtractCount = () => {
    setCounter(count - 1)
  }

  const onAddCount = () => {
    setCounter(count + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>This is a page.</div>
      <SomePageComponent />
      <div>
        <Block>Here's a test counter. It makes use of Redux.</Block>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={onSubtractCount}>-</Button>
          <Block>{count}</Block>
          <Button onClick={onAddCount}>+</Button>
        </div>
      </div>
    </div>
  )
}

export default SomePage
