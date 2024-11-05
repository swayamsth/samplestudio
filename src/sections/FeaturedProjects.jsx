import React from "react";
import { projects } from "../constants";
import Button from "../components/Button";
import Grid from "../components/Grid";

const FeaturedProjects = () => {
  const projectItems = projects.slice(0, 5);
  const exploreButton = projects[5]?.button;

  return (
    <section>
      <div className="flex items-center gap-8 p-6 sm:p-7 lg:p-8">
        <h1 className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl min-w-fit">
          Featured Projects
        </h1>
        <div className="h-[2px] w-full bg-black rounded-full" />
      </div>

      <Grid projectItems={projectItems} />

      <div className="my-8 flex items-center justify-center">
        {exploreButton && <Button button={exploreButton} />}
      </div>
    </section>
  );
};

export default FeaturedProjects;
