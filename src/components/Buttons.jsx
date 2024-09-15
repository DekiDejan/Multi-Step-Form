const Buttons = ({ currentStep, setCurrentStep, steps, data, setData }) => {
  const nextStep = () => {
    if (currentStep === 1) {
      setData((prevData) => {
        return {
          ...prevData,
          wasInputClicked: {
            name: true,
            email: true,
            phone: true,
          },
        };
      });
    }

    if (data.formData.name && data.formData.email && data.formData.phone) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mt-6 flex justify-between">
      {currentStep > 1 && currentStep <= steps.length ? (
        <button
          onClick={prevStep}
          className="text-cool-gray hover:text-marine-blue px-4 py-2 rounded-md absolute md:static bottom-0 left-0"
        >
          Go Back
        </button>
      ) : (
        <button></button>
      )}
      {currentStep < steps.length ? (
        <button
          onClick={nextStep}
          className="bg-marine-blue hover:bg-[#265474] text-white px-4 py-2 rounded-md absolute md:static bottom-0 right-0"
        >
          Next Step
        </button>
      ) : (
        currentStep === steps.length && (
          <button
            onClick={nextStep}
            className="bg-purplish-blue hover:bg-pastel-blue text-white px-6 py-2 rounded-md absolute md:static bottom-0 right-0"
          >
            Confirm
          </button>
        )
      )}
    </div>
  );
};

export default Buttons;
