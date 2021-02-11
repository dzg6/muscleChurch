import * as React from 'react';
import { render } from '@testing-library/react';

import { EditInput } from '..';

describe('<EditInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<EditInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
