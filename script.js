var string;
var flag=0;
function inp(val)
{   
    
    if(flag==1)
    {
        clear_screen();
        flag=0;
    }
    if(flag==0)
    {           
        document.getElementById("calculator_display").value+=val;
        string=document.getElementById("calculator_display").value;
    }
}

function clear_screen()
{
    document.getElementById("calculator_display").value="";
    count=0;
}
function equal_inp()
{
    var text = document.getElementById("calculator_display").value;
    var result = eval(text);
    document.getElementById("calculator_display").value+="="+result;
    flag=1;

}
