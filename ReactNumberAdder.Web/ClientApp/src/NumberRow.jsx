import React from 'react';

function NumberRow({ number, isAdd, onAddClick, onRemoveClick, locked }) {


    // function onPrintClick() {
    //     console.log(number);
    // }

    const onPrintClick = () => {
        console.log(number);
    }

    return (
        <tr>
            <td>{number} - <button className='btn btn-dark' onClick={onPrintClick}>Print Number</button></td>
            <td>
                {isAdd ? <button className="btn btn-primary" onClick={onAddClick}>Add to Selected</button>
                    : <button disabled={locked} className="btn btn-danger" onClick={onRemoveClick}>Remove from Selected</button>
                }
            </td>
        </tr>
    )
}

export default NumberRow;