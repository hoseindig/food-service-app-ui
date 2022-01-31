import React, { Component } from "react";
class UsreState extends Component {
    state = { user: {}, username: '', userSelected: {} };
    sendPrivteMessage = (to) => {
        const { socket } = this.props;
        socket.emit("private message", {
            content: "test",
            to: to,
        });
    };
    handleChange = ({ currentTarget: input }) => {
        const user = { ...this.state.user };
        user[input.name] = input.value;
        this.setState({ user });
    };
    handleSelectUser = (userSelected) => {
        this.setState({ userSelected })
    }

    handleSendPrivteMessage = (p) => {
        const { userSelected, user } = this.state;
        const { onMessage } = this.props;
        // debugger
        if (userSelected.userID && user.text) {
            onMessage(user.text, userSelected.userID)
        }
        else alert('select user and enter text message')
    }
    render() {
        const { users, onMessage, socketRegisterUserForConnect } = this.props;
        const { username, user } = this.state;
        return (
            <div className="userbox">
                <p>{user.username}</p>
                <ul>
                    {users.map((user) => {
                        return (
                            <li key={user.userID}>
                                <button onClick={() => this.handleSelectUser(user)}>
                                    {user.username} - {user.self ? "slef" : ""} -{" "}
                                    {user.connected ? "online" : "offline"}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {users.length === 0 ? (
                    <div>
                        <input
                            placeholder="username"
                            name="username"
                            type="text"
                            id=""
                            onChange={this.handleChange}
                        />
                        <button onClick={() => socketRegisterUserForConnect(user.username)}>
                            connect
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            placeholder="text"
                            name="text"
                            type="text"
                            id=""
                            onChange={this.handleChange}
                        />
                        <button onClick={() => this.handleSendPrivteMessage(user.text)}>
                            send
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default UsreState;
