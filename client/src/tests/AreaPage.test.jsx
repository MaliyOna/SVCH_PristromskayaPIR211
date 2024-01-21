import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AreaPage } from './../pages/AreaPage/AreaPage';
import * as allApi from '../shared/api/allApi';

jest.mock('../shared/api/allApi', () => ({
  getAll: jest.fn(),
  create: jest.fn(),
}));

describe('AreaPage', () => {
  it('renders AreaPage component', async () => {
    const mockData = [
      { _id: '1', title: 'Brigade 1', area: { title: 'Area 1' }, schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', area: { title: 'Area 2' }, schedule: { title: 'Schedule 2' } },
    ];

    allApi.getAll.mockResolvedValueOnce(mockData);

    await act(async () => {
      render(
        <MemoryRouter>
          <AreaPage />
        </MemoryRouter>
      );
    });

    const brigadeBlocks = screen.getAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(mockData.length);
  });

  it('renders AreaPage component', async () => {
    const mockData = [
      { _id: '1', title: 'Brigade 1', area: { title: 'Area 1' }, schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', area: { title: 'Area 2' }, schedule: { title: 'Schedule 2' } },
      { _id: '3', title: 'Brigade 3', area: { title: 'Area 3' }, schedule: { title: 'Schedule 3' } },
    ];

    allApi.getAll.mockResolvedValueOnce(mockData);

    await act(async () => {
      render(
        <MemoryRouter>
          <AreaPage />
        </MemoryRouter>
      );
    });

    const brigadeBlocks = screen.getAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(mockData.length);
  });

  it('renders AreaPage component', async () => {
    const mockData = [
      { _id: '1', title: 'Brigade 1', area: { title: 'Area 1' }, schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', area: { title: 'Area 2' }, schedule: { title: 'Schedule 2' } },
      { _id: '3', title: 'Brigade 3', area: { title: 'Area 3' }, schedule: { title: 'Schedule 3' } },
      { _id: '4', title: 'Brigade 4', area: { title: 'Area 4' }, schedule: { title: 'Schedule 4' } },
      { _id: '5', title: 'Brigade 5', area: { title: 'Area 5' }, schedule: { title: 'Schedule 5' } },
    ];

    allApi.getAll.mockResolvedValueOnce(mockData);

    await act(async () => {
      render(
        <MemoryRouter>
          <AreaPage />
        </MemoryRouter>
      );
    });

    const brigadeBlocks = screen.getAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(mockData.length);
  });

  it('renders AreaPage component', async () => {
    const mockData = [
      { _id: '1', title: 'Brigade 1', area: { title: 'Area 1' }, schedule: { title: 'Schedule 1' } },
      { _id: '2', title: 'Brigade 2', area: { title: 'Area 2' }, schedule: { title: 'Schedule 2' } },
      { _id: '3', title: 'Brigade 3', area: { title: 'Area 3' }, schedule: { title: 'Schedule 3' } },
      { _id: '4', title: 'Brigade 4', area: { title: 'Area 4' }, schedule: { title: 'Schedule 4' } },
      { _id: '5', title: 'Brigade 5', area: { title: 'Area 5' }, schedule: { title: 'Schedule 5' } },
      { _id: '6', title: 'Brigade 6', area: { title: 'Area 6' }, schedule: { title: 'Schedule 6' } },
      { _id: '7', title: 'Brigade 7', area: { title: 'Area 7' }, schedule: { title: 'Schedule 7' } },
      { _id: '8', title: 'Brigade 8', area: { title: 'Area 8' }, schedule: { title: 'Schedule 8' } },
      { _id: '9', title: 'Brigade 9', area: { title: 'Area 9' }, schedule: { title: 'Schedule 9' } },
    ];

    allApi.getAll.mockResolvedValueOnce(mockData);

    await act(async () => {
      render(
        <MemoryRouter>
          <AreaPage />
        </MemoryRouter>
      );
    });

    const brigadeBlocks = screen.getAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(mockData.length);
  });
});

