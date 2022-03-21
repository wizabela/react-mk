import React from 'react';
import {UsersListOneItem} from "./UsersListOneItem";

export const UsersList = props => (
    <ul>
        {
            props.users
                .map(userObj => <UsersListOneItem
                    user={userObj}
                    key={userObj.username}
                />)
        }
    </ul>
);
