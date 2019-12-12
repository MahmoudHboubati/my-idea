import React from "react";
import Idea from "./Idea";

const IdeasList = ({ ideas }) => {
    return (
        <ul className="list-box">
            {ideas.map((idea, key) => (
                <Idea key={key} idea={idea} />
            ))}
        </ul>
    )
};

export default IdeasList;