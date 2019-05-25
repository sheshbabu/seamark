import { LighthouseResult } from "../types/LighthouseResult.type";

export default function mapLighthouseResult(result: LighthouseResult) {
  const { fetchTime, lighthouseVersion, audits } = result;

  return {
    fetchTime,
    lighthouseVersion,
    timeToFirstByte: audits["time-to-first-byte"].numericValue,
    firstContentfulPaint: audits["first-contentful-paint"].numericValue,
    firstMeaningfulPaint: audits["first-meaningful-paint"].numericValue,
    timeToInteractive: audits["interactive"].numericValue,
    speedIndex: audits["speed-index"].numericValue,
    totalByteWeight: audits["total-byte-weight"].numericValue
  };
}
