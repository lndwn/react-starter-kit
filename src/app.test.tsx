import React from 'react'
import { render } from '@testing-library/react'
import { App } from './app'
import { TestFrame } from './utils/test-frame'

describe('index.tsx', () => {
  it('renders with theme context', () => {
    const { container, getByText } = render(
      <TestFrame>
        <App />
      </TestFrame>
    )

    expect(getByText(/hello world/i))
    expect(container.firstChild).toMatchSnapshot()
  })
})
