import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

export const SearchConnections = () => {

    const navigate = useNavigate()

    return (
        <div style={{padding:10}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <Button onClick={() => { navigate('/homepage') }} variant='contained'>Back</Button>

            <Button variant='contained'>Save List</Button>

            <Button variant='contained'>Save Table</Button>

            </div>
            
        </div>
    )
}