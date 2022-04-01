const Nemo = (numbers,limit) => {
    let a = numbers,
    count = limit-1,
    missing = []
    
    for (let i = 1; i <= count; i++) {
      if (a.indexOf(i) === -1) {
        missing.push(i)
      };
      
    };
    return missing;
};
    
    console.log(Nemo([1,2,3], 12));