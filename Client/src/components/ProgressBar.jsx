import React from 'react'

function ProgressBar({
  currentStep,
  totalSteps = 5,
}) {
  return (
    <div className="flex justify-center gap-3 mt-8">

      {Array.from(
        { length: totalSteps },
        (_, index) => {

          const step = index + 1;

          return (
            <div
              key={step}
              className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium
              ${
                step === currentStep
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600"
              }`}
            >
              {step}
            </div>
          );

        }
      )}

    </div>
  );
}

export default ProgressBar;