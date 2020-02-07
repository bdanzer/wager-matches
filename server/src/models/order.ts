import mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    paymentID: {
        type: String,
        required: true
    },
    payerID:  {
        type: String,
        required: true
    },
    payerEmail: {
        type: String,
        required: true
    }
});
const Order = mongoose.model('Order', ordersSchema);