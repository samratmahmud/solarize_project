import Link from "next/link";
import {it} from "node:test";
import React from "react";

const aboutProps = [
  {
    thumbneil: "/picture/div (2).svg",
    index: "1",
    title: "Tell us about your building",
    contain:
      "Tell us a bit about your building - what's it made of, where is it located, and what kind of building is it? This will help us get a better understanding of your building and make sure our model can classify it correctly.",
    button: "Get started",
  },
  {
    thumbneil: "/picture/div (1).svg",
    index: "2",
    title: "Tell us more about you",
    contain:
      "Whether you're a tenant looking to reduce your electricity bills or a landlord interested in increasing your operating margins, this information is crucial for us to provide the best solution for you.",
    button: "Get started",
  },
  {
    thumbneil: "/picture/div.svg",
    index: "3",
    title: "Get your quote",
    contain:
      "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
    button: "Get started",
  },
];

function About() {
  return (
    <div className="container">
      <div className="md:mb-16 mb-5">
        <div className="md:text-base text-sm font-semibold text-red-500 text-center mb-2">
          Solar done right
        </div>
        <div className="md:text-4xl text-xl font-bold text-gray-950 mb-3 text-center">
          How?
        </div>
        <div className="md:text-lg text-md text-neutral-600 max-w-[615px] m-auto text-center md:mb-16 mb-6">
          Generate additional income, save on your operations expenditure. Put
          your rooftop to work and increase your margins with solar.
        </div>
        <div className="flex flex-col md:gap-24 gap-12">
          {aboutProps.map((item, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:even:flex-row-reverse md:gap-12 gap-5 justify-between items-center"
            >
              <div className="md:w-1/2">
                <img src={item.thumbneil} alt="" />
              </div>
              <div>
                <div className="text-3xl font-medium text-gray-50 bg-red-500 py-3 px-5 rounded-md inline-block mb-6">
                  {item.index}
                </div>
                <div className="md:text-30 text-xl text-gray-900 md:mb-4 mb-2 font-bold">
                  {item.title}
                </div>
                <div className="md:text-base text-md text-neutral-600 mb-7 max-w-[495px]">
                  {item.contain}
                </div>
                <div className="bg-red-500 py-2 px-4 rounded-md inline-block">
                  <Link href={""} className="text-md font-medium text-gray-50">
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
