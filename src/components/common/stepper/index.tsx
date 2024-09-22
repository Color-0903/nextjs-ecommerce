import { Fragment } from "react";

interface step {
    key: number;
    label: string | React.ReactNode;
}

export interface StepperInterface {
    current: number;
    steps: step[];
}

const Stepper = (props: StepperInterface) => {
    const { current, steps } = props;

    return <Fragment>
            {
                steps?.map((step, index) => {
                    const color = { textStyle: step.key <= current ? 'color-primary font-semibold' : 'text-gray-900', borderStyle: step.key === current ? 'border-violet-900 text-violet-900' : 'border-gray-500' };
                    return (
                        <li className={`flex items-center ${color.textStyle}`}>
                            <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${color.borderStyle}`}>
                                {index + 1}
                            </span>
                            {step?.label}
                            {
                                (index + 1) < steps.length &&
                                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                </svg>
                            }
                        </li>
                    )
                })
            }
        </Fragment>
    
}

export default Stepper;