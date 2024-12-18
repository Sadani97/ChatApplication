



console.log(document.getElementById("chatBox"));



function chatStart() {
    let userInput = document.getElementById("txtUserInput").value;

    document.getElementById("chatBox").innerHTML += 
    
    ` <li class="d-flex gap-4 justify-content-end">
        <h5>${userInput}</h5>
    </li> `;

///////from the postman gemini

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": "Hello"
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBdXkfXoeGEf8BbUfTbbzPjOwpWJCNaHxE", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}