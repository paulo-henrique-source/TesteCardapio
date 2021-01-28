import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

function Main() {
  var myPrompt

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
          console.log('SW scope:', registration.scope)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }

  window.onload = function () {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      myPrompt = e
    })

    Swal.fire({
      title: 'Deseja Adicionar a tela Inicial?',
      showDenyButton: true,
      confirmButtonText: `Adicionar`,
      denyButtonText: `Não Adicionar`,
    }).then((result) => {
      if (result.isConfirmed) {
        myPrompt.prompt()
        myPrompt.userChoice.then((choiceResult) => {
          if (choiceResult === 'accepted') {
            console.log('Usuário aceitou o prompt')
          }
        })
      } else if (result.isDenied) {
        console.log('Usuário cancelou o prompt')
      }
    })
  }

  return <h1 className="hyper">Heloo</h1>
}

export default Main
