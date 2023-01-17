import PropTypes from 'prop-types';

import css from './ContactItem.module.css'

const ContactItem = ({ id, name, number, del }) => {
    return (
       
        <li> 
            <span className={css.contactText}> {name}:  {number} </span>
            <button className={css.contactBtn} onClick={() => del(id)}> Delete </button>
        </li>)};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired,
};
export default ContactItem;