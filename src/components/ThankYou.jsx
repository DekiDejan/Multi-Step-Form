import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = ({ data }) => {
  console.log(data);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-4">
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
