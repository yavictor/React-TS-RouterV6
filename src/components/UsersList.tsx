import UserCard from './UserCard';
import { IUserFull } from '../types/data'
import React from "react";

interface IUsersListProps {
    users: IUserFull[];
}

const UsersList: React.FC<IUsersListProps> = (props) => {

    return (
        <ul>
            {
                props.users.length &&
                props.users.map((user) => <UserCard key={user.id} {...user}/>)
            }
        </ul>
    )
}

export default UsersList;
