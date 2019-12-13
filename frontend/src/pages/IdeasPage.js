import React from "react";
import IdeasList from "../components/IdeasList";
import { IdeaService } from "../services/IdeaService";
import Idea from "../components/Idea";

const IdeasPage = () => {

    const service = new IdeaService();

    const ideas = service.getIdeas();
    const idea = { title: "", body: "" };

    return (
        <>
            <h1>Ideas</h1>
            <IdeasList ideas={ideas} />
            <Idea idea={idea} />
        </>
    );
}

export default IdeasPage;