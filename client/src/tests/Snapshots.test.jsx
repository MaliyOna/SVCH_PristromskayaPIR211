import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react';

import { Footer } from '../shared/components/Footer/Footer';
import { AreaBlock } from '../shared/components/AreaBlock/AreaBlock';
import { BrigadeBlock } from '../shared/components/BrigadeBlock/BrigadeBlock';
import { ScheduleBlock } from '../shared/components/ScheduleBlock/ScheduleBlock';
import { CheckboxCheck } from '../shared/components/CheckboxCheck/CheckboxCheck';
import { Input } from '../shared/components/Input/Input';
import { ButtonsGroup } from '../shared/components/ButtonsGroup/ButtonsGroup';
import { Content } from '../shared/components/Content/Content';
import { PopupWindow } from '../shared/components/PopupWindow/PopupWindow';
import { SimpleAvatar } from '../shared/components/SimpleAvatar/SimpleAvatar';

test('renders Footer component correctly', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

test('renders AreaBlock component correctly', () => {
  const { container } = render(<AreaBlock />);
  expect(container).toMatchSnapshot();
});

test('renders BrigadeBlock component correctly', () => {
  const { container } = render(<BrigadeBlock />);
  expect(container).toMatchSnapshot();
});

test('renders ScheduleBlock component correctly', () => {
  const { container } = render(<ScheduleBlock />);
  expect(container).toMatchSnapshot();
});

test('renders CheckboxCheck component correctly', () => {
  const { container } = render(<CheckboxCheck />);
  expect(container).toMatchSnapshot();
});

test('renders Input component correctly', () => {
  const { container } = render(<Input />);
  expect(container).toMatchSnapshot();
});

test('renders ButtonsGroup component correctly', () => {
  const { container } = render(<ButtonsGroup />);
  expect(container).toMatchSnapshot();
});

test('renders Content component correctly', () => {
  const { container } = render(<Content />);
  expect(container).toMatchSnapshot();
});

test('renders PopupWindow component correctly', () => {
  const { container } = render(<PopupWindow />);
  expect(container).toMatchSnapshot();
});

test('renders SimpleAvatar component correctly', () => {
  const { container } = render(<SimpleAvatar />);
  expect(container).toMatchSnapshot();
});
