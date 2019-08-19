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

// displays 'Closed' if the closed prop is true
describe('<Display />', () => {
  it("displays 'Closed' if the closed prop is true", () => {
    const { getByText } = render(
      <Display 
        closed='closed'
      />
    )
    const closed = getByText(/^Closed$/i)
    expect(closed).toBeTrue
  })
})

// displays 'Open' if the closed prop is !true
describe('<Display />', () => {
  it("displays 'Open' if the closed prop is false", () => {
    const { getByText } = render(
      <Display 
        closed= {!'closed'}
      />
    )
    const open = getByText(/^Open$/i)
    expect(open).toBeTrue
  })
})