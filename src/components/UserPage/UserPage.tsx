import {IUserFull} from '../../types/data';
import React from "react";
import {Button} from '../Button/Button';
import { useParams } from 'react-router-dom';

interface IUserParams {
    id: number;
};

interface IUserPage extends IUserFull {

};

const UserPage: React.FC<IUserPage> = (props) => {
    console.log(props);
    const {idNumber} = useParams();
    //const user = props.user;

    return (
        <li>
            {/*<p>card id: {id}</p>*/}
            {/*<p>ФИО: {username}</p>*/}
            {/*<p>город: {address.city}</p>*/}
            {/*<p>компания: {company.name}</p>*/}
            <p>{idNumber}</p>
            <Button text={'редактировать'}/>
        </li>
    )
};

export default UserPage;
