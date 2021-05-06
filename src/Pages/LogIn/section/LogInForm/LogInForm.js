import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LinkStyled, TextFieldCustom } from "./LoginForm.style";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <LinkStyled style={{ fontWeight: 100 }} color="inherit" to="/">
        Your Website
      </LinkStyled>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInput = (setI, val) => {
    setI(val);
  };

  const onSubmit = () => {
    console.log(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextFieldCustom
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              onChangeInput(setEmail, e.target.value);
            }}
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <TextFieldCustom
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              onChangeInput(setPassword, e.target.value);
            }}
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button
            style={{ padding: "1rem 0" }}
            onClick={() => {
              onSubmit();
            }}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <LinkStyled to="/" variant="body2">
                Forgot password?
              </LinkStyled>
            </Grid>
            <Grid item>
              <LinkStyled to="/signup" variant="body2">
                {"Don't have an account?"}
              </LinkStyled>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

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
    marginTop: theme.spacing(1),
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
