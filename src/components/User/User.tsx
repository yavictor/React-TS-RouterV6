import {IUserFull} from '../../types/data';
import React from "react";
import {Button} from '../Button/Button';
import { useParams } from 'react-router-dom';

interface IUser extends IUserFull { };

const User: React.FC<IUser> = ({
        id,
        username,
        address,
        company
    }) => {

    const { idNumber } = useParams();

    return (
        <li>
            <p>card id: {id}</p>
            <p>ФИО: {username}</p>
            <p>город: {address.city}</p>
            <p>компания: {company.name}</p>
            <Button text={'редактировать'}/>
        </li>
    )
};

export default User;
