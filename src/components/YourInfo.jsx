const YourInfo = ({ data, setData }) => {
  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        formData: {
          ...prevData.formData,
          [name]: value,
        },
      };
    });
  };

  const handleFocusChange = (e) => {
    const name = e.target.name;
    setData((prevData) => {
      return {
        ...prevData,
        wasInputClicked: {
          ...prevData.wasInputClicked,
          [name]: !prevData[name],
        },
      };
    });
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Personal Info</h2>
      <p className="text-sm text-cool-gray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="block text-sm font-medium">Name</label>
            {data.formData.name === "" && data.wasInputClicked.name && (
              <p className="text-sm font-medium text-strawberry-red">
                This field is required
              </p>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={data.formData.name}
            onChange={handleInputsChange}
            onFocus={handleFocusChange}
            placeholder="e.g. Stephen King"
            className={`border w-full p-2 rounded-md mt-1 ${
              data.formData.name === "" && data.wasInputClicked.name
                ? "outline-strawberry-red"
                : "outline-marine-blue"
            }`}
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="block text-sm font-medium">Email Address</label>
            {data.formData.email === "" && data.wasInputClicked.email && (
              <p className="text-sm font-medium text-strawberry-red">
                This field is required
              </p>
            )}
          </div>
          <input
            type="email"
            name="email"
            value={data.formData.email}
            onChange={handleInputsChange}
            onFocus={handleFocusChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`border w-full p-2 rounded-md mt-1 ${
              data.formData.email === "" && data.wasInputClicked.email
                ? "outline-strawberry-red"
                : "outline-marine-blue"
            }`}
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="block text-sm font-medium">Phone Number</label>
            {data.formData.phone === "" && data.wasInputClicked.phone && (
              <p className="text-sm font-medium text-strawberry-red">
                This field is required
              </p>
            )}
          </div>
          <input
            type="text"
            name="phone"
            value={data.formData.phone}
            onChange={handleInputsChange}
            onFocus={handleFocusChange}
            placeholder="e.g. +1 234 567 890"
            className={`border w-full p-2 rounded-md mt-1 ${
              data.formData.phone === "" && data.wasInputClicked.phone
                ? "outline-strawberry-red"
                : "outline-marine-blue"
            }`}
          />
        </div>
      </form>
    </section>
  );
};

export default YourInfo;
