/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const arr = []; //creating an array which contains multiple values all at ones and named it as arr.


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolour,shirt_type,bling,height) {

    //creating a object named NFT
    const NFT={
        "name": name,
        "eyecolour": eyecolour,
        "shirt_type": shirt_type,
        "bling": bling,
        "height": height
    }
    arr.push(NFT);  // adding all the values of the NFT (adding from the back).


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   console.log("This is my information");
   for(let i = 0;i<arr.length;i++){
        console.log("\nID :"+ (i+1) );
        console.log("Name :      "+ arr[i].name);
        console.log("Eyecolour : "+ arr[i].eyecolour);
        console.log("Shirt_type :"+ arr[i].shirt_type);
        console.log("Bling :     "+ arr[i].bling);
        console.log("Height :    "+ arr[i].height);

   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(arr.length);
}


console.log("Object succesfully created");
// call your functions below this line
mintNFT("Darcy", "Blue", "T-Shirt", "Chain","6");
mintNFT("Leo", "Green", "Hoodie", "Diamond Ring","5.5");
mintNFT("Isabel", "Grey", "Frok", "HeadBand","5");
mintNFT("Rakel", "Silver", "Dress", "Earrings","5.7");

// all of the NFT's are listed by the falling function
listNFTs();
console.log("\nTotal supply is ");
getTotalSupply();
