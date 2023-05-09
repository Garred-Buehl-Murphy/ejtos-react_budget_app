
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);

    const submitEvent = () => {
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: expense,);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                        required='required'
                        type='number'
                        id='cost'
                        step='10'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        /*onChange={(event) => setBudget(event.target.value)}*/>
                    </input></span>
        </div>
    );
};
export default Budget;