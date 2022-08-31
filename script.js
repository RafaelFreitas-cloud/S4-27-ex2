function dominator(arr) {
    arr.sort(); //o metodo sort, faz o array ficar em ordem crescente
    let v = 0
    let c = 0
    for (let i = 0; i < arr.length; i++) {
       if (v == arr[i]) {
        c++;
       }
       else { 
         v = arr[i];
         c = 1;
       }
       if (c > arr.length / 2) return v;
    }
    return -1;
  }

let lista1=[3,4,3,2,3,1,3,3]
let lista2=[1,2,3,4,5]
let lista3=[1,1,1,2,2,2]
let lista4=[1,1,1,2,2,2,2]

console.log(dominator(lista1))
console.log(dominator(lista2))
console.log(dominator(lista3))
console.log(dominator(lista4))

