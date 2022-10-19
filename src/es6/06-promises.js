const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("yeah   se ha resuelto la promesa")
        } else {
            reject("woooops.....error, se ha rechazado la promesa")
        }
    })
}
anotherFunction()
.then(response => console.log(response))//con el console.log mostramos lo del response, si se ejecuta resolve
.catch(err => console.log(err));//console.log del mismo error, si se ejecuta .catch