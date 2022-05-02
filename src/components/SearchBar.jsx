import React from 'react'
import { useState } from 'react'

const SearchBar = ({onTermSubmit}) => {

    const [term, setTerm] = useState('')

   const onInputChange = (event) => {
        setTerm(event.target.value)
    }

    const onFormSubmit = (event) => {
            event.preventDefault();

            onTermSubmit(term)
    }

    return (
        <div className="ui secondary menu">
            <h1 className='item ui header'> <i class="youtube icon purple"></i> MeTube or YouTube or WhateverTube </h1>
            <div className='right menu'>
            <div className="item">
                <form className='ui form' onSubmit={onFormSubmit}>
                    <div className='ui icon input'>
                        {/* <label htmlFor=""> Video Search</label> */}
                        <input type="text" value={term}  onChange = {onInputChange} placeholder = "Search ..." />
                        <i className="search link icon"></i>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
        
    )
}

export default SearchBar