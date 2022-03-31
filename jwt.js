const jwt = require('jwt-simple');

module.exports = class JWT {
    static get key() {
        return "sdkjhgkjsdhffehrioieur987fsdiof";
    }

    static createToken(user) {
        var payload = {
            id: user.id,
            code: Math.random()
        }
    
        return jwt.encode(payload, this.key);
    };

    static decodeToken(token) {
        return jwt.decode(token, this.key);
    }
}