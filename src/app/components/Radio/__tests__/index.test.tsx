import * as React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '..';

describe('<Radio  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Radio />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
