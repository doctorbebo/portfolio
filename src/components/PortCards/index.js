import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const cardStyle = {
  margin: "15px",
  backgroundColor: "#333333",
  color: "#d6d6d6",
};

export default function MediaCard({cardData: { title, text, img, link }} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={cardStyle}>
      <CardActionArea target="_blank" href={link}>
        <CardMedia className={classes.media} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="inherit" target="_blank" href={link} style={{ backgroundColor: "#6b6b6b" }}>
          Check it out
        </Button>
      </CardActions>
    </Card>
  );
}
