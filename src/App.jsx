
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState('');
  const [result, setResult] = useState('');
  const handleInput = (value) => {
    setCurrentInput(currentInput + value);
  }
  const handleBackspace = () => {
    setCurrentInput(currentInput.slice(0, -1));
  }
  const handleAllClear = () => {
    setCurrentInput('');
    setResult('');
  }
 
  return (
    <div className="App">
       <div className='head'> <input type="text" name="" id="" placeholder='Welcome to Calculator' className='inp'
       value={currentInput}/>  </div>
       <div className='num'>0</div>
       <div className='main'>
        <button className='btn' style={{backgroundColor: '#9a9a9a',color:'black'}} onClick={handleAllClear} >AC</button>

        <button className='btn img' style={{backgroundColor: '#9a9a9a',color:'black'}}onClick={handleBackspace} disabled={currentInput.length === 0}> 
        {/* <img src={require ('./img/arrow.jpg')} alt="" />  */}
        {'<'}
            </button>
       {/* <button type="button" class="btn btn-link"><span class='bi bi-arrow-left-circle-fill'></span></button> */}
        <button className='btn' style={{backgroundColor: '#9a9a9a',color:'black' }} onClick={() => handleInput('%')}>%</button>
        <button className='btn' style={{backgroundColor:'#ee9406'}} onClick={() => handleInput('/')}> /</button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('7')}> 7 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('8')}> 8 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('9')}> 9 </button>
        <button className='btn' style={{backgroundColor:'#ee9406'}} onClick={() => handleInput('X')}> X </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('4')}> 4 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('5')}> 5 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('6')}> 6 </button>
        <button className='btn' style={{backgroundColor:'#ee9406'}} onClick={() => handleInput('-')}> -</button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('1')}> 1 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('2')}> 2</button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('3')}> 3 </button>
        <button className='btn' style={{backgroundColor:'#ee9406'}} onClick={() => handleInput('+')}> + </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('0')}> 0 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('00')}> 00 </button>
        <button className='btn' style={{backgroundColor:'#2f2f2f'}} onClick={() => handleInput('.')}> . </button>
        <button className='btn' style={{backgroundColor:'#ee9406'}} > = </button>
       </div>
    </div>
  );
}

export default App;
