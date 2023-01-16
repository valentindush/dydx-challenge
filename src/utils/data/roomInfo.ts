import { Agent, Group, Hotel, Payment, Room, Transfer, Traveller } from "../types";



export const roomInfomation: {
    group: Group[],
    room: Room[],
    hotel: Hotel[],
    travelers: Traveller[],
    payments: Payment[],
    transfer: Transfer[],
    agent: Agent
}[] = [
    {
        group: [
            {
                "id": "10e4e910-3ea5-edfe-883e-617854318dd2",
                "groupName": "OctoberTwentySixth Testing",
                "groupWebsite": " ",
                "groupType": "Flexible",
                "reservation": "558654616",
                "insuranceSupplier": "no_insurance",
                "roomCategories": [],
                "dateCreated": new Date("2021-10-26 14:18:46"),
                "groupSupplier": "funjet",
                "groupCommissionPercentage": 0.0
            }
        ],
        "room": [
            {
                "id": "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
                "roomName": "Wayne Room",
                "travelDate": new Date("2022-06-01"),
                "travelStartDate": new Date("06/01/2022"),
                "travelEndDate": new Date("06/08/2022"),
                "travelNights": 7,
                "totalPackageAmount": "828.05",
                "totalPaidToTZ": "150.00",
                "depositChecked": "",
                "balanceChecked": "checked",
                "remainingBalance": "678.05",
                "supplier": "funjet",
                "finalPaymentDue": new Date("2022-03-28"),
                "insuranceSupplier": "no_insurance",
                "transferCompany": "pending",
                "destination": "CUN",
                "roomType": "Junior Suite Tropical View Double",
                "transferInfo": "not_included",
                "agentId": "5c79aed4-f7d4-0b68-2383-5f627c5d4404",
                "origin": "NONE",
                "vacationType": "hotel",
                "weddingDate2": new Date("2022-06-02"),
                "weddingDate": new Date("06/02/2022"),
                "daysTillTravel": -229,
                "daysTillFinalPaymentDue": -294,
                "roomStatus": "Active",
                "tzTransfer": "0.00",
                "transferType": "none",
                "tzPackage": "828.05",
                "bookingNumber": "RN7R08E3",
                "ptidPricingType": "live_pricing"
            }
        ],
        "hotel": [
            {
                "id": "8bcd0023-5be2-92c0-6aef-5d5d8fab9d11",
                "hotelName": "Dreams Macao Beach Punta Cana",
                "hotelAddress": "Playa Macao, Provincia La Altagracia, Dominican Republic  DO  ",
                "hotelPhone": "",
                "hotelImage": "https://www.dropbox.com/s/w2qnhpzv8ktr2uo/resort.jpg?raw=1",
                "hotelFrontDeskPhone": " 011529848772800",
                "hotelFrontDeskEmail": "",
                "hotelDescription": "Featuring 500 luxuriously appointed suites, guests can experience new spacious villas with double the features. Enjoy limitless gourmet  la carte dining with stylish lounges serving topshelf spirits, a worldclass Spa by Pevonia and a water park with countless slides and a lazy riverperfect for all ages. Both serenity and adventure can be found at Dreams Macao Beach Punta Cana and you wont want to miss it.",
                "hotelPositives": "",
                "hotelCodes": {
                    "hbsi": "",
                    "bedsonline": "",
                    "vax": "81590,PUJDMBP"
                },
                "preferredSuppler": "{\"bedsonline\":\"bedsonline\",\"funjet\":\"funjet\",\"hbsi\":\"hbsi\"}",
                "supplierCommissionList": "{\"bedsonline\":\"18\",\"funjet\":\"2\",\"hbsi\":\"20\"}"
            }
        ],
        "travelers": [
            {
                "id": "9b8e3809-f566-5dee-2e21-61c355a76804",
                "firstName": "Wayne",
                "middleName": "",
                "lastName": "Clarke",
                "phone": "9012320842",
                "email": "wayne+1@travelzap.com",
                "birthdate": new Date("1968-05-09"),
                "age": 54,
                "amountPaid": null,
                "purchasedInsurance": "0",
                "gender": "male",
                "status": "Active"
            }
        ],
        "payments": [
            {
                "paymentID": "323ab26c-5c0f-33f8-4743-61c355460f3e",
                "paymentToken": "ch_3K9XrUIIqc4tafsi0HbQ88Hd",
                "paymentAmount": "150.00",
                "paymentType": "Deposit",
                "creditCardOwner": "Wayne Clarke",
                "paymentDate": new Date("12/22/2021"),
                "last4": "1111",
                "stripeReceipt": null
            }
        ],
        "transfer": [
            {
                "transferCompanyName": null,
                "transferCompanyDescription": "Transportation between airport and $hotel is included with your reservation. Transportation details will be confirmed at least 7 days before travel.",
                "transferImageLink": "",
                "transferImageDescription": "",
                "transferCompanyPhone": "",
                "transferCompanyEmail": ""
            }
        ],
        "agent": {
            "id": "5c79aed4-f7d4-0b68-2383-5f627c5d4404",
            "agentName": "Guest Services",
            "agentFirstName": "Guest",
            "agentPhoneWork": "+1 844 948 3911",
            "agentPhoneMobile": null,
            "agentEmail": "guestservices@destify.com"
        }
    },
    {
        "group": [
            {
                "id": "10e4e910-3ea5-edfe-883e-617854318dd2",
                "groupName": "OctoberTwentySixth Testing",
                "groupWebsite": " ",
                "groupType": "Flexible",
                "reservation": "558654616",
                "insuranceSupplier": "no_insurance",
                "roomCategories": [],
                "dateCreated": new Date("2021-10-26 14:18:46"),
                "groupSupplier": "funjet",
                "groupCommissionPercentage": 0.0
            }
        ],
        "room": [
            {
                "id": "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
                "roomName": "David Room",
                "travelDate": new Date("2022-06-02"),
                "travelStartDate": new Date("06/02/2022"),
                "travelEndDate":  new Date("06/07/2022"),
                "travelNights": 5,
                "totalPackageAmount": "591.46",
                "totalPaidToTZ": "150.00",
                "depositChecked": "",
                "balanceChecked": "checked",
                "remainingBalance": "441.46",
                "supplier": "funjet",
                "finalPaymentDue": new Date("2022-03-29"),
                "insuranceSupplier": "no_insurance",
                "transferCompany": "pending",
                "destination": "CUN",
                "roomType": "Junior Suite Tropical View Double",
                "transferInfo": "not_included",
                "agentId": "5c79aed4-f7d4-0b68-2383-5f627c5d4404",
                "origin": "NONE",
                "vacationType": "hotel",
                "weddingDate2": new Date("2022-06-02"),
                "weddingDate": new Date("06/02/2022"),
                "daysTillTravel": -228,
                "daysTillFinalPaymentDue": -293,
                "roomStatus": "Active",
                "tzTransfer": "0.00",
                "transferType": "none",
                "tzPackage": "591.46",
                "bookingNumber": "63N228E3",
                "ptidPricingType": "live_pricing"
            }
        ],
        "hotel": [
            {
                "id": "8bcd0023-5be2-92c0-6aef-5d5d8fab9d11",
                "hotelName": "Dreams Macao Beach Punta Cana",
                "hotelAddress": "Playa Macao, Provincia La Altagracia, Dominican Republic  DO  ",
                "hotelPhone": "",
                "hotelImage": "https://www.dropbox.com/s/w2qnhpzv8ktr2uo/resort.jpg?raw=1",
                "hotelFrontDeskPhone": " 011529848772800",
                "hotelFrontDeskEmail": "",
                "hotelDescription": "Featuring 500 luxuriously appointed suites, guests can experience new spacious villas with double the features. Enjoy limitless gourmet  la carte dining with stylish lounges serving topshelf spirits, a worldclass Spa by Pevonia and a water park with countless slides and a lazy riverperfect for all ages. Both serenity and adventure can be found at Dreams Macao Beach Punta Cana and you wont want to miss it.",
                "hotelPositives": "",
                "hotelCodes": {
                    "hbsi": "",
                    "bedsonline": "",
                    "vax": "81590,PUJDMBP"
                },
                "preferredSuppler": "{\"bedsonline\":\"bedsonline\",\"funjet\":\"funjet\",\"hbsi\":\"hbsi\"}",
                "supplierCommissionList": "{\"bedsonline\":\"18\",\"funjet\":\"2\",\"hbsi\":\"20\"}"
            }
        ],
        "travelers": [
            {
                "id": "e2eb56d6-8aa4-e59a-4357-61c21a64ad22",
                "firstName": "David",
                "middleName": "",
                "lastName": "Dattner",
                "phone": "3105920848",
                "email": "david.dattner@gmail.com",
                "birthdate": new Date("1973-05-06"),
                "age": 49,
                "amountPaid": null,
                "purchasedInsurance": "0",
                "gender": "male",
                "status": "Active"
            }
        ],
        "payments": [
            {
                "paymentID": "cdcd0515-10fc-1d35-ef13-61c21aa2f297",
                "paymentToken": "ch_3K9CmcIIqc4tafsi1xqAwcBI",
                "paymentAmount": "150.00",
                "paymentType": "Deposit",
                "creditCardOwner": "Dee Dee",
                "paymentDate": new Date("12/21/2021"),
                "last4": "1111",
                "stripeReceipt": null
            }
        ],
        "transfer": [
            {
                "transferCompanyName": null,
                "transferCompanyDescription": "Transportation between airport and $hotel is included with your reservation. Transportation details will be confirmed at least 7 days before travel.",
                "transferImageLink": "",
                "transferImageDescription": "",
                "transferCompanyPhone": "",
                "transferCompanyEmail": ""
            }
        ],
        "agent": {
            "id": "5c79aed4-f7d4-0b68-2383-5f627c5d4404",
            "agentName": "Guest Services",
            "agentFirstName": "Guest",
            "agentPhoneWork": "+1 844 948 3911",
            "agentPhoneMobile": null,
            "agentEmail": "guestservices@destify.com"
        }
    }
]