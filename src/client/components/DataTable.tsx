import React from "react";
import format from "date-fns/format";
import { Table, Popup } from "semantic-ui-react";
import styles from "./DataTable.css";

type Props = {
  rows: Array<Row>;
};

type Row = {
  timestamp: string;
  timeToFirstByte: string;
  firstContentfulPaint: string;
  firstMeaningfulPaint: string;
  speedIndex: string;
  timeToInteractive: string;
  totalByteWeight: string;
};

export default function DataTable(props: Props) {
  const rows = props.rows.map(row => <DataTableRow {...row} />);

  return (
    <div className={styles.container}>
      <Table striped singleLine>
        <DataTableHeader />
        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
}

function DataTableHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Popup
          trigger={<Table.HeaderCell>TTFB</Table.HeaderCell>}
          content="Time To First Byte"
          inverted
        />
        <Popup
          trigger={<Table.HeaderCell>FCP</Table.HeaderCell>}
          content="First Contentful Paint"
          inverted
        />
        <Popup
          trigger={<Table.HeaderCell>FMP</Table.HeaderCell>}
          content="First Meaningful Paint"
          inverted
        />
        <Table.HeaderCell>Speed Index</Table.HeaderCell>
        <Popup
          trigger={<Table.HeaderCell>TTI</Table.HeaderCell>}
          content="Time To Interactive"
          inverted
        />
        <Table.HeaderCell>Page Weight</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}

function DataTableRow(props: Row) {
  const timestamp = format(props.timestamp, "DD MMM YY");
  return (
    <Table.Row>
      <Table.Cell>{timestamp}</Table.Cell>
      <Table.Cell>{props.timeToFirstByte}</Table.Cell>
      <Table.Cell>{props.firstContentfulPaint}</Table.Cell>
      <Table.Cell>{props.firstMeaningfulPaint}</Table.Cell>
      <Table.Cell>{props.speedIndex}</Table.Cell>
      <Table.Cell>{props.timeToInteractive}</Table.Cell>
      <Table.Cell>{props.totalByteWeight}</Table.Cell>
    </Table.Row>
  );
}
