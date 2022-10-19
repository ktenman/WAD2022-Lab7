window.onload = function () {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (const jsonElement of json) {
                let divElement = document.createElement("div");
                let title = document.createElement("h3");
                let paragraphElement = document.createElement("p");
                divElement.className = "post"
                title.innerHTML = jsonElement.title
                paragraphElement.innerHTML = jsonElement.body
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