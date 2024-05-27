import { CartRecoli } from "@/storage/authRecoil";
import { Helper } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export interface CartInterface {
    isShowCart: boolean,
    setIsShowCart: (status: boolean) => void;
}
export const LisCart = (params: CartInterface) => {
    const { isShowCart, setIsShowCart } = params;
    const [cart, setCart] = useRecoilState(CartRecoli);
    const [total, setTotal] = useState(0);
    const router = useRouter();

    const handleRemoveItem = (item: any) => {
        const cartRemove = cart.filter((_item: any) => _item != item);
        setCart(cartRemove);
        localStorage.setItem('carts', JSON.stringify(cartRemove));
    }

    useEffect(() => {
        if (!!cart?.length) {
            const sum = cart.map((i: any) => i.price).reduce((a, b) => a + b);
            setTotal(sum);
        } else if(total != 0){
            setTotal(0);
        }
    }, [cart])

    return <div hidden={!isShowCart}>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-300 opacity-55 z-50"></div>
        <div id="default-modal" aria-hidden="true" className="fixed inset-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="fixed top-0 p-4 w-full max-w-5xl h-screen mx-auto inset-x-0">
                <div className="flex flex-col h-screen bg-white rounded-lg dark:bg-gray-700 shadow-2xl pb-4">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h2 className="py-3 p text-2xl font-medium text-gray-900 dark:text-white tracking-wide  border-b-4 border-orange-500 w-fit">Giỏ hàng </h2>
                        <button onClick={() => setIsShowCart(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="w-full max-w-7xl px-6 md:px-5 lg-6 mx-auto mt-5 pb-5 overflow-y-auto overflow-x-hidden flex-1">
                        {
                            cart.map((item: any) =>
                                <div className="relative rounded-3xl border-2 border-gray-200 p-4  grid-cols-12 mb-1 md:mb-2 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
                                    <div className="flex items-center gap-2 col-span-12 lg:col-span-2 img box">
                                        <img onClick={() => router.push(`/product/${item.id}`)} src={Helper.ViewProduct(item?.source)} alt="speaker image" className="w-24 h-24 md:w-32 md:h-32 lg:w-[120px] lg:h-[120px] rounded-md" />
                                        <div>
                                            <h5 onClick={() => router.push(`/product/${item.id}`)}  className="font-manrope font-bold text-lg md:text-2xl leading-9 text-gray-900 text-left max-w-36 md:max-w-60 lg:max-w-screen-md truncate ...">{item?.name}</h5>
                                            <div className="gap-3 hidden md:flex">
                                                <div className="mt-1">
                                                    <span className="text-gray-500">Kích thước: </span>
                                                    <span className="text-orange-500">{item?.size ?? ''} </span>
                                                </div>
                                                <div className="mt-1">
                                                    <span className="text-gray-500">Màu sắc: </span>
                                                    <span className="text-orange-500">{item?.color ?? ''} </span>
                                                </div>
                                                <div className="mt-1">
                                                    <span className="text-gray-500">Số lượng: </span>
                                                    <span className="text-orange-500">{item?.quantity ?? ''} </span>
                                                </div>
                                            </div>
                                            <div className="mt-1 block md:hidden">
                                                (<span className="text-orange-500">{item?.size ?? ''}  x {item?.color ?? ''} x {item?.quantity ?? ''}</span>)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                        <button onClick={() => handleRemoveItem(item)} className="absolute top-1 right-1 rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                    cx="17" cy="17" r="17" fill="" />
                                                <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                                    d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                    stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        <div className="flex justify-between  mt-3">
                                            <span className="text-orange-500">Thành tiền: </span>
                                            <span className="text-orange-500">{Helper.showVnd(+(item?.price) * +(item?.quantity))}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className="border-t-2 border-gray-200 mt-3 p-4">
                        <div className="flex justify-between items-end gap-3">
                            <h2 className="text-2xl font-medium text-gray-900 dark:text-white tracking-widew-fit">Tổng tiền: </h2>
                            <span className="text-orange-500 m-0">{Helper.showVnd(total)}</span>
                        </div>
                        <div className="flex justify-end gap-3 mt-5">
                            <button onClick={() => setIsShowCart(false)} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 min-w-40">Đóng</button>
                            <button type="button" className="focus:outline-none text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-orange-500 dark:focus:ring-red-900 min-w-40">Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}