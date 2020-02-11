import React from 'react'
import { useCounterSelectors } from '../../redux'
import { Block } from 'baseui/block'
import { Theme } from 'baseui/theme'

const SomePageComponent = () => {
  const { count } = useCounterSelectors()

  return (
    <div>
      <Block>Some page-specific component.</Block>
      <Block overrides={{
        Block: {
          style: ({ $theme }: {$theme: Theme}) => ({
            color: $theme.colors.warning
          })
        }
      }}>{count}</Block>
    </div>
  )
}

export default SomePageComponent
