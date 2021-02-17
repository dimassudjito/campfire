import React, {useState} from 'react';

const Header = () => {
    return (
        <div className="m-5">
            <h1 className="text-center text-white">CAMPFIRE</h1>
            <div><iframe src="https://giphy.com/embed/3ov9jHRnuHpAI77eHC" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link text-white" href="/write">Write a story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/acknowledgement">Acknowledgement</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;