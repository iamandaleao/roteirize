export default function useToday() {
  const today = new Date()
  today.setHours(23, 59, 59, 999)

  return today.toISOString().split('T')[0]
}
