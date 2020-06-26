import React from 'react';
import Proptypes from 'prop-types';

const Error = ({message}) => (
<p className="alert alert-danger error"> {message} </p>
);

Error.propTypes = {
    expense: Proptypes.object.isRequired
}
 
export default Error;