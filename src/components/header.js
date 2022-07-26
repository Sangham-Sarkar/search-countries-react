import { Switch } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <h1>Where in the world?</h1>
      <Switch className="mode">Dark mode</Switch>
    </div>
  );
}

export default Header;
