document.addEventListener('submit',e=>{
    const req=[...e.target.querySelectorAll('[data-required]')];
    const empty=req.filter(x=>x.value=="");
    const list={"name":"お名前","email":"メールアドレス","tel":"電話番号","message":"お問い合わせ内容"};
    if(req && empty){
      empty[0].focus();
      alert(list[empty[0].name]+'を入力してください');
      e.preventDefault();
    }
  });