import React from "react";

interface User {
    id: number;
    name: string;
}
const UsersPage = async()=>{
 const res = await fetch("https://jsonplaceholder.typicode.com/users", 
 {cache: "no-store"} //if data changes frequently, for disable caching
 //{next: {revalidate: 10 }} //get fresh data from backend every 10 sec, cache only works in fetch method
 )
 const users: User[] = await res.json()
    return(
        <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        </>
    )
}

export default UsersPage;