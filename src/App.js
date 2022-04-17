import axios from "axios";
import {useState, useEffect} from "react";

import Header from "./components/Header";
import Controls from "./components/Controls";
import Main from "./components/Main";
import {ALL_COUNTRIES} from "./config";
import List from "./components/List";
import Card from "./components/Card";

function App() {

    const [countries, setCountries] = useState([]);
    console.log(countries);
    useEffect(()=>{
        axios.get(ALL_COUNTRIES).then
            (({data}) => setCountries(data));
    },[])
  return (
    <>
        <Header />
        <Main>
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
                        <Card key={item.name} {...countryInfo} />
                    )
                })}
            </List>
        </Main>
    </>
  );
}

export default App;
