'use client'
import { serif } from "@/app/fonts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Cognitive, Hearing } from "@carbon/icons-react";

export default function DataProjects() {
  return (
    <section id="data-projects">
      <div className="max-w-screen-xl mx-auto py-16">
        
          <h2 className={`${serif.className} text-center text-2xl font-bold w-full`}>
            Gauge does more with data.
          </h2>
        
        <div className="grid grid-cols-2 gap-12 mt-12">
          <Card radius="sm" fullWidth className="p-12 border-t-2 border-amber-500">
            <CardBody>
              <Cognitive size="32" />
              <h3 className={`${serif.className} font-bold text-xl mt-8`}>
                Segmentation and Clustering
              </h3>
              <p className="mt-4">
                Upload 10,000 rows of survey data, classify the columns and see
                what segments result.
              </p>
              <Link className="text-amber-500 mt-8">anchorbox.gauge.io</Link>
            </CardBody>
          </Card>
          <Card radius="sm" fullWidth className="p-12 border-t-2 border-amber-500">
            <CardBody>
              <Hearing size="32" />
              <h3 className={`${serif.className} font-bold text-xl mt-8`}>
                Natural Language Sandbox
              </h3>
              <p className="mt-4">
              Explore differences in unstructured text between demographics in public reviews and comments.
              </p>
              <Link className="text-amber-500 mt-8">anchorbox.gauge.io</Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );

}