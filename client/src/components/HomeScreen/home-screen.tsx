import React, { FC, useState } from "react";
import UsernameTextField from "../UserNameTextField/username-text-field";

const HomeScreen: FC = () => {

    const [username, setUsername] = useState("stam user");

    return (
        <div>
            <UsernameTextField userName={username} onUsernameChanged={setUsername}></UsernameTextField>
        </div>
    )
}

export default HomeScreen;