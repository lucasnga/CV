import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import App from './App'

describe('main App component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = render(<App />)
    expect(component).toMatchSnapshot()
  })

  // it('should render end be visible', () => {
  //   jest.mock('./App', () => jest.fn())
  //   const App = require('./App').mock

  //   expect(App).toHaveStyle('display: block')
  // })
})
