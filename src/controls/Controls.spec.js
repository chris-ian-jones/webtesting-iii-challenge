import React from 'react';
import renderer from 'react-test-renderer'; 
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'

import Controls from './Controls'

describe('<Controls />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />); 

    expect(tree.toJSON()).toMatchSnapshot();
  })
})

describe('<Controls />', () => {
  it('cannot be closed or opened if it is locked', () => {
    const { getByText } = render(
      <Controls 
      locked='locked'
      closed='closed'
      />
    )

    const openGate = getByText(/^Open Gate$/i)
    expect(openGate.closest('button')).toHaveAttribute('disabled');
  })
})