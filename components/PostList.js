import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const styles = {
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

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          post_id: 7,
          job_id: 2,
          username: "Simon Nguyen",
          phone_number: "7632679359",
          post_content: "Thue viec server",
          job_location: "San Mateo",
          experience: "6-10 năm",
          salary: "$3000-$5000/tháng",
          post_date: "2019-04-27T21:51:16.000Z",
          job_name: "Hầu Bàn",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/hau_ban.jpeg",
          job_search: 0
        },
        {
          post_id: 6,
          job_id: 3,
          username: "My Huynh",
          phone_number: "7632679359",
          post_content: "Xin viec Cook",
          job_location: "San Francisco",
          experience: "4-6 năm",
          salary: "$5000-$7000/tháng",
          post_date: "2019-04-27T21:50:55.000Z",
          job_name: "Phụ Bếp",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/cooking.jpeg",
          job_search: 1
        },
        {
          post_id: 5,
          job_id: 3,
          username: "Jason",
          phone_number: "12323123",
          post_content: "em la tho cook rat gioi",
          job_location: "San Mateo",
          experience: "4-6 năm",
          salary: "$5000-$7000/tháng",
          post_date: "2019-04-26T18:46:38.000Z",
          job_name: "Phụ Bếp",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/cooking.jpeg",
          job_search: 1
        },
        {
          post_id: 4,
          job_id: 3,
          username: "Jimmy",
          phone_number: "122121323",
          post_content: "Em can nguoi giup viec",
          job_location: "San Mateo",
          experience: "4-6 năm",
          salary: "Có thể thương lượng",
          post_date: "2019-04-26T18:44:41.000Z",
          job_name: "Phụ Bếp",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/cooking.jpeg",
          job_search: 0
        },
        {
          post_id: 3,
          job_id: 3,
          username: "Dat Tran",
          phone_number: "7632679359",
          post_content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          job_location: "San Mateo",
          experience: "2-4 năm",
          salary: "$1000-$3000/tháng",
          post_date: "2019-04-26T18:26:29.000Z",
          job_name: "Phụ Bếp",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/cooking.jpeg",
          job_search: 1
        },
        {
          post_id: 1,
          job_id: 1,
          username: "Simon Nguyen",
          phone_number: "763-267-9359",
          post_content:
            "Em là thợ nail có kinh nghiệm 2 năm làm bột và chân tay nước. Vì chổ làm củ không phù hợp nửa, em đang tìm một tiệm mới. Em nói tiếng anh chuẩn, customer service tốt.",
          job_location: "San Mateo",
          experience: "0-2 năm",
          salary: "$3000-$5000/tháng",
          post_date: "2019-04-26T18:25:42.000Z",
          job_name: "Làm Nail",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/nail_avatar.jpeg",
          job_search: 1
        },
        {
          post_id: 2,
          job_id: 1,
          username: "Mimi Nguyen",
          phone_number: "763-923-9599",
          post_content:
            "Tiệm em mới mở đang cần thợ biết làm bột và chân tay nước.",
          job_location: "San Mateo",
          experience: "0-2 năm",
          salary: "$3000-$5000/tháng",
          post_date: "2019-04-26T18:25:42.000Z",
          job_name: "Làm Nail",
          job_avatar:
            "https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/nail_avatar.jpeg",
          job_search: 0
        }
      ],
      job_avatars: [
        {
          img: "/assets/images/nail_avatar.jpeg",
          label: "Nail",
          job_id: 1
        },
        {
          img: "/assets/images/hau_ban.jpeg",
          label: "Server",
          job_id: 2
        },
        {
          img: "/assets/images/cooking.jpeg",
          label: "Cook",
          job_id: 3
        }
      ]
    };
  }

  handleDateFormat = date => {
    const formattedDate = date.substring(0, 10);
    return formattedDate;
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.posts.map(post => {
          return (
            <Card key={post.post_id} className={classes.Card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label={post.job_name}
                    alt={post.job_name}
                    src={post.job_avatar}
                  />
                }
                action={
                  <IconButton>
                    <a href={"tel: " + post.phone_number}>
                      <Icon>call</Icon>
                    </a>
                  </IconButton>
                }
                title={post.username}
                subheader={this.handleDateFormat(post.post_date)}
              />

              <Link as={`/p/${post.post_id}`} href={`/post?id=${post.post_id}`}>
                <a className={classes.cardActionAreaLink}>
                  <CardActionArea>
                    <CardContent>
                      <Typography color="textPrimary" component="p">{post.post_content}</Typography>
                    </CardContent>

                    <CardActions className={classes.tags}>
                      <Chip
                        className={classes.chips}
                        label={"Khu Vực Gần: " + post.job_location}
                      />
                      <Chip
                        className={classes.chips}
                        label={"Kinh Nghiệm: " + post.experience}
                      />
                      <Chip
                        className={classes.chips}
                        label={"Lương Bổng: " + post.salary}
                      />
                    </CardActions>
                  </CardActionArea>
                </a>
              </Link>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PostList);
