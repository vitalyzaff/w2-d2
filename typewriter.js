const sentence = "hello there from lighthouse labs";

const gif = function(sentence) {
  let num = 0;
  for (const char in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[char]);
      if (Number(char) === sentence.length - 1) {
        process.stdout.write(`\n`);
      }
    }, num += 100);
  }
};

gif(sentence);

