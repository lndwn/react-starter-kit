import React from 'react'
import { render } from '@testing-library/react'
import { App } from './app'

describe('index.tsx', () => {
  it('renders with theme context', () => {
    const { container, getByText } = render(<App />)

    expect(getByText(/hello world/i))
    expect(container.firstChild).toMatchSnapshot()
  })
})
