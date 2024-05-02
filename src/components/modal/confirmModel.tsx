export const ConfirmModal = () => {

    return <div>
        <div id="popup-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    <div>
                        <span className="font-semibold text-xl text-gray-700">Xác nhận thao tác</span>
                    </div>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">Bạn xác nhận thực hiện hành động này?</h3>
                    <div className="mt-3 flex items-center gap-2">
                        <button data-modal-hide="popup-modal" type="button" className="w-2/4 py-2.5 px-5 ms-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                            Xác nhận
                        </button>
                        <button data-modal-hide="popup-modal" type="button" className="w-2/4 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100">
                            Hủy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}