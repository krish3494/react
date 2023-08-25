export default function Jstask() {

    
        
    

const form1 = document.getElementById('form1');
        form1.addEventListener('click', function (event) {
            event.preventDefault();

            const email = document.querySelector('#email').value;
            const error1 = document.querySelector('#error1');
            const password = document.querySelector('#password').value;
            const error2 = document.querySelector('#error2');

            if (email == '') {
                error1.innerHTML = 'please enter your g-mail.com'
                error1.style.color = 'red';
                error1.style.textDecoration = 'underline';
            }

 

            if (password.length < 8) {
                error2.innerHTML = "'characters less than 8'"
                error2.style.color = 'red'
            }
        })

    form1.addEventListener('input',
        () => {
            error1.innerHTML = '';
            error2.innerHTML = ''
        })
    
    return (
        
        <>
            
            
            <form id={form1} onSubmit={form1}>
                <input type="email" id={email} placeholder="@ g-mail.com"
                    value={email} onChange={(e) => setname(e.target.value)} />
        <br/>
        {/* <span id={error1}></span> */}
        <br/>
        <br/>
                <input type="password" id={password} placeholder="password"
                    value={password} onChange={(e) => setpassword(e.target.value)} />
        <input type="submit"/><br/>
        {/* <span id={error2}></span> */}

    </form>
        </>
    )
    
}
