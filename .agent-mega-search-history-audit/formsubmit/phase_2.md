Get API key
Before you can use the FormSubmit API, you first need to create your API key, create a GET request, and retrieve your API key. The key will send to your email address.

curl -X GET https://formsubmit.co/api/get-apikey/your@email.com

sample API response

{
    "success": true,
    "message": "We have sent an email with the API key. Please find your API key in your mailbox."
}

Get Submissions
Use below endpoint to get all of your submissions. Send GET request, and retrieve your submissions with the timestamp which in descending order.

curl -X GET https://formsubmit.co/api/get-submissions/<apikey>

sample API response

{
    "success": true,
    "submissions": [{
        "form_url": "https://formsubmit.co/support",
        "form_data": {
            "name": "Devro LABS",
            "email": "hello@devrolabs.com",
            "message": "hello! there"
        },
        "submitted_at": {
            "date": "2019-07-17 16:37:42.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        }
    }, {
        "form_url": "https://devrolabs.com/contact",
        "form_data": {
            "name": "FormSubmit",
            "email": "support@formsubmit.co",
            "message": "hello! there"
        },
        "submitted_at": {
            "date": "2019-07-17 16:37:35.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        }
    }]
}

