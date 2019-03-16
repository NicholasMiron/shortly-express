const parseCookies = (req, res, next) => {

  if (req.headers.cookie) {
    let splitCookies = req.headers.cookie.split(' ');
    for (let cookie of splitCookies) {
      let halfCookie = cookie.split('=');
      halfCookie[1] = halfCookie[1].replace(/\;/gm, '');
      req.cookies[halfCookie[0]] = halfCookie[1];
    }
  }
  next();
};

module.exports = parseCookies;