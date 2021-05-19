/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
    public: { url: "/", static: true }
  },
  plugins: [
    /* ... */
  ],
};
