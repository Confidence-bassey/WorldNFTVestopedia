import '../index.css'
import Events from './Events'
import Header from './Header'
import Hero from './Hero'
import Investments from './Investments'

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Investments />
      <Events />
    </>
  )
}

export default Homepage