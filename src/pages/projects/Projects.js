import React from 'react';
import "./Projects.css";
import Tile from "../../components/tile/Tile";
import wildplukrecepten from "../../assets/wildplukrecepten.jpg";
import jokenoordstrand from "../../assets/jokenoordstrand.jpg";
import roodwerk from "../../assets/roodwerk.jpg";

function Projects() {

    return (
        <div>
            <h1 className="backgroundcolor">Mijn projecten</h1>
            <div className="page--flex">
                <Tile
                    nameImg={jokenoordstrand}
                    title="Joke Noordstrand"
                    url="https://jokenoordstrand.com"
                    description="Statische website voor kunstenaar"
                    date="maart 2023"
                    languages="Wordpress"
                />

                <Tile
                    nameImg={wildplukrecepten}
                    title="Wildplukrecepten"
                    // url="https://wildplukrecepten.nl"
                    description="Eindopdracht van opleiding tot full stack developer aan Novi Hogeschool"
                    date="februari 2023"
                    languages="HTML/CSS, Javascript, React, Wordpress, Java, Spring Boot, Maven, Postman, PostgreSQL, IntelliJ, WebStorm, Github, Visual paradigm, Figma"
                />


                <Tile
                    nameImg={roodwerk}
                    title="Roodwerk"
                    url="http://roodwerk.nl"
                    description="Statische website voor kunstenaar"
                    date="2022"
                    languages="Wordpress"
                />
            </div>
        </div>
    );
}

export default Projects;