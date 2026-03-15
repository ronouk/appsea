import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h1>Nothing found</h1>
            <Link to='/' className='btn'>Go back</Link>
        </div>
    );
};

export default ErrorPage;