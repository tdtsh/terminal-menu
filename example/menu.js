var menu = require('../')({ width: 30 });
menu.write('NODECONF STREAMS 2013 SESSION\n');
menu.write('-----------------------------\n');

menu.add('NEW GAME');
menu.add('LOAD GAME');
menu.add('EXIT', process.exit);

menu.write('                             \n');

menu.on('select', function (index) {
    
});
menu.createStream().pipe(process.stdout);
