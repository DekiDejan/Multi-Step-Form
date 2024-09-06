import classes from "./YourInfo.module.css";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const SelectPlan = ({ data, setData }) => {
  const planOptions = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
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
};

export default SelectPlan;
