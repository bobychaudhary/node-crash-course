// reading file
const fs=require('fs');
fs.readFile('./Docs/blog1.txt',(err, data)=> {
    if(err){
        console.log(errr);
    }
    console.log(data.toString());
});

// writing file
fs.writeFile('./Docs/blog2.txt',' hello again',()=> {
    console.log('file was written');
});

// creating directory

if (!fs.existsSync('./assets')) {   //if assests folder is not created, then it will create
fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('folder created');
}); 
} else {
    fs.rmdir('./assets',(err) => {      // remove dir if exists
        if(err){
            console.log(err);
        }
        console.log("Folder deleted");
    })
}

// deleting files

if (fs.existsSync('./docs/blog2.txt')) {
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    })
}