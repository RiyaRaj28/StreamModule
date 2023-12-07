//Streams are objects that lets you write data to a source or write data to a 
//destination in continuous fashion. In Node.js there are four types of streams-

//streaming : occuring in real time 
// 1. readable - stream which is used for read operation
// 2. writable - stream which is used for write operation 
// 3. duplex - both read and write
// 4. transform - type of duplex stream where the output is computed based on input 


//Each type of stream is an EventEmitter instance and throws several events at
//different instances of time. Commonly used events -

//1. data - this event is fired when there is data available to read 
//2. end - when ni more data to read 
//3. error - when there is some error is receiving or writing data
//4. finish - when all data has been flushed to underlying system

//ASSUME WE ARE READING DATA FROM INPUT.TXT IN REAL TIME 

const fs = require('fs');
const http = require("http");

const server = http.createServer();

server.on('request', (req,res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

// 2nd way
// reading from a stream 
// create a readable stream
// handle stream events ---> data, end, and error

const rstream = fs.createReadStream("input.txt");

rstream.on('data', (chunkdata)=>{
    res.write(chunkdata);
});
rstream.on("end", () => {
    res.end();
});

rstream.on("error", (err) => {
    console.log(err);
    res.end("File not found");
});
});



server.listen(8000, "127.0.0.1"); 































































