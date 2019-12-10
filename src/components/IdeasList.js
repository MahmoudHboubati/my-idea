import React from "react";
import { Link } from "react-router-dom";

const IdeasList = ({ ideas }) => (
    <>
        {ideas.map((idea, key) => (
            <Link key={key} to={`/idea/${idea.id}`}>
                <h3>{idea.title}</h3>
            </Link>
        ))}
    </>
)

export default IdeasList;