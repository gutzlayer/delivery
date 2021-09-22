import React, { Fragment } from 'react';

function TrackingEvents({ events }) {
    if (!events || events.length ===0) return null;
    return (
        <Fragment>
            <h3>Onde está a minha encomenda?</h3>
            <ul className="list-group">
                {events.map(item => {
                    return (
                        <li key={item.descricao} className="list-group-item">
                            <span>{item.data}</span>
                            <span>{item.descricao}</span>
                            <span>{item.cidade}/{item.uf}</span>
                        </li>)
                })}
            </ul>
        </Fragment>
    );
}

export default TrackingEvents;