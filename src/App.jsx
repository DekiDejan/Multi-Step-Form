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
    <div className="min-h-screen flex justify-center md:items-center bg-magnolia">
      <div className="flex flex-col md:flex-row md:items-stretch items-center bg-white shadow-md rounded-xl md:p-4 w-full max-w-4xl">
        <Steps steps={steps} currentStep={currentStep} />
        <div className="md:w-2/3 m-4 md:m-8 py-8 md:py-0 px-4 md:px-6 lg:px-12 bg-white rounded-lg flex flex-col justify-between absolute md:static top-20">
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
  );
};

export default App;
