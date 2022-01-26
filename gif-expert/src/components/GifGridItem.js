//rafc = shotcode to create react component
import React from 'react';

export const GifGridItem = ({url,title}) => {
  return (
    <div className="card">
        <p>{title}</p>
        <img src={url} alt={title} title={title}></img>
    </div>
  );
};

