import { use } from 'react'
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

    // positionHistory is an array of objects for each position entered
    const [positionHistory, setPositionHistory] = useState([
        {
            position: {
                company: 'company ABC'
                , title: 'senior XYZ'
                , current: false
                , duties: {
                    [crypto.randomUUID()]: 'Achieved ABC by doing XYZ', 
                    [crypto.randomUUID()]: 'Grew ABC by championing XYZ'
                }
                , startMonth: 'Jan'
                , startYear: 2000
                , endMonth: 'Dec'
                , endYear: 2001
            }
            , id: crypto.randomUUID()
        }
    ])

    function addNewPosition( company = 'company ABC'
                            , title = 'senior XYZ'
                            , current = false
                            , duties = {
                                [crypto.randomUUID()]: 'Achieved ABC by doing XYZ', 
                                [crypto.randomUUID()]: 'Grew ABC by championing XYZ'
                            }
                            , startMonth = 'Jan'
                            , startYear = 2000
                            , endMonth = 'Dec'
                            , endYear = 2001
    ){
        let positionArray = {company, title, current, duties, startMonth, startYear, endMonth, endYear};
        setPositionHistory([...positionHistory, {position: positionArray, id: crypto.randomUUID()}]);
    }

    function handleDetailsChange(e){
        setDetailsArray({...detailsArray, [e.target.name]: e.target.value});
    }

    return (
        <div id="main-container">
            <Form detailsArray={detailsArray} handleDetailsChange={handleDetailsChange}/>
            <GeneratedCV detailsArray={detailsArray} positionHistory={positionHistory}/>
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

function GeneratedCV({detailsArray, positionHistory}){
    return (
        <div id="generated-cv-container">
            <DetailsSection detailsArray={detailsArray}/>
            { positionHistory.map( (positionEntry) => <PositionItem key={positionEntry.id} positionArray={positionEntry.position}/>)}
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
                {positionArray.startMonth+', '+positionArray.startYear} 
                &mdash;
                {positionArray.current ? 'present' : (positionArray.endMonth+', '+positionArray.endYear)}
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