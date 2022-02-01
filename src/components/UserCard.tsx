import {IUserFull} from '../types/data';
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button'

interface IUserCard extends IUserFull {};

const UserCard: React.FC<IUserCard> = ({
        id,
        username,
        address,
        company
    }) => {

    return (
        <li>
            <p>card id: {id}</p>
            <p>ФИО: {username}</p>
            <p>город: {address.city}</p>
            <p>компания: {company.name}</p>
            <Link to={`/user/${id}`}>Подробнее</Link>

        </li>

    )
};

export default UserCard;
