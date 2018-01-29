/**
 * Created by admin on 2018/1/26.
 */

let https=require("https");
let util=require("util");
https.get("https://www.imooc.com/index/getstarlist",function (res) {
  let data="";
  res.on("data",function (chunk) {
    data+=chunk;
  })
  res.on("end",function () {
    let result=JSON.parse(data);
    console.log(`result:${util.inspect(result)}`)
  })
})
