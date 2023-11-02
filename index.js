// import functions from helper_functiones.js



const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

const {getIP, writeToFile, deleteAFile, makeCowSay} = require("./helper_functiones")

// getIP("https://www.masaischool.com/")

switch (operation ) {
  // complete the fillowing function.
 case 'gip':
  if(!file){
    console.log("Websitename or Url is invalid.")
  }else{
    getIP(file)
  }
break;

case 'wf':
if(!file || !content){
  console.log("new content")
}else{
  writeToFile(file,content)
}
break;


case 'rf':
  if(!file || !content){
    console.log("No such file or directory found.")

  }else{
    writeToFile(file,content)
  }


break;

case 'df':
  if(!file){
    console.log("No such file to Delete.")
  }else{
    deleteAFile(file)
  }

  break;

  case 'mcw':
    if(!content){
      console.log("something went wrong")
    }else{
      makeCowSay(content)
    }

break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

