import Middelman from "@/components/template/Middelman";
import React from "react";

function Platform() {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 md:mb-36 mb-16">
        <Middelman
          name="Skip the middleman and onboard in 1 minute."
          title="Our platform connects you directly with local solar installers, eliminating the need for a middleman and saving you money. Our online onboarding process is quick and easy, allowing you to get started with solar without the hassle of paperwork or in-person meetings."
          learn="Learn more"
          pic="/picture/Group 33.png"
        />
        <Middelman
          name="Reach your net zero goals faster with observability at the panel level."
          title="Our solar pricing is transparent and straightforward, with no hidden fees or costs. You'll know exactly what you're paying for upfront, making it easy to budget and plan for your solar installation. We know the cost of every single material and number of work hours needed.."
          learn="Learn more"
          pic="/picture/Group 17.png"
        />
        <Middelman
          name="Experience the peace of mind that comes with  24/7 support."
          title="Our team of experienced professionals ensures that your solar panel installation is done to the highest standards and offers ongoing support for the life of your solar installation. We take pride in our commitment to customer satisfaction and are dedicated to providing the best service and support to our customers.
          "
          learn="Learn more"
          pic="/picture/Group 33.png"
        />
        <Middelman
          name="Reach your net zero goals faster with observability at the panel level."
          title="We offer comprehensive data integration and reporting capabilities, enabling you to track your carbon offset and monitor the performance of the solar installation in real-time. With seamless integration into your existing reporting systems and dashboards, you can make informed decisions and optimize sustainability strategy."
          learn="Learn more"
          pic="/picture/div.png"
        />
      </div>
    </div>
  );
}

export default Platform;
