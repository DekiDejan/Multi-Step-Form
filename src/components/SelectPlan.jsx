import classes from "./YourInfo.module.css";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { planOptions } from "../assets/prices";
import PlanType from "./PlanType";

const SelectPlan = ({ data, setData }) => {
  const handleBillingCycleChange = () => {
    setData((prevData) => {
      return {
        ...prevData,
        billingCycle: data.billingCycle === "monthly" ? "yearly" : "monthly",
      };
    });
  };

  const handlePlanChange = (type) => {
    setData((prevData) => {
      return {
        ...prevData,
        planData: type,
      };
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Select your plan</h2>
      <p className="text-sm text-cool-gray mb-6">
        You have the option of monthly or yearly billing.
      </p>

      <div className="md:grid grid-cols-3 gap-4 mb-8">
        <PlanType
          data={data}
          handlePlanChange={handlePlanChange}
          icon={arcadeIcon}
          type={planOptions.arcade}
          planName="Arcade"
        />
        <PlanType
          data={data}
          handlePlanChange={handlePlanChange}
          icon={advancedIcon}
          type={planOptions.advanced}
          planName="Advanced"
        />
        <PlanType
          data={data}
          handlePlanChange={handlePlanChange}
          icon={proIcon}
          type={planOptions.pro}
          planName="Pro"
        />
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
