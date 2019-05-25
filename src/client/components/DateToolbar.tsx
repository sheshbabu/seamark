import React from "react";
import { Button } from "semantic-ui-react";
import { DatesRangeInput } from "semantic-ui-calendar-react";
import styles from "./DateToolbar.css";

export default function DateToolbar() {
  return (
    <div className={styles.container}>
      <Button.Group>
        <Button>1W</Button>
        <Button>1M</Button>
        <Button>1Y</Button>
        <Button>MTD</Button>
        <Button>YTD</Button>
      </Button.Group>
      <DatesRangeInput
        name="datesRange"
        placeholder="From - To"
        value=""
        iconPosition="left"
        onChange={() => {}}
      />
    </div>
  );
}
