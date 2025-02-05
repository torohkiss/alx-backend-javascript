process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
