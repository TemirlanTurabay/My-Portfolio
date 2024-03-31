import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function MediaCard({pphoto, pname, ptext, plink}) {
  function handleLink(){
    window.location.href = plink;
  }
  const theme = useTheme();
  return (
    <Card sx={{ 
      maxWidth: 345, 
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper
      }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pphoto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pname}
        </Typography>
        <Typography variant="body2" style={{color: theme.palette.text.primary}}>
          {ptext}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLink}>Git</Button>
      </CardActions>
    </Card>
  );
}