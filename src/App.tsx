import { useState } from "react";
import { motion } from "motion/react";
import { svg } from "motion/react-client";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
      <h2 className="text-white">
        <MultiStepForm />
      </h2>
    </div>
  );
}

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <div className="bg-white rounded-xl shadow-md w-[500px]">
      <div className="flex items-center justify-between p-8">
        <Step step={1} currentStep={currentStep} />
        <Step step={2} currentStep={currentStep} />
        <Step step={3} currentStep={currentStep} />
        <Step step={4} currentStep={currentStep} />
      </div>

      <div className="space-y-4 px-8">
        <div className="skeleton h-6 rounded-lg w-[80%]"></div>
        <div className="skeleton h-6 rounded-lg w-[100%]"></div>
        <div className="skeleton h-6 rounded-lg w-[50%]"></div>
      </div>

      <div className="px-8 flex items-center justify-between mt-8 pb-6">
        <button
          className="text-zinc-400"
          onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
        >
          Back
        </button>
        <button
          className="rounded-full px-3 py-1 bg-blue-500 shadow-[blue_0_0_1px] text-white hover:bg-opacity-80"
          onClick={() => currentStep <= 4 && setCurrentStep(currentStep + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  const status =
    step === currentStep
      ? "active"
      : step < currentStep
      ? "completed"
      : "inactive";

  return (
    <motion.div
      animate={status}
      variants={{
        active: {
          backgroundColor: "var(--white)",
          borderColor: "var(--blue)",
          color: "var(--blue)",
        },
        completed: {
          backgroundColor: "var(--blue)",
          borderColor: "var(--blue)",
          color: "var(--white)",
        },
        inactive: {
          backgroundColor: "var(--white)",
          borderColor: "var(--gray)",
          color: "var(--gray)",
        },
      }}
      className={`border-2 rounded-full  w-10 h-10 flex items-center justify-center`}
    >
      {status === "completed" ? (
        <CheckIcon className="text-white w-6 h-6" />
      ) : (
        <span>{step}</span>
      )}
    </motion.div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
export default App;
