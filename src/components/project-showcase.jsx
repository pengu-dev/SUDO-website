import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    name: "Sudo Website",
    description: "A website project that presents the Discord server SUDO",
    madeBy: "Shadi",
    link: "https://github.com/shadi993/SUDO-website",
  },
  {
    name: "TodoList Python",
    description: "First python project made for practice",
    madeBy: "Shadi",
    link: "https://github.com/shadi993/ToDoListPyhon",
  },
];

function ProjectShowcase() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-semibold text-foreground mb-2">
          Projects
        </h1>
        <p className=" text-neutral-200">
          For showcasing Projects that is made by our members.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col h-full">
            <CardContent className="flex flex-col flex-grow ">
              <div className="mt-5 m-2">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="">{project.description}</p>
              </div>

              <div className="mt-auto flex items-end justify-between mr-2">
                <p className="text-muted-foreground text-sm ml-2">
                  Created by{" "}
                  <span className="text-accent font-semibold">
                    {project.madeBy}
                  </span>
                </p>

                <a href={project.link} target="_blank">
                  <Button variant="default" type="button">
                    View Project
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
