import React, { useState, useRef } from "react";
import bgDesktop from "./assets/images/bg-sidebar-desktop.svg";

const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const nextStep = () => {
    if (currentStep === 1) {
      setFormData({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      });
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <form>
            <h2 className="text-2xl font-semibold mb-2">Personal Info</h2>
            <p className="text-sm text-cool-gray mb-6">
              Please provide your name, email address, and phone number.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                ref={nameRef}
                defaultValue={formData.name}
                placeholder="e.g. Stephen King"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                ref={emailRef}
                defaultValue={formData.email}
                placeholder="e.g. stephenking@lorem.com"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                ref={phoneRef}
                defaultValue={formData.phone}
                placeholder="e.g. +1 234 567 890"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
          </form>
        );
      // Add more cases for other steps
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-magnolia">
      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-4xl">
        <div className="flex">
          <img src={bgDesktop} alt="bgMobile" />
          <div className="absolute m-8">
            {steps.map((step, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border ${
                      index + 1 <= currentStep
                        ? "bg-light-blue"
                        : "border-magnolia text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="ml-4 text-sm font-medium">
                    <p className="text-xs text-cool-gray">STEP {currentStep}</p>
                    <p className="text-white font-bold">
                      {step.toLocaleUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-2/3 pl-6 m-8">
            {renderStepContent(currentStep)}
            <div className="mt-6 flex justify-between">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="text-cool-gray hover:text-marine-blue px-4 py-2 rounded-md"
                >
                  Go Back
                </button>
              ) : (
                <button></button>
              )}
              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  className="bg-marine-blue hover:bg-[#265474] text-white px-4 py-2 rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button className="bg-purplish-blue hover:bg-pastel-blue text-white px-6 py-2 rounded-md">
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
