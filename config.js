require("dotenv").config();

exports.config = 
    {
        api_url : process.env.PAYFAST_API_URL,
        sandbox_api_url: process.env.PAYFAST_SANDBOX_URL,
        grant_type : process.env.PAYFAST_GRANT_TYPE,
        merchant_id : process.env.PAYFAST_MERCHANT_ID,
        secured_key : process.env.PAYFAST_SECURED_KEY,
        store_id : process.env.PAYFAST_STORE_ID,
        return_url : process.env.PAYFAST_RETURN_URL,
        mode : process.env.PAYFAST_MODE,
    };


// exports.config = config;