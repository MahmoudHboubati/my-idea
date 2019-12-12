import React from "react";
import IdeasList from "../components/IdeasList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getIdeas } from "../services/IdeaService";
import Idea from "../components/Idea";

const IdeasPage = () => {

    const ideas = getIdeas();
    const idea = { title: "", body: "" };

    return (
        <>
            <h1>Ideas</h1>
            <IdeasList ideas={ideas} />
            {/* <button className="list-box-item clear">
                <FontAwesomeIcon icon={faPlus} size="6x" />
            </button> */}
            <Idea idea={idea} />
        </>
    );
}

export default IdeasPage;