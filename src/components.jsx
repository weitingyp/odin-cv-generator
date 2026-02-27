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

    const [educationArray, setEducationArray] = useState({
        'school': 'Example University',
        'course': 'Example Course',
        'startMonth': 'Jan',
        'startYear': 2000,
        'endMonth': 'Dec',
        'endYear': 2001
    })

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
        const id = crypto.randomUUID();
        setPositionHistory([...positionHistory, {position: positionArray, id}]);
        console.log(positionHistory);
        setActivePosIndex(id);
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

    function handleAddPositionClick(e){
        addNewPosition();
    }

    function handleEducationChange(e){
        setEducationArray({...educationArray, [e.target.name]: e.target.value});
    }

    function handleEditClick(e, id){
        e.stopPropagation();
        setActivePosIndex(id);
    }

    function handleDeleteClick(e, id){
        e.stopPropagation();
        if(positionHistory.length === 1){
            alert('You must have at least one position entry. To delete this entry, first add another position entry, then delete this one.');
            return;
        }
        else {
            const newPositionHistory = positionHistory.filter( _ => _.id !== id );
            setPositionHistory(newPositionHistory);
            setActivePosIndex(newPositionHistory[0].id);
        }
    }

    return (
        <div id="main-container">
            <Form 
                detailsArray={detailsArray} 
                handleDetailsChange={handleDetailsChange} 
                activePosArray={positionHistory.filter(_ => _.id === activePosIndex)[0].position} 
                handlePositionChange={handlePositionChange} 
                handleAddPositionClick={handleAddPositionClick}
                educationArray={educationArray} 
                handleEducationChange={handleEducationChange}/>
            <GeneratedCV 
                detailsArray={detailsArray} 
                positionHistory={positionHistory} 
                educationArray={educationArray}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                />
        </div>
    )
}

function Form({detailsArray, handleDetailsChange, activePosArray, handlePositionChange, educationArray, handleEducationChange, handleAddPositionClick}){
    return (
        <div id="cv-form-container">
            <form>
                <DetailsFieldSet detailsArray={detailsArray} handleDetailsChange={handleDetailsChange}/>
                <PositionFieldSet positionArray={activePosArray} handlePositionChange={handlePositionChange} handleAddPositionClick={handleAddPositionClick}/>
                <EducationFieldSet educationArray={educationArray} handleEducationChange={handleEducationChange}/>
            </form>
        </div>
    )
}

function DetailsFieldSet({detailsArray, handleDetailsChange}){
    return (
        <fieldset id="details-fieldset" onChange={handleDetailsChange}>
            <legend>Personal Details</legend>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" value={detailsArray.name}/>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={detailsArray.email}/>
            <label htmlFor="city">City</label>
            <input id="city" name="city" value={detailsArray.city}/>
        </fieldset>
    )
}

function PositionFieldSet({positionArray, handlePositionChange, handleAddPositionClick}){
    const today = new Date();
    return (
        <>
            <button id="add-position-btn" type="button" onClick={handleAddPositionClick}>Add new position</button>
            <fieldset id="position-fieldset" onChange={handlePositionChange}>
            <legend>Position</legend>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" value={positionArray.title}/>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={positionArray.company}/>
            <label htmlFor="startMonth">Start month</label>
            <select id="startMonth" name="startMonth">
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
            <input id="startYear" name="startYear" type="number" min="1900" max={today.getFullYear()} value={positionArray.startYear} />
            <label htmlFor="endMonth">End month</label>
            <select id="endMonth" name="endMonth">
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
            <input id="endYear" name="endYear" type="number" min="1900" max={today.getFullYear()} value={positionArray.endYear} />
            </fieldset>
        </>
    )
}

function EducationFieldSet({educationArray, handleEducationChange}){
    const today = new Date();
    return (
            <fieldset id="education-fieldset" onChange={handleEducationChange}>
            <legend>Education</legend>
            <label htmlFor="school">School</label>
            <input id="school" name="school" value={educationArray.school}/>
            <label htmlFor="course">Course of Study</label>
            <input id="course" name="course" value={educationArray.course}/>
            <label htmlFor="startMonth">Start month</label>
            <select id="startMonth" name="startMonth">
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
            <input id="startYear" name="startYear" type="number" min="1900" max={today.getFullYear()} value={educationArray.startYear} />
            <label htmlFor="endMonth">End month</label>
            <select id="endMonth" name="endMonth">
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
            <input id="endYear" name="endYear" type="number" min="1900" max={today.getFullYear()} value={educationArray.endYear} />
            </fieldset>
    )
}


function GeneratedCV({detailsArray, positionHistory, educationArray, handleEditClick, handleDeleteClick}){
    return (
        <div id="generated-cv-container">
            <DetailsSection detailsArray={detailsArray}/>
            <h2>Experience</h2>
            { positionHistory.map( (positionEntry) => 
                <PositionItem 
                key={positionEntry.id} 
                id={positionEntry.id} 
                positionArray={positionEntry.position} 
                handleEditClick={handleEditClick} 
                handleDeleteClick={handleDeleteClick}/>
            )}
            <h2>Education</h2>
            <EducationItem educationArray={educationArray}/>
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

function PositionItem({positionArray, id, handleEditClick, handleDeleteClick}){
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="position-item" id={positionArray.id} onClick={() => setIsClicked(true)}>
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
            {
            isClicked && <div className="position-item-modal">
                <button className="position-edit-btn" onClick={(e) => handleEditClick(e, id)}>Edit</button>
                <button className="position-delete-btn" onClick={(e) => handleDeleteClick(e, id)}>Delete</button>
                <button className="position-item-hover-close-btn" onClick={(e) => {
                    e.stopPropagation();
                    setIsClicked(false);
                }}>X</button>
            </div>
            }
        </div>
    )
}

function EducationItem({educationArray}){
    return (
        <div className="education-item">
            <h3>{educationArray.course}</h3>
            <em>{educationArray.school}</em>
            <div className="education-dates"> 
                {educationArray.startMonth+', '+educationArray.startYear}
                &mdash;
                {educationArray.endMonth+', '+educationArray.endYear}
            </div>
        </div>
    )
}

export { Header, Container }