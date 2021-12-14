

  
function login() {

    var name =document.forms['form']['username'].value
    var pwd=  parseInt(document.forms['form']['password'].value)

    var s1 = document.getElementById("sp1")
    var s2 = document.getElementById("sp2")

  
    if (name=="admin"&&pwd==1234) {
        s2.style.display=""
        s1.style.display=""
        return true
            
        
        
    }
    else
    {
        
        s1.style.display="inline"
        s2.style.display="inline"
        return false
    }
    
}











