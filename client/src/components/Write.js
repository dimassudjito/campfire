import React, {useState} from 'react';

const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const postStory = async (event) => {
        event.preventDefault();
        try {
            const body = {title, content}
            const response = await fetch("http://localhost:5000/stories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="m-5">
            <form onSubmit={postStory}>
                <input 
                    className="form-control m-3" 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={(event)=>{setTitle(event.target.value)}}
                />
                <textarea 
                    className="form-control m-3" 
                    placeholder="write your story here"
                    style={{height: "30em"}}
                    value={content}
                    onChange={(event)=>{setContent(event.target.value)}}
                />
                <button
                    className="btn btn-primary mx-3"
                    type="submit"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default Write;