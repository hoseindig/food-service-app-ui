const UsreState = ({ users }) => {
    return (<div className="userbox">
        {/* <h1>users data</h1> */}
        <ul>
            {users.map(user => {
                return <p>{user.username} - {user.self ? "slef" : ''} - {user.connected ? 'online' : "offline"}</p>
            })} <li></li>
        </ul>
    </div>);
}

export default UsreState;