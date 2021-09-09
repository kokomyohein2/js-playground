// abcdABCD1234 or abcdABCD1234####
const PASSWORD_REGEXP: string =
  "^((?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]|(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d](?=.*W)).{8,}$";

// abcdABCD1234
// const PASSWORD_REGEXP: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$";

const password = "abc123HHOPs#";

const passwordRegExp: RegExp = new RegExp(PASSWORD_REGEXP);
if (!passwordRegExp.test(password)) {
  console.log("Invalid password policy");
} else {
  console.log("passed");
}
