import TextField from "@mui/material/TextField";
import React, { FC } from "react";

interface UsernameTextFieldProps {
    userName: string;
    onUsernameChanged: (updatedUserName: string) => void
}

const UsernameTextField: FC<UsernameTextFieldProps> = ({userName, onUsernameChanged}) => {
    
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value
        onUsernameChanged(username)
    }

    return (
        <div>
            <TextField
                value={userName}
                onChange={handleTextChange}
                label="username"
                variant="standard"
            />
        </div>
    )

    //TODO - add validations on username field, if needed

}

export default UsernameTextField;