import './App.css'
import Hero from './components/Hero'
import Article from './components/Article'

function App() {
  return (
    <>
      <Hero />
      <main>
        <section className="hero-livingroom"></section>
        <Article />
      </main>
      <footer>
        hello
      </footer>
    </>
  )
}

export default App
