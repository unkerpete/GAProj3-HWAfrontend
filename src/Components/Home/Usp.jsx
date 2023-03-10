import React, { useState } from "react";
import UspAccordion from "./UspAccordion";
import underline from "../../Assets/shujun/homepage/usp/underline-01.png";

const UspAccordionData = [
  {
    id: 1,
    subheader1: "The support you need,",
    subheader2: " all in one place.",
    body: "We help you to get real and reliable support with controlled costs. From rehabilitation, home care, transportation, and an empathetic network.",
    stats: "src/Assets/shujun/homepage/usp/Stats_1.png",
  },
  {
    id: 2,
    subheader1: "A community advocating",
    subheader2: "for one another.",
    body: "Fostering awareness, and building an inclusive and tight knit community that empowers through self-help and mutual support.",
    stats: "src/Assets/shujun/homepage/usp/Stats_2.png",
  },
  {
    id: 3,
    subheader1: "Let's discover",
    subheader2: "your new normal",
    body: "Our team encourages you to build abilities beyond limitations through comprehensive support and constant innovation.",
    stats: "src/Assets/shujun/homepage/usp/Stats_3.png",
  },
];

const Usp = () => {
  const [accordionId, setAccordianId] = useState(1);

  const handleObjId = (id) => {
    setAccordianId(id);
  };

  return (
    <div className="grid grid-cols-2 bg-secondary-200 p-20 text-primary-800">
      <div className="grid">
        <div className="place-content-start">
          <p className="font-DM text-3xl font-medium">
            What makes us different?
          </p>
          <img className="ml-40" src={underline} width="150" />
        </div>

        <div className="place-content-center">
          {UspAccordionData.map((item, index) => {
            return (
              <UspAccordion
                key={index}
                id={item.id}
                subheader1={item.subheader1}
                subheader2={item.subheader2}
                body={item.body}
                stats={item.stats}
                onSave={handleObjId}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={
            accordionId == 2 || accordionId == 3
              ? "src/Assets/shujun/homepage/usp/Stats_2.png"
              : "src/Assets/shujun/homepage/usp/Stats_1.png"
          }
        />
      </div>
    </div>
  );
};

export default Usp;
