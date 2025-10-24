import { ref, watch } from 'vue'

const getToday = () => new Date().toLocaleDateString('en-CA')

const getHistoryFromStorage = () => {
  return JSON.parse(localStorage.getItem('history') ?? JSON.stringify({}))
}

const history = ref(getHistoryFromStorage())

const storeHistoryToStorage = (id) => {
  const today = getToday()
  const todayHistory = new Set((history.value[today] ?? []).reverse())
  if (todayHistory.has(id)) todayHistory.delete(id)
  todayHistory.add(id)
  history.value = { ...history.value, [today]: Array.from(todayHistory).reverse() }
}

const removeHistoryFromStorage = (date, id) => {
  const theDayHistory = new Set(history.value[date] ?? [])
  theDayHistory.delete(id)
  history.value = { ...history.value, [date]: Array.from(theDayHistory) }
}

watch(history, (newVal) => localStorage.setItem('history', JSON.stringify(newVal)))

const useStorageHistory = {
  history,
  storeHistoryToStorage,
  removeHistoryFromStorage
}

export default useStorageHistory
