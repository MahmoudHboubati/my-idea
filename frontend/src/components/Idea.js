import React, { useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Idea({ key, idea }) {

    const [title, setTitle] = useState(idea.title);
    const [body, setBody] = useState(idea.body);
    const onChangeBody = event => setBody(event.target.value)
    const onChangeTitle = event => setTitle(event.target.value)

    return (
        <li key={key} className={"list-box-item bright"}>
            <div className="content">
                <input maxLength="140"
                    className="title"
                    value={title}
                    onChange={onChangeTitle} />
                <textarea maxLength="140"
                    rows="7"
                    className="body"
                    value={body} onChange={onChangeBody} />
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
