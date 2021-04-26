function bitCounter(n) {
    // .tostring(2) Covert number into Bit counter part
    // Replace /0/ removes all zeros 
    n = n.toString(2).replace(/0/g, '').split('');
    //Counter for how many '1'
    var counter = 0
    // console.log(n)
    for(let i = 0; i < n.length; i++)
    {
      counter += parseInt(n[i])
      // console.log(typeof parseInt(n[i]));
    }
    return counter
}
bitCounter(5)