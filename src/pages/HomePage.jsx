import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import {ALL_COUNTRIES} from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

const HomePage = () => {
    const [countries, setCountries] = useState([]);

    const navigate = useNavigate();
    console.log(countries);

    useEffect(()=>{
        axios.get(ALL_COUNTRIES).then
        (({data}) => setCountries(data));
    },[])

    return (
        <>
            <Controls />
            <List>
                {countries.map((item) => {
                    const countryInfo = {
                        img: item.flags.png,
                        name: item.name.common,
                        info: [
                            {title: 'Population', description: item.population.toLocaleString() },
                            {title: 'Region', description: item.region },
                            {title: 'Capital', description: item.capital },
                        ],
                    };
                    return (
                        <Card key={item.name.common} onClick={()=> navigate(`/country/${item.name.common}`)} {...countryInfo} />
                    )
                })}
            </List>
        </>
    );
};

export default HomePage;