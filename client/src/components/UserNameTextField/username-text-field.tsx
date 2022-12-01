import TextField from "@mui/material/TextField";
import React, { FC } from "react";

interface UsernameTextFieldProps {
    userName: string;
    onUsernameChanged: (updatedUserName: string) => void
}

const UsernameTextField: FC<UsernameTextFieldProps> = ({userName, onUsernameChanged}) => {
    
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const usernameInput = event.target.value
        onUsernameChanged(usernameInput)
    }

    return (
        <div>
            <TextField
                value={userName}
                onChange={handleTextChange}
                id="standard-password-input"
                label="username"
                autoComplete="current-password"
                variant="standard"
            />
        </div>
    )

    //TODO - add validations on username field, if needed

}

export default UsernameTextField;