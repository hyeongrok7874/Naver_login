document.getElementById("submit").onclick = login;

function login() {
    let id = document.querySelector('#id').value;
    let password = document.querySelector('#password').value;
    let saved_id = "username";
    let saved_password = "12345678";

    if (id == saved_id){
        if (password == saved_password) {
            alert("로그인 성공~ 축하드립니다 ㅋ");
        }
        else {
            alert("아이디 또는 패스워드가 잘 못 되었습니다.");
        }
    }
    else {
        alert("아이디 또는 패스워드가 잘 못 되었습니다.");
    }
}
