function Print() {
  console.log(this.loginId);
}

const obj = {
  loginId: "abc",
};

obj::Print(); //相当于：Print.call(obj);
