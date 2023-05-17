import React, { useState } from "react"

const Dynamicfield = () => {
    const [data, setData] = useState([])

    const handleAdd = () => {
        const add = [...data, []]
        setData(add);
    }
    const handleChange = (e, i) => {
        const dataInput = [...data];
        dataInput[i] = e.target.value;
        setData(dataInput);
    }

    const handleRemove = (i) => {
        const dataremove = [...data];
        dataremove.splice(i, 1)
        setData(dataremove);
    }
    console.log(data, "data")
    return (
        <div className="table-row">
            <button type="button" onClick={() => handleAdd()}>Add</button><br />
            {
                data.map((item, i) => {
                    return (
                        <>
                            <input type="text" className="inpt-fld" placeholder="Type Your Text" value={item} onChange={(e) => handleChange(e, i)} />
                            <button type="button" className="rmv" onClick={() => handleRemove(i)}>Remove</button> <br />
                        </>
                    )
                })
            }
        </div >
    )
}
export default Dynamicfield;