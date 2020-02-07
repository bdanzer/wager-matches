// import Axios from 'axios';

const Axios = require('axios')
const qs = require('qs')

const CLIENT_ID =
    'AWMgvmA1ax39AmbhyJuNctlVksirOUOscznAG9q_pmiyYgAaThDFrC1bLPJ1BYZgEpIpFj2FMkJ-Q6K4'
const SECRET_KEY =
    'EIE-wzF6fqHK0valuoBoHhTdbceX-mOAxNbA_wiDq9OcBE_yMcmKObdyefh72yeOvYQKPGPEKwkNsuWF'

var opts = {
    method: 'POST',
    hostname: ['api', 'sandbox', 'paypal', 'com'],
    path: ['v1', 'oauth2', 'token'],
    headers: {
        Authorization:
            'Basic QVdNZ3ZtQTFheDM5QW1iaHlKdU5jdGxWa3Npck9VT3Njem5BRzlxX3BtaXlZZ0FhVGhERnJDMWJMUEoxQllaZ0VwSXBGajJGTWtKLVE2SzQ6RUlFLXd6RjZmcUhLMHZhbHVvQm9IaFRkYmNlWC1tT0F4TmJBX3dpRHE5T2NCRV95TWNtS09iZHllZmg3MnllT3ZZUUtQR1BFS3drTnN1V0Y=',
        'User-Agent': 'PostmanRuntime/7.15.2',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token':
            '81f0a01b-67dc-40a2-a5d5-e1bd09aff0f8,7353c869-7ed5-4512-86cf-b0bc2345117d',
        Host: 'api.sandbox.paypal.com',

        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': '29',
        Connection: 'keep-alive',
        'cache-control': 'no-cache',
    },
}

// (async () => {
//     let response = await Axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', {
//         "grant_type": "client_credentials"
//     }, options);

//     let data = await response;

//     console.log(data);
// })();

let body = { grant_type: 'client_credentials' }

async function paypal() {
    let options = {
        // `headers` are custom headers to be sent
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: CLIENT_ID,
            password: SECRET_KEY,
        },
        validateStatus: function(status) {
            return status >= 200 && status < 300 // default
        },
    }

    let response = await Axios.post(
        'https://api.sandbox.paypal.com/v1/oauth2/token',
        qs.stringify(body),
        options
    )

    let data = await response.data

    // let bearer = await paypalBearer(data.access_token);

    return data.access_token
}

async function paypalBearer(token) {
    console.log(token)

    let options = {
        // `headers` are custom headers to be sent
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        validateStatus: function(status) {
            return status >= 200 && status < 300 // default
        },
    }

    try {
        response = await Axios.get(
            'https://api.sandbox.paypal.com/v1/invoicing/invoices',
            options
        )
    } catch (e) {
        return console.log(e.response)
    }

    let data = await response.data

    return data
}

async function paypalBatch(token, dataBody) {
    let options = {
        // `headers` are custom headers to be sent
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        validateStatus: function(status) {
            return status >= 200 && status < 300 // default
        },
    }

    try {
        response = await Axios.post(
            'https://api.sandbox.paypal.com/v1/payments/payouts',
            dataBody,
            options
        )
    } catch (e) {
        return console.log(e.response)
    }

    let data = await response.data

    return data
}

let paymentObj = {
    sender_batch_header: {
        sender_batch_id: 'Payouts_2020_100002',
        email_subject: 'You have a payout!',
        email_message:
            'You have received a payout! Thanks for using our service!',
    },
    items: [
        {
            recipient_type: 'EMAIL',
            amount: {
                value: '5.00',
                currency: 'USD',
            },
            note: 'Thanks for your patronage!',
            sender_item_id: '201403140002',
            receiver: 'britt.danzer-buyer@gmail.com',
            alternate_notification_method: {
                phone: {
                    country_code: '91',
                    national_number: '9999988888',
                },
            },
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
    ],
}

async function getPayout(token, payoutId) {
    let options = {
        // `headers` are custom headers to be sent
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        validateStatus: function(status) {
            return status >= 200 && status < 300 // default
        },
    }

    console.log(options)

    try {
        response = await Axios.get(
            'https://api.sandbox.paypal.com/v1/payments/payouts/' + payoutId,
            options
        )
    } catch (e) {
        return e
        return console.log(e.response)
    }

    let data = await response.data

    return data
}

async function index() {
    let token = await paypal()
    // let batch = await paypalBatch(token, paymentObj);
    let batch = await getPayout(token, '3MSHUDA4KJCD8')

    console.log(batch)
}

index()
