import React from "react";
import IdeasList from "../components/IdeasList";
import ideas from "../pages/ideas";

const IdeasPage = () => (
    <>
        <h1>Ideas</h1>
        <IdeasList ideas={ideas} />
    </>
)

export default IdeasPage;