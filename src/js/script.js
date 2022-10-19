window.onload = function () {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let classes = [0, 1, 2]
                let divElement = document.createElement("div");
                let title = document.createElement("h3");
                let paragraphElement = document.createElement("p");
                let suffix = classes[Math.floor(Math.random() * classes.length)]
                divElement.className = "post color" + suffix
                title.innerHTML = json[i].title
                paragraphElement.innerHTML = json[i].body
                divElement.appendChild(title)
                divElement.appendChild(paragraphElement)
                document.body.appendChild(divElement)
            }
        })
        .catch(err => {
            let divElement = document.createElement("div");
            divElement.className = "post"
            divElement.innerHTML = err
            document.body.appendChild(divElement)
        })
        .finally(function () {
            var htmlElement = document.createElement("footer");
            htmlElement.innerHTML = new Date().toLocaleString()
            document.body.appendChild(htmlElement)
        })

}