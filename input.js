// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function handleUserInput(key) {
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'x') {
      conn.write('Say: nsfw');
    }    
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
}

module.exports = setupInput;