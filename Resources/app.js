var test1 = require('test1');
var test2 = require('test2');

var nav = {};
var win = Ti.UI.createWindow({
  title: 'Memory Leaks',
  backgroundColor: '#fff',
  translucent: false
});

var wrapper = Ti.UI.createView({
  layout: 'vertical'
});

var test1btn = Ti.UI.createButton({
  title: 'Open Test 1',
  width: 200,
  height: 45,
  top: 50,
  color: '#fff',
  backgroundColor: '#c91326'
});

var test2btn = Ti.UI.createButton({
  title: 'Open Test 2',
  width: 200,
  height: 45,
  top: 50,
  color: '#fff',
  backgroundColor: '#c91326'
});

function isiOS() {
  return Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad';
}

function handleTest(_event) {
  if (_event.source.title === 'Open Test 2') {
    test2.build();
  } else if (_event.source.title === 'Open Test 1') {
    test1.build();
  }
};

test1btn.addEventListener('click', handleTest);
test2btn.addEventListener('click', handleTest);

wrapper.add(test1btn);
wrapper.add(test2btn);

win.add(wrapper);

if (isiOS()) {
	Ti.UI.iOS.createNavigationWindow({
		window: win
	}).open();
} else {
	win.open();
}
