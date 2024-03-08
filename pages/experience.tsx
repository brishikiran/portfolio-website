import Page from "components/utility/Page";
import Projects from "components/experience/Experience";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Experience"
      meta={{ desc: "Passionate about architecting and designing dynamic web solutions, leveraging full-stack expertise to create seamless user experiences." }}
    >
       <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Work Experience
        <img
          className="sqD w-12 -top-6 -right-8 absolute"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
      I've worked for a variety of companies, honing my abilities and collaborating with intelligent people. Here's a rundown.
        </p>
    </div>
      <Projects />
    </Page>
  );
}

export default designs;
