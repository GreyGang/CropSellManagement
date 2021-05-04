import React from "react";
import { Icon } from "react-icons-kit";
import { hipster2 } from "react-icons-kit/icomoon";
import { LinkStyled, TextFieldCustom } from "./index.style";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#424242",
    },
  },
  blackTextField: {
    backgroundColor: "#424242",
  },
}));

export default function SignUpComp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon icon={hipster2} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldCustom
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldCustom
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldCustom
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldCustom
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            style={{ padding: "1rem 0" }}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center" style={{ margin: "2rem 0" }}>
            <Grid item>
              <LinkStyled to="/login" variant="body2">
                Already have an account? Sign in
              </LinkStyled>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
