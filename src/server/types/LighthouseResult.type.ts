type Audit = {
  numericValue: number;
};

export type LighthouseResult = {
  lighthouseVersion: string;
  fetchTime: string;
  audits: {
    "time-to-first-byte": Audit;
    "first-contentful-paint": Audit;
    "first-meaningful-paint": Audit;
    interactive: Audit;
    "speed-index": Audit;
    "total-byte-weight": Audit;
  };
};

export type MappedLighthouseResult = {
  fetchTime: string;
  lighthouseVersion: string;
  timeToFirstByte: number;
  firstContentfulPaint: number;
  firstMeaningfulPaint: number;
  timeToInteractive: number;
  speedIndex: number;
  totalByteWeight: number;
};
