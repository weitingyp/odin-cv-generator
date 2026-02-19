import './components.css'
import { useState } from 'react'

function Header(){
    return (
        <div id="header">
            <h1>CV Generator</h1>
        </div>
    )
}

function Container(){

    const [detailsArray, setDetailsArray] = useState({
        'name': 'Example Person',
        'email': 'example@example.com',
        'city': 'Example City'
    })

    function handleInputChange(e){
        setDetailsArray({...detailsArray, [e.target.name]: e.target.value});
    }

    return (
        <div id="main-container">
            <Form detailsArray={detailsArray} handleChange={handleInputChange}/>
            <GeneratedCV detailsArray={detailsArray}/>
        </div>
    )
}

function Form({detailsArray, handleChange}){
    return (
        <div id="cv-form-container">
            <form onChange={handleChange}>
                <DetailsFieldSet detailsArray={detailsArray}/>
            </form>
        </div>
    )
}

function DetailsFieldSet({detailsArray}){
    return (
        <fieldset id="details-fieldset">
            <legend>Personal Details</legend>
            <label htmlFor="name">Name:</label>
            <input name="name" value={detailsArray.name}/>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" value={detailsArray.email}/>
            <label htmlFor="city">City</label>
            <input name="city" value={detailsArray.city}/>
        </fieldset>
    )
}

function GeneratedCV({detailsArray}){
    return (
        <div id="generated-cv-container">
            <DetailsSection detailsArray={detailsArray}/>
        </div>
    )
}

function DetailsSection({detailsArray}){
    return (
        <div id="details-section">
            <h2>{detailsArray.name}</h2>
            {detailsArray.email} | {detailsArray.city}
            <hr />
        </div>
    )
}

export { Header, Container }