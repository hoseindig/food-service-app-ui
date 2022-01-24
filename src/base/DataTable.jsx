import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// npm install @material-ui/data-grid

export default function DataTable({ data, columns, height }) {
  // checkboxSelection
  return (
    <div style={{ height: height ? height : 250, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // components={{
        //   Toolbar: GridToolbar,
        // }}
        // columnVisibilityModel={{
        //   // Hide columns status and traderName, the other columns will remain visible
        //   state: true,
        //   time: true,
        // }}
      />
    </div>
  );
}
