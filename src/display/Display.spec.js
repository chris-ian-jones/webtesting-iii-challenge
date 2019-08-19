import React from 'react';
import renderer from 'react-test-renderer'; 
import { render } from '@testing-library/react'

import Display from './Display'

// shows the display
describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />); 

    expect(tree.toJSON()).toMatchSnapshot();
  })
})

// defaults to unlocked and open
describe('<Display />', () => {
  it('defaults to unlocked and open', () => {
    const { getByText } = render(<Display />)

    const unlocked = getByText(/^unlocked$/i)
    const open = getByText(/open/i)
    
    expect(unlocked).toBeTrue
    expect(open).toBeTrue
  })
})