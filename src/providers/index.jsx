import { TokenProvider } from "./Token";
import { UserProvider } from "./GetUserProviders/";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>{children}</UserProvider>
    </TokenProvider>
  );
};

export default Providers;
