import * as React from 'react'
import { render } from '@testing-library/react'
import { Root } from './root'

describe('root', () => {
  it('renders with theme context', () => {
    const { container, getByText } = render(<Root />)

    expect(getByText(/hello world/i))
    expect(container.firstChild).toMatchSnapshot()
  })
  it.todo('renders in dark mode')
  it.todo('renders in light mode')
  it.todo('switches between light and dark mode')
  it.todo('renders svg icons')
  it.todo('sets the document title')
})
