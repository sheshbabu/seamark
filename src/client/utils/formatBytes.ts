export default function formatBytes(value: number) {
  if (value / 1000 / 1000 > 1) {
    return `${(value / 1000 / 1000).toFixed(2)} MB`;
  } else if (value / 1000 > 1) {
    return `${(value / 1000).toFixed(2)} KB`;
  } else {
    return `${value.toFixed(2)} B`;
  }
}
