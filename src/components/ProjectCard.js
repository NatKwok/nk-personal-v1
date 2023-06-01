import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = (props) => {

const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>

<Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={logo}
        title="language logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="black">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>{linkText}</Button>

      </CardActions>
    </Card>

    </React.Fragment>
    
  );
};

export default ProjectCard;