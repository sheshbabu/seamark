export type AuditRow = {
  id: number;
  lighthouse_version: string;
  fetch_time: string;
  time_to_first_byte: number;
  first_contentful_paint: number;
  first_meaningful_paint: number;
  time_to_interactive: number;
  speed_index: number;
  total_byte_weight: number;
};
