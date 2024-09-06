import React, { useState } from "react";

const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Personal Info</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
                className="border w-full p-2 rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@lorem.com"
                className="border w-full p-2 rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                className="border w-full p-2 rounded-md mt-1"
              />
            </div>
          </div>
        );
      // Add more cases for other steps as necessary
      default:
        return <div>Not Found</div>;
    }
  };

  console.log(formData);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <div className="flex">
          {/* Sidebar Steps */}
          <div className="w-1/3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`mb-6 ${
                  index + 1 <= currentStep ? "text-blue-500" : "text-gray-400"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold border ${
                      index + 1 <= currentStep
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="ml-4 text-sm font-medium">{step}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Form Content */}
          <div className="w-2/3 pl-6">
            {renderStepContent(currentStep)}
            <div className="mt-6 flex justify-between">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                >
                  Previous Step
                </button>
              )}
              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
