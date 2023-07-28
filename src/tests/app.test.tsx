import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  test('Should show greeting', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello World!!')).toBeDefined();
  });
});
