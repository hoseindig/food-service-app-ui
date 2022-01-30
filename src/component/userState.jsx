const UsreState = ({ users }) => {
    return (<div className="userbox">
        {/* <h1>users data</h1> */}
        <ul>
            {users.map(user => {
                return <li><p key={user.userID}>{user.username} - {user.self ? "slef" : ''} - {user.connected ? 'online' : "offline"}</p></li>
            })}
        </ul>
    </div>);
}

export default UsreState;