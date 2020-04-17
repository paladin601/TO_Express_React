module.exports = function (express, app, staticFolder) {
    app.use("/", express.static(staticFolder));
}