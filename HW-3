const countingSort = (input) => {
    let n = input.length
    let k = Math.max(...input);
    let t;
    //new arr length of max elemet + 1
    const temp = new Array(k + 1).fill(0);
    
    //Counting the frequency of elements
    //And store it in new array
    for(let i = 0; i < n; i++){
      t = input[i];
      temp[t]++;
    }

    for(let i = 1; i <= k; i++){
      temp[i] = temp[i] + temp[i - 1];  
    }
    
    const output = new Array(n).fill(0);
    
    for(let i = n - 1; i >= 0; i--) {
      t = input[i];
      output[temp[t] - 1] = t;  
      temp[t] = temp[t] - 1;		
     }
    
    return output
  }

  const arr = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
  console.log(countingSort(arr));
  
