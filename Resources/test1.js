function isiOS() {
  return Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad';
}

exports.build = function() {
  var nav = {};
  var win = Ti.UI.createWindow({
    title: 'Test 1',
    backgroundColor: '#fff',
    translucent: false
  });

  var table = Ti.UI.createTableView({
    top: 50
  });

  var label = Ti.UI.createLabel({
    text: 'Some Label',
    width: 100,
    height: 20,
    top: 15
  });

  var close = Ti.UI.createButton({
    title: 'Close'
  });

  var data = [
		{ title: 'Row 1' },
    { title: 'Row 2' },
    { title: 'Row 3' },
    { title: 'Row 4' },
    { title: 'Row 5' }
  ];

  table.setData(data);

  close.addEventListener('click', function() {
    isiOS() ? nav.close() : win.close();
  });

  function doSomething(_event) {
    Ti.API.info('event fired');
    table.setData(_event.data);
    label.text = _event.label;
  }

  Ti.App.addEventListener('bad:idea', doSomething);

  win.add(label);
  win.add(table);

  if (isiOS()) {
    win.rightNavButton = close;
    nav = Ti.UI.iOS.createNavigationWindow({
      window: win
    });
    nav.open({ modal: true });
  } else {
    win.open();
  }
};
