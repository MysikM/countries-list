import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import {ALL_COUNTRIES} from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

const HomePage = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if(region) {
            data = data.filter(c => c.region.includes(region));
        }

        if(search){
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(()=>{
        if(!countries.length) {
            axios.get(ALL_COUNTRIES).then
            (({data}) => setCountries(data));
        }
    },[])

    useEffect(()=>{
        setFilteredCountries(countries);
    }, [countries])

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((item) => {
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