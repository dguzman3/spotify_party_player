import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors";
import { Card } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        }
    },
    overrides: {
        
    }
}) 

const useStyles = makeStyles({
    card: {
     borderRadius: 0,
     backgroundColor: theme.palette.primary.light,
     color: theme.palette.primary.contrastText,
     boxShadow: "none"
    }
   });

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="center">
                    <HomePage />
                </div>
            </ThemeProvider>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);