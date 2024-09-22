import { FavoriteIcon } from "@/@svg/favorite"
import { RemoveIcon } from "@/@svg/remove.index"
import { CounterItem } from "@/components/common/counter/item"

export const CartItem = () => {

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 ">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                    <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                </a>
                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <CounterItem id="1" />
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" className="text-base font-medium text-gray-900 hover:underline text-two-line">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</a>
                    <div className="flex items-center gap-4">
                        <FavoriteIcon id={"1"} />
                        <RemoveIcon id={"1"} />
                    </div>
                </div>
            </div>
        </div>
    )
}