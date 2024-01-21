import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SchedulePage } from './../pages/SchedulePage/SchedulePage';
import * as allApi from '../shared/api/allApi';

jest.mock('../shared/api/allApi', () => ({
  getAll: jest.fn(),
  create: jest.fn(),
}));

describe('SchedulePage', () => {
  it('renders SchedulePage component', async () => {
    const apiData = [
      { _id: '1', title: 'Brigade 1', schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', schedule: { title: 'Schedule 2' } },
    ];

    allApi.getAll.mockResolvedValueOnce(apiData);

    render(
      <MemoryRouter>
        <SchedulePage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(2);
  });

  it('renders SchedulePage component', async () => {
    const apiData = [
      { _id: '1', title: 'Brigade 1', schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', schedule: { title: 'Schedule 2' } },
      { _id: '3', title: 'Brigade 3', schedule: { title: 'Schedule 3' } },
    ];

    allApi.getAll.mockResolvedValueOnce(apiData);

    render(
      <MemoryRouter>
        <SchedulePage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(3);
  });

  it('renders SchedulePage component', async () => {
    const apiData = [
      { _id: '1', title: 'Brigade 1', schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', schedule: { title: 'Schedule 2' } },
      { _id: '3', title: 'Brigade 3', schedule: { title: 'Schedule 3' } },
      { _id: '4', title: 'Brigade 4', schedule: { title: 'Schedule 4' } },
      { _id: '5', title: 'Brigade 5', schedule: { title: 'Schedule 5' } },
    ];

    allApi.getAll.mockResolvedValueOnce(apiData);

    render(
      <MemoryRouter>
        <SchedulePage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(5);
  });
});
