import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";

const Steps = ({ steps, currentStep }) => {
  return (
    <>
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
                <p className="text-xs text-light-gray">STEP {currentStep}</p>
                <p className="text-white font-bold">{step.toUpperCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
