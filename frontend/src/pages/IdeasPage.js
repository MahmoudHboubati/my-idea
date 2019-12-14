import React from "react";
import IdeasList from "../components/IdeasList";
import { IdeaService } from "../services/IdeaService";

const IdeasPage = () => {

    const service = new IdeaService();

    const ideas = service.getIdeas();

    return (
        <>
            <h1>Ideas</h1>
            <IdeasList ideas={ideas} />
        </>
    );
}

export default IdeasPage;