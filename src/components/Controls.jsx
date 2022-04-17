import React, { useState, useEffect } from 'react';
import Search from "./Search";

const Controls = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <Search search={search} setSearch={setSearch} />
        </div>
    );
};

export default Controls;