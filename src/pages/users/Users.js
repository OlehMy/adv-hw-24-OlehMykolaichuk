import React from 'react';
import { useSelector } from "react-redux";

const Users = (props) => {
    const users = useSelector((state) => state.users);

    return (
        <>
        {users.map((user) => (
        <article className = "user" key = {user.username}>
                <img className = "user__photo" src={user.avatar} alt={"userphoto"}/>
                <div className = "user__data">
                    <p className = "user__name"><span>User name: </span>{user.name}</p>
                    <p className = "user__nickname"><span>User nickname: </span>{user.username}</p>
                </div>
            </article>
        ))}
        </>
    );
}

export default Users