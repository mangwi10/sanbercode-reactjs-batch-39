//Soal 1
const myCountPromise = (param) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(param != undefined){
                resolve(param*2)    
               } 
               else{
                 reject("Maaf tidak ada nilai dalam parameter")
               } 
        }, 2000);
   });
  };


//kode dibawah ini jangan dihapus atau diedit sama sekali ya


myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})
