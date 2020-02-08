import * as express from "express";
import * as cors from 'cors';
import * as PayPal from './paypal/lib';
import dotenv = require('dotenv');
import mongoose = require('mongoose');
import { resolve } from "path"

dotenv.config({ path: resolve(__dirname, "../config.env") });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(_con => {
    console.log('DB CONNECTION SUCCESSFULL');
});
 
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/paypal-transaction-complete', async (req, res) => {  
    // console.log(req.body, 'COMPLETED');  
        let token = await PayPal.getToken();
        let getData = await PayPal.get(PayPal.routeUrls.ORDERS + req.body.orderID, token);
        
        console.log(getData)

        if (getData.status === 'COMPLETED') {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
        
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let paymentObj = {
    "sender_batch_header": {
      "sender_batch_id": "Payouts_2020_100003",
      "email_subject": "You have a payout!",
      "email_message": "You have received a payout! Congrats on the win!"
    },
    "items": [
        {
            "recipient_type": "EMAIL",
            "amount": {
                "value": "5.00",
                "currency": "USD"
            },
            "note": "Thanks for your patronage!",
            "sender_item_id": "201403140003",
            "receiver": "britt.danzer-buyer@gmail.com",
            "alternate_notification_method": {
                "phone": {
                "country_code": "91",
                "national_number": "9999988888"
                }
            }
        },
        // {
        //     "recipient_type": "EMAIL",
        //     "receiver": "payouts-simulator-receiver@paypal.com",
        //     "note": "ERRPYO002",
        //     "sender_item_id": "15240864065560",
        //     "amount":
        //     {
        //     "currency": "USD",
        //     "value": "1.00"
        //     }
        // }
    ]
};

// export async function index() {
//     // let token = await PayPal.getToken();
//     // let batch = await paypalBatch(token, paymentObj);
//     // let batch = await PayPal.getPayout(token, '3MSHUDA4KJCD8');

//     console.log(batch);
// }

// (async() => {
//     let token = await PayPal.getToken();
//     let data = await PayPal.post(PayPal.routeUrls.PAYMENT_PAYOUTS, token, paymentObj);
//     let getData = await PayPal.get(PayPal.routeUrls.PAYMENT_PAYOUTS + '3MSHUDA4KJCD8', token);
//     console.log(data, getData);
// })()