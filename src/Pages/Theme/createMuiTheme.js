import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";
import "./index.css";

export default () =>
  createMuiTheme({
    palette: {
      primary: cyan,
      secondary: teal,
      error: red
    },
    typography: {
      htmlFontSize: 16, // JW 2018: material's preferred way to use rems at 62.5% (10px)
      fontSize: 14
    }
    //shadows: ["none"]
  });
