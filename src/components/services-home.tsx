"use client";

import { serif } from "@/app/fonts";
import {
  Events,
  IncreaseLevel,
  PenFountain,
  ArrowUpRight,
} from "@carbon/icons-react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Market and Experience Research",
      description: "Discover the heartbeat of your audience.",
      icon: <Events size="24" className="text-fuchsia-500" />,
      color: "fuchsia-500",
      serviceItems: [
        "Specialty Recruitment",
        "Applied Ethnography",
        "Mixed Method Studies",
        "Survey Design and Programming",
      ],
    },
    {
      id: 2,
      name: "Data Analytics and Strategy",
      description: "Empower your decisions with data.",
      icon: <IncreaseLevel size="24" className="text-red-500" />,
      color: "red-500",

      serviceItems: [
        "Experience Mapping",
        "Audience Segmentation",
        "Persona Development",
        "Community Growth and Advocacy",
      ],
    },
    {
      id: 3,
      name: "Product and Systems Design",
      description: "Deliver seamless digital experiences to your users.",
      icon: <PenFountain size="24" className="text-cyan-500" />,
      color: "cyan-500",

      serviceItems: [
        "Heuristic UX Assessment",
        "Information Architecture",
        "Interaction Design and Prototyping",
        "Data Visualization",
      ],
    },
  ];

  const serviceListItems = services.map((service) => (
    
      <Card
        key={service.id}
        fullWidth
        isPressable
        className={`border-l-2 border-${service.color} rounded-md`}
      >
        <CardBody className="p-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              {service.icon}
              <h3 className={`${serif.className} font-bold text-xl`}>
                {service.name}
              </h3>
              <p>{service.description}</p>
            </div>
            <ul className="flex flex-col gap-4 text-right">
              {service.serviceItems.map((item) => (
                <li key={`${service.id}-${item}`} className={`hover:text-${service.color}`}>
                    {item}
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
  ));

  return (
    <section id="services">
      <div className="container mx-auto py-32">
        <h2 className={`${serif.className} font-bold text-2xl text-center`}>
          Data-Driven Strategies and Design Excellence
        </h2>
        <div className="flex flex-col gap-12 mt-10 justify-between w-full">
          {serviceListItems}
        </div>
      </div>
    </section>
  );
}
