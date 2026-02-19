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

    const [positionArray, setPositionArray] = useState({
        'company': 'Company ABC',
        'title': 'Senior XYZ',
        'current': false, // true or false
        'duties': {
            [crypto.randomUUID()]: 'Achieved ABC by doing XYZ', 
            [crypto.randomUUID()]: 'Grew ABC by championing XYZ'
        },
        'start-month': 'Jan',
        'start-year': 2000,
        'end-month': 'Dec', // if past: null end-month, end-year
        'end-year': 2001
    })

    function handleDetailsChange(e){
        setDetailsArray({...detailsArray, [e.target.name]: e.target.value});
    }

    return (
        <div id="main-container">
            <Form detailsArray={detailsArray} handleDetailsChange={handleDetailsChange}/>
            <GeneratedCV detailsArray={detailsArray} positionArray={positionArray}/>
        </div>
    )
}

function Form({detailsArray, handleDetailsChange}){
    return (
        <div id="cv-form-container">
            <form>
                <DetailsFieldSet detailsArray={detailsArray} handleDetailsChange={handleDetailsChange}/>
            </form>
        </div>
    )
}

function DetailsFieldSet({detailsArray, handleDetailsChange}){
    return (
        <fieldset id="details-fieldset" onChange={handleDetailsChange}>
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

function GeneratedCV({detailsArray, positionArray}){
    return (
        <div id="generated-cv-container">
            <DetailsSection detailsArray={detailsArray}/>
            <PositionItem positionArray={positionArray}/>
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

function PositionItem({positionArray}){
    return (
        <div className="position-item">
            <h3>{positionArray.title}</h3>
            <em>{positionArray.company}</em>
            <div className="position-dates"> 
                {positionArray["start-month"]+', '+positionArray["start-year"]} 
                &mdash;
                {positionArray.current ? 'present' : (positionArray["end-month"]+', '+positionArray["end-year"])}
            </div>
            <ul>
                {Object.entries(positionArray.duties).map(([key, duty]) => (
                    <li key={key}>{duty}</li>
                ))}
            </ul>
        </div>
    )
}

export { Header, Container }