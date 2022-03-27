import React, {useState} from 'react';
import {UsersListOneItem} from "./UsersListOneItem";

import './UsersList.css';

export const UsersList = props => {
    const [list, setList] = useState(props.users);

    const removeItem = (username) => {
        setList(list => (
            list
                .filter(one => one.username !== username)
        ));
    };

    return (
        <ul className="UsersList">
            {
                [...list]
                    .sort((a, b) => a.username.localeCompare(b.username))
                    .map(userObj => <UsersListOneItem
                        user={userObj}
                        key={userObj.username}
                        onRemoveItem={removeItem}
                    />)
            }
        </ul>
    );
};
