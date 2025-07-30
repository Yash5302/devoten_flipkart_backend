const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AYK6DgHbJf_UF-WBf-KsfNdue-nWu7sdd_6xLRWjoiXQjq-EGSAYgyCi5PJalM0X4PWa8VvtkiQFrcF9",
  client_secret:
    "EOfKtO0PbYvXgMtlsJ-l3wPaEMZj5Q1r9EdTG2Ax_t1OhNhV6aKT7Sz6u9fsUZAIiDAwSfNah4rKp49B",
});

module.exports = paypal;
