import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Experience"
      meta={{ desc: "Passionate about architecting and designing dynamic web solutions, leveraging full-stack expertise to create seamless user experiences." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
