import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@mui/material";
import React, { FC, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


interface UserPasswordTextFieldProps {
    userPassword: string;
    onPasswordChanged: (updatedUserPassword: string) => void
}

const UserPasswordTextField: FC<UserPasswordTextFieldProps> = ({ userPassword, onPasswordChanged }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value
        onPasswordChanged(password)
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <>
            <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={userPassword}
                    onChange={handleTextChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    )

    //TODO - add validations on username field, if needed

}

export default UserPasswordTextField;