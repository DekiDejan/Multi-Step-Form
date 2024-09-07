const Summary = ({ data, setCurrentStep }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Finishing up</h2>
      <p className="text-sm text-cool-gray mb-8">
        Double-check if everything looks OK before confirming.
      </p>

      <div className="space-y-4 mb-4 bg-magnolia rounded-md">
        <div className={` rounded-lg p-4 flex justify-between items-center`}>
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
          <p className="text-purplish-blue">
            {`+$/${data.billingCycle === "monthly" ? "mo" : "yr"}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
