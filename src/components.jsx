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
                <label htmlFor="name">Name</label>
                <input id="name"/>
            </form>
        </div>
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