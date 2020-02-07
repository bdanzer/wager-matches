// import Axios from 'axios';
const Axios = require('axios');
const qs = require('qs');

const CLIENT_ID  = "AWMgvmA1ax39AmbhyJuNctlVksirOUOscznAG9q_pmiyYgAaThDFrC1bLPJ1BYZgEpIpFj2FMkJ-Q6K4";
const SECRET_KEY = "EIE-wzF6fqHK0valuoBoHhTdbceX-mOAxNbA_wiDq9OcBE_yMcmKObdyefh72yeOvYQKPGPEKwkNsuWF";
const baseUrl = 'https://api.sandbox.paypal.com/';

export const routeUrls = {
    PAYMENT_PAYOUTS: 'v1/payments/payouts/',
    INVOICES: 'v1/invoicing/invoices/',
    ORDERS: 'v2/checkout/orders/'
};

export async function getToken() {
    let body = {"grant_type": "client_credentials"}

    let options = {
        // `headers` are custom headers to be sent
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        auth: {
            username: CLIENT_ID,
            password: SECRET_KEY
        },
        validateStatus: function (status: number) {
            return status >= 200 && status < 300; // default
        }
    }

    let response = await Axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', qs.stringify(body), options);

    let data = await response.data;

    // let bearer = await paypalBearer(data.access_token);

    return data.access_token;
};

export async function post(route: string, token: string, dataBody: object | boolean = false) {
    let response;

    let options = {
        // `headers` are custom headers to be sent
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        validateStatus: function (status: number) {
            return status >= 200 && status < 300; // default
        }
    }
    
    try {
        response = await Axios.post(baseUrl + route, dataBody, options);
    } catch(e) {
        return console.log(e.response);
    }

    let data = await response.data;

    return data; 
}

export async function get(route: string, token: string) {
    let response;

    let options = {
        // `headers` are custom headers to be sent
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        validateStatus: function (status: number) {
            return status >= 200 && status < 300; // default
        }
    }
    
    try {
        response = await Axios.get(baseUrl + route, options);
    } catch(e) {
        return console.log(e.response);
    }

    let data = await response.data;

    return data; 
}