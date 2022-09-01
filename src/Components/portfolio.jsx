import React from "react";
import Project from "./projects";
import data from "./data";

function MyPortfolio() {

    
    function projects(project) {
        return <Project 
                    key = {project.key}
                    image = {project.imageLink}
                    link = {project.websiteLink}
                    name = {project.templateName}
                />
    }

    return (
    <section className="portfolio" id="portfolio">
        <h1 className="heading"> my <span>portfolio</span> </h1>
        {data.map(projects)}
    
    </section>
    )
}


export default MyPortfolio;