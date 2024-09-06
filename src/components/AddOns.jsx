const AddOns = ({ data, setData }) => {
  const addOnPrices = {
    onlineService: { monthly: 1, yearly: 10 },
    largerStorage: { monthly: 2, yearly: 20 },
    customizableProfile: { monthly: 2, yearly: 20 },
  };

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
      <p className="text-sm text-cool-gray mb-6">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-4 mb-4">
        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.onlineService
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => toggleAddOn("onlineService")}
        >
          <div>
            <h3 className="text-lg font-semibold">Online Service</h3>
            <p className="text-gray-500">Access to multiplayer games</p>
          </div>
          <p className="text-blue-500">
            {`+$${addOnPrices.onlineService[data.billingCycle]}/${
              data.billingCycle === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>

        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.largerStorage
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => toggleAddOn("largerStorage")}
        >
          <div>
            <h3 className="text-lg font-semibold">Larger Storage</h3>
            <p className="text-gray-500">Extra 1TB of cloud save</p>
          </div>
          <p className="text-blue-500">
            {`+$${addOnPrices.largerStorage[data.billingCycle]}/${
              data.billingCycle === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>

        <div
          className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center ${
            data.selectedAddOns.customizableProfile
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => toggleAddOn("customizableProfile")}
        >
          <div>
            <h3 className="text-lg font-semibold">Customizable Profile</h3>
            <p className="text-gray-500">Custom theme on your profile</p>
          </div>
          <p className="text-blue-500">
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
