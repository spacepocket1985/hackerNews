export const TimeConverter = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleString();

  return formattedDate;
};
