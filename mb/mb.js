'use strict';

var spawn = require('child_process').spawn,
    exec = require('child_process').exec,
    os = require('os'),
    port = process.env.MB_PORT || 2525,
    mbPath = process.env.MB_EXECUTABLE || '/usr/local/bin/mb',
    pidfile = 'mb-grunt.pid';

function isWindows () {
    return os.platform().indexOf('win') === 0;
}
//lsof -iTCP:2525
function start (done) {
    var mbArgs = [
            'restart',
            '--port', port,
            '--pidfile', pidfile,
            '--logfile', 'mb-grunt.log',
            '--allowInjection'
            //, '--mock', '--debug'
        ],
        mb;
    console.log("a1 "+isWindows())
    if (isWindows) {
        mbArgs.unshift(mbPath);

        if (mbPath.indexOf('.cmd') >= 0) {
            mbArgs.unshift('/c');
            mb = spawn('cmd', mbArgs);
        }
        else {
            mb = spawn('node', mbArgs);
        }
    }
    else {
        console.log("hit")
        mb = spawn(mbPath, mbArgs);
    }
    console.log("a2")
    mb.on('error', function (error) {
        throw error;
    });
    mb.stderr.on('data', function (data) {
        console.error(data.toString('utf8'));
    });
    mb.stdout.on('data', function (data) {
        // Looking for "mountebank va.b.c (node vx.y.z) now taking orders..."
        console.log(done)
        if (data.toString('utf8').indexOf('now taking orders') > 0) {
            done();
        }
    });
}

function stop (done) {
    var command = mbPath + ' stop --pidfile ' + pidfile;
    if (isWindows && mbPath.indexOf('.cmd') < 0) {
        command = 'node ' + command;
    }
    exec(command, done);
}

module.exports = function (grunt) {
    grunt.registerTask('mb', 'start or stop mountebank', function (command) {
        var done = this.async();

        command = command || 'start';
        if (['start', 'stop'].indexOf(command) === -1) {
            throw 'mb: the only targets are start and stop';
        }

        if (command === 'start') {
            start(done);
        }
        else {
            stop(done);
        }
    });
};