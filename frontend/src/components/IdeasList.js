import React, { useState } from "react";
import Idea from "./Idea";
import { IdeaService } from "../services/IdeaService";

const IdeasList = () => {
    const service = new IdeaService();
    const [ideasStateInfo, setIdeasStateInfo] = useState(service.getIdeas());
    const [newIdea, setNewIdea] = useState(service.initializeDefaultIdea());

    const deleteIdea = (idea) => {
        service.deleteIdea(idea);
        setIdeasStateInfo(service.getIdeas());
    };

    const saveIdea = (idea) => {
        service.saveIdea(idea);
        setIdeasStateInfo(service.getIdeas());
    };

    const saveNewIdea = (idea) => {
        if (idea.title || idea.body) {
            saveIdea(idea);
            setNewIdea(service.initializeDefaultIdea());
        }
    }

    return (
        <ul className="list-box">
            {ideasStateInfo.map((idea, key) => (
                <Idea key={key} idea={idea} deleteIdea={deleteIdea} saveIdea={saveIdea} />
            ))}
            <Idea idea={newIdea} saveIdea={saveNewIdea} />
        </ul>
    );
};

export default IdeasList;

