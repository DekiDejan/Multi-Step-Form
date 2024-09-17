import checkmarkIcon from "../assets/images/icon-checkmark.png";

const AddOn = ({
  data,
  setData,
  title,
  description,
  type,
  dataType,
  priceType,
}) => {
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
    <div
      className={`cursor-pointer border rounded-lg p-4 flex justify-between items-center gap-1 ${
        dataType ? "border-marine-blue bg-magnolia" : "border-light-gray"
      }`}
      onClick={() => toggleAddOn(type)}
    >
      <div className="flex gap-3">
        {dataType ? (
          <img
            src={checkmarkIcon}
            width={32}
            alt="Checkmark"
            className="self-center"
          />
        ) : (
          <div className="min-w-6 h-6 mx-1 border border-light-gray rounded-full self-center"></div>
        )}
        <div>
          <h3 className="md:text-lg font-semibold">{title}</h3>
          <p className="text-cool-gray text-sm md:text-base">{description}</p>
        </div>
      </div>
      <p className="text-purplish-blue text-sm md:text-base">
        {`+$${priceType[data.billingCycle]}/${
          data.billingCycle === "monthly" ? "mo" : "yr"
        }`}
      </p>
    </div>
  );
};

export default AddOn;
