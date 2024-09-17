import { addOnPrices } from "../assets/prices";
import AddOn from "./AddOn";

const AddOns = ({ data, setData }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Pick add-ons</h2>
      <p className="text-sm text-cool-gray mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="space-y-4 mb-4">
        <AddOn
          data={data}
          setData={setData}
          title="Online Service"
          description="Access to multiplayer games"
          type={"onlineService"}
          dataType={data.selectedAddOns.onlineService}
          priceType={addOnPrices.onlineService}
        />
        <AddOn
          data={data}
          setData={setData}
          title="Larger Storage"
          description="Extra 1TB of cloud save"
          type={"largerStorage"}
          dataType={data.selectedAddOns.largerStorage}
          priceType={addOnPrices.largerStorage}
        />
        <AddOn
          data={data}
          setData={setData}
          title="Customizable Profile"
          description="Custom theme on your profile"
          type={"customizableProfile"}
          dataType={data.selectedAddOns.customizableProfile}
          priceType={addOnPrices.customizableProfile}
        />
      </div>
    </>
  );
};

export default AddOns;
