
function SelectedNumbersDisplay({ numbers, onLockChangeClick, lockedNumbers }) {
    return (
        <div className="row p-5 rounded" style={{ backgroundColor: '#E9ECEF' }}>
            <div className="col-md-6 col-md-offset-3">
                <h3>Selected Numbers </h3>
                <ul className="list-group">
                    {numbers.map(n => <li className="list-group-item" key={n.id}>
                        {n.number}
                        <button className="ms-5 btn btn-primary"
                            onClick={() => onLockChangeClick(n.id)}>{lockedNumbers.includes(n.id) ? "Unlock" : "Lock"}</button>
                    </li>)}
                </ul>
            </div>
        </div>)
}

export default SelectedNumbersDisplay;