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
            <div className='alert alert-secondary'> Currency {
          <select name="Location" id="Location" value = {currency} onChange={event=>changeCurrency(event.target.value)} style={{color: 'white', backgroundColor: 'lightgreen' }}>
            <option value="$" style={{color: 'black'}}>$ Dolar</option>
            <option value="£" style={{color: 'black'}}>£ Pound</option>
            <option value="€" style={{color: 'black'}}>€ Euro</option>
            <option value="₹" style={{color: 'black'}}>₹ Ruppee</option>

          </select>	
          }	
        </div>
        );
    };
    export default Currency;