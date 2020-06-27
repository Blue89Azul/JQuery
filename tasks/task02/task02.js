$(function() {

  $("#login").on('click', check_func);

  function check_func() {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == '') {
      alert("メールアドレスを入力してください。");
    } else if (email.indexOf('@') < 0) {
      alert("メールアドレスには必ず「@」が必要です");
    }

    if (password == '') {
      alert("パスワードを入力してください");
    } else if (password.length < 6) {
      alert("パスワードには６文字以上必要です");
    }

  }


});
