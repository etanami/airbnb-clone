import Logo from "../images/hero-card.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={Logo} alt="Hero Photos" className="hero--img" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}