import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = ({ data }) => {
  console.log("Name: ", data.formData.name);
  console.log("Email: ", data.formData.email);
  console.log("Phone: ", data.formData.phone);
  console.log("Billing Cycle: ", data.billingCycle);
  console.log("Plan Type: ", data.planData);
  console.log(
    "Addons: ",
    Object.entries(data.selectedAddOns)
      .filter(([_key, value]) => value)
      .map(([key]) => {
        return key;
      })
      .toString()
  );

  return (
    <div className="mt-20 md:mt-0 h-full flex flex-col justify-center items-center gap-4">
      <img src={thankYouIcon} alt="Thank you icon" />
      <h2 className="text-2xl font-semibold text-center">Thank you</h2>
      <p className="text-sm text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
