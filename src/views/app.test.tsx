import * as React from 'react'
import { render } from '@testing-library/react'
import { App } from './app'

describe('root', () => {
  test('renders', () => {
    const { container, getByText } = render(<App />)

    expect(getByText(/hello world/i))
    expect(container.firstChild).toMatchSnapshot()
  })
})
