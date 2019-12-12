import React from "react";
import IdeasList from "../components/IdeasList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getIdeas } from "../services/IdeaService";

const IdeasPage = () => {

    const ideas = getIdeas();

    return (
        <>
            <h1>Ideas</h1>
            <IdeasList ideas={ideas} />
            <button className="btn-box-item clear">
                <FontAwesomeIcon icon={faPlus} size="6x" />
            </button>
        </>
    );
}

export default IdeasPage;