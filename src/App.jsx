import React, { useState } from "react";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    formData: {
      name: "",
      email: "",
      phone: "",
    },
    wasInputClicked: {
      name: false,
      email: false,
      phone: false,
    },
    planData: "Advanced",
    billingCycle: "monthly",
    selectedAddOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  console.log(data);

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <YourInfo data={data} setData={setData} />;
      case 2:
        return <SelectPlan data={data} setData={setData} />;
      case 3:
        return <AddOns data={data} setData={setData} />;
      case 4:
        return <Summary data={data} setCurrentStep={setCurrentStep} />;

      default:
        return <div>In progress...</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-magnolia">
      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-4xl">
        <div className="flex">
          <Steps steps={steps} currentStep={currentStep} />
          <div className="w-2/3 pl-6 m-8 flex flex-col justify-between">
            <div>{renderStepContent(currentStep)}</div>
            <Buttons
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              steps={steps}
              data={data}
              setData={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
