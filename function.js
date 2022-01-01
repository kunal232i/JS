function shashiD(p){
    let personData = {
        name:"shash",
        age:18,
        city: "mahad"
    }
    p(personData)
}

shashiD(data=>console.log(data.city))
