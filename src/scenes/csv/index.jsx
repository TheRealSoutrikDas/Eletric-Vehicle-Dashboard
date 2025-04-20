import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Papa from 'papaparse';

const CsvViewer = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch('/Electric_Vehicle_Population_Data.csv')
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const data = parsed.data;

        const columnDefs = Object.keys(data[0]).map((key) => ({
          field: key,
          headerName: key,
          width: 150,
        }));

        const rowData = data.map((row, index) => ({
          id: index,
          ...row,
        }));

        setColumns(columnDefs);
        setRows(rowData);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        RAW Electric Vehicle Data
      </Typography>

      {rows.length > 0 ? (
        <div style={{ height: 500, marginTop: 20 }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
      ) : (
        <Typography>Loading CSV data...</Typography>
      )}
    </Container>
  );
};

export default CsvViewer;
