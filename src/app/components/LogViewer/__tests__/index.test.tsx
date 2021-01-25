import * as React from 'react';
import { render } from '@testing-library/react';

import { LogViewer } from '..';

describe('<LogViewer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LogViewer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
