const PlanType = ({ data, handlePlanChange, icon, type, planName }) => {
  return (
    <div
      onClick={() => handlePlanChange(planName)}
      className={`flex md:block cursor-pointer border rounded-lg mb-2 p-3 ${
        data.planData === planName
          ? "border-marine-blue bg-magnolia"
          : "border-light-gray"
      }`}
    >
      <img src={icon} alt={planName} className="md:mt-2 md:mb-10" />
      <div className="ml-3 md:ml-0">
        <h3 className="md:text-lg font-semibold">{planName}</h3>
        <p className="text-cool-gray text-sm md:text-base md:my-1">{`$${
          type[data.billingCycle]
        }/${data.billingCycle === "monthly" ? "mo" : "yr"}`}</p>
        {data.billingCycle === "yearly" && (
          <p className="text-xs md:text-sm">2 months free</p>
        )}
      </div>
    </div>
  );
};

export default PlanType;
