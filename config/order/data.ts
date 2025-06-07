export type Order = {
  orderId: string;
  batchNo: string;
  price: string;
  quantity: number;
  status: "Pending" | "Shipped" | "Delivered" | "Canceled";
  prescription: "Required" | "Not Required";
};

export const orders: Order[] = [
  {
    orderId: "OID001",
    batchNo: "BATCH12345",
    price: "$29.99",
    quantity: 10,
    status: "Pending",
    prescription: "Required",
  },
  {
    orderId: "OID002",
    batchNo: "BATCH67890",
    price: "$15.50",
    quantity: 5,
    status: "Shipped",
    prescription: "Not Required",
  },
  {
    orderId: "OID003",
    batchNo: "BATCH11223",
    price: "$45.75",
    quantity: 20,
    status: "Delivered",
    prescription: "Required",
  },
  {
    orderId: "OID004",
    batchNo: "BATCH33445",
    price: "$12.99",
    quantity: 8,
    status: "Canceled",
    prescription: "Not Required",
  },
  {
    orderId: "OID005",
    batchNo: "BATCH55667",
    price: "$99.00",
    quantity: 15,
    status: "Pending",
    prescription: "Required",
  },
  {
    orderId: "OID006",
    batchNo: "BATCH98765",
    price: "$55.25",
    quantity: 12,
    status: "Delivered",
    prescription: "Not Required",
  },
  {
    orderId: "OID007",
    batchNo: "BATCH43210",
    price: "$18.75",
    quantity: 7,
    status: "Pending",
    prescription: "Required",
  },
  {
    orderId: "OID008",
    batchNo: "BATCH76543",
    price: "$22.50",
    quantity: 9,
    status: "Shipped",
    prescription: "Not Required",
  },
  {
    orderId: "OID009",
    batchNo: "BATCH11222",
    price: "$60.00",
    quantity: 14,
    status: "Delivered",
    prescription: "Required",
  },
  {
    orderId: "OID010",
    batchNo: "BATCH56789",
    price: "$39.99",
    quantity: 11,
    status: "Canceled",
    prescription: "Not Required",
  },
  {
    orderId: "OID011",
    batchNo: "BATCH67812",
    price: "$29.50",
    quantity: 13,
    status: "Pending",
    prescription: "Required",
  },
  {
    orderId: "OID012",
    batchNo: "BATCH33422",
    price: "$42.00",
    quantity: 6,
    status: "Shipped",
    prescription: "Not Required",
  },
  {
    orderId: "OID013",
    batchNo: "BATCH44231",
    price: "$11.25",
    quantity: 4,
    status: "Delivered",
    prescription: "Required",
  },
  {
    orderId: "OID014",
    batchNo: "BATCH99999",
    price: "$79.99",
    quantity: 18,
    status: "Pending",
    prescription: "Required",
  },
  {
    orderId: "OID015",
    batchNo: "BATCH11111",
    price: "$25.00",
    quantity: 3,
    status: "Canceled",
    prescription: "Not Required",
  },
];
