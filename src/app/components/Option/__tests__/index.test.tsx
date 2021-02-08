import * as React from 'react';
import { render } from '@testing-library/react';

import { Option } from '..';

describe('<Option  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Option />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
