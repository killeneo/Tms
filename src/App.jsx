import './App.css'
import './blocks/header.jsx'

function App() {
  return (
    <>
    <div className="header">
      <div className='logo'><a href="#">Tree Cutter</a></div>
        <button className="btn1">Buy Now</button>
        <button className="btn2">Contactus</button>
      </div>
      <div className='block'>
       <img className='img' src="img2.jpg" alt=""/> 
       <img className='img2' src="img44.jpeg" alt="" />
        <p>The Forest is a darksandbox- a game about survival in a night forest full of monsters . <br /> Players get to the island as a result of a plane crash, after which they learn that they are not alone <br /> on the island - a tribe of native cannibals lives there, who begin to pursue the Mafia Tomas Shelbi.</p>
      </div>
      <div className='footer'>
        <a className='link' href="#">Abob Us</a>
        <p className='text'>We lives to Fransia and we have Tomas Shelbi Mafia he buy our games</p>
      </div>
    </>
  )
}

export default App
