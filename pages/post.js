import { withRouter } from "next/router";

const Page = withRouter(props => (
  <div>
    <h1>This is a post item</h1>
    <div>{props.router.query.id}</div>
  </div>
));

export default Page;
