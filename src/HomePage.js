import { TextField, Typography, Card, Button } from "@mui/material"
import { Dropdown } from "./Dropdown"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div style={{paddingTop:30, paddingRight:50, paddingLeft:50, paddingBottom:50}}>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography variant={'h5'}>Password Manager</Typography>

            </div>

            <br />


            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography variant={'h6'}>Add Connection</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                <TextField style={{margin:5}} id="outlined-basic" label = "Connection Name" varient = "outlined "></TextField>
                <Dropdown lst={['LNX', 'ORA', 'SQL', 'WEB', 'WIN']} label={'Database Type'}></Dropdown>
                <Dropdown lst={['DEV', 'POC', 'PRD', 'SUP', 'TST', 'UAT']} label={'Environment'}></Dropdown>
                <Dropdown lst={['AD', 'APP', 'OUD', 'SVR']} label={'Managed By'}></Dropdown>
                <TextField style={{margin:5}} id="outlined-basic" label = "Server Name" varient = "outlined "></TextField>
                <TextField style={{margin:5}} id="outlined-basic" label = "Description" varient = "outlined "></TextField>
                <TextField style={{margin:5}} id="outlined-basic" label = "URL" varient = "outlined "></TextField>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <Button variant='contained' style={{marginTop:5}}>Add Connection</Button>
            </div>

            <br />
            <br />


            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography variant={'h6'}>Search Connection</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                <TextField style={{margin:5}} id="outlined-basic" label = "Connection Name" varient = "outlined "></TextField>
                <Dropdown lst={['LNX', 'ORA', 'SQL', 'WEB', 'WIN']} label={'Database Type'}></Dropdown>
                <Dropdown lst={['DEV', 'POC', 'PRD', 'SUP', 'TST', 'UAT']} label={'Environment'}></Dropdown>
                <Dropdown lst={['AD', 'APP', 'OUD', 'SVR']} label={'Managed By'}></Dropdown>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <Button onClick={() => { navigate('/connections') }} variant='contained' style={{marginTop:5}}>Search Connection</Button>
            </div>

            <br />
            <br />

            <div style={{display:"flex", justifyContent:"center"}}>
                <Typography variant={'h6'}>Search Logins</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap"}}>
                <Dropdown lst={[]} label={'Connection Name'}></Dropdown>
                <Dropdown lst={['LNX', 'ORA', 'SQL', 'WEB', 'WIN']} label={'Database Type'}></Dropdown>
                <Dropdown lst={['DEV', 'POC', 'PRD', 'SUP', 'TST', 'UAT']} label={'Environment'}></Dropdown>
                <TextField style={{margin:5}} id="outlined-basic" label = "Username" varient = "outlined "></TextField>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <Button onClick={() => { navigate('/logins') }} variant='contained' style={{marginTop:5}}>Search Logins</Button>
            </div>


        </div>
    )
}