const global = () => {
  const inner = () => {
    console.log("inner");
  };
  inner();
};

global(); // "inner"
// inner(); would throw error, inner is not defined

const sendEmail = (from, sub, message) => {
  let msg = `"${sub}" > "${message}" received from ${from}`;
  let send = () => {
    console.log(msg);
  };
  send();
};

sendEmail("Dillon", "Closure", "Here is one");
// send() would throw Referenece error unddefined
