import React, { useState } from "react";
import bgDesktop from "./assets/images/bg-sidebar-desktop.svg";
import classes from "./App.module.css";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    formData: {
      name: "",
      email: "",
      phone: "",
    },
    wasInputNotClicked: {
      name: true,
      email: true,
      phone: true,
    },
    planData: "advanced",
    billingCycle: "monthly",
  });

  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  const planOptions = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  const nextStep = () => {
    if (data.formData.name && data.formData.email && data.formData.phone) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        formData: {
          ...prevData.formData,
          [name]: value,
        },
      };
    });
  };

  const handleFocusChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        wasInputNotClicked: {
          ...prevData.wasInputNotClicked,
          [name]: value,
        },
      };
    });
  };

  const handleBillingCycleChange = () => {
    setData((prevData) => {
      return {
        ...prevData,
        billingCycle: data.billingCycle === "monthly" ? "yearly" : "monthly",
      };
    });
  };

  const handlePlanChange = (planType) => {
    setData((prevData) => {
      return {
        ...prevData,
        planData: planType,
      };
    });
  };

  console.log(data);

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
              <div className="flex justify-between">
                <label className="block text-sm font-medium">Name</label>
                {data.formData.name === "" && !data.wasInputNotClicked.name && (
                  <p className="text-sm font-medium text-strawberry-red">
                    This field is required
                  </p>
                )}
              </div>
              <input
                type="text"
                name="name"
                value={data.formData.name}
                onChange={handleInputsChange}
                onFocus={handleFocusChange}
                placeholder="e.g. Stephen King"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                {data.formData.email === "" &&
                  !data.wasInputNotClicked.email && (
                    <p className="text-sm font-medium text-strawberry-red">
                      This field is required
                    </p>
                  )}
              </div>
              <input
                type="email"
                name="email"
                value={data.formData.email}
                onChange={handleInputsChange}
                onFocus={handleFocusChange}
                placeholder="e.g. stephenking@lorem.com"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                {data.formData.phone === "" &&
                  !data.wasInputNotClicked.phone && (
                    <p className="text-sm font-medium text-strawberry-red">
                      This field is required
                    </p>
                  )}
              </div>
              <input
                type="text"
                name="phone"
                value={data.formData.phone}
                onChange={handleInputsChange}
                onFocus={handleFocusChange}
                placeholder="e.g. +1 234 567 890"
                className="border w-full p-2 rounded-md mt-1 outline-marine-blue"
              />
            </div>
          </form>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Select your plan</h2>
            <p className="text-sm text-cool-gray mb-6">
              You have the option of monthly or yearly billing.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div
                onClick={() => handlePlanChange("arcade")}
                className={`cursor-pointer border rounded-lg p-4 ${
                  data.planData === "arcade"
                    ? "border-marine-blue bg-magnolia"
                    : "border-light-gray"
                }`}
              >
                <img src={arcadeIcon} alt="Arcade" className="mt-2 mb-10" />
                <h3 className="text-lg font-semibold">Arcade</h3>
                <p className="text-cool-gray my-1">{`$${
                  planOptions.arcade[data.billingCycle]
                }/${data.billingCycle === "monthly" ? "mo" : "yr"}`}</p>
                {data.billingCycle === "yearly" && (
                  <p className="text-sm">2 months free</p>
                )}
              </div>

              <div
                onClick={() => handlePlanChange("advanced")}
                className={`cursor-pointer border rounded-lg p-4 ${
                  data.planData === "advanced"
                    ? "border-marine-blue bg-magnolia"
                    : "border-light-gray"
                }`}
              >
                <img src={advancedIcon} alt="Advanced" className="mt-2 mb-10" />
                <h3 className="text-lg font-semibold">Advanced</h3>
                <p className="text-cool-gray my-1">{`$${
                  planOptions.advanced[data.billingCycle]
                }/${data.billingCycle === "monthly" ? "mo" : "yr"}`}</p>
                {data.billingCycle === "yearly" && (
                  <p className="text-sm">2 months free</p>
                )}
              </div>

              <div
                onClick={() => handlePlanChange("pro")}
                className={`cursor-pointer border rounded-lg p-4 ${
                  data.planData === "pro"
                    ? "border-marine-blue bg-magnolia"
                    : "border-light-gray"
                }`}
              >
                <img src={proIcon} alt="Pro" className="mt-2 mb-10" />
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="text-cool-gray my-1">{`$${
                  planOptions.pro[data.billingCycle]
                }/${data.billingCycle === "monthly" ? "mo" : "yr"}`}</p>
                {data.billingCycle === "yearly" && (
                  <p className="text-sm">2 months free</p>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center mb-6 py-3 bg-magnolia rounded-md">
              <span
                className={`mr-4 font-bold text-sm ${
                  data.billingCycle === "monthly"
                    ? "text-marine-blue"
                    : "text-cool-gray"
                }`}
              >
                Monthly
              </span>
              <label className={classes.switch}>
                <input
                  type="checkbox"
                  onChange={handleBillingCycleChange}
                  checked={data.billingCycle === "yearly"}
                />
                <span className={`${classes.slider} round`}></span>
              </label>
              <span
                className={`ml-4 font-bold text-sm ${
                  data.billingCycle === "yearly"
                    ? "text-marine-blue"
                    : "text-cool-gray"
                }`}
              >
                Yearly
              </span>
            </div>
          </>
        );

      default:
        return <div>In progress...</div>;
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
                    <p className="text-xs text-light-gray">
                      STEP {currentStep}
                    </p>
                    <p className="text-white font-bold">
                      {step.toLocaleUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-2/3 pl-6 m-8 flex flex-col justify-between">
            <div>{renderStepContent(currentStep)}</div>
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
