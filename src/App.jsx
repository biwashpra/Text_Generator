import React, {useState, useLayoutEffect} from 'react';
import './App.css';
import Axios from 'axios'

const App = () => {
  const [text, setText] = useState([]);
  const [paras, setParas] = useState(2);

// Automaticallly fetch data without clicking generate button!!
  // const fetchlorem = useCallback(() => {
  //   Axios.get(`http://hipsum.co/api/?type=hipster-centric&paras=${paras}`).then((res) => {
  //     setText(res.data);
  //   });
  // }, [paras])
  // useEffect(() => {
  //   fetchlorem();
  // }, [fetchlorem]);

//React Hook useEffect has a missing dependency: 'fetchlorem'.
  const fetchlorem = () => {
    Axios.get(`http://hipsum.co/api/?type=hipster-centric&paras=${paras}`).then((res) => {
      setText(res.data);
    });
  } 
  useLayoutEffect(() => {
    fetchlorem();
  }, []);

  return (
    <div className='main-container'>
      <div className='semi-main'>
        <div>
      <h1 className='mb-4'>Text Generator</h1>
      <h3>Tired of boring lorem ipsum?</h3>

      
        
        <div className="input-group mb-5">
          <input
            type="number"
            placeholder="eg 1,2,3"
            value={paras}
            // className="form-control"
            aria-label="eg 1,2,3"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setParas(e.target.value);
            }}
          />
          
          <button onClick={() => fetchlorem()} className='btn btn-outline-success' type="button" id="button-addon2">Generate</button>
          </div>
        </div>


      <div className='card text-white bg-warning mb-3' style={{maxWidth: '50rem'}}>
        <div className='card-body'>
        <p className='card-text text-center'>{text}</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default App
