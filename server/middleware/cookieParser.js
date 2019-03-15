const parseCookies = (req, res, next) => {
    console.log('i have a weiner', req);

    if(req.headers.cookie){
        let cookieNum = req.headers.cookie.slice(10)
        req.cookies = { shortlyid: cookieNum };
    }
    console.log('we all have weiners', req.cookies)
    next();
};

module.exports = parseCookies;