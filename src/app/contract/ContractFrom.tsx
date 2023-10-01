import TextField from "@/components/common/TextField";
import Customer from "@/components/template/Customer";
import React from "react";

function ContractFrom() {
  return (
    <div className="container md:pb-14 pb-7">
      <div className="flex flex-col lg:flex-row justify-between gap-7">
        <div>
          <div className="inline-block md:mb-14 mb-5">
            <Customer activateButton="Installer" />
          </div>
          <div className="xl:text-8xl md:text-9xl text-5xl font-bold text-red-500 md:mb-12 mb-5 max-w-[530px]">
            Join us <br /> & grow your business
          </div>
          <div className="md:text-md text-xs font-medium text-cyan-950 max-w-[526px]">
            Join our network of top-rated solar installers and take your
            business to the next level. By partnering with us, you'll get access
            to a steady stream of high-quality project from our customers. Our
            platform simplifies the process, saving you time and money. <br />{" "}
            <br /> Sign up now to get started and take on existing projects.
          </div>
        </div>
        <div>
          <div className="lg:max-w-[580px] border border-slate-100 rounded-md shadow-lg md:p-5 py-5 px-3 mb-5">
            <div className="grid grid-cols-5 gap-5">
              <div className="col-span-2">
                <TextField label="First Name" required />
              </div>
              <div className="col-span-3">
                <TextField label="Last Name" required />
              </div>
            </div>
            <TextField label="Email" required />
            <TextField label="Company Name" required />
            <TextField label="What countries/location do you operate in?" />
            <TextField label="Please list the licenses you carry." />
            <TextField label="Number of Labor (Direct/Indirect)" required />
            <div className="max-w-[230px]">
              <TextField label="Experience in years  required" />
            </div>
            <TextField label="Phone Number" required />
          </div>
          <div className="flex md:justify-end justify-center">
            <input
              role="button"
              className="text-md font-bold bg-red-500 py-2 px-16 md:px-5 inline-block rounded-md"
              type="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractFrom;
