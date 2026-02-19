const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(100);
    reject("mi amigo se perdio");
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.warn(`a seguir con la vida`);
  });
