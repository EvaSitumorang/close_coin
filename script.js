let allcoin = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];

let x = 0;
let y = 0;

for(i = 0; i < allcoin.length; i++) {
    if(allcoin[i] == 1){
        console.log("Ekor");
        x++;
    }else {
        console.log("Kepala");
        y++;
    }

}

if(x == allcoin.length || y == allcoin.length) {
    console.log("Koin satu sisi");
} 
else {
    if( x > y){
        console.log("Balikkan kepala")
        console.log("Jumlah kepala yang harus dibalik = " +x)
    } 
    else if (x < y){
        console.log("Balikkan ekor")
        console.log("Jumlah ekor yang harus dibalik = " +y)
    } else{
        console.log("Jumlah sama")
    }
}