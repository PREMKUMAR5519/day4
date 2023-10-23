let Array = [8,9,8,7,8,7,8];
let N = Array.length;
let K = 2;
 
Rotate(Array, N, K);

function Rotate(a, n, k) {   
     k = 2;
 
for (let i = 0; i < n; i++) {

    if (i < k) {
    console.log(a[n + i - k]);
}

     else {
    console.log((a[i - k]));

        }

    }
}