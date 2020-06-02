const typewriter = function(text) {
  const string = text + " \n";
  let timer = 0;
  for (const char of string) {

    setTimeout(() => {
      return process.stdout.write(char);
    },timer);

    timer += 100;
    
  }
};

typewriter("hello world !!");