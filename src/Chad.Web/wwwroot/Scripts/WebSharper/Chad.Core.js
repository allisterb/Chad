(function(Global)
{
 "use strict";
 var Chad,Models,User,AccountType,Account,IntelliFactory,Runtime;
 Chad=Global.Chad=Global.Chad||{};
 Models=Chad.Models=Chad.Models||{};
 User=Models.User=Models.User||{};
 AccountType=Models.AccountType=Models.AccountType||{};
 Account=Models.Account=Models.Account||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 User=Models.User=Runtime.Class({
  toString:function()
  {
   return this.Name;
  },
  get_Create:function()
  {
   return User.New("",null);
  }
 },null,User);
 User.New=function(Name,LastLoggedIn)
 {
  return new User({
   Name:Name,
   LastLoggedIn:LastLoggedIn
  });
 };
 AccountType.OTHER={
  $:5
 };
 AccountType.CASH={
  $:4
 };
 AccountType.EXPENSE={
  $:3
 };
 AccountType.ASSET={
  $:2
 };
 AccountType.INCOME={
  $:1
 };
 AccountType.BANK={
  $:0
 };
 AccountType.Parse=function(s)
 {
  var m;
  m=s.toUpperCase();
  return m==="BANK"?AccountType.BANK:m==="INCOME"?AccountType.INCOME:m==="ASSET"?AccountType.ASSET:m==="EXPENSE"?AccountType.EXPENSE:m==="CASH"?AccountType.CASH:AccountType.OTHER;
 };
 Account.New=function(Guid,Name,Type,ParentGuid,Description)
 {
  return{
   Guid:Guid,
   Name:Name,
   Type:Type,
   ParentGuid:ParentGuid,
   Description:Description
  };
 };
}(self));
