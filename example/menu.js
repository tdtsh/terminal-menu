var menu = require('../')({ width: 30, x: 4, y: 2 });
menu.reset();
menu.write('NODECONF STREAMS 2013 SESSION\n');
menu.write('-----------------------------\n');

menu.add('NEW GAME');
menu.add('LOAD GAME');
menu.add('EXIT', menu.close.bind(menu));

menu.on('select', function (index) {
    
});
menu.createStream().pipe(process.stdout);
