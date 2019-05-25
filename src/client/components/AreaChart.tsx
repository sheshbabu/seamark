import React from "react";
import format from "date-fns/format";
import { Menu, Dropdown, Segment } from "semantic-ui-react";
import FrappeChartWrapper from "./FrappeChartWrapper";
import styles from "./AreaChart.css";

type Props = {
  data: Array<{
    date: string;
    value: number;
  }>;
};

const options = [
  {
    key: "Time To First Byte",
    text: "Time To First Byte",
    value: "Time To First Byte"
  },
  {
    key: "First Contentful Paint",
    text: "First Contentful Paint",
    value: "First Contentful Paint"
  },
  {
    key: "First Meaningful Paint",
    text: "First Meaningful Paint",
    value: "First Meaningful Paint"
  },
  {
    key: "Speed Index",
    text: "Speed Index",
    value: "Speed Index"
  },
  {
    key: "Time To Interactive",
    text: "Time To Interactive",
    value: "Time To Interactive"
  },
  {
    key: "Page Weight",
    text: "Page Weight",
    value: "Page Weight"
  }
];

export default function AreaChart(props: Props) {
  return (
    <div className={styles.container}>
      <Menu attached="top">
        <Menu.Menu>
          <span className={styles.dropdown}>
            Metric:{" "}
            <Dropdown
              inline
              options={options}
              defaultValue={options[0].value}
            />
          </span>
        </Menu.Menu>
      </Menu>
      <Segment attached>
        <FrappeChartWrapper
          type="bar"
          colors={["#21ba45"]}
          axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
          height={250}
          data={{
            labels: props.data.map(d => format(d.date, "DD MMM YY")),
            datasets: [{ values: props.data.map(d => d.value) }]
          }}
        />
      </Segment>
    </div>
  );
}
