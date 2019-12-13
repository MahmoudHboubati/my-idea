import React, { useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Idea({ idea, saveIdea, deleteIdea }) {
    const [title, setTitle] = useState(idea.title);
    const [body, setBody] = useState(idea.body);
    const onChangeBody = event => setBody(event.target.value);
    const onChangeTitle = event => setTitle(event.target.value);

    const doDeleteIdea = () => deleteIdea(idea);
    const doSaveIdea = () => saveIdea({ ...idea, title: title, body: body });

    return (
        <li className={"list-box-item bright"}>
            <div className="content">
                <input maxLength="140"
                    className="title"
                    value={title}
                    onChange={onChangeTitle}
                    onBlur={doSaveIdea} />
                <textarea maxLength="140"
                    rows="7"
                    className="body"
                    value={body}
                    onChange={onChangeBody}
                    onBlur={doSaveIdea} />
            </div>
            <div className="tail">
                <div className="tail-left">
                    {idea.createdOn}
                </div>
                {idea.id &&
                    <div onClick={doDeleteIdea} className="tail-right">
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                }
            </div>
        </li >
    )
}
