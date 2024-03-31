import React from 'react';
import ProjectCard from './ProjectCard';
import { useMediaQuery, useTheme } from '@mui/material';

const ProjectsList = () => {
  const projects = [
    {
      pphoto:'https://s3-alpha-sig.figma.com/img/2a76/8e5c/51c4c53cbc5f7fdbba7bd554a470a4c9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfpzlU46qmTsVVx7pG4DJdMXxCcGDq2R9bNWbd8ROTS4klIo9Ffbe6fktNEq916qOnye~NhDIu~gBWTPwAPSBgyjTpzOiByHCM6d5k7xMRXCT5TOZqBfJYC2bS3~phm88M2JpEd6nyefv9xHde0Bcsta8xXFEtePDkc8PHe76AKvIf9-j-Nz5H8cP8LEY4CA39aE9b7Gs1aclXoqvvDlW3bixmIfD6YZSQPZVLLBgmiH0S76A5M412GkLa72uXmbLYSUY64uo08dGsRToWzu2Q8g2Ufjx7Xho3kArehYfwulDp68jIXXCSFDIYOT3eUqkgU2YJ-DqqwIg11iq8X~xw__',
      pname: 'Jumys Tap',
      ptext: 'This was my first ever project, I learned everything about HTML/CSS and adapted my project both to desktop and mobile screens',
      plink: 'https://github.com/TemirlanTurabay/Jumys-Tap-Desktop-Mobile'
    },
    {
      pphoto:'https://yt3.googleusercontent.com/ytc/AIdro_ly7UC61VYcaUfXhJgA35Oll81P0a-VYMIhTSaH8w=s900-c-k-c0x00ffffff-no-rj',
      pname: 'medium alike',
      ptext: 'It is my second project and I already know how to work with API! We fetched the articles from NYT and made simple logic to move to another page with the same info',
      plink: 'https://github.com/TemirlanTurabay/Medium-NYT-API'
    },
    {
      pphoto:'https://imageio.forbes.com/specials-images/imageserve/64f8e481ed69b0d89df9e2c7/Twitter-rebrands-to-X/960x0.png?format=png&width=960',
      pname: 'Twitter clone',
      ptext: 'This is when I learned to work with Material UI on which this project also heavily relies! I found especially helpful such components dividers, cards and icons',
      plink: 'https://github.com/TemirlanTurabay/twitter-clone'
    },
    {
      pphoto:'https://s3-alpha.figma.com/hub/file/4209109661/895d1753-993d-4c76-8cbd-a9349edadac8-cover.png',
      pname: 'Simple To Do List',
      ptext: 'Here is the challenging one with the implementation of such proccesses as: pop-out screens, input text storage and passage, creation of new item through props, sorting and deletion',
      plink: 'https://github.com/TemirlanTurabay/Simple-Todo'
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ height: 'auto', textAlign: 'center', marginTop: '30px' }}>
      <h1>What I have developed</h1>
      <p>Thanks to nFactorial and TechOrda 2024</p>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'unset',
        justifyContent: 'space-between',
        margin: '0 auto',
        marginBottom: 60,
        maxWidth: 800,
      }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            pphoto={project.pphoto}
            pname={project.pname}
            ptext={project.ptext}
            plink={project.plink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
