import * as React from 'react';
import { render } from '@testing-library/react';

import { Title } from '..';

describe('<Title  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Title />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
