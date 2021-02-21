import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Products } from "./Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
