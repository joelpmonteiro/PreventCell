export interface IDevice {
  brand: string;
  deletedDate: any;
  deviceId?: number;
  deviceModel: string;
  deviceModelNumber: string;
  deviceName: string;
  devicePhoneNumber: string;
  deviceType: string;
  docId: string;
  imei?: string;
  isDeleted?: boolean;
  serialNumber: string;
  operator?: string;
  pin?: string;
  telcomName?: string;
  deviceIMEI?: string;
  telecomName?: string;
  deviceBrand?: string;
}

export interface ICustomer {
  docId: string;
  customerName: string;
  customerType: string;
  customerGender: string;
  customerBirthDate: string;
  customerAddress: string;
  customerAddressNumber: string;
  customerAddressComplement: string;
  customerAddressCity: string;
  customerAddressState: string;
  customerResidencePhoneNumber: string;
  customerMobilePhoneNumber: string;
  zipcode?: string,
  customerZipcode?: string,
  email: string

}
// export interface IGetDevice {
//   brand: string;
//   deletedDate: any;
//   deviceId: number;
//   deviceModel: string;
//   deviceModelNumber: string;
//   deviceName: string;
//   devicePhoneNumber: string;
//   deviceType: string;
//   docId: string;
//   isDeleted: boolean;
//   serialNumber: string;
// }

export interface IDeviceIncident {
  model: string;
  marca: string;
  imei: string;
  phone: string;
}
