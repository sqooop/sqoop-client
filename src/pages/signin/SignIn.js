import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, Container, createMuiTheme, Grid, makeStyles, MuiThemeProvider } from '@material-ui/core';

const backgroundTheme = createMuiTheme({
  palette: {
    background: {
      default: 'white',
    },
  },
  typography: {
    fontFamily: 'LotteMartDream',
  },
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginWrap() {
  const classes = useStyles();

  const loginActive = window.sessionStorage.getItem('token');
  const loginFlag = loginActive !== null ? true : false;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeInput = e => {
    let name = e.target.name;
    if (name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (loginFlag) {
      window.history.go(-1);
    }
  }, []);

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      LoginSubmit();
    }
  };

  const sessionSave = (seesionName, sessionData) => {
    window.sessionStorage.setItem(seesionName, sessionData);
  };

  const LoginSubmit = async () => {
    if (email && password !== '') {
      const response = await fetch('서버 로그인 API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(async response => {
          const response_json = await response.json();
          const member = response_json.token.token;
          const nameinfo = response_json.user.name;
          sessionSave('token', member);
          sessionSave('nameinfo', nameinfo);
        })
        .then(() => {
          alert('로그인에 성공하셨습니다.');
          window.history.go(0);
        })
        .catch(e => {
          alert('로그인에 실패하셨습니다.');
          console.log(e);
        });
      return response;
    } else {
      alert('Email&Password를 입력해 주세요.');
    }
  };

  return (
    <MuiThemeProvider theme={backgroundTheme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onKeyUp={enterKey}>
            <TextField variant="standard" margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus type="email" autoComplete="email" onChange={changeInput} />
            <TextField variant="standard" margin="normal" required fullWidth id="password" label="Password" name="password" type="password" autoComplete="password" onChange={changeInput} />
            <Button variant="contained" fullWidth color="primary" className={classes.submit} onClick={LoginSubmit}>
              SIGN IN
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}

export default LoginWrap;
