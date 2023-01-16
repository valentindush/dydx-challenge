export interface Group {
    id: string,
    groupName: string,
    groupWebsite: string,
    groupType: string,
    reservation: string,
    insuranceSupplier: string,
    roomCategories: string[],
    dateCreated: Date,
    groupSupplier: string,
    groupCommissionPercentage: number
}

export interface Room {
    id: string,
    roomName: string,
    travelDate: Date,
    travelStartDate: Date,
    travelEndDate: Date,
    travelNights: number,
    totalPackageAmount: string,
    totalPaidToTZ:string,
    depositChecked: string,
    remainingBalance:string,
    supplier: string,
    finalPaymentDue: Date,
    insuranceSupplier: string,
    transferCompany: string,
    destination: string,
    roomType: string,
    transferInfo: string,
    agentId: string,
    origin: string,
    vacationType: string,
    weddingDate2: Date,
    weddingDate: Date,
    daysTillTravel: number,
    daysTillFinalPaymentDue: number,
    roomStatus: string,
    tzTransfer: string,
    transferType:string,
    tzPackage: string,
    bookingNumber: string,
    ptidPricingType: string,
    balanceChecked: string,
}

export interface Hotel {
    id: string,
    hotelName: string,
    hotelAddress :string,
    hotelPhone: string,
    hotelImage: string,
    hotelFrontDeskPhone: string,
    hotelFrontDeskEmail: string,
    hotelDescription: string,
    hotelPositives: string,
    hotelCodes : {
        hbsi:string,
        bedsonline: string,
        vax: string
    },
    preferredSuppler:string,
    supplierCommissionList: string
}

export interface Traveller {
    id:string,
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    email: string,
    birthdate: Date,
    age: number,
    amountPaid: number | null,
    purchasedInsurance:string,
    gender: string,
    status:string
}

export interface Payment {
    paymentID: string,
    paymentToken: string,
    paymentAmount: string,
    paymentType :string,
    creditCardOwner: string,
    paymentDate: Date,
    last4:string,
    stripeReceipt: string | null,
}

export interface Transfer{
    transferCompanyName: string | null,
    transferCompanyDescription: string,
    transferImageLink:string,
    transferImageDescription: string,
    transferCompanyPhone: string,
    transferCompanyEmail: string
}

export interface Agent{
    id: string,
    agentName: string,
    agentFirstName: string,
    agentPhoneWork: string,
    agentPhoneMobile: string | null,
    agentEmail:string
}

export type RoomInfo = {
    group: Group | null,
    room: Room[],
    hotel: Hotel[],
    travelers: Traveller[],
    payments: Payment[],
    transer: Transfer[],
    agent: Agent | null
}[]