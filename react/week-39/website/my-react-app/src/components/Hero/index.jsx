import NavbarMobile from "../NavbarMobile";
import NavbarDesktop from "../NavbarDesktop";

function Hero() {
  return (
    <div className="hero-wrapper">
      <header>
        <NavbarMobile />
        <NavbarDesktop />
      </header>
      <section className="hero">
        <h1>Elektriker Jansson</h1>
        <p>Din pålitliga partner för alla elarbeten</p>
        <a className="button button--cta" href="#">BÖRJA DIN PLANERING</a>
      </section>
    </div>
  )
}

export default Hero;