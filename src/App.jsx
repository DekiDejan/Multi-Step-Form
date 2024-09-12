import { useState } from "react";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import Steps from "./components/Steps";
import Buttons from "./components/Buttons";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";

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
      case 5:
        return <ThankYou data={data} />;

      default:
        return <div>In progress...</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-magnolia">
      <div className="bg-white shadow-md rounded-xl md:p-4 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-stretch items-center">
          <Steps steps={steps} currentStep={currentStep} />
          <div className="md:w-2/3 py-8 md:py-0 px-6 md:px-0 rounded-lg md:pl-4 lg:pl-12 m-4 md:m-8 flex flex-col justify-between -translate-y-24 xs:-translate-y-36 sm:-translate-y-52 md:translate-y-0 bg-white">
            <div className="h-full">{renderStepContent(currentStep)}</div>
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
