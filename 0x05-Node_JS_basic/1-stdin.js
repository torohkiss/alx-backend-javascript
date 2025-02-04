process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
