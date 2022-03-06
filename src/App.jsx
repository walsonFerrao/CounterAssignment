import logo from './logo.svg';
import './App.css';

import Counter from './Components/Counter';



function App() {
  return (
    <>
    <div className='main'>
      <Counter className={"yo"} value={0} />
      </div>
    </>

  )

}

export default App;
