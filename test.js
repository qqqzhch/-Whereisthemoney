var _ =require('underscore')
var api = require('etherscan-api').init('T1JZVMWIKK6X8U8QRNGI6JJ9ZWM7V1UBYN');

var address='0xC3d9C17d7F6988C0fe7eBe929C47eFCCBd92bE13'
var balance = api.account.balance(address);
balance.then(function(balanceData){
  console.log(balanceData);
});
var Transactions =api.account.txlist(address, 5301358  , 'latest', 'desc');
var num1=0;
var num2=0;
Transactions.then((function(data) {

  if(data.status=="1"){
    var list=data.result;
    console.log(list)
    console.log(list.length);
    _.each(list,function(item,index) {
      if(item.from.toLowerCase()==address.toLowerCase()){
        num1++;
      }else{
        num2++;
      }

    })
  }
  console.log('num1',num1)
  console.log('num2',num2)

}))
