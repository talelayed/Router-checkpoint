import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function CardItem(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.writer}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <div>
            <Button style={{fontFamily:"Verdana", fontSize:"10px",margin:"3px"}} onClick={()=>props.navig(props.id)} variant="contained" endIcon={<SendIcon />}>
           More details
        </Button>
            </div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.url}
        alt="Live from space album cover"
      />
      
    </Card>
  );
}