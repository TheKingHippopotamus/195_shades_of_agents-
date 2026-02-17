Secure File Sharing API
Encrypt and securely transfer files is easier with professional-grade file sharing API
The API was built with the intention of providing software engineers and businesses with a simple and easy to use solution to secure file sharing. Whether you're a developer writing an application that requires temporary but secure file storage with end-to-end encryption, we can handle the heavy lifting of storing and the sharing of your files so you don't have to worry about your files and storage anymore.

API Usage
The secure file sharing API endpoint is pretty straightforward to use. All you need to do is perform a multipart/form-data request on the main file endpoint using the following schema.

CORS is enabled for all originating domains, so you can call the API directly from your client-side.

curl -F "file=@password.txt" https://safenote.co/api/file -F password=secret -F lifetime=72

Parameters:

Attribute	Type	Required	Description
file	file	yes	one file at a time. max file size 20MB
lifetime	integer	no	the file lifetime in a number of hours. min: 1, max: 336
read_count	integer	no	number of views before destructing the file
password	integer/string	no	a custom password for your file
Sample API response

{
    "success": true,
    "key": "5dd3fd2299fa64@49618577",
    "link": "https://safenote.co/r/5dd3fd2299fa64@49618577"
}

Sample error response

{
    "success": false,
    "error": "400",
    "message": "file size exceeded the maximum size"
}