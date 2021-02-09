import * as React from 'react';
import { render } from '@testing-library/react';

import { EditItem } from '..';

describe('<EditItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<EditItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
