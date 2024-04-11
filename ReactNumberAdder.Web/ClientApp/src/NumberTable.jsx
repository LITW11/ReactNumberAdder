import React from 'react';
import NumberRow from './NumberRow';
import SelectedNumbersDisplay from './SelectedNumbersDisplay';
import { produce } from 'immer';

let id = 0;

class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

    onAddNumberClick = () => {
        const { numbers } = this.state;
        const number = this.getRandomNumber();
        id++;
        this.setState({ numbers: [...numbers, { id, number }] });
    }

    onAddToSelectedClick = numberObj => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: [...selectedNumbers, numberObj] });
    }

    onRemoveFromSelectedClick = ({ id }) => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: selectedNumbers.filter(n => n.id !== id) });
    }

    onLockChangeClick = id => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(id)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(l => l !== id) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, id] });
        }
    }

    render() {
        const { numbers, selectedNumbers, lockedNumbers } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg w-100" onClick={this.onAddNumberClick}>Add
                        </button>
                    </div>
                </div>
                <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map(obj => {
                                let { number, id } = obj;
                                let { lockedNumbers } = this.state;
                                return <NumberRow
                                    key={id}
                                    number={number}
                                    locked={lockedNumbers.includes(id)}
                                    isAdd={!selectedNumbers.map(s => s.id).includes(id)}
                                    onAddClick={() => this.onAddToSelectedClick(obj)}
                                    onRemoveClick={() => this.onRemoveFromSelectedClick(obj)}
                                />
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                {Boolean(selectedNumbers.length) && <SelectedNumbersDisplay
                    numbers={selectedNumbers}
                    lockedNumbers={lockedNumbers}
                    onLockChangeClick={this.onLockChangeClick}
                />}
            </div>
        )
    }
}

export default NumberTable;