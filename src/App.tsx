import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
