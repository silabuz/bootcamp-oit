var options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}

const signUp = (username, email, password) => {
    options["body"] = JSON.stringify({
        username: username,
        email: email,
        password: password
    })

    const request = fetch("https://silabuz-api-project.herokuapp.com/authentication/sign-up/", options)
    const response = request
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error(`La peticion respondio con codigo ${response.status}`)
            }
        })
        .catch(error => console.log(error.message))

    const data = response.then(data => {
        if(data) {
            window.location.replace("http://127.0.0.1:5500/proyecto_api_12-01-2022/login.html");
        }
    })
}

const login = (username, password) => {
    options["body"] = JSON.stringify({
        username: username,
        password: password
    })

    const request = fetch("https://silabuz-api-project.herokuapp.com/authentication/login/", options)
    const response = request
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error(`La peticion respondio con codigo ${response.status}`)
            }
        })
        .catch(error => console.log(error.message))

    const data = response.then(data => {
        if(data) {
            localStorage.setItem("token", `Token ${data.token}`);
            window.location.replace("http://127.0.0.1:5500/proyecto_api_12-01-2022/index.html");
        }
    })
}

const processLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    login(username, password)    
}

const processSingUp = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signUp(username, email, password)    
}


