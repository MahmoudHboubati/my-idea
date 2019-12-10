import React from "react";
import ideas from "./ideas";

const IdeaDisplay = ({ match }) => {
    const id = match.params.id;
    const idea = ideas.find(i => i.id == id);

    if (!idea) return <h1>Idea doesn't exist :(</h1>

    return (<>
        <h1>{idea.title}</h1>
    </>
    )
}

export default IdeaDisplay;