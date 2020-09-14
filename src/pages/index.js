// packages
import React, { useState, useEffect } from "react";

// sections
import Layout from "../components/Layout";
import MainIntroSection from "../components/sections/MainIntroSection";
import News from "../components/sections/News";

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    return () => {
      setInProp(false);
    };
  }, []);

  return (
    <div>
      <Layout>
        <MainIntroSection inProp={inProp} />
        <News />
      </Layout>
    </div>
  );
}

