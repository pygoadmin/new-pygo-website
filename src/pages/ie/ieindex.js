
// packages
import React from "react";

import "../../styles/iemain.scss";
import pygoLogo from "../../images/pygo-clear.png";

export default function Home() {

    return (
        <section>
            <div>
                <img src={pygoLogo} />
                <p>Internet Explorer is currently not supported. Please try downloading Chrome/Opera/Firefox</p>
            </div>
        </section>
    );
}
