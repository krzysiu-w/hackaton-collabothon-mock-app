import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import router from "../router";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="168441896086-1u2jequdkfnffl9htp2ev5j3h29b1h4s.apps.googleusercontent.com">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
