
// packages
import React from "react";

import "../../styles/iemain.scss";
import pygoLogo from "../../images/pygo-clear.png";

export default function Home() {

    return (
        <section class="IEsection">
            <div>
                <img src={pygoLogo} />
                <p>Internet Explorer is currently not supported. Please try downloading Chrome/Opera/Firefox.</p>
                <p>Check out our LinkedIn <a href="https://www.linkedin.com/company/pygo-inc/" target="_blank">here</a></p>
            </div>
        </section>
    );
}
