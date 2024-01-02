export default function useDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return [currentYear];
}
