import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";

export const Home = () => (
  <div>
    map
    <Button Type={ButtonTypes.Link} href='/auth'>
      Markt Login
    </Button>
  </div>
);

export default Home;
