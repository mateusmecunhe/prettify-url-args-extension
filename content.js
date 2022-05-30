(()=>{
    let queryString = window.location.search
    if(!queryString){
        console.log('\u001b[34mThis URL contains no arguments')
        return
    }
    queryString = queryString.slice(1).split('&');
    urlArgs = ''
    queryString.forEach((keyValue) => {
        urlArgs += `\u001b[31m${keyValue.split('=')[0]}:\u001b[0m ${keyValue.split('=')[1]} \n`
    })
    
    
    console.log(`U\u001b[34mRL arguments are:\u001b[0m\n${urlArgs}`)
    
})()