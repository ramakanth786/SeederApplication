import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Slider from './index'

describe('Slider Tests', () => {
  it('renders the slider component', () => {
    const { container } = render(
      <Slider max={0} />
    )
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeInTheDocument()
  })
})