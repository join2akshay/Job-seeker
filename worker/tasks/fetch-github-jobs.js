 const fetch= require('node-fetch');
 const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const BaseUrl='https://jobs.github.com/positions.json'
async function fetchGithub(){
    let resultCount=1,onPage=0
    const allJobs=[];
    while(resultCount>0){

        const res= await fetch(`${BaseUrl}/?page=${onPage}`)
        const jobs=await res.json()
        allJobs.push(...jobs)
        resultCount=jobs.length
        onPage++;
        console.log('got' + jobs.length + ' jobs')
    }
    console.log('total jobs' + allJobs.length  )
    const success= await setAsync('github',JSON.stringify(allJobs))
    console.log(success)
 }

 fetchGithub()

 module.exports=fetchGithub;