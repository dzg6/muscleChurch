import * as React from 'react';
import { render } from '@testing-library/react';

import { Column } from '..';

describe('<Column  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Column />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
