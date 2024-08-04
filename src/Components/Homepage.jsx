import '../index.css'
import Events from './Events'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Investments from './Investments'
import ProjectList from './ProjectList'

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Investments />
      <ProjectList />
      <Footer />
    </>
  )
}

export default Homepage