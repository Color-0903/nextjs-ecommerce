'use client'
import { productApi } from "@/apis";
import HomeLayout from "@/components/layouts/home";
import { HomeMenu } from "@/components/menu/home-menu";
import { TopSearch } from "@/components/menu/top-search";
import Notification from "@/components/notification";
import HomeSlider from "@/components/slider/home-slider";
import Spinner from "@/components/spinner";
import { CartRecoli } from "@/storage/authRecoil";
import { QUERY_KEY } from "@/utils/constant";
import { Helper } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function DetailProduct() {
    const params = useParams();
    const [colorSelect, setColorSelect] = useState<{ id: string, name?: string } | undefined>(undefined);
    const [sizeSelect, setSizeSelect] = useState<{ id: string, des?: string, name?: string } | undefined>(undefined);
    const [quantity, setQuantity] = useState<number>(1);
    const [cart, setCart] = useRecoilState(CartRecoli);

    const { data: productById, isPending: isPending } = useQuery({
        queryKey: [QUERY_KEY.DETAIL_PRODUCT, params?.slug],
        queryFn: () => productApi.productControllerGetById(params?.slug as string),
        enabled: !!params?.slug
    }) as any;

    useEffect(() => {
        if (!productById?.data && !isPending) notFound();
    }, [productById]) 

    const handleAddToCart = () => {
        if ((!colorSelect?.id && !!productById?.data?.colors?.length) || (!sizeSelect?.id && !!productById?.data?.sizes?.length)) return Notification('Vui lòng chọn thông tin sản phẩm!', 'error');
        let carts = localStorage?.getItem('carts') ? JSON.parse(localStorage?.getItem('carts') || "") : null;
        const cartItem = {
            id: params?.slug,
            quantity: quantity,
            size: sizeSelect?.name,
            color: colorSelect?.name,
            name: productById?.data?.name ,
            price: productById?.data?.price_view ,
            source: productById?.data?.assets[0]?.source
        }
        if (Array.isArray(carts)) {
            const findItem = carts.some(cart => cart.id === cartItem.id && cart.color === cartItem?.color && cart.size === cartItem?.size);
            if (findItem) {
                const newCarts = carts.map(cart => {
                    return (cart.color === cartItem?.color && cart.size === cartItem?.size) ? { ...cart, quantity: +(+cart.quantity + +cartItem?.quantity) } : cart
                });
                carts = newCarts;
            } else {
                carts = [...carts, cartItem]
            }
        } else {
            carts = [cartItem];
        };
        localStorage.setItem('carts', JSON.stringify(carts));
        setCart(carts);
        return Notification('Sản phẩm đã được thêm vào giỏ hàng!', 'success');
    };

    const handleOnFinish = () => {
        console.log('handleOnFinish')
    };


    return <Spinner isLoading={isPending}>
        <HomeLayout>
            {
                productById?.data && <div className="container mx-auto px-4">
                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="">
                            <div className="mx-auto flex flex-wrap">
                                <div className="lg:w-1/3 w-full object-cover object-center ">
                                    <HomeSlider assets={productById?.data?.assets} />
                                </div>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Color's</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productById?.data?.name}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <span className="bg-red-100 text-orange-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Giảm: {productById?.data?.sale_off} %</span>

                                        </span>
                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                            <a href="https://www.facebook.com" className="text-gray-500 cursor-pointer">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://www.instagram.com" className="ml-2 text-gray-500 cursor-pointer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-500">
                                                    <rect width="24" height="24" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8ZM8 5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V8C19 6.34315 17.6569 5 16 5H8ZM15.5968 7.21448C15.5968 6.66219 16.0445 6.21448 16.5968 6.21448H16.6068C17.1591 6.21448 17.6068 6.66219 17.6068 7.21448C17.6068 7.76676 17.1591 8.21448 16.6068 8.21448H16.5968C16.0445 8.21448 15.5968 7.76676 15.5968 7.21448ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" fill="#383838" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed mt-2">{productById?.data?.description}</p>
                                    <div className="mt-2 pb-5 border-b-2 border-gray-200 mb-5">
                                        <div className="mt-3">
                                            <div>
                                                <span className="mr-3">Màu sắc:</span>
                                            </div>
                                            <div className="flex gap-2 items-center mt-1 ml-4">
                                                {
                                                    productById?.data?.colors?.map((color: any) => {
                                                        return <div className="flex items-center ms-2 " onClick={() => setColorSelect({ id: color.id, name: color?.name })}>
                                                            <input checked={color.id === colorSelect?.id} id={color?.id} type="radio" value="" name="color" className="shadow shadow-orange-400 w-5 h-5 bg-gray-100 border-gray-300 focus:ring-gray-300 dark:focus:ring-gray-300" style={{ color: color?.description }} />
                                                            <label htmlFor={color?.id} className="cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{color?.name}</label>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div>
                                                <span className="mr-3">Kích thước:</span>
                                                {
                                                    sizeSelect?.des &&
                                                    <span className="text-xs">( {sizeSelect?.des} )</span>
                                                }
                                            </div>
                                            <div className="flex gap-2 items-center mt-1 ml-4">
                                                {
                                                    productById?.data?.sizes?.map((size: any) => {
                                                        return <button onClick={() => {
                                                            setSizeSelect({ id: size.id, des: size?.description, name: size?.name })
                                                        }} type="button" className={` hover:bg-orange-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${size.id === sizeSelect?.id ? 'text-white bg-orange-500' : 'text-orange-500 border-1 shadow shadow-orange-500'}`}>{size?.name}</button>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div>
                                                <span className="mr-3">Số lượng</span>
                                            </div>
                                            <form className="max-w-3xs ml-4">
                                                <div className="relative flex items-center max-w-32 mt-1">
                                                    <button onClick={() => setQuantity((prev) => prev > 1 ? (prev - 1) : prev)} type="button" className="shadow shadow-orange-400 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input value={quantity} type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-orange-400 focus:border-orange-400 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="999" required />
                                                    <button onClick={() => setQuantity((prev) => (prev + 1))} type="button" className="shadow shadow-orange-400 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-6">
                                    <div className="flex justify-end">
                                            <span className="text-gray-500 line-through">{ Helper.showVnd(productById?.data?.price_out) }</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-black">Giá: </span>
                                            <span className="text-orange-500">{ Helper.showVnd(productById?.data?.price_view) }</span>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-4">
                                            <button onClick={handleAddToCart} type="button" className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 min-w-40">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>

                                                <span>Thêm vào giỏ hàng</span>
                                            </button>
                                            <button onClick={handleOnFinish} type="button" className="flex items-center gap-2 focus:outline-none text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-orange-500 dark:focus:ring-red-900 min-w-40">
                                                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                                </svg>
                                                <span>Mua hàng</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <TopSearch />
                    <HomeMenu />
                </div>
            }
        </HomeLayout>
    </Spinner>
}

export default DetailProduct;