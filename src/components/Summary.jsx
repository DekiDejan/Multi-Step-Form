import { planOptions, addOnPrices } from "../assets/prices";

const Summary = ({ data, setCurrentStep }) => {
  const planPrice = planOptions[data.planData.toLowerCase()][data.billingCycle];
  const billingType = data.billingCycle === "monthly" ? "mo" : "yr";

  const capitalizeAddOnName = (word) => {
    return word
      .replace(/([A-Z])/g, " $1")
      .toLowerCase()
      .replace(/^./, (str) => str.toUpperCase());
  };

  const selectedAddOns = Object.entries(data.selectedAddOns)
    .filter(([_key, value]) => value === true)
    .map(([key]) => {
      const price = addOnPrices[key][data.billingCycle];
      return { key, name: capitalizeAddOnName(key), price };
    });

  const addOnPrice = selectedAddOns.reduce(
    (total, { price }) => total + price,
    0
  );

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Finishing up</h2>
      <p className="text-sm text-cool-gray mb-8">
        Double-check if everything looks OK before confirming.
      </p>

      <div className="mb-4 bg-magnolia rounded-lg">
        <div className={"p-4 flex justify-between items-center"}>
          <div className="flex gap-3">
            <div>
              <h3 className="font-semibold">
                {data.planData} (
                {data.billingCycle === "monthly" ? "Monthly" : "Yearly"})
              </h3>
              <p
                className="text-cool-gray hover:text-purplish-blue text-sm underline cursor-pointer"
                onClick={() => setCurrentStep(2)}
              >
                Change
              </p>
            </div>
          </div>
          <p className="text-marine-blue font-bold">
            {`$${planPrice}/${billingType}`}
          </p>
        </div>
        {selectedAddOns.length > 0 && (
          <div className="px-4 pb-2 text-cool-gray text-sm">
            <div className="h-[1px] bg-light-blue"></div>
            {selectedAddOns.map(({ key, name, price }) => (
              <div className="my-4 flex justify-between" key={key}>
                <div>{name}</div>
                <div>
                  +${price}/{billingType}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 text-cool-gray text-sm flex justify-between items-center">
        <p>
          Total {data.billingCycle === "monthly" ? "(per month)" : "(per year)"}
        </p>
        <p className="text-xl font-bold text-purplish-blue">{`$${
          planPrice + addOnPrice
        }/${billingType}`}</p>
      </div>
    </>
  );
};

export default Summary;
