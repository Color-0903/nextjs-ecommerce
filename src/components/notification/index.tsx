import { toast } from 'react-toastify';

const Notification = (values: string, type: 'success' | 'error') => {
    type === 'success' ?
        toast.success(values, {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            // progress: undefined,

        }) : toast.error(values, {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            // progress: undefined,

        });
    return <></>;
};

export default Notification;