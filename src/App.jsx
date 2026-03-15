import './App.css'
import { FaAppStoreIos } from "react-icons/fa";

function App() {

  return (
    <>
      <h1 className='text-5xl font-bold'>Hello world</h1>
      <FaAppStoreIos className='text-5xl text-red-400' />
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </>
  )
}

export default App
