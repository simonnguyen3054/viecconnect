import fetch from "isomorphic-unfetch";
import PostList from "../components/PostList.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  root: {
    flexGrow: 1
  },

  header: {
    margin: 20,
    justifyContent: "center"
  },

  paper: {
    marginTop: 10,
    marginBottom: 10
  },

  paper_icon: {
    margin: "auto",
    marginBottom: 10,
    width: 50,
    height: 50
  },

  tags: {
    marginBottom: 10,
    display: "flex",
    flexWrap: "wrap"
  },

  chips: {
    marginRight: 10,
    marginBottom: 10
  },

  Card: {
    marginTop: 15,
    borderRadius: 0
  },

  cardActionAreaLink: {
    textDecoration: "none"
  }
};

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      job_avatars: [
        {
          img: "/static/nail_avatar.jpeg",
          label: "Nail",
          job_id: 1
        },
        {
          img: "/static/hau_ban.jpeg",
          label: "Server",
          job_id: 2
        },
        {
          img: "/static/cooking.jpeg",
          label: "Cook",
          job_id: 3
        }
      ],
      open: false,
      job_id: null,
      job_seeking: 1,
      job_hiring: 0
    };
  }

  static async getInitialProps({ req }) {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    const data = await res.json();

    return {
      bpi: data.bpi
    };
  }

  handleJobSeekingChange = (job_seeking, job_hiring) => event => {
    if (event.target.checked) {
      this.setState({ [job_seeking]: 1 });
      this.setState({ [job_hiring]: 0 });
    } else {
      this.setState({ [job_seeking]: 0 });
      this.setState({ [job_hiring]: 1 });
    }
  };

  handleJobHringChange = (job_seeking, job_hiring) => event => {
    if (event.target.checked) {
      this.setState({ [job_seeking]: 0 });
      this.setState({ [job_hiring]: 1 });
    } else {
      this.setState({ [job_seeking]: 1 });
      this.setState({ [job_hiring]: 0 });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormGroup row className={classes.header}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.job_seeking === 1 ? true : false}
                onChange={this.handleJobSeekingChange(
                  "job_seeking",
                  "job_hiring"
                )}
                value="job_seeking"
              />
            }
            label="Xin Việc"
            labelPlacement="bottom"
          />

          <FormControlLabel
            control={
              <Switch
                checked={this.state.job_hiring === 1 ? true : false}
                onChange={this.handleJobHringChange(
                  "job_seeking",
                  "job_hiring"
                )}
                value="job_hiring"
              />
            }
            label="Thuê Việc"
            labelPlacement="bottom"
          />
        </FormGroup>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          className={classes.paper}
        >
          {this.state.job_avatars.map((job, i) => {
            return (
              <Grid item key={i}>
                <Avatar
                  alt="nail"
                  src={job.img}
                  className={classes.paper_icon}
                />
                <Button
                  onClick={this.handleClickOpen}
                  color="secondary"
                  variant="outlined"
                  data-jobid={job.job_id}
                >
                  {job.label}
                </Button>
              </Grid>
            );
          })}
        </Grid>

        <Divider />

        <PostList />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
