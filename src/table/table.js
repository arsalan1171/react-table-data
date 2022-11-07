import React from 'react';
import DataTable from 'react-data-table-component';
import data from './table_data.json';

export const columns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Audience Type',
    selector: row => row.audienceType,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
  {
    name: 'Region',
    selector: row => row.region,
    sortable: true,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
  },
  {
    name: 'Image',
    selector: row => row.image,
    cell: tableProps => (
      <img src={tableProps.image} height="80px" alt='' />
    )
  },
  
];

export const BasicTable=()=> {

  return (
    <div >
      <DataTable
        title="Collections Table"
        columns={columns}
        data={data.content}
        pagination
        highlightOnHover
      />
    </div>
  );
}
