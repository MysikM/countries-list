import React from 'react';
import {useParams} from 'react-router-dom';

const Details = () => {
    const match = useParams();

    return (
        <div>
            Details {match.name}
        </div>
    );
};

export default Details;