module.exports = function(app) {
    var apis = require('./controllers/roonAPI');

    app.get('/roonAPI/getCore', apis.getCore);
    app.get('/roonAPI/listZones', apis.listZones);
    app.get('/roonAPI/getZone', apis.getZone);
    app.get('/roonAPI/play_pause', apis.play_pause);
    app.get('/roonAPI/stop', apis.stop);
    app.get('/roonAPI/previous', apis.previous);
    app.get('/roonAPI/next', apis.next);
    app.get('/roonAPI/change_volume', apis.change_volume);
    app.get('/roonAPI/getImage', apis.getImage);
    app.get('/roonAPI/play', apis.play);
    app.get('/roonAPI/pause', apis.pause);
    app.get('/roonAPI/listByItemKey', apis.listByItemKey);
    app.get('/roonAPI/listSearch', apis.listSearch);
    app.get('/roonAPI/goUp', apis.goUp);
    app.get('/roonAPI/goHome', apis.goHome);
    app.get('/roonAPI/listGoPage', apis.listGoPage);
    app.get('/roonAPI/listRefresh', apis.listRefresh);
    app.get('/roonAPI/getMediumImage', apis.getMediumImage);
    app.get('/roonAPI/getIcon', apis.getIcon);
    app.get('/roonAPI/getTimers', apis.getTimers);
    app.get('/roonAPI/addTimer', apis.addTimer);
    app.get('/roonAPI/removeTimer', apis.removeTimer);
};

