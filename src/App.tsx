import "./index.css";
import store from "./lib/store.js";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen.jsx";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;
