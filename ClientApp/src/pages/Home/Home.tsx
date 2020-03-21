import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";

export const Home = () => (
  <div>
    map
    <Button
      Type={ButtonTypes.Confirm}
      onClick={() => console.log("console log")}
    >
      Console Log
    </Button>
    <Button Type={ButtonTypes.Link} href='/about'>
      Mark Login
    </Button>
  </div>
);

export default Home;
