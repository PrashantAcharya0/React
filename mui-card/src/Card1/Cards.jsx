import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";

// Card:  yo overall container bhayo
// CardActions: yesma action elements jastai buttons, icons jun bottom tira rakhne card ko
// CardContent: main content haru jastai text
// CardMedia: image wa video haru halna
// Typography:  Handles text elements with customizable styles and variants

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://crestwoodvethospital.com/wp-content/uploads/2023/05/Green_Iguana-800x530-1.jpg"
        title="Green Iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <ShareIcon />
        </IconButton>
        <Button
          size="small"
          variant="contained"
          color="info"
          endIcon={<InfoIcon />}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
/* 

function Cards()
{
return ()
}

yesari ne garna milxa
*/
