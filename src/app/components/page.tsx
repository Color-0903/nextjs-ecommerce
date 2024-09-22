import PrimaryButton from "@/components/common/buttons/primary";
import CustomCheckbox from "@/components/common/checkbox";
import Pagination from "@/components/common/pagination";
import Stepper from "@/components/common/stepper";
import { OrderStepper } from "@/components/common/stepper/stepper.constant";

function Components() {

    return <div>
        <div className="mt-5">
            <h4> Button </h4>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                <PrimaryButton isLoading={true} className="bg-primary py-1.5 md:py-2.5 min-w-24">1</PrimaryButton>
                <PrimaryButton className="bg-secondary py-1.5 md:py-2.5 min-w-24">2</PrimaryButton>
                <PrimaryButton className="bg-tertiary py-1.5 md:py-2.5 min-w-24">3</PrimaryButton>
                <PrimaryButton className="bg-quaternary py-1.5 md:py-2.5 min-w-24">4</PrimaryButton>
            </div>
        </div>
        <div className="mt-5">
            <h4> Pagination </h4>
            <Pagination />
        </div>
        <div className="mt-5">
            <h4> checkbox </h4>
            <CustomCheckbox />
        </div>
        <div className="mt-5">
            <ol className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 text-sm font-medium text-center text-gray-500 md:pl-4 mt-4 md:mt-0">
                <Stepper current={1} steps={OrderStepper} />
            </ol>
        </div>
    </div>
}

export default Components;  