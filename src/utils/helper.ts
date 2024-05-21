export const getLabelBreadcrum: any = {
    "product": { label: "Sản phẩm", href: "/product" },
    "product/:slug": { label: "Chi tiết sản phẩm", href: "#" },
    "dashboard": { label: "Tài khoản", href: "/dashboard" },
    "history-order": { label: "Lịch sử mua hàng", href: "/dashboard/history-order" },
    "cart-item": { label: "Giỏ hàng", href: "/dashboard/cart-item" },
    "notification": { label: "Thông báo", href: "/dashboard/notification" },
    "shipping": { label: "Đơn hàng", href: "/dashboard/shipping" },
    "profile": { label: "Thông tin cá nhân", href: "/dashboard/profile" },
};


export const Helper = {
    ViewSource: (value?: string) => value ? `${process.env.NEXT_APP_API_URL }/assets/get-by-path/${value}` : `${window.location.origin}/images/avatar/avatar.jpg`,
    showVnd: (value: number) => Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(+value),
    ViewProduct: (value?: string) => value ? `${process.env.NEXT_APP_API_URL }/assets/get-by-path/${value}` : Helper.ViewDefauleProduct(),
    ViewDefauleProduct: () => `${process.env.NEXT_APP_URL}/images/product/image_default.png`,
}