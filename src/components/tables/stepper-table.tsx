export const StepperTable = () => {
    return <div className="mb-2">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div className="flex items-end gap-2">

                <img className="w-14 h-14 md:w-28 md:h-28 transition-all duration-300 rounded-lg hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />

                <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white truncate max-w-40 md:max-w-64 lg:max-w-2xl">Need a help in Claim? Need a help in Claim? Need a help in Claim? Need a help in Claim? </h5>
                </a>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <div className="text-right">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sl: 1, màu: xám, size: S</p>
                <div className="flex items-center justify-end gap-2">
                    <p className="mb-3 font-bold text-gray-500 dark:text-gray-400">Thành tiền:</p>
                    <p className="mb-3 font-normal text-orange-500 dark:text-gray-400"> 150000đ</p>
                </div>
            </div>
            <hr className="h-px mt-4 md:mt-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="my-1 text-center">
                <a href="#" className="font-medium my-2 text-orange-500 hover:underline text-center pr-3">Xem chi tiết</a>
            </div>
            <hr className="h-px mb-4 md:mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="mt-3 flex justify-end gap-2">
                <button data-modal-hide="popup-modal" type="button" className="py-2.5 w-32 ms-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    Hủy
                </button>
            </div>
        </div>
    </div>
}