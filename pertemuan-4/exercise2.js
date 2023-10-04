(function() {
    const checkOddEven = function(angka, callback) {
      const cekAngka = angka % 2 === 0 ? "angka genap" : "angka ganjil";
      callback(cekAngka);
    };
  
    const inputNumber = 8;
  
    checkOddEven(inputNumber, function(result) {
      console.log(result);
    });
  })();