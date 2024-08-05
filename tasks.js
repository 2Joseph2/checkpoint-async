//TASK 1 
const iterateWithAsyncAwait = async(arr)=>{
    for (const el of arr) {
        await console.log(el);
    }
}


//TASK 2 & 3
const awaitCall = async ()=>{
    try{
        const data = await fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it')
        return data
    }catch(err){
        console.log(err)
    }
}

//TASK 4
const concurrentRequests = async ()=>{
    try {
        const [response1, response2] = await Promise.all([
            fetch(),
            fetch()
        ])

        const data1 = await response1.json()
        const data2 = await response2.json()

        return [data1,data2]
    } catch (err) {
        console.log(err)
    }
}

//TASK 5
const parallelCalls = async (urls) => {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)))
        const data = await Promise.all(responses.map(response => response.json()))
        console.log(data)
    } catch (err) {
        console.log( err )
    }
}