import React, { useState } from "react";
import Idea from "./Idea";
import { IdeaService } from "../services/IdeaService";

const IdeasList = ({ ideas }) => {

    const service = new IdeaService();

    const [ideasStateInfo, setIdeasStateInfo] = useState(ideas);

    const deleteIdea = (idea) => {
        console.log('isDeleted', idea);
        console.log(ideas.indexOf(idea));
        service.deleteIdea(idea);
        ideas.splice(ideas.indexOf(idea), 1);
        // ideas.push(idea);
        setIdeasStateInfo(ideas);
        console.log(ideasStateInfo);
    };

    const saveIdea = (idea) => {
        console.log('saveIdea', idea);
        console.log(ideas.indexOf(idea));
        service.deleteIdea(idea);
        ideas.splice(ideas.indexOf(idea), 1);
        // ideas.push(idea);
        setIdeasStateInfo(ideas);
        console.log(ideasStateInfo);
    };

    return (
        <ul className="list-box">
            {ideasStateInfo.map((idea, key) => (
                <Idea key={key} idea={idea} deleteIdea={deleteIdea} saveIdea={saveIdea} />
            ))}
        </ul>
    )
};

export default IdeasList;