import React, { Fragment } from 'react';

function TrackingForm({ submitHandler }) {
    return (
        <Fragment>
            <h1 className="encomenda">Achar minha encomenda</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" name="tracking" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Rastrear</button>
            </form>
        </Fragment>
    );
}

export default TrackingForm;