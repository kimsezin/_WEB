let xhr = new XMLHttpRequest();

xhr.open('GET','http://localhost:5000/todos');
xhr.send();

xhr.onreadystatechange = function(e)
{
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200)
    {
        console.log(xhr.responseText);
    }
    else
    {
        console.log("Error!");
    }
};