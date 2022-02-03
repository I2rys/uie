//Dependencies
const Axios = require("axios")

//Variables
var Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <useragent>")
    process.exit()
}

Self_Args[0] = Self_Args.slice(1).join(" ")

void async function Main(){
    var response = await Axios({
        method: "GET",
        url: `https://api.apicagent.com/?ua=${Self_Args[0]}`
    })

    response = response.data

    if(response.client === "unknown"){
        console.log("Invalid useragent.")
    }else{
        console.log(`
Browser: ${response.browser_family}

Client engine: ${response.client.engine}
Client engine version: ${response.client.engine_version}
Client name: ${response.client.name}
Client type: ${response.client.type}
Client version: ${response.client.version}

Device brand: ${response.device.brand}
Device model: ${response.device.model}
Device type: ${response.device.type}

OS name: ${response.os.name}
OS platform: ${response.os.platform}
OS version: ${response.os.version}`)
    }
}()