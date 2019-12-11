import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const IdeasList = ({ ideas }) => (
    <ul className="list-box">
        {ideas.map((idea, key) => (
            <li key={key} className="list-box-item">
                <div className="content">
                    <input maxLength="140" className="title" value={idea.title}></input>
                    <textarea maxLength="140" rows="7" className="body" value={idea.body}></textarea>
                </div>
                <div className="tail">
                    <div className="tail-left">
                        {idea.createdOn}
                    </div>
                    <div className="tail-right">
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
            </li>
        ))}
    </ul>
)

export default IdeasList;