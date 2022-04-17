import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import axios from "axios";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {
    const match = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(()=> {
        axios.get(searchByCountry(match.name)).then(({data}) => setCountry(data[0]));
    }, [match.name])
    return (
        <div>
            <Button onClick={()=> navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && (<Info navigate={navigate} {...country} />)}
        </div>
    );
};

export default Details;