module.exports.API_SECRET = 'some_secret_string';
module.exports.JWT_ALGORITHM = 'HS512';
module.exports.TIMEOUT_DURATION = '1h';
var apiUrl='https://m.showbahis110.com/apiv3'
if (process.env.NODE_ENV === 'production') {

    if(process.env.API_URI && process.env.API_URI!=='')
        apiUrl = process.env.API_URI;
    //split dburi to get user name and password for db
    //mongoose.connect(dbURI, {
    //    auth: {
    //        user: 'birotydb',
    //        password: 'GvNlnWXftt5GubOdXDQ3vKf4AyWUG8ZTlFtrNB78tbJi7W4iHxmZTMFCR5gZX23sQpoLE1XYhBSP0Ns73NBhLA=='
    //    }
    //});

}
module.exports.BASEURL=apiUrl;
