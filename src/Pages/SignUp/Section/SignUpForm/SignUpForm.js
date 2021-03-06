import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { hipster2 } from "react-icons-kit/icomoon";
import { LinkStyled, TextFieldCustom } from "./SignUp.style";
import { connect } from "react-redux";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";
import Loading from "../../../../Components/Loader/Loader";
import client from "../../../../Utils/Connection";
import swal from "sweetalert";
import Cookies from "universal-cookie";
const cookies = new Cookies();

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

function SignUpForm(props) {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChange = (name, value) => {
    name(value);
  };

  const onSubmit = async () => {
    console.log(fname, lname, email, password, password2);

    if (!fname || !lname || !email || !password || !password2) {
      swal("Fill the Form");
      return;
    }

    if (password !== password2) {
      swal("Password did not matched");
      return;
    }

    try {
      setLoading(true);
      const data = await client.post("/auth/register", {
        fname,
        lname,
        email,
        password,
      });

      cookies.set("token", data.data.token, { path: "/" });
      props.login(data.data);
    } catch (err) {
      swal("Something went wrong try again!!");
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  } else {
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
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) => {
                    onChange(setFname, e.target.value);
                  }}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldCustom
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) => {
                    onChange(setLname, e.target.value);
                  }}
                  label="Last Name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldCustom
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  onChange={(e) => {
                    onChange(setEmail, e.target.value);
                  }}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldCustom
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  onChange={(e) => {
                    onChange(setPassword, e.target.value);
                  }}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldCustom
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  onChange={(e) => {
                    onChange(setPassword2, e.target.value);
                  }}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              style={{ padding: "1rem 0" }}
              fullWidth
              onClick={onSubmit}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="center" style={{ margin: "2rem 0" }}>
              <Grid item>
                <LinkStyled to="/login">
                  Already have an account? Sign in
                </LinkStyled>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const propstostate = (dispatch) => {
  return {
    login: (data) => {
      dispatch({
        type: "LOGIN",
        payload: {
          data,
        },
      });
    },
  };
};

export default connect(null, propstostate)(SignUpForm);
