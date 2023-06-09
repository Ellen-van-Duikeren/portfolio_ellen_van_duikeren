import React from 'react';
import "./Tile.css"

// tile for projects page
function Tile({nameImg, alt, title, url, description, languages, date}) {
    return (
        <div className="tile">

            <img src={nameImg} className="tile--image" alt={alt}/>

            <div className="tile--text">
                <h3>{title}</h3>
                <p className="margin-bottom1"><a href={url} target="_blank" rel="noreferrer">{url}</a></p>
                <p className="margin-bottom1">{date}</p>
                <p className="margin-bottom1">{description}</p>
                <p className="margin-bottom1">{languages}</p>
            </div>

        </div>
    );
}

export default Tile;