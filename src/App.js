import { useCallback } from 'react'

import {
  Paper, Typography,
  Card, CardHeader, CardMedia,
  CardContent, CardActions, 
  CardActionArea, Tabs, Tab
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },

  titleConatiner1: {
    padding: "50px",
    width: "80%",
    margin: "50px 50px 0px 50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  titleConatiner2: {
    height: "50px",
    width: "300px",
    margin: "-25px 0px 50px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  title1: {
    textAlign: "center"
  },

  title2: {
    textAlign: "center"
  },

  cardGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  card: {
    width: "300px",
    margin: "25px"
  },

  cardImage: {
    paddingTop: "100%"
  },

  cardContent: {
    height: "125px"
  }

}));


function App() {

  const classes = useStyles();

  const actionAreaClickHandler_PebbleWay = useCallback(() => {
    window.location = "https://play.google.com/store/apps/details?id=com.IgorSotnikov.PebbleWay"
  }, [])

  const actionAreaClickHandler_SpringySquares = useCallback(() => {
    window.location = "https://play.google.com/store/apps/details?id=com.KamaradoGames.SpringySquares"
  }, [])

  return (
    <div className={classes.root}>

      <img alt="Kamarado Games" src="/images/title.png" style={{ width: '40%'}}/>

      <br/>      

      <div className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardHeader title="Pebble Way" />
          <CardActionArea onClick={actionAreaClickHandler_PebbleWay}>
            <CardMedia className={classes.cardImage} image="/images/game-icons/pebble-way.png" title="Pebble Way" />
            <CardContent className={classes.cardContent}>
              <Typography paragraph>
                In Pebble Way, you have to help the pebble reach its target without getting caught by the enemy pebbles.
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.IgorSotnikov.PebbleWay&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{ width: "100%" }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
            </div>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader title="Springy Squares" />
          <CardActionArea onClick={actionAreaClickHandler_SpringySquares} >
            <CardMedia className={classes.cardImage} image="/images/game-icons/springy-squares.png" title="Pebble Way" />
            <CardContent  className={classes.cardContent}>
              <Typography paragraph>
              The jumping game for those who want to test themselves or just kill time.
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.KamaradoGames.SpringySquares&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{ width: "100%" }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
            </div>
          </CardActions>
        </Card>
      </div>

    </div>

  );
}

export default App;
