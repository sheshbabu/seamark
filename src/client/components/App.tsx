import React from "react";
import { Container, Header } from "semantic-ui-react";
import DateToolbar from "./DateToolbar";
import AreaChart from "./AreaChart";
import DataTable from "./DataTable";
import styles from "./App.css";

import MetricsMock from "../mock/metrics.json";
import MetricsAggregatedMock from "../mock/metrics_aggregated.json";

export default function App() {
  return (
    <div className={styles.container}>
      <Container text>
        <Header as="h1">Seamark</Header>
        <DateToolbar />
        <AreaChart data={MetricsAggregatedMock} />
        <DataTable rows={MetricsMock} />
      </Container>
    </div>
  );
}
