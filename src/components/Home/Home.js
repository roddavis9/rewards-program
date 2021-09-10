import React, {useContext, Fragment} from "react";
import { AppContext } from "../../App";
import Login from '../Login/Login';


const Home = () => {
    const {
        isAuthenticated
    } = useContext(AppContext);

    return (
        <Fragment>
            <div className="homeContainer">
                {(isAuthenticated !== true) ? (
                    <div>
                        <Login />
                    </div>
                ) : (
                    <Fragment>
                        <div className="leftColumn">
                            This is a &quot;Home&quot; Page
                        </div>
                        <div className="rightColumn">
                            right column
                        </div>
                    </Fragment>
                )}

            </div>
        </Fragment>


    );
}

export default Home;
