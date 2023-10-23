function toTitleCase(str) {
    let a = str.split(' ');
    for (var i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase()
       + a[i].slice(1).toLowerCase();
    }
    return a.join(' ');
  }
  
  console.log(toTitleCase("this is prem kumar"));