function check() {
    if(document.forms.name.value ==""){
        alert("お名前を入力してください");
        return false;
    }
    if(document.forms.email.value ==""){
        alert("メールアドレスを入力してください")
        return false;
    }
    if(document.forms.tel.value ==""){
        alert("電話番号を入力してください")
        return false;
    }
    if(document.forms.message.value ==""){
        alert("お問い合わせ内容を入力してください")
        return false;
    }
};