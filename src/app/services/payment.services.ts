import { Payment } from '../models/payment';

export class PaymentServices{

    payments: Payment[]
    constructor() {
        this.payments=[
            {id:1,name:"Direct Bank Transfare"},
            {id:2,name:"Cheque Payment"},
            {id:3,name:"Paypal"},
            {id:4,name:"Visa"},
            {id:5,name:"Mastercard"},
            {id:6,name:"On Dilivery"}

        ];

    }

    getAll()
    {
        return this.payments.slice();
    }
}