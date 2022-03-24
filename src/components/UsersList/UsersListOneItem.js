import React from 'react';

import './UsersListOneItem.css';

export const UsersListOneItem = props => (
    <li key={props.user.username} className="UsersListOneItem">
        <img
            className="UsersListOneItem__photo"
            src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
            alt={`Photo of ${props.user.first_name}`}
        />
        <strong>{props.user.first_name} {props.user.last_name}</strong> {props.user.username}
    </li>
);