import React from 'react';
import Clock from "react-digital-clock";

function Home() {
    return (
        <div className="page">
            <section className="home">
                <div>
                    <h1>Student MultiTaskApp</h1>
                    <h3><Clock></Clock></h3>
                </div>
            </section>
        </div>
    )
}

export default Home