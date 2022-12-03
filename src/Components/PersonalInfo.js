import React from 'react';
import PropTypes from 'prop-types';


export default function PersonalInfo(props) {
    const { name, email, adress } = props;

    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>{email}</p>
            <hr></hr>
            <p>{adress}</p>
        </div>
    );
}

PersonalInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    adress: PropTypes.string
}
PersonalInfo.defaultProps = {
    name: "No name",
    email: "No email",
    adress: "No adress"
}