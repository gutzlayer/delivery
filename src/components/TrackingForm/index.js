import React, { Fragment } from 'react';
import './tracking-form.scss'


function TrackingForm({ submitHandler }) {
    return (
        <Fragment>
            <h1>Achar minha encomenda</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" name="tracking"/>
                </div>
                <button type="submit" className="btn btn-primary">Rastrear</button>
            </form>
        </Fragment>
    );
}

export default TrackingForm;