-- up migration
CREATE TABLE IF NOT EXISTS audits (
  id SERIAL PRIMARY KEY,
  lighthouse_version VARCHAR(10) NOT NULL,
  fetch_time TIMESTAMP NOT NULL,
  time_to_first_byte REAL NOT NULL,
  first_contentful_paint REAL NOT NULL,
  first_meaningful_paint REAL NOT NULL,
  time_to_interactive REAL NOT NULL,
  speed_index REAL NOT NULL,
  total_byte_weight REAL NOT NULL
)
