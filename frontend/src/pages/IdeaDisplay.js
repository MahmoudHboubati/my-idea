import React from "react";
import ideas from "./ideas";
import NotFoundPage from "./NotFoundPage";

const IdeaDisplay = ({ match }) => {
    const id = match.params.id;
    const idea = ideas.find(i => i.id === id);

    if (!idea) return <NotFoundPage />

    return (<>
        <h1>{idea.title}</h1>
    </>
    )
}

export default IdeaDisplay;