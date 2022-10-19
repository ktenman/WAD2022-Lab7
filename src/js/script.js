window.onload = function () {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                let divElement = document.createElement("div");
                let title = document.createElement("h3");
                let paragraphElement = document.createElement("p");
                let suffix = i % 3
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