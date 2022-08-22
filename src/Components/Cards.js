import React from 'react';

import './Cards.css';

const cards = (props) => {

    const classes = 'cards' + props.className;

    return <div className={classes}>{props.children}</div>
}

export default cards;