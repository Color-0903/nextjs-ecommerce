'use client'
import { authUserApi, cadastralApi, usersApi } from "@/apis";
import { UpdateUserDto } from "@/apis/client-axios";
import UserSideBar from "@/components/sideBar/user-sidebar";
import Spinner from "@/components/spinner";
import { AuthRecoil } from "@/storage/authRecoil";
import { QUERY_KEY } from "@/utils/constant";
import { Validates } from "@/utils/validate";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Notification from "@/components/notification";
import HomeLayout from "@/components/layouts/home";

function Profile() {
    const authMe = useRecoilValue(AuthRecoil) as any;
    const [districtBaseCode, setDistrictBaseCode] = useState<string | number | undefined>(30);
    const [wardBaseCode, setWardBaseCode] = useState<string | number | undefined>(293);
    const formik = useFormik({
        initialValues: {
            displayName: '',
            identifier: '',
            phone: '',
            address: '',
            address_detail: '',
            address_view: '',
            province: '',
            district: '',
            wards: '',
        },
        validate: (values) => {
            const errors: any = {};
            if (!!values?.phone && !Validates.isPhone(values?.phone)) {
                errors.phone = 'Số điện thoại không hợp lệ!';
            }
            return errors;
        },
        onSubmit: (values) => {
            AuthMe({
                ...values
            });
        },
    });

    const { mutate: AuthMe, isPending: isAuthMe } = useMutation({
        mutationFn: (dto: UpdateUserDto) => usersApi.userControllerEdit(dto),
        onSuccess: (data: any) => {
            Notification('Cập nhật tài khoản thành công!', 'success');
        },
        onError: (error: any) => {
            Notification('Cập nhật tài khoản thất bại!', 'error');
        },
    })

    const { data: provinces, isPending: isProvince } = useQuery({
        queryKey: [QUERY_KEY.PROFILE_PROVINCE],
        queryFn: () => cadastralApi.cadastralControllerGetProvince(),
        enabled: true
    }) as any;


    const { data: districts, isPending: isDistric } = useQuery({
        queryKey: [QUERY_KEY.PROFILE_DISTRICT, districtBaseCode],
        queryFn: () => cadastralApi.cadastralControllerGetDistrict(districtBaseCode as string),
        enabled: !!districtBaseCode
    }) as any;


    const { data: wards, isPending: isWard } = useQuery({
        queryKey: [QUERY_KEY.PROFILE_WARD, wardBaseCode],
        queryFn: () => cadastralApi.cadastralControllerGetWard(wardBaseCode as string),
        enabled: !!wardBaseCode
    }) as any;


    useEffect(() => {
        if (!!authMe) {
            formik.setFieldValue('displayName', authMe?.displayName ?? '');
            formik.setFieldValue('phone', authMe?.phone ?? '');
            formik.setFieldValue('identifier', authMe?.identifier ?? '');
            formik.setFieldValue('phone', authMe?.phone ?? '');
            formik.setFieldValue('address_detail', authMe?.address_detail ?? '');
            formik.setFieldValue('address_view', `(${authMe?.address_detail}) ${authMe?.address ?? ''}`);
        }
    }, [authMe])

    const renderCoutry = () => {
        return provinces?.data?.map((provice?: any) => {
            return <option key={provice.id} value={provice?.baseCode}>{provice?.name}</option>
        })
    };

    const renderDistrict = () => {
        return districts?.data?.map((district: any) => {
            return <option key={district?.id} value={district?.baseCode} >{district?.name}</option>
        })
    };

    const renderWard = () => {
        return wards?.data?.map((ward: any) => {
            return <option key={ward?.id} value={ward?.name} >{ward?.name}</option>
        })
    };

    return <Spinner>
        <HomeLayout>
            <div>
                <UserSideBar />
                <div className="p-4 md:ml-64">
                    <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                        <div className="w-64 flex items-center gap-3 mt-4">
                            <span className="font-bold text-2xl text-orange-500">Thông tin cá nhân</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 mt-6">
                            <div>
                                <div x-data="{photoName: null, photoPreview: null}" className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                                    <input
                                        type="file"
                                        className="hidden"
                                        x-ref="photo" />
                                    <div className="text-center">
                                        <div className="mt-2" x-show="! photoPreview">
                                            <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="w-40 h-40 m-auto rounded-full shadow" />
                                        </div>

                                        <button type="button" className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:border-orange-500 focus:outline-none focus:border-orange-500 focus:shadow-outline-blue active:border-orange-500 transition ease-in-out duration-150 mt-2" >
                                            Upload
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <form className="w-9/12 mx-auto" onSubmit={formik.handleSubmit}>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input onChange={formik.handleChange} value={formik.values.displayName} type="text" name="displayName" id="displayName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " />
                                    <label htmlFor="displayName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tên hiển thị</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input onChange={formik.handleChange} value={formik.values.identifier} disabled type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " />
                                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Email</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input onChange={formik.handleChange} value={formik.values.phone} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " />
                                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Số điện thoại</label>
                                        <span className="text-sm text-orange-500">{formik?.errors?.phone}</span>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="underline_select" className="sr-only">Tỉnh thành</label>
                                        <select id="underline_select" disabled value={30} className="cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            {renderCoutry()}
                                        </select>
                                    </div>

                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="underline_select" className="sr-only">Quận huyện</label>
                                        <select value={wardBaseCode} onChange={(e) => {
                                            setWardBaseCode(e?.target?.value)
                                            const findByCode = districts?.data.find((item: any) => item?.baseCode == e?.target?.value);
                                            // formik.setFieldValue('address_view', `(${authMe?.address_detail}) ${findByCode} - ${formik}`);
                                        }
                                        } id="underline_select" className="cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            {renderDistrict()}
                                        </select>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <label htmlFor="underline_select" className="sr-only">Xã phường</label>
                                        <select onChange={(e) => formik.setFieldValue('province', e?.target?.value)} id="underline_select" className="cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            {renderWard()}
                                        </select>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea onChange={formik.handleChange} value={formik.values.address_detail} name="address_detail" id="address_detail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " style={{ resize: 'none' }} />
                                    <label htmlFor="address_detail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mô tả</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea value={formik.values.address_view} disabled name="address_view" id="address_view" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " style={{ resize: 'none' }} />
                                    <label htmlFor="address_view" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Địa chỉ</label>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="text-white bg-orange-500 hover:bg--orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    </Spinner>
}

export default Profile;