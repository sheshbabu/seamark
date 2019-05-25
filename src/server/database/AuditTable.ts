import Database from "./index";
import { MappedLighthouseResult } from "../types/LighthouseResult.type";
import { AuditRow } from "../types/AuditRow.type";

function insertAudit(audit: MappedLighthouseResult) {
  console.log(audit);

  const query = {
    text: `
      INSERT INTO audit (
        lighthouse_version,
        fetch_time, 
        time_to_first_byte, 
        first_contentful_paint, 
        first_meaningful_paint, 
        time_to_interactive, 
        speed_index, 
        total_byte_weight
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
    values: [
      audit.lighthouseVersion,
      audit.fetchTime,
      audit.timeToFirstByte,
      audit.firstContentfulPaint,
      audit.firstMeaningfulPaint,
      audit.timeToInteractive,
      audit.speedIndex,
      audit.totalByteWeight
    ]
  };

  return Database.query(query);
}

export default { insertAudit };
