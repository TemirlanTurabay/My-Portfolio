import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function SayHello(){
    const theme = useTheme();
    return(
        <div style={{height: 600, textAlign: 'center'}}>
            <div style={{
                margin: 10, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center"
                }}>
                <h1>Say Hello</h1>
                <p>If you want to work together, please contect me</p>
                <Button variant="contained" style={{backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary}}>Get In Touch</Button>
            </div>
        </div>
    );
}

export default SayHello;