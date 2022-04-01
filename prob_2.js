const Diff = (list) => {
    c=[]
    
    for (var i = 0; i < list.length; i++) {
      arr_1=list.slice().splice(0, i+1);
      arr_2=list.slice().splice(1, i+1);
      c.push((arr_1[i] || 0) - (arr_2[i] || 0));
    };
      
    const posArr = c.filter(num => num > -1)
    let popped = posArr.pop();
    
    let sum = 0;
    
    for (const item of posArr) {
        sum += item;
    };
    return sum
    
};
    
    console.log(Diff([4,2,1,7,1]));