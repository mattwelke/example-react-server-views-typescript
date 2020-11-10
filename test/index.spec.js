const expect = require('chai').expect;
const axios = require('axios').default;

describe('the app', () => {
    it('renders the correct HTML', async () => {
        // Assumes server is already running
        const response = await axios.get('http://localhost:3000');

        expect(response.status).to.equal(200);
        expect(response.data).to.not.be.undefined;
        expect(response.data).to.not.be.null;
        expect(response.data).to.equal(`<!doctype html><html><head><title>App</title></head><body><ul><li><a href="/">Home</a> &lt;- You are here! :)</li><li><a href="/about">About</a></li></ul><div style="background-color:red"><p>Hello, World! The date is ${new Date().toLocaleDateString()}</p></div></body></html>`);
    });
});
