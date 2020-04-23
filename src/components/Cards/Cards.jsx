import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.dateTitle}>
        Stats as of {new Date(lastUpdate).toDateString()}
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent className={styles.cards}>
            <Typography
              className={styles.title}
              variant="overline"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography>
              <CountUp
                className={styles.count}
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              className={styles.title}
              variant="overline"
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                className={styles.count}
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              className={styles.title}
              variant="overline"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                className={styles.count}
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
