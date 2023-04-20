import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Icon, IconButton, Container, Card, CardContent, CardActions, Typography, CardHeader, Avatar, CardMedia } from '@mui/material';
// mui replaced JSS with TSS in v5, needed to expand dependencies
import { makeStyles } from 'tss-react/mui';
//import { CardContent } from '@material-ui/core'; 
// ^^^ where did this come from? Generates hook-error on compiling

// makeStyles needs to be 'double-called'
const useStyles = makeStyles()({
  media: {
    height: 200
  },
  readMore: {
    marginLeft: "auto !important"
  },
  avatar: {
    backgroundColor: "orangered"
  },
  card: {
    margin: "10px"
  }
})

function ArticleCard(props) {
  const {classes} = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title="John Doe"
        subheader="Joined 2019-06-08"
        avatar={<Avatar className={classes.avatar}>JD</Avatar>}
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/600/400"
      />
      <CardContent>
      <Typography variant="h6">Clickbait title!</Typography>
      <Typography variant="body2">Some fascinating stinkpiece on a hot topic...</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <Button className={classes.readMore} variant="outlined" color="primary">Read more</Button>
      </CardActions>
    </Card>
  )
};

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />

      </Container>
    </div>
  );
}

export default App;
