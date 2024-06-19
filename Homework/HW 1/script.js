function logsHandler(e)
{
    e.preventDefault();

    nextStep = document.getElementById("table")

    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
location.href = nextStep

    console.log(data)
}