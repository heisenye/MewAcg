import { createApp } from 'vue'
import AlertBox from './AlertBox'
import ToastBox from './ToastBox'

function showMsg({ msg, messageType, popupType = 'alert', toastPos, duration = 1500, fn }) {
  const div = document.createElement('div')
  div.setAttribute('id', 'msg')
  document.body.appendChild(div)
  let box

  switch (popupType) {
    case 'alert':
      box = AlertBox
      break
    case 'toast':
      box = ToastBox
      break
  }

  const type = messageType

  const appProps = {
    msg,
    type,
    click: () => {
      if (fn && typeof fn === 'function') fn()
      setTimeout(() => {
        app.unmount()
        div.remove()
      }, 500)
      div.classList.add('opacity-0', 'transition-opacity', 'duration-500')
    }
  }

  if (popupType === 'toast' && toastPos) {
    appProps.position = toastPos
  }

  const app = createApp(box, appProps)
  app.mount(div)

  setTimeout(() => {
    setTimeout(() => {
      app.unmount()
      div.remove()
    }, 500)

    div.classList.add('opacity-0', 'transition-opacity', 'duration-500')
  }, duration)

  return {
    close: () => {
      setTimeout(() => {
        app.unmount()
        div.remove()
      }, 500)
      div.classList.add('opacity-0', 'transition-opacity', 'duration-500')
    }
  }
}

export default showMsg
