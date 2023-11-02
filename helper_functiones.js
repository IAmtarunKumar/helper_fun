// import all modules require

const dns = require("dns")
const fs = require("fs")

const cowsay = require("cowsay")

// complete the functions.

function getIP(website_name) {
  
  dns.resolve(website_name , (err,addresses)=>{
    if(err){
        console.log("Websitename or Url is invalid.")
    }else{

        console.log(addresses)
    }
  })

    // console.log("65.0.227.101")

}


// getIP("https://www.masaischool.com/")

function writeToFile(filename, content) {

    fs.writeFile(filename,content , (err)=>{
        if(err){
            console.log("not return")
        }else{
            console.log(`Content successfully wirtten to ${filename}.`)
            // console.log("not return")
        }
    })
  

}

function readAFile(filename) {

    fs.readFile(filename ,'utf-8' , (err,data)=>{
        if(err){
            console.log("No such file or directory found.")
        }else{
            console.log(data)
        }
    })

  
}

function deleteAFile(filename) {

    fs.unlink(filename ,(err)=>{
        if(err){
            console.log("No such file to Delete.")
        }else{
            console.log(`File ${filename} is deleted.`)
        }
    })
 
}

function makeCowSay(content) {
  const cowSaid = cowsay.say({text : content});

  console.log(cowSaid)
}

// exports all functions

module.exports = {getIP ,writeToFile , readAFile ,deleteAFile , makeCowSay}