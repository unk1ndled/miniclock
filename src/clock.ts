// clock.ts
export default function (): string {
  // Get the current date and time and format it using toLocaleTimeString
  const now = new Date();
  const formattedTime = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return formattedTime;
}
