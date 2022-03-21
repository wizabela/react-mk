import React from 'react';

export const UsersListOneItem = props => (
    <li key={props.user.username}>
        <strong>{props.user.first_name} {props.user.last_name}</strong> {props.user.username}
    </li>
);