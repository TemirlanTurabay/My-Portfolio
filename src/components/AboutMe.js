import Paper from '@mui/material/Paper';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import MosqueIcon from '@mui/icons-material/Mosque';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function AboutMe() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            textAlign: 'center',
            height: isMobile ? 'auto' : 610,
            alignItems: "center"
        }}>
            <Paper className='1' elevation={12} style={{ backgroundColor: theme.palette.background.paper, width: 300 }}>
                <img src={require("../images/photo_5206539152588397929_y.jpg")} style={{ width: 280, height: 320, objectFit: "cover", margin: 10 }} alt="Medeu"></img>
                <Divider orientation='horizontal' />
                <h2 style={{ color: theme.palette.text.primary }}>Medeu</h2>
                <p style={{ color: theme.palette.text.primary }}>The Medeu is a high-altitude sports complex near Almaty, located at an altitude of 1691 meters above sea level. It is considered to be the world's largest high-mountain skating rink.</p>
            </Paper>
            <div className='2' style={{ width: isMobile ? "100%" : "33%", display: "flex", flexDirection: "column", alignItems: "center", padding: '0 20px' }}>
                <h1>About me</h1>
                <p>I am a NIS Taldykorgan alumni of 2022, since then I am continuing my studies at Nazarbayev University as an ex-foundation freshman at SEDS, department of Computer Science.</p>
                <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-around", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>I am interested in</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li><FitnessCenterIcon /> Exercising regularly</li>
                            <li><MusicNoteIcon /> Listening to music</li>
                            <li><WebIcon /> Developing front-end</li>
                            <li><SchoolIcon /> Advancing my knowledge</li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>I am planning to</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li><SportsKabaddiIcon /> Start grappling</li>
                            <li><MosqueIcon /> Grow spiritually</li>
                            <li><DeveloperModeIcon /> Get into nFactorial Incubator</li>
                            <li><WorkspacePremiumIcon /> Succeed at the university</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Paper className='3' elevation={12} style={{ backgroundColor: theme.palette.background.paper, width: 300 }}>
                <img src={require("../images/Снимок экрана 2024-03-25 161548.png")} style={{ width: 280, height: 320, objectFit: "cover", margin: 10 }} alt="Dzungarian Alatau"></img>
                <Divider orientation='horizontal' />
                <h2 style={{ color: theme.palette.text.primary }}>Dzungarian Alatau</h2>
                <p style={{ color: theme.palette.text.primary }}>The Dzungarian Alatau is a mountain range that lies on the boundary of the Dzungaria region of China and the Zhetysu region of Kazakhstan.</p>
            </Paper>
        </div>
    );
}

export default AboutMe;
