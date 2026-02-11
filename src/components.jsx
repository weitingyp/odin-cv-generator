import './components.css'

function Header(){
    return (
        <div id="header">
            <h1>CV Generator</h1>
        </div>
    )
}

function Form(){
    return (
        <div id="cv-form-container">
            <form>
                <DetailsFieldSet />
            </form>
        </div>
    )
}

function DetailsFieldSet(){
    return (
        <fieldset id="details-fieldset">
            <legend>Personal Details</legend>
            <label htmlFor="name">Name:</label>
            <input id="name"/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
            <label htmlFor="city">City</label>
            <input id="city" />
            <input type="button" value="Generate"/>
        </fieldset>
    )
}

function GeneratedCV(){
    return (
        <div id="generated-cv-container">
            <p>Generated CV here</p>
        </div>
    )
}

export { Header, Form, GeneratedCV }