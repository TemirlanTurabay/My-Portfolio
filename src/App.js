import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hi from './components/Hi';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import ProjectsList from './components/ProjectList';
import SayHello from './components/SayHello';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hi/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/projects" element={<ProjectsList/>} />
          <Route path="/say-hello" element={<SayHello/>} />
        </Routes>
        <Footer mode={mode} setMode={setMode} />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
