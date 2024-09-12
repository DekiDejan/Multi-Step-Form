import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";

const Steps = ({ steps, currentStep }) => {
  return (
    <>
      <img src={bgDesktop} alt="bgDesktop" className="hidden md:inline-block" />
      <img src={bgMobile} alt="bgMobile" className="md:hidden w-full" />
      <div className="absolute m-8 flex md:block w-44 justify-between">
        {steps.map((step, index) => (
          <div key={index} className="md:mb-6">
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
              <div className="ml-4 text-sm font-medium hidden md:block">
                <p className="text-xs text-light-gray">STEP {index + 1}</p>
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
