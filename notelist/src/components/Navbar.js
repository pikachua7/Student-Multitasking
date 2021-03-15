import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <br></br>
            <header>
                <ul style={{ padding: 0, margin: 0 }}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/todolist">Todolist</NavLink>
                    <NavLink to="/notes">NotesApp</NavLink>
                    <NavLink to="/calculator">Calculator</NavLink>
                </ul>
            </header>
        </div>

    )
}

export default Navbar