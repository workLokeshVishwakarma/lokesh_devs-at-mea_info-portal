import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>Welcome, {user.username}!</p>
            <button style={{cursor: "pointer"}} onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </>
  );
};

export default App;
