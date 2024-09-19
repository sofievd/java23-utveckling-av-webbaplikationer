import Hero from './components/Hero'
import Article from './components/Article'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <main>
        <section className="hero-livingroom"></section>
        <Article />
      </main>

      <Footer />
    </>
  )
}

export default App
