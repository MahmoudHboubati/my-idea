import React, { useState, useEffect } from 'react';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetWarningCache } from 'prop-types';

export default function Idea({ idea, saveIdea, deleteIdea }) {

    const [title, setTitle] = useState(idea.title);
    const [body, setBody] = useState(idea.body);
    const onChangeBody = event => setBody(event.target.value);
    const onChangeTitle = event => setTitle(event.target.value);

    const doDeleteIdea = () => deleteIdea(idea);
    const doSaveIdea = () => saveIdea({ ...idea, title: title, body: body });

    useEffect(() => {
        setTitle(idea.title);
        setBody(idea.body);
    }, [idea]);

    return (
        <li className={"list-box-item " + (idea.light || "bright")}>
            {!idea.id && <div className={"icon-new" + ((title || body) ? " icon-new hide" : "")}>
                <FontAwesomeIcon icon={faPlus} size="2x" />
            </div>}
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
