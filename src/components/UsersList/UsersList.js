import React from 'react';
import {UsersListOneItem} from "./UsersListOneItem";

import './UsersList.css';

export const UsersList = props => (
    <ul className="UsersList">
        {
            [...props.users]
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObj => <UsersListOneItem
                    user={userObj}
                    key={userObj.username}
                />)
        }
    </ul>
);
