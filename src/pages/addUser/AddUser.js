import React, {useState} from 'react';
import {newUser} from '../../store'
import {useDispatch} from "react-redux";

const AddUser = (props) => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState();
    const [userNickname, setUserNickname] = useState();
    const [userPhoto, setUserPhoto] = useState();
    
    const addNewUser = (e) => {
        e.preventDefault();
        dispatch(newUser({
            name: userName,
            username: userNickname,
            avatar: userPhoto,
        }));
    }

    const disabled = (userPhoto
        && userPhoto.startsWith("https://")
        && userPhoto.length>12
        && userName
        && userName.length>2
        && userNickname
        && userNickname.startsWith("@")
        && userNickname.length>3) ?
        false : true;

    return (
        <form className = "inputs flex">
            <div className = "inputs__header flex">
                <h3>Add new user</h3>
            </div>
            <div className = "inputs__text flex">                
                <input className = "inputs__name"
                    name = "name"
                    type = "text"
                    autoComplete="off"
                    pattern = "[A-Za-z]{3,}"
                    onChange = {e => setUserName(e.target.value)}
                    placeholder = "User name*"/>
                <input className = "inputs__nickname"
                    name = "nickname"
                    type = "text"
                    autoComplete="off"
                    pattern = "[\x1F-\xBF]{3,}"
                    onChange = {e => setUserNickname(e.target.value)}
                    placeholder = "User nickname* / starts with '@'"/>
                <input className = "inputs__photo-url"
                    name = "userPhoto"
                    type = "url"
                    autoComplete="off"
                    pattern = "[\x1F-\xBF]{8,}"
                    onChange = {e => setUserPhoto(e.target.value)}
                    placeholder = "User photo url*"/>
            </div>
            <div className = "flex">
                <button className = "inputs__button" onClick = {addNewUser} disabled = {disabled}>add</button>
            </div>
        </form>
    )
}

export default AddUser;