import * as React from "react";
import { CustomerMap, Button, ButtonTypes } from "../../components/index";

export const Home = () => (
  <div>
    <CustomerMap />
    <Button Type={ButtonTypes.Link} href='/auth'>
      Markt Login
    </Button>
  </div>
);

export default Home;
