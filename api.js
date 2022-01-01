fetch("https://cat-fact.herokuapp.com/facts").then(response=>response.json())
.then(obj=>{
    console.log(obj)
    for(let i=0; i<obj.length; i++){
        console.log(obj[i].text);
    }
})

