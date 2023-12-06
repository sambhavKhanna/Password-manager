import { useState } from "react";
import { Typography, TextField, Button, Card } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    return (

        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{ paddingTop: 100}}>
            <Typography variant={'h4'}>
            Login
            </Typography>
            </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", paddingTop:20}}>    
            <Card varient={"outlined"} style={{ width: 400, padding: 20 }}>
            <TextField onChange={(e) => { setUsername(e.target.value) }} fullWidth id="outlined-basic" label = "Username" varient = "outlined " style={{marginTop: 10, marginBottom: 10}}></TextField>
            <br />
            <TextField onChange={(e) => { setPassword(e.target.value) }} fullWidth id="outlined-basic" type="password" label = "Password" varient = "outlined " style={{marginBottom: 10}}></TextField>
            <br />
            <Button onClick ={() => { navigate('/homepage') }} size={"large"} variant='contained' style={{marginBottom: 10}}>Login</Button>
            </Card>
            </div>
        </div>

    )
}