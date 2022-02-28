import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"  />
  <link href="https://fonts.googleapis.com/css2?family=Thasadith:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
