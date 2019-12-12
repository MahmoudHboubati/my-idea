import React, { useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Idea({ key, idea }) {

    const [title, setTitle] = useState(idea.title);
    const [body, setBody] = useState(idea.body);

    return (
        <li key={key} className={"list-box-item bright"}>
            <div className="content">
                <input maxLength="140"
                    className="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                <textarea maxLength="140"
                    rows="7"
                    className="body"
                    value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <div className="tail">
                <div className="tail-left">
                    {idea.createdOn}
                </div>
                {idea.id &&
                    < div className="tail-right">
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                }
            </div>
        </li >
    )
}
