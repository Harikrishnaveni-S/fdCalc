function fdCalculate()
{
    const inputValue = document.getElementById("value").value
    const result = document.getElementById("result")
    let Fd = 0;

    if(inputValue<3)
    {
        Fd = 5.8
    }
    
    if(inputValue>=3 && inputValue<=6)
    {
        Fd = 6.5
    }
    
    if(inputValue>=7 && inputValue<=9)
    {
        Fd = 6.8
    }
    
    if(inputValue>=10)
    {
        Fd = 7
    }

    console.log(Fd)

    result.innerHTML = `FD rate for tenure ${inputValue} months is ${Fd}%`


}