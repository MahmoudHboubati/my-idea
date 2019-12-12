import React from "react";
import NotFoundPage from "./NotFoundPage";
import { getIdeas } from '../services/IdeaService';

const IdeaDisplay = ({ match }) => {

    const ideas = getIdeas();
    const id = match.params.id;
    const idea = ideas.find(i => i.id === id);

    if (!idea) return <NotFoundPage />

    return (<>
        <h1>{idea.title}</h1>
    </>
    )
}

export default IdeaDisplay;