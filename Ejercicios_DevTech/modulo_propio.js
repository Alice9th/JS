function suma(...numN){
    return numN.reduce((acum, num) => acum +=num);
};

//console.log(suma(1,1,1,1));

module.exports = suma;