import React from 'react'
import { Input } from "antd";

export default function Search(props) {
    const handleQueryChange = event => {
        props.setQueryProp(event.target.value)
    }
    return (
        <div className="search">
            <form>
                <label htmlFor="search">Search</label>
                <Input type="text" id="search" onChange={handleQueryChange} />
            </form>
        </div>
    )
}
