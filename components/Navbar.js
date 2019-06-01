import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  appBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: 60
  }
};
const Navbar = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.appBar}>
        <Typography variant="h6" color="inherit">
          ViecConnect
        </Typography>
        <Typography variant="subtitle2" color="inherit">
          Kết nói việc làm trong cộng đồng.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
