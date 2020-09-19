// packages
import React, { useState, useEffect } from "react";
import { isIE } from 'react-device-detect';

// sections
import Layout from "../components/Layout";
import MainIntroSection from "../components/sections/MainIntroSection";
import News from "../components/sections/News";
// IE page
// import IEindex from "./ie/ieindex";

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    return () => {
      setInProp(false);
    };
  }, []);

  // if (isIE) return <IEindex></IEindex>

  return (
    <div>
      {/* <IEindex></IEindex> */}
      <Layout>
        <MainIntroSection inProp={inProp} />
        <News />
      </Layout>
    </div>
  );
}

