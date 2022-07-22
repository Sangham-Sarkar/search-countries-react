import { Switch } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <h2>Where in the world?</h2>
      <Switch className="mode">Dark mode</Switch>
    </div>
  );
}

export default Header;
