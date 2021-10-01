import { Route, Switch } from "react-router";
import { Artists } from "./Artists";
import { History } from "./History"
import { LikedSongs } from "./LikedSongs";
import { YourEpisodes } from "./YourEpisodes";


function SidebarRoutes (){

    return (
        <div>
            <Switch>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/likedsongs">
                    <LikedSongs />
                </Route>
                <Route path="/yourepisodes">
                    <YourEpisodes />
                </Route>
                <Route path="/artists">
                    <Artists />
                </Route>
            </Switch>
        </div>
    )
}

export { SidebarRoutes };