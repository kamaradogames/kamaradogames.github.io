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
    width: "300px"
  },

  cardImage: {
    paddingTop: "100%"
  }

}));


function App() {

  const classes = useStyles();

  const actionAreaClickHandler = useCallback(() => {
    window.location = "https://play.google.com/store/apps/details?id=com.IgorSotnikov.PebbleWay"
  }, [])

  return (
    <div className={classes.root}>

      <Paper elevation={1} className={classes.titleConatiner1}>
        {/*<Typography variant="h2" component="h2" className={classes.title1}>Kamarado Games</Typography>*/}
        <img alt="Kamarado Games" src="/images/title.png" style={{ width: '50%'}}/>
      </Paper>
      {/*<Paper elevation={2} className={classes.titleConatiner2}>
        <Typography variant="h6" component="h6" className={classes.title2}>games by Igor Sotnikov</Typography>
      </Paper>*/}

      <br/>      

      <div className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardHeader title="Pebble Way" />
          <CardActionArea onClick={actionAreaClickHandler}>
            <CardMedia className={classes.cardImage} image="/images/game-icons/pebble-way.png" title="Pebble Way" />
            <CardContent>
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
      </div>

    </div>

  );
}

export default App;
