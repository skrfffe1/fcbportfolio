import React, { useState } from 'react';
import { Search, Button } from 'semantic-ui-react';

export default function CitySelector({setCity}) {

    const style = {
        searchButtonMargin: {
            marginTop: '0.53em',
            marginBottom: '0.53em'
        }
    }
    const [input, setInput] =  useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = () => {
        setCity(input);
        setInput('');
    }

    return (
        <div>            
            <Search type="text" value={input} onChange={handleInputChange} />
            <Button primary onClick={handleSearch} style={style.searchButtonMargin}>Search</Button>        
        </div>
    );
}