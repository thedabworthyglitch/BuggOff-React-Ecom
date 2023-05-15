import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import "../styles/auth.css";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nextjs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
