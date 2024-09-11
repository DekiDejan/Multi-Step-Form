import checkmarkIcon from "../assets/images/icon-checkmark.png";
import { addOnPrices } from "../assets/prices";

const AddOns = ({ data, setData }) => {
  const toggleAddOn = (addOn) => {
    setData((prevData) => {
      return {
        ...prevData,
        selectedAddOns: {
          ...prevData.selectedAddOns,
          [addOn]: !prevData.selectedAddOns[addOn],
        },
      };
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Pick add-ons</h2>
      <p className="text-sm text-cool-gray mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-4 mb-4">
        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.onlineService
              ? "border-marine-blue bg-magnolia"
              : "border-light-gray"
          }`}
          onClick={() => toggleAddOn("onlineService")}
        >
          <div className="flex gap-3">
            {data.selectedAddOns.onlineService ? (
              <img
                src={checkmarkIcon}
                width={32}
                alt="Checkmark"
                className="self-center"
              />
            ) : (
              <div className="w-6 h-6 mx-1 border border-light-gray rounded-full self-center"></div>
            )}
            <div>
              <h3 className="text-lg font-semibold">Online Service</h3>
              <p className="text-cool-gray">Access to multiplayer games</p>
            </div>
          </div>
          <p className="text-purplish-blue">
            {`+$${addOnPrices.onlineService[data.billingCycle]}/${
              data.billingCycle === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>

        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.largerStorage
              ? "border-marine-blue bg-magnolia"
              : "border-light-gray"
          }`}
          onClick={() => toggleAddOn("largerStorage")}
        >
          <div className="flex gap-3">
            {data.selectedAddOns.largerStorage ? (
              <img
                src={checkmarkIcon}
                width={32}
                alt="Checkmark"
                className="self-center"
              />
            ) : (
              <div className="w-6 h-6 mx-1 border border-light-gray rounded-full self-center"></div>
            )}
            <div>
              <h3 className="text-lg font-semibold">Larger Storage</h3>
              <p className="text-cool-gray">Extra 1TB of cloud save</p>
            </div>
          </div>

          <p className="text-purplish-blue">
            {`+$${addOnPrices.largerStorage[data.billingCycle]}/${
              data.billingCycle === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>

        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.customizableProfile
              ? "border-marine-blue bg-magnolia"
              : "border-light-gray"
          }`}
          onClick={() => toggleAddOn("customizableProfile")}
        >
          <div className="flex gap-3">
            {data.selectedAddOns.customizableProfile ? (
              <img
                src={checkmarkIcon}
                width={32}
                alt="Checkmark"
                className="self-center"
              />
            ) : (
              <div className="w-6 h-6 mx-1 border border-light-gray rounded-full self-center"></div>
            )}
            <div>
              <h3 className="text-lg font-semibold">Customizable Profile</h3>
              <p className="text-cool-gray">Custom theme on your profile</p>
            </div>
          </div>

          <p className="text-purplish-blue">
            {`+$${addOnPrices.customizableProfile[data.billingCycle]}/${
              data.billingCycle === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>
      </div>
    </>
  );
};

export default AddOns;
