import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {CanvasProvider} from "./components/Drawing/CanvasContext";
import Drawing from "./user/games/Drawing";
import PixelDrawing from "./user/games/PixelDrawing";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/drawing">
                    <CanvasProvider>
                        <Drawing />
                    </CanvasProvider>
                </Route>
                <Route path="/drawing-pixel">
                    <PixelDrawing />
                </Route>
                {/*<Route path="/">*/}
                {/*    <Home />*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    );
}

export default App;
