import TextField from "@mui/material/TextField";
import React, { FC } from "react";
import styles from './username-text-field.module.scss'

interface UsernameTextFieldProps {
    userName: string;
    onUsernameChanged: (updatedUserName: string) => void
}

const UsernameTextField: FC<UsernameTextFieldProps> = ({ userName, onUsernameChanged }) => {

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value
        onUsernameChanged(username)
    }

    return (
        <TextField className={styles.usernameFullWidth}
            value={userName}
            onChange={handleTextChange}
            label="Username"
            variant="standard"
        />
    )

    //TODO - add validations on username field, if needed

}

export default UsernameTextField;