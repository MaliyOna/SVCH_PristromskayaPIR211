import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrigadesPage } from './../pages/BrigadesPage/BrigadesPage';
import * as allApi from '../shared/api/allApi';

jest.mock('../shared/api/allApi', () => ({
  getAll: jest.fn(),
  create: jest.fn(),
}));

describe('BrigadesPage', () => {
  it('renders BrigadesPage component', async () => {
    allApi.getAll.mockResolvedValueOnce([
      { _id: '1', title: 'Brigade 1' },
      { _id: '2', title: 'Brigade 2' },
    ]);

    render(
      <MemoryRouter>
        <BrigadesPage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(2);
  });

  it('renders BrigadesPage component', async () => {
    allApi.getAll.mockResolvedValueOnce([
      { _id: '1', title: 'Brigade 1' },
      { _id: '2', title: 'Brigade 2' },
      { _id: '3', title: 'Brigade 3' },
    ]);

    render(
      <MemoryRouter>
        <BrigadesPage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(3);
  });

  it('renders BrigadesPage component', async () => {
    allApi.getAll.mockResolvedValueOnce([
      { _id: '1', title: 'Brigade 1' },
      { _id: '2', title: 'Brigade 2' },
      { _id: '3', title: 'Brigade 3' },
      { _id: '4', title: 'Brigade 4' },
      { _id: '5', title: 'Brigade 5' },
    ]);

    render(
      <MemoryRouter>
        <BrigadesPage />
      </MemoryRouter>
    );

    const brigadeBlocks = await screen.findAllByText(/Brigade/);

    expect(brigadeBlocks).toHaveLength(5);
  });
});