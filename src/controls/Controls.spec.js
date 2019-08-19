import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'

import Controls from './Controls'

// shows the controls
describe('<Controls />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />); 

    expect(tree.toJSON()).toMatchSnapshot();
  })
})

// cannot be closed or opened if it is locked
describe('<Controls />', () => {
  it('cannot be closed or opened if it is locked', () => {
    const { getByText } = render(
      <Controls 
      locked= {true}
      closed= {true}
      />
    )

    const openGate = getByText(/^Open Gate$/i)
    expect(openGate.closest('button')).toHaveAttribute('disabled');
  })
})

// provide button to toggle the closed state
describe('<Controls />', () => {
  it('provide button to toggle the closed state', () => {
    const { getByText } = render(
      <Controls />
    )

    const closeButton = getByText(/^Close Gate$/i)
    expect(closeButton.closest('button')).toBeTrue;
  })
})

// provide button to toggle the locked state
describe('<Controls />', () => {
  it('provide button to toggle the locked state', () => {
    const { getByText } = render(
      <Controls />
    )

    const closeButton = getByText(/^Close Gate$/i)
    fireEvent.click(closeButton)

    const lockButton = getByText(/^Lock Gate$/i)
    expect(lockButton.closest('button')).toBeTrue;
  })
})