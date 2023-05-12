
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const submitEvent = (newBudget) => {
        
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: newBudget});
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='cost'
                        step='10'
                        value={budget}
                        style={{size: 10, width: 100}}
                        onChange={event=>submitEvent(event.target.value)}>
                    </input></span>
        </div>
    );
};
export default Budget;