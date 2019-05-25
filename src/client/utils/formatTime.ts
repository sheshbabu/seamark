export default function formatTime(value: number) {
  if (value / 1000 > 1) {
    return `${(value / 1000).toFixed(2)} s`;
  } else {
    return `${value.toFixed(2)} ms`;
  }
}
