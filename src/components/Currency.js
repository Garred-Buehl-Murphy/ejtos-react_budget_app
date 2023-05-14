    import React, { useContext } from 'react';
    import { AppContext } from '../context/AppContext';
    const Currency = () => {
      const {dispatch , currency} = useContext(AppContext);
        const changeCurrency = (val)=>{
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: val,
                })
        }
        
      return (
            <div className='alert alert-secondary'> {
          /*<select name="Location" id="Location" value = {currency} onChange={event=>changeCurrency(event.target.value)} style={{color: 'white', backgroundColor: 'lightgreen' }}>
            <option value="$" label="Currency ($ Dolar)" style={{color: 'black'}}>$ Dolar</option>
            <option value="£" label="Currency (£ Pound)" style={{color: 'black'}}>£ Pound</option>
            <option value="€" label="Currency (€ Euro)" style={{color: 'black'}}>€ Euro</option>
            <option value="₹" label="Currency (₹ Ruppee)" style={{color: 'black'}}>₹ Ruppee</option>
          </select>*/
          <span style={{color: 'red'}}>the html option label attribute does not fuction correctly in any of my browsers.<br/>               
          <span style={{color: 'white', backgroundColor: 'lightgreen' }}> Currency (<select style={{color: 'white', backgroundColor: 'lightgreen' }} name="Location" id="Location" value = {currency} onChange={event=>changeCurrency(event.target.value)}>
            <option value="$" style={{color: 'black'}}>$ Dolar</option>
            <option value="£" style={{color: 'black'}}>£ Pound</option>
            <option value="€" style={{color: 'black'}}>€ Euro</option>
            <option value="₹" style={{color: 'black'}}>₹ Ruppee</option>
          </select>)</span></span>
          }	
        </div>
        );
    };
    export default Currency;