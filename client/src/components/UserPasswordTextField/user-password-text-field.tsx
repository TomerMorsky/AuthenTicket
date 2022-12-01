import TextField from "@mui/material/TextField";
import React, { FC } from "react";

interface UserPasswordTextFieldProps {
    userPassword: string;
    onPasswordChanged: (updatedUserPassword: string) => void
}

const UserPasswordTextField: FC<UserPasswordTextFieldProps> = ({userPassword, onPasswordChanged}) => {
    
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value
        onPasswordChanged(password)
    }

    return (
        <div>
            <TextField
                value={userPassword}
                onChange={handleTextChange}
                label="password"
                type="password"
                variant="standard"
            />
        </div>
    )

    //TODO - add validations on username field, if needed

}

export default UserPasswordTextField;