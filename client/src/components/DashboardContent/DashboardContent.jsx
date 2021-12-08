import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";

import TotalIssues from "./TotalIssues";
import RecentsTable from "./RecentsTable";

const DashboardContent = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
        >
          <TotalIssues />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
        >
          <RecentsTable />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
