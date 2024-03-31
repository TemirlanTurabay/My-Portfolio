import React from 'react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';

const Experiences = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div style={{ height: 'auto', textAlign: 'center', padding: '20px' }}>
      <h1>My prior CV</h1>
      <p>These are things I was doing before getting into IT</p>
      <div
        className="experiences"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '20px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
          }}
        >
          <div className="experience-card" style={{ padding: '20px' }}>
            <h3>Middle school</h3>
            <ul>
              <li>Physics olympiad bootcamp in Taraz city</li>
              <li>2nd place at "Физтех" online-olympiad</li>
              <li>Diploma with honours</li>
            </ul>
            <span>2016-2018</span>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '20px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
          }}
        >
          <div className="experience-card" style={{ padding: '20px' }}>
            <h3>High school</h3>
            <ul>
              <li>Letter of appreciation from "ҚХА" of Almaty region for start-up project presentation</li>
              <li>Stanford University course completion certificate by John Hopkins Center for Talanted Youth</li>
              <li>Certificate of participation in a republican event X Nauryz Kezdesuleri among all NISs</li>
              <li>SAT 1380, SAT 1400</li>
              <li>IELTS 7.5, IELTS 8.0</li>
              <li>Interview to the national youth newspaper "Ulan"</li>
              <li>Medal of "Gifted student of Republic of Kazakhstan"</li>
              <li>Medal of "Hope worth student of Kazakhstan"</li>
              <li>University of Cambridge Local Examination (МЭСК) A*A*A*AB</li>
              <li>United National Testing (ЕНТ) 139</li>
              <li>Diploma with honours</li>
              <li>Nazarbayev University Entranse Test (NUET) 153</li>
            </ul>
            <span>2018-2022</span>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '20px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
          }}
        >
          <div className="experience-card" style={{ padding: '20px' }}>
            <h3>Tertiary education</h3>
            <ul>
              <li>Leader of group 17 at Treasure Hunt 2022</li>
              <li>Top 10 % of the class 2022 - 2023 </li>
              <li>Progression to NU SEDS with CS major</li>
              <li>TechOrda 2023 scholarship winner</li>
              <li>nFactorial Start (October - December, 2023)</li>
              <li>nFactorial FrontEnd (January - April, 2024)</li>
            </ul>
            <span>2022-2024</span>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Experiences;

