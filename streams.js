    // STREAMS ->Start Using Data, before it has finished loading


const fs=require('fs');
const readStream=fs.createReadStream('./docs/blog2.txt'); 
const writeStram=fs.createWriteStream('./docs/blog3.txt');

    // Method-1
    // readStream.on('data', (chunk)=>{
    //     console.log('----NEW CHUNK----');
    //     console.log(chunk.toString());
    //     writeStram.write('\nNEW CHunK\n');
    //     writeStram.write(chunk);
    // });

    // Method-2 piping
    readStream.pipe(writeStram);
