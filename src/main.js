define(function(require, exports, module) {
	var Engine = require('famous/core/Engine');
  var AppView = require('views/AppView');
  var Utility = require('famous/utilities/Utility');
  var SlideData = require('data/SlideData');

  Utility.loadURL(SlideData.getUrl(), initApp);
  var mainContext = Engine.createContext();

  function initApp(data) {
    data = SlideData.parse(data);
    var appView = new AppView({data: data});

    mainContext.add(appView);
  }

});
