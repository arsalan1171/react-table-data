import { BasicTable,columns } from './table';
import { render } from '@testing-library/react';
import DataTable from 'react-data-table-component';
import React from 'react';
import data from './table_data.json';

test('it renders Basic Table component', () => {
    render(<BasicTable/>);
  });
  
test('it renders Data Table component without props', () => {
    render(<DataTable/>);
  });

test('it renders Data Table component with props', () => {
    render(<DataTable title="Collections Table"
    columns={columns}
    data={data.content}
    pagination
    highlightOnHover/>);
  });