import '../index.css'

const Header = () => {
  return (
    <header>

        <input type="checkbox" name="" id="toggler"/>
        <label htmlFor="toggler" className="fas fa-bars"></label>
        
    
        <a href="#" className="logo">WorldNFT<span>Vestopedia</span></a>
    
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#products">Live Streams</a>
            <a href="#review">Investments</a>
            <a href="#contact">contact</a>
        </nav>
    
        <div className="icons">
            <a href="#"><button className="btn">Sign Up</button></a>
            <a href="#"><button className="btn">Login</button></a>
        </div>
    
    </header>
  )
}

export default Header