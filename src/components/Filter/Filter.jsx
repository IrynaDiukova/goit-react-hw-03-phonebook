import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({value, onChange}) => (
    <label>
        <p className={css.text}>Find contacts by name</p>
        <input 
        className={css.contactInput}
        type="text"
        value={value}
        onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;