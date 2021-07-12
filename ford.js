function encrypt(code, key, behavior) {
  const encrypted = [];
  let newCode = [];
  for (i in code) {
    if (behavior) {
      encrypted[i] = code[i].charCodeAt() * key;
    } else {
      encrypted[i] = code[i].charCodeAt() / key;
    }
    
    newCode[i] = String.fromCharCode(encrypted[i])
  }
  newCode = newCode.join('');
  
  console.log(newCode);
}

encrypt("1HGCM82633A004352", 4, true)
encrypt("ÄĠĜČĴàÈØÌÌĄÀÀÐÌÔÈ", 4, false)


