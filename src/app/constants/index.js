export const GLOBALSTATE_ACTIONS = {
  SET_IS_AUTH: "SET_IS_AUTH",
  LOGOUT: "LOGOUT"
};

export const ORDERS_STATUS = {
  allOrders: "الكل",
  acceptedOrders: "مقبول",
  underOrder: "قيد الطلب",
  rejectedOrders: "غير مقبول",
  deliveredOrders: "تم التسليم",
  otherOrders: "أخرى",
  Receiving: "قيد الاستلام",
  processing: "قيد التجهيز"
};

export const ORDERS_DELIVERY_METHOD = {
  allOrders: "الكل",
  receivingHand: "استلام يد",
  delivery: "توصيل"
};

export const ordersHeadCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "رقم الطلب"
  },
  {
    id: "userName",
    numeric: false,
    disablePadding: false,
    label: "اسم المستخدم"
  },
  {
    id: "sellerName",
    numeric: true,
    disablePadding: false,
    label: "اسم البائع"
  },
  {
    id: "orderDate",
    numeric: true,
    disablePadding: false,
    label: "تاريخ الطلب"
  },
  {
    id: "orderTotal",
    numeric: true,
    disablePadding: false,
    label: "قيمة الطلب"
  },
  {
    id: "deliveryMethod",
    numeric: true,
    disablePadding: false,
    label: "طريقة التوصيل"
  },
  {
    id: "orderStatus",
    numeric: true,
    disablePadding: false,
    label: "حالة الطلب"
  },
  { id: "fees", numeric: true, disablePadding: false, label: "المصاريف" }
];

export const usersHeadCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "#"
  },
  {
    id: "userName",
    numeric: false,
    disablePadding: false,
    label: "User Name"
  },
  {
    id: "userEmail",
    numeric: true,
    disablePadding: false,
    label: "E-mail"
  },
  {
    id: "DOB",
    numeric: true,
    disablePadding: false,
    label: "DOB"
  },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "Phone"
  },
  {
    id: "ordersNumber",
    numeric: true,
    disablePadding: false,
    label: "Orders Number"
  },
  {
    id: "wallet",
    numeric: true,
    disablePadding: false,
    label: "User Wallet"
  },
  {
    id: "accountStatus",
    numeric: true,
    disablePadding: false,
    label: "Account status"
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Actions"
  }
];

export const VERIFIED_RADIOS = [
  {
    label: "Verified",
    value: "verified"
  },
  {
    label: "UnVerified",
    value: "unverified"
  }
];

export const SUSPEND_RADIOS = [
  {
    label: "Suspended",
    value: "suspended"
  },
  {
    label: "UnSuspended",
    value: "unSuspended"
  }
];
