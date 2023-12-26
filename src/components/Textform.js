import React from 'react';
import { useState  } from 'react';



export default function Textform(props) {

  const [text, setText] = useState("");
 

  const clearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text has been cleared','success');
  }
  
    const copyText = ()=> {
      console.log('i am copy');
      var area = document.getElementById('myText');
      area.select();
      area.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(area.value);
      document.getSelection().removeAllRanges();
      props.showAlert('Copied to clipboard', 'success');
      
    }
    const removeExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Extra spaces have been removed', 'success');
    };
  

  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted to LowerCase', 'success');
    
  };

  const add = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted to UpperCase', 'success');

  };

  const changeHandle = (event) => {
   
   setText(event.target.value)
  };

  
    // const [place, setplace] = useState( document.getElementById('myText'));

    // const placeholderStyle = () => {
    //  setplace(props.mode === 'dark' ? place.classList.add('.color::placeholder') : place.classList.remove('.color::placeholder'))
    // }
    // const placeholderStyle = {
    //   color: props.mode === 'dark' ? document.getElementById('myText').classList.add('.place::placeholder') : document.getElementById('myText').classList.remove('.place::placeholder')
    // };


  return (
    <>

      
        <div className='container  textform mt-3' >
            <h3 className='mb-3' style={{color:  props.mode === 'dark'? "white":"black"}}>TextUtils :- Count Words , Count Letters , Remove Extra Spaces</h3>
            <textarea  className="form-control place" style={ {backgroundColor: props.mode === 'dark'? "#28656a":"white",color:  props.mode === 'dark'? "white":"black"  }} rows="13" onChange={changeHandle} value={text} placeholder='Enter text here'   id="myText" ></textarea>
            <button disabled={text.length === 0}  className='btn btn-secondary my-3 mx-2 ' onClick={add}>UpperCase</button>
            <button disabled={text.length === 0} className='btn btn-secondary my-3 mx-2' onClick={handleLower}>LowerCase</button>
            <button disabled={text.length === 0} className='btn btn-secondary my-3 mx-2' onClick={copyText}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-secondary my-3 mx-2' onClick={clearText}>Clear Text</button>
            <button disabled={text.length === 0} className='btn btn-secondary my-3 mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className='container'>
          <label  className='me-2'style={{color:  props.mode === 'dark'? "white":"black"}} ><strong>Total Words:</strong></label>
          <input type="text" onChange={changeHandle} value={text.split(' ').filter((element)=> {return element !== ""}).length}  style={{backgroundColor:  props.mode === 'dark'? "#28656a":"white" ,color:  props.mode === 'dark'? "white":"black"}} className='my_inputs text-end'/>
          <label className='ms-4 me-2' style={{color:  props.mode === 'dark'? "white":"black"}}><strong>Total Letters:</strong></label>
          <input type="text" onChange={changeHandle} style={{backgroundColor:  props.mode === 'dark'? "#28656a":"white", color:  props.mode === 'dark'? "white":"black"}} className='my_inputs text-end' value={text.length}/>
        </div>

       
    </>
  )
}
// 425c66
