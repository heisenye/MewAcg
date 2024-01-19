const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('history', 1)

    request.onupgradeneeded = (ev) => {
      const db = ev.target.result
      if (!db.objectStoreNames.contains('history')) {
        const store = db.createObjectStore('history', { keyPath: 'id' })
        store.createIndex('date', 'date', { unique: false })
      }
    }

    request.onsuccess = (ev) => {
      resolve(ev.target.result)
    }

    request.onerror = (ev) => {
      reject(ev.target.error)
    }
  })
}

async function getHistoryFromDB() {
  try {
    const db = await openDB()
    const tx = db.transaction(['history'], 'readwrite')
    const store = tx.objectStore('history')

    return new Promise((resolve, reject) => {
      const getReq = store.getAll()

      getReq.onsuccess = (ev) => {
        resolve(ev.target.result)
      }

      getReq.onerror = (ev) => {
        reject(ev.target.error)
      }
    })
  } catch (error) {
    console.error(error)
    return []
  }
}

async function storeHistoryToDB(id) {
  try {
    const db = await openDB()
    const tx = db.transaction(['history'], 'readwrite')
    const store = tx.objectStore('history')
    const date = new Date().toLocaleDateString('en-CA')
    const timestamp = Date.now()

    const entry = {
      date,
      id,
      timestamp
    }
    store.put(entry)

    await tx.done
  } catch (error) {
    console.error(error)
  }
}

const useHistory = {
  storeHistoryToDB,
  getHistoryFromDB
}

export default useHistory
