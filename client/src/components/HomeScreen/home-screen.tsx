import React, { FC, useState } from "react";
import UsernameTextField from "../UserNameTextField/username-text-field";
import UserPasswordTextField from "../PasswordTextField/password-text-field";
import styles from './home-screen.module.scss'
import Logo from "../Logo/logo";

const HomeScreen: FC = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.homeScreenContainer}>
            <Logo></Logo>
            <UsernameTextField userName={username} onUsernameChanged={setUsername}/>
            <br/>
            <UserPasswordTextField userPassword={password} onPasswordChanged={setPassword}/>
        </div>
    )
}

export default HomeScreen;