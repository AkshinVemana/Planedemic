
export async function sendData(data) {
    console.log("We got here");
    const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(data)
    });
    var temp = response.text()
    console.log(temp)
    return temp
}