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

    const [ activePosIndex, setActivePosIndex] = useState(positionHistory[0].id)

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

    function handlePositionChange(e){
        let entry = positionHistory.filter( _ => _.id === activePosIndex )[0];
        entry = { position: {...entry.position, [e.target.name]: e.target.value} , id: entry.id };
        let modifiedPositionHistory = positionHistory.filter( _ => _.id !== activePosIndex );
        modifiedPositionHistory.push(entry);
        setPositionHistory(modifiedPositionHistory);
    }

    return (
        <div id="main-container">
            <Form detailsArray={detailsArray} handleDetailsChange={handleDetailsChange} activePosArray={positionHistory.filter(_ => _.id === activePosIndex)[0].position} handlePositionChange={handlePositionChange}/>
            <GeneratedCV detailsArray={detailsArray} positionHistory={positionHistory}/>
        </div>
    )
}

function Form({detailsArray, handleDetailsChange, activePosArray, handlePositionChange}){
    return (
        <div id="cv-form-container">
            <form>
                <DetailsFieldSet detailsArray={detailsArray} handleDetailsChange={handleDetailsChange}/>
                <PositionFieldSet positionArray={activePosArray} handlePositionChange={handlePositionChange}/>
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

function PositionFieldSet({positionArray, handlePositionChange}){
    const today = new Date();
    return (
            <fieldset id="position-fieldset" onChange={handlePositionChange}>
            <legend>Position</legend>
            <label htmlFor="title">Title:</label>
            <input name="title" value={positionArray.title}/>
            <label htmlFor="company">Company</label>
            <input name="company" value={positionArray.company}/>
            <label htmlFor="startMonth">Start month</label>
            <select name="startMonth">
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
            </select>
            <label htmlFor="startYear"> Start year </label>
            <input name="startYear" type="number" min="1900" max={today.getFullYear()} value={positionArray.startYear} />
            <label htmlFor="End Month">End month</label>
            <select name="End Month">
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
            </select>
            <label htmlFor="endYear"> End year </label>
            <input name="endYear" type="number" min="1900" max={today.getFullYear()} value={positionArray.endYear} />
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