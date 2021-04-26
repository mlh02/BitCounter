function bitCounter(n) {
    // .tostring(2) Covert number into Bit counter part
    // Replace /0/ removes all zeros 
    n = n.toString(2).replace(/0/g, '').split('');
    //Counter for how many '1'
    let counter = 0
    
    for(let i = 0; i < n.length; I++)
    {
    	counter += n[i]
    }
    return counter
}
bitCounter(5)