import React, {useState, useEffect} from 'react';
import Burn from './Burn'

const Post = () => {
    const [stories, setStories] = useState([]);

    /* fetch stories */
    const getStories = async () => {
        try {
            const response = await fetch("http://localhost:5000/stories");
            const jsonResponse = await response.json();
            setStories(jsonResponse);
        } catch (err) {
            console.error(err.message);
        }
    }

    /* initialize fetch */
    useEffect(() => {
        getStories();
    }, [])
    return (
        <div>
        {stories.map((story) => {
            return (
                <div key={story.id} className="card text-start m-5 bg-dark text-white">
                    <div className="card-header">
                        <h3>{story.title}</h3>
                    </div>
                    <div className="card-body" style={{whiteSpace: "pre-line",}}>
                        <p>{story.content}</p>
                    </div>
                    <div className="card-footer text-muted text-end">
                        <Burn story={story}/>
                    </div>
                </div>
            );
        })}
        </div>
    );
}

export default Post;