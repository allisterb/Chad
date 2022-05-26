(function(Global)
{
 "use strict";
 var Chad,Web,Presentation,ClientExtensions,SweetAlert,SC$1,Bs,SC$2,JQueryPieProgressOptions,NLU,Witai,Utterance,Intent,Entity,Trait,_Utterance,_Value,BabelNet,DisambiguateApiResponse,TokenFragment,CharFragment,NLG,SC$3,NLU$1,Intent$1,Trait$1,Entity$1,Utterance$1,Voice,_Entity,Text,_Utterance$1,_Intent,_Entity$1,_Trait,Domain,SC$4,Knowledge,EmotionalTrait,BehavioralTrait,Relation,Triple,Subject,Verb,Object,ExpertAIEntity,ExpertAILemma,WritingJournlEntry,CUI,MicState,ClientState,Interpreter,CUI$1,Dialogue,Question,QuestionType,DialogueModule,QuestionDialogs,Questions,Symptoms,SC$5,Journal,SC$6,Tests,SC$7,Accounting,SC$8,User,SC$9,Main,SC$10,Client,SC$11,Chad$Web_GeneratedPrintf,GeneratedPrintf,WebSharper,Strings,Arrays,SweetAlert$1,IntelliFactory,Runtime,Operators,UI,Doc,AttrProxy,Client$1,Templates,Utils,console,$,Random,List,AttrModule,Concurrency,Seq,JavaScript,Pervasives,Numeric,ClientSideJson,Provider,JSON,Collections,Map,SDK,Unchecked,Date,Remoting,AjaxRemotingProvider,Math,Wit,document,Dictionary;
 Chad=Global.Chad=Global.Chad||{};
 Web=Chad.Web=Chad.Web||{};
 Presentation=Web.Presentation=Web.Presentation||{};
 ClientExtensions=Web.ClientExtensions=Web.ClientExtensions||{};
 SweetAlert=ClientExtensions.SweetAlert=ClientExtensions.SweetAlert||{};
 SC$1=Global.StartupCode$Chad_Web$ClientExtensions=Global.StartupCode$Chad_Web$ClientExtensions||{};
 Bs=Web.Bs=Web.Bs||{};
 SC$2=Global.StartupCode$Chad_Web$Bootstrap=Global.StartupCode$Chad_Web$Bootstrap||{};
 JQueryPieProgressOptions=Web.JQueryPieProgressOptions=Web.JQueryPieProgressOptions||{};
 NLU=Chad.NLU=Chad.NLU||{};
 Witai=NLU.Witai=NLU.Witai||{};
 Utterance=Witai.Utterance=Witai.Utterance||{};
 Intent=Witai.Intent=Witai.Intent||{};
 Entity=Witai.Entity=Witai.Entity||{};
 Trait=Witai.Trait=Witai.Trait||{};
 _Utterance=Witai["Utterance'"]=Witai["Utterance'"]||{};
 _Value=Witai["Value'"]=Witai["Value'"]||{};
 BabelNet=Web.BabelNet=Web.BabelNet||{};
 DisambiguateApiResponse=BabelNet.DisambiguateApiResponse=BabelNet.DisambiguateApiResponse||{};
 TokenFragment=BabelNet.TokenFragment=BabelNet.TokenFragment||{};
 CharFragment=BabelNet.CharFragment=BabelNet.CharFragment||{};
 NLG=Web.NLG=Web.NLG||{};
 SC$3=Global.StartupCode$Chad_Web$NLG=Global.StartupCode$Chad_Web$NLG||{};
 NLU$1=Web.NLU=Web.NLU||{};
 Intent$1=NLU$1.Intent=NLU$1.Intent||{};
 Trait$1=NLU$1.Trait=NLU$1.Trait||{};
 Entity$1=NLU$1.Entity=NLU$1.Entity||{};
 Utterance$1=NLU$1.Utterance=NLU$1.Utterance||{};
 Voice=NLU$1.Voice=NLU$1.Voice||{};
 _Entity=Voice["Entity'"]=Voice["Entity'"]||{};
 Text=NLU$1.Text=NLU$1.Text||{};
 _Utterance$1=Text["Utterance'"]=Text["Utterance'"]||{};
 _Intent=Text["Intent'"]=Text["Intent'"]||{};
 _Entity$1=Text["Entity'"]=Text["Entity'"]||{};
 _Trait=Text["Trait'"]=Text["Trait'"]||{};
 Domain=NLU$1.Domain=NLU$1.Domain||{};
 SC$4=Global.StartupCode$Chad_Web$NLU=Global.StartupCode$Chad_Web$NLU||{};
 Knowledge=Web.Knowledge=Web.Knowledge||{};
 EmotionalTrait=Knowledge.EmotionalTrait=Knowledge.EmotionalTrait||{};
 BehavioralTrait=Knowledge.BehavioralTrait=Knowledge.BehavioralTrait||{};
 Relation=Knowledge.Relation=Knowledge.Relation||{};
 Triple=Knowledge.Triple=Knowledge.Triple||{};
 Subject=Knowledge.Subject=Knowledge.Subject||{};
 Verb=Knowledge.Verb=Knowledge.Verb||{};
 Object=Knowledge.Object=Knowledge.Object||{};
 ExpertAIEntity=Knowledge.ExpertAIEntity=Knowledge.ExpertAIEntity||{};
 ExpertAILemma=Knowledge.ExpertAILemma=Knowledge.ExpertAILemma||{};
 WritingJournlEntry=Knowledge.WritingJournlEntry=Knowledge.WritingJournlEntry||{};
 CUI=Web.CUI=Web.CUI||{};
 MicState=CUI.MicState=CUI.MicState||{};
 ClientState=CUI.ClientState=CUI.ClientState||{};
 Interpreter=CUI.Interpreter=CUI.Interpreter||{};
 CUI$1=CUI.CUI=CUI.CUI||{};
 Dialogue=Web.Dialogue=Web.Dialogue||{};
 Question=Web.Question=Web.Question||{};
 QuestionType=Web.QuestionType=Web.QuestionType||{};
 DialogueModule=Web.DialogueModule=Web.DialogueModule||{};
 QuestionDialogs=Web.QuestionDialogs=Web.QuestionDialogs||{};
 Questions=Web.Questions=Web.Questions||{};
 Symptoms=Web.Symptoms=Web.Symptoms||{};
 SC$5=Global.StartupCode$Chad_Web$Symptoms=Global.StartupCode$Chad_Web$Symptoms||{};
 Journal=Web.Journal=Web.Journal||{};
 SC$6=Global.StartupCode$Chad_Web$Journal=Global.StartupCode$Chad_Web$Journal||{};
 Tests=Web.Tests=Web.Tests||{};
 SC$7=Global.StartupCode$Chad_Web$Tests=Global.StartupCode$Chad_Web$Tests||{};
 Accounting=Web.Accounting=Web.Accounting||{};
 SC$8=Global.StartupCode$Chad_Web$Accounting=Global.StartupCode$Chad_Web$Accounting||{};
 User=Web.User=Web.User||{};
 SC$9=Global.StartupCode$Chad_Web$User=Global.StartupCode$Chad_Web$User||{};
 Main=Web.Main=Web.Main||{};
 SC$10=Global.StartupCode$Chad_Web$Main=Global.StartupCode$Chad_Web$Main||{};
 Client=Web.Client=Web.Client||{};
 SC$11=Global.StartupCode$Chad_Web$Client=Global.StartupCode$Chad_Web$Client||{};
 Chad$Web_GeneratedPrintf=Global.Chad$Web_GeneratedPrintf=Global.Chad$Web_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 WebSharper=Global.WebSharper;
 Strings=WebSharper&&WebSharper.Strings;
 Arrays=WebSharper&&WebSharper.Arrays;
 SweetAlert$1=Global.SweetAlert;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Operators=WebSharper&&WebSharper.Operators;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 $=Global.jQuery;
 Random=WebSharper&&WebSharper.Random;
 List=WebSharper&&WebSharper.List;
 AttrModule=UI&&UI.AttrModule;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Seq=WebSharper&&WebSharper.Seq;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Pervasives=JavaScript&&JavaScript.Pervasives;
 Numeric=WebSharper&&WebSharper.Numeric;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 JSON=Global.JSON;
 Collections=WebSharper&&WebSharper.Collections;
 Map=Collections&&Collections.Map;
 SDK=Global.SDK;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Date=Global.Date;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Math=Global.Math;
 Wit=Global.Wit;
 document=Global.document;
 Dictionary=Collections&&Collections.Dictionary;
 Presentation.DebugEntities=function(a)
 {
  return Strings.StartsWith(a,"debug-entities ")?{
   $:1,
   $0:Strings.Replace(a,"debug-entities ","")
  }:null;
 };
 Presentation.Debug=function(a)
 {
  return a==="debug"?{
   $:1,
   $0:null
  }:null;
 };
 Presentation.What=function(a)
 {
  return a==="what is this?"?{
   $:1,
   $0:null
  }:null;
 };
 ClientExtensions.getCameraCanvas=function()
 {
  return Global.getCameraCanvas();
 };
 ClientExtensions.stopCamera=function()
 {
  return Global.stopCamera();
 };
 ClientExtensions.startCamera=function(container,canvasElement)
 {
  return Global.startCamera(container,canvasElement);
 };
 ClientExtensions.speechSynthesis=function()
 {
  return Global.speechSynthesis;
 };
 ClientExtensions.lastMicData=function()
 {
  return Global.lastMicData;
 };
 ClientExtensions.Terminal=function()
 {
  return Global.$("#term").terminal();
 };
 ClientExtensions.enableTerminal=function()
 {
  return Global.$("#term").terminal().enable();
 };
 ClientExtensions.disableTerminal=function()
 {
  return Global.$("#term").terminal().disable();
 };
 ClientExtensions.shuffleArray=function(a)
 {
  Arrays.iteri(function($1)
  {
   return ClientExtensions.swap(a,$1,ClientExtensions.rnd().Next($1,a.length));
  },a);
  return a;
 };
 ClientExtensions.swap=function(a,x,y)
 {
  var tmp;
  tmp=Arrays.get(a,x);
  Arrays.set(a,x,Arrays.get(a,y));
  Arrays.set(a,y,tmp);
 };
 ClientExtensions.boxesWithTitles=function(boxes)
 {
  return Arrays.map(function(b)
  {
   var r;
   r={};
   r.titleText=b;
   return r;
  },boxes);
 };
 ClientExtensions.confirmQuestionBox=function()
 {
  SweetAlert$1.clickConfirm();
 };
 ClientExtensions.questionBox=function(title,text,queueSteps,dim,onCreate,onShow,onInput)
 {
  var prom,b,r,width,r$1,s;
  prom=(b=dim==null?(r={},r.titleText=title,r.text=text,r.icon="question",r.html="<div></div>",r.allowOutsideClick=false,r):(width=dim.$0[0],(r$1={},r$1.titleText=title,r$1.text=text,r$1.icon="question",r$1.width=Global.String(width),r$1.html=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("<div class=\"swal2-content-custom\" style=\"width:"+Global.String($2)+"px;height:"+Global.String($3)+"px\"></div>");
  }))(Global.id))(width))(dim.$0[1]),r$1.allowOutsideClick=false,r$1)),(onCreate!=null?onCreate.$0(b):void 0,queueSteps!=null&&queueSteps.$==1?(s=queueSteps.$0,(b.progressSteps=Arrays.ofSeq(Operators.range(1,Arrays.length(s))),SweetAlert$1.mixin(b).queue(Arrays.create(Arrays.length(s),b)))):SweetAlert$1.fire(b)));
  if(onShow!=null)
   onShow.$0();
  prom.then(onInput);
 };
 SweetAlert.get_QueueBoxes=function()
 {
  var o;
  o=SweetAlert$1.mixin({});
  return function(a)
  {
   return o.queue(a);
  };
 };
 ClientExtensions.getDialogueBoxInput=function()
 {
  return Arrays.get(Global.jQuery(".swal2-input").get(),0);
 };
 ClientExtensions.getDialogueBoxCanvas=function()
 {
  return Arrays.get(Global.jQuery("canvas.swal2-content").get(),0);
 };
 ClientExtensions.getDialogueBoxContent=function()
 {
  return Arrays.get(Global.jQuery("#swal2-content").get(),0).firstChild;
 };
 ClientExtensions.createDialogueBoxCanvas=function()
 {
  return ClientExtensions.createCanvas("camera","640","480",Arrays.get(Global.jQuery("#swal2-content").get(),0).firstChild);
 };
 ClientExtensions.createCanvas=function(id,width,height,parent)
 {
  var a;
  a=Doc.Element("canvas",[ClientExtensions.eid(id),AttrProxy.Create("width",width),AttrProxy.Create("height",height)],[]);
  Templates.LoadLocalTemplates("");
  Doc.Run(parent,a);
  return parent.firstChild;
 };
 ClientExtensions.elementHTML=function(d)
 {
  return d.innerHTML;
 };
 ClientExtensions.createElement=function(doc)
 {
  var el;
  el=self.document.createElement("div");
  self.document.appendChild(el);
  Templates.LoadLocalTemplates("");
  Doc.RunAppend(el,doc);
 };
 ClientExtensions.getContainer=function()
 {
  return Arrays.get(Global.jQuery("#container").get(),0).firstChild;
 };
 ClientExtensions.container=function(c)
 {
  return Doc.Element("div",[ClientExtensions.cls("container")],c);
 };
 ClientExtensions.dindex=function(n)
 {
  return AttrProxy.Create("data-index",Global.String(n));
 };
 ClientExtensions.href=function(s)
 {
  return AttrProxy.Create("href",s);
 };
 ClientExtensions.cls=function(n)
 {
  return AttrProxy.Create("class",n);
 };
 ClientExtensions.reid=function(s)
 {
  var c;
  return ClientExtensions.eid(s+"-"+(c=ClientExtensions.rnd().Next$2(),Global.String(c)));
 };
 ClientExtensions.eid=function(a)
 {
  return AttrProxy.Create("id",a);
 };
 ClientExtensions.getMic=function()
 {
  return Arrays.get(Global.jQuery("#microphone").get(),0);
 };
 ClientExtensions.terminalOutput=function()
 {
  return Arrays.get(Global.jQuery(".terminal-output").get(),0);
 };
 ClientExtensions.toLower=function(s)
 {
  return s.toLowerCase();
 };
 ClientExtensions.debug=function(loc,t)
 {
  ClientExtensions.info((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("DEBUG: "+Utils.toSafe($2)+": "+Utils.prettyPrint($3));
  }))(Global.id))(loc.toUpperCase()))(t));
 };
 ClientExtensions.error=function(a)
 {
  console.error(a);
 };
 ClientExtensions.info=function(a)
 {
  console.info(a);
 };
 ClientExtensions.jserror=function(a)
 {
  $.error(a);
 };
 ClientExtensions.toArray=function(a)
 {
  return Arrays.map(Global.id,$.makeArray(a));
 };
 ClientExtensions["Terminal.EchoHtml'"]=function(x,text)
 {
  x.pause();
  x.echo(text,ClientExtensions.rawOpt());
  x.resume();
 };
 ClientExtensions["Terminal.Echo'"]=function(x,text)
 {
  x.pause();
  x.echo(text);
  x.resume();
 };
 ClientExtensions.rawOpt=function()
 {
  SC$1.$cctor();
  return SC$1.rawOpt;
 };
 ClientExtensions.rnd=function()
 {
  SC$1.$cctor();
  return SC$1.rnd;
 };
 SC$1.$cctor=function()
 {
  var r;
  SC$1.$cctor=Global.ignore;
  SC$1.rnd=new Random.New();
  SC$1.rawOpt=(r={},r.raw=true,r);
 };
 Bs.radio=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("radio"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.Radio(targetExtras,true,target),Doc.TextNode(lbl)])]);
 };
 Bs.checkbox=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("checkbox"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.CheckBox(targetExtras,target),Doc.TextNode(lbl)])]);
 };
 Bs.textArea=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.InputArea(new List.T({
   $:1,
   $0:ClientExtensions.cls("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Bs.inputPassword=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.PasswordBox(new List.T({
   $:1,
   $0:ClientExtensions.cls("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Bs.input=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc.Element("div",new List.T({
   $:1,
   $0:ClientExtensions.cls("form-group"),
   $1:extras
  }),[Doc.Element("label",labelExtras,[Doc.TextNode(lbl)]),Doc.Input([ClientExtensions.cls("form-control"),targetExtras],target)]);
 };
 Bs.btnSecondaryDropdown=function(label,labels,onclicks)
 {
  return Bs.btnDropdown("btn-secondary",label,labels,onclicks);
 };
 Bs.btnPrimaryDropdown=function(label,labels,onclicks)
 {
  return Bs.btnDropdown("btn-primary",label,labels,onclicks);
 };
 Bs.btnDropdown=function(c,label,labels,onclicks)
 {
  var sid,c$1,id;
  sid="btndropdown"+"-"+(c$1=ClientExtensions.rnd().Next$2(),Global.String(c$1));
  id=AttrProxy.Create("id",sid);
  return Doc.Element("div",[ClientExtensions.cls("btn-group dropright")],[Doc.Element("button",[id,ClientExtensions.cls(Bs.btncls()+" "+c+" "+"dropdown-toggle"),AttrProxy.Create("type","button"),AttrProxy.Create("data-toggle","dropdown"),AttrProxy.Create("aria-haspopup","true"),AttrProxy.Create("aria-expanded","false")],[Doc.TextNode(label)]),Doc.Element("div",[ClientExtensions.cls("dropdown-menu"),AttrProxy.Create("aria-labelledby",sid)],List.mapi(function(i,l)
  {
   return Doc.Element("a",[ClientExtensions.cls("dropdown-item"),ClientExtensions.href("#"),AttrModule.Handler("click",onclicks.get_Item(i))],[Doc.TextNode(l)]);
  },labels))]);
 };
 Bs.btnDark=function(label,onclick)
 {
  return Bs.btn("btn-dark",label,onclick);
 };
 Bs.btnLight=function(label,onclick)
 {
  return Bs.btn("btn-light",label,onclick);
 };
 Bs.btnInfo=function(label,onclick)
 {
  return Bs.btn("btn-info",label,onclick);
 };
 Bs.btnWarning=function(label,onclick)
 {
  return Bs.btn("btn-warning",label,onclick);
 };
 Bs.btnDanger=function(label,onclick)
 {
  return Bs.btn("btn-danger",label,onclick);
 };
 Bs.btnSuccess=function(label,onclick)
 {
  return Bs.btn("btn-success",label,onclick);
 };
 Bs.btnSecondary=function(label,onclick)
 {
  return Bs.btn("btn-secondary",label,onclick);
 };
 Bs.btnPrimary=function(label,onclick)
 {
  return Bs.btn("btn-primary",label,onclick);
 };
 Bs.btn=function(c,label,onclick)
 {
  return Doc.Element("button",[ClientExtensions.reid("btn"),ClientExtensions.cls(Bs.btncls()+" "+c),AttrModule.Handler("click",onclick)],[Doc.TextNode(label)]);
 };
 Bs.btncls=function()
 {
  SC$2.$cctor();
  return SC$2.btncls;
 };
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.btncls=$(self).width()<=479?"btn btn-sm":"btn";
 };
 JQueryPieProgressOptions.New=function(ns,Goal,First,Min,Max,Speed,Easing,NumberCallback)
 {
  return{
   namespace:ns,
   goal:Goal,
   first:First,
   min:Min,
   max:Max,
   speed:Speed,
   easing:Easing,
   numberCallback:NumberCallback
  };
 };
 Utterance.New=function(text,intents,entities,traits)
 {
  return{
   text:text,
   intents:intents,
   entities:entities,
   traits:traits
  };
 };
 Intent.New=function(id,name,confidence)
 {
  return{
   id:id,
   name:name,
   confidence:confidence
  };
 };
 Entity.New=function(id,name,role,start,end,body,confidence,entities,suggested,value,type)
 {
  return{
   id:id,
   name:name,
   role:role,
   start:start,
   end:end,
   body:body,
   confidence:confidence,
   entities:entities,
   suggested:suggested,
   value:value,
   type:type
  };
 };
 Trait.New=function(id,value,confidence)
 {
  return{
   id:id,
   value:value,
   confidence:confidence
  };
 };
 _Utterance.New=function(intent)
 {
  return{
   intent:intent
  };
 };
 _Value.New=function(value)
 {
  return{
   value:value
  };
 };
 Witai.getMeaning2=function(authValue,sentence)
 {
  function a(ok,ko)
  {
   var r;
   $.ajax((r={},r.url=(function($1)
   {
    return function($2)
    {
     return $1("https://api.wit.ai/message?q="+Utils.toSafe($2));
    };
   }(Global.id))(sentence),r.type="GET",r.beforeSend=function(jqxhr)
   {
    return jqxhr.setRequestHeader("Authorization","Bearer "+authValue);
   },r.success=function(result)
   {
    return ok(result);
   },r.error=function(jqxhr)
   {
    return ko(new Global.Error(jqxhr.responseText));
   },r));
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 Witai.getMeaning=function(authValue,sentence,success,error)
 {
  var r;
  $.ajax((r={},r.url=(function($1)
  {
   return function($2)
   {
    return $1("https://api.wit.ai/message?q="+Utils.toSafe($2));
   };
  }(Global.id))(sentence),r.type="GET",r.beforeSend=function(jqxhr)
  {
   return jqxhr.setRequestHeader("Authorization","Bearer "+authValue);
  },r.success=success,r.error=error,r));
 };
 DisambiguateApiResponse.New=function(tokenFragment,charFragment,babelSynsetID,DBpediaURL,BabelNetURL,score,cohrenceScore,globalScore,source)
 {
  return{
   tokenFragment:tokenFragment,
   charFragment:charFragment,
   babelSynsetID:babelSynsetID,
   DBpediaURL:DBpediaURL,
   BabelNetURL:BabelNetURL,
   score:score,
   cohrenceScore:cohrenceScore,
   globalScore:globalScore,
   source:source
  };
 };
 TokenFragment.New=function(start,end)
 {
  return{
   start:start,
   end:end
  };
 };
 CharFragment.New=function(start,end)
 {
  return{
   start:start,
   end:end
  };
 };
 BabelNet.disambiguate=function(text)
 {
  function a(ok,ko)
  {
   var r;
   $.ajax((r={},r.url=(function($1)
   {
    return function($2)
    {
     return $1("https://babelfy.io/v1/disambiguate?text="+Utils.toSafe($2)+"&lang=EN&extAIDA=true&key=983fc0ec-a6fa-49ef-bd02-203c18aef272");
    };
   }(Global.id))(text),r.type="GET",r.success=function(result)
   {
    return ok(result);
   },r.error=function(jqxhr)
   {
    return ko(new Global.Error(jqxhr.responseText));
   },r));
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 NLG.waitAddPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.waitAddPhrases;
 };
 NLG.waitRetrievePhrases=function()
 {
  SC$3.$cctor();
  return SC$3.waitRetrievePhrases;
 };
 NLG.helpPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helpPhrases;
 };
 NLG.helloUserPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helloUserPhrases;
 };
 NLG.helloPhrases=function()
 {
  SC$3.$cctor();
  return SC$3.helloPhrases;
 };
 NLG["getRandomPhrase'"]=function(phrases)
 {
  return NLG.replace_tok("$0","",Seq.nth(NLG.rng().Next(0,phrases.get_Length()),phrases));
 };
 NLG.getRandomPhrase=function(phrases,r)
 {
  return NLG.replace_tok("$0",r,Seq.nth(NLG.rng().Next(0,phrases.get_Length()),phrases));
 };
 NLG.replace_tok=function(token,value,s)
 {
  return Strings.Replace(s,token,value);
 };
 NLG.rng=function()
 {
  SC$3.$cctor();
  return SC$3.rng;
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.rng=new Random.New();
  SC$3.helloPhrases=List.ofArray(["Welcome!","Welcome, my name is Chad.","Welcome to Chad. How can I help?","Hello this is Chad, how can I help?","Hello, I am Chad. How can I help?","Hello, I am Chad. How may I help you now?","I'm Chad. Tell me your name so we can get started."]);
  SC$3.helloUserPhrases=List.ofArray(["Hello $0, welcome back.","Welcome $0, nice to see you again.","Hello $0.","Good to see you $0.","Hello $0, nice to see you."]);
  SC$3.helpPhrases=List.ofArray(["What can I help you with $0?"]);
  SC$3.waitRetrievePhrases=List.ofArray(["Ok, let me check that $0 for you","Please wait while I check that $0 for you.","Wait while I check that $0.","Ok let me see if I can find that $0."]);
  SC$3.waitAddPhrases=List.ofArray(["Ok, let me add that $0 for you","Please wait while I add that $0 for you.","Wait while I add that $0.","I'll add that $0 now."]);
 };
 Intent$1=NLU$1.Intent=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Intent("+Utils.toSafe($2)+", "+Chad$Web_GeneratedPrintf.p$16($3)+")");
   }))(Global.id))(this.get_Name()))(this.get_Confidence());
  },
  get_Confidence:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Intent$1);
 Trait$1=NLU$1.Trait=Runtime.Class({
  toString:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Trait("+Utils.toSafe($2)+", "+Utils.prettyPrint($3)+")");
   }))(Global.id))(this.get_Name()))(this.get_Value());
  },
  get_Confidence:function()
  {
   return this.$2;
  },
  get_Value:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Trait$1);
 Entity$1=NLU$1.Entity=Runtime.Class({
  toString:function()
  {
   return(((((Runtime.Curried(function($1,$2,$3,$4,$5)
   {
    return $1("Entity("+Utils.toSafe($2)+", "+Utils.toSafe($3)+", "+Utils.toSafe($4)+", "+Chad$Web_GeneratedPrintf.p$16($5)+")");
   },5))(Global.id))(this.get_Name()))(this.get_Role()))(this.get_Value()))(this.get_Confidence());
  },
  get_Confidence:function()
  {
   return this.$3;
  },
  get_Value:function()
  {
   return this.$2;
  },
  get_Role:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Entity$1);
 Utterance$1=NLU$1.Utterance=Runtime.Class({
  toString:function()
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1(Chad$Web_GeneratedPrintf.p$14($2)+" "+Chad$Web_GeneratedPrintf.p$17($3)+" "+Chad$Web_GeneratedPrintf.p$19($4));
   },4))(Global.id))(this.get_Intent()))(this.get_Traits()))(this.get_Entities());
  },
  get_Entities:function()
  {
   var el;
   el=this.$3;
   return el!=null?{
    $:1,
    $0:List.sortBy(function(e)
    {
     return e.get_Name();
    },el.$0)
   }:null;
  },
  get_Traits:function()
  {
   var tl;
   tl=this.$2;
   return tl!=null?{
    $:1,
    $0:List.sortBy(function(e)
    {
     return e.get_Name();
    },tl.$0)
   }:null;
  },
  get_Intent:function()
  {
   return this.$1;
  },
  get_Text:function()
  {
   return this.$0;
  }
 },null,Utterance$1);
 _Entity.New=function(body,end,start,suggested,value)
 {
  return{
   body:body,
   end:end,
   start:start,
   suggested:suggested,
   value:value
  };
 };
 Voice["Intent'"]=function(a,a$1)
 {
  return!(a$1.intent==null)?{
   $:1,
   $0:new Intent$1({
    $:0,
    $0:ClientExtensions.toLower(a$1.intent.value),
    $1:null
   })
  }:null;
 };
 Voice["Trait'"]=function(a)
 {
  return!(a.domain==null)?{
   $:1,
   $0:new Trait$1({
    $:0,
    $0:"domain",
    $1:ClientExtensions.toLower(a.domain.value),
    $2:null
   })
  }:!(a.dialogue_act==null)?{
   $:1,
   $0:new Trait$1({
    $:0,
    $0:"dialogue_act",
    $1:ClientExtensions.toLower(a.dialogue_act.value),
    $2:null
   })
  }:null;
 };
 Voice["Entity'$1"]=function(a)
 {
  return!(a.contact==null)?{
   $:1,
   $0:new Entity$1({
    $:0,
    $0:"contact",
    $1:"",
    $2:ClientExtensions.toLower(a.contact.value),
    $3:null
   })
  }:null;
 };
 _Utterance$1=Text["Utterance'"]=Runtime.Class({
  get_TopIntent:function()
  {
   return List.head(List.sortBy(function(i)
   {
    return i.get_Confidence();
   },this.get_Intents()));
  },
  get_Traits:function()
  {
   return this.$3;
  },
  get_Entities:function()
  {
   return this.$2;
  },
  get_Intents:function()
  {
   return this.$1;
  },
  get_Text:function()
  {
   return this.$0;
  }
 },null,_Utterance$1);
 _Intent=Text["Intent'"]=Runtime.Class({
  get_Confidence:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,_Intent);
 _Entity$1=Text["Entity'"]=Runtime.Class({
  get_Value:function()
  {
   return(this.get_Unwrap())[3];
  },
  get_Role:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Confidence:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Name:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1,this.$2,this.$3];
  }
 },null,_Entity$1);
 _Trait=Text["Trait'"]=Runtime.Class({
  get_Value:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Confidence:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Name:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1,this.$2];
  }
 },null,_Trait);
 Text.HasUtterance=function(a)
 {
  var $1,_entities,m,_traits,intent,entities;
  return a!=null&&a.$==1&&(a.$0.$2.get_Length()>0&&($1=[a.$0.$2,a.$0.$1,a,a.$0.$0,a.$0.$3],true))?(_entities=$1[0],(m=$1[2],(_traits=$1[4],(intent=$1[1].$==0?null:{
   $:1,
   $0:new Intent$1({
    $:0,
    $0:m.$0.get_TopIntent().get_Name(),
    $1:{
     $:1,
     $0:m.$0.get_TopIntent().get_Confidence()
    }
   })
  },(entities=_entities.$==0?null:{
   $:1,
   $0:List.map(function(e)
   {
    return new Entity$1({
     $:0,
     $0:e.get_Name(),
     $1:ClientExtensions.toLower(e.get_Role()),
     $2:e.get_Value(),
     $3:{
      $:1,
      $0:e.get_Confidence()
     }
    });
   },List.filter(function(e)
   {
    return e.get_Confidence()>Text.entityConfidenceThreshold();
   },_entities))
  },{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:$1[3],
    $1:intent,
    $2:_traits.$==0?null:{
     $:1,
     $0:List.map(function(t)
     {
      return new Trait$1({
       $:0,
       $0:ClientExtensions.toLower(t.get_Name()),
       $1:t.get_Value(),
       $2:{
        $:1,
        $0:t.get_Confidence()
       }
      });
     },List.filter(function(t)
     {
      return t.get_Confidence()>Text.entityConfidenceThreshold();
     },_traits))
    },
    $3:entities
   })
  }))))):null;
 };
 Text.entityConfidenceThreshold=function()
 {
  SC$4.$cctor();
  return SC$4.entityConfidenceThreshold;
 };
 Text.set_entityConfidenceThreshold=function($1)
 {
  SC$4.$cctor();
  SC$4.entityConfidenceThreshold=$1;
 };
 Text.intentConfidenceThreshold=function()
 {
  SC$4.$cctor();
  return SC$4.intentConfidenceThreshold;
 };
 Text.set_intentConfidenceThreshold=function($1)
 {
  SC$4.$cctor();
  SC$4.intentConfidenceThreshold=$1;
 };
 Text.getUtterance=function(sentence,m)
 {
  Witai.getMeaning("AR6WFBX5MP46GIRF6S22HZLZ5I4I5UDW",sentence,function(o)
  {
   var intents,traits,utterance;
   ClientExtensions.debug("NLU",(function($1)
   {
    return function($2)
    {
     return $1("Wit.ai returned: "+Utils.prettyPrint($2));
    };
   }(Global.id))(o));
   intents=!(o.intents==null)?List.ofArray(Arrays.map(function(i)
   {
    return new _Intent({
     $:0,
     $0:i.name,
     $1:i.confidence
    });
   },o.intents)):List.T.Empty;
   traits=!(o.traits==null)?List.ofSeq(Seq.concat(List.map(function(tt)
   {
    return Arrays.map(function(t)
    {
     return new _Trait({
      $:0,
      $0:tt,
      $1:t.confidence,
      $2:t.value
     });
    },Pervasives.GetJS(o.traits,[tt]));
   },List.filter(function(tt)
   {
    return!(Pervasives.GetJS(o.traits,[tt])==null);
   },Text.trait_types())))):List.T.Empty;
   utterance=new _Utterance$1({
    $:0,
    $0:sentence,
    $1:intents,
    $2:!(o.entities==null)?List.ofSeq(Seq.concat(List.map(function(et)
    {
     return Arrays.map(function(e)
     {
      return new _Entity$1({
       $:0,
       $0:e.name,
       $1:e.confidence,
       $2:e.role,
       $3:e.value
      });
     },Pervasives.GetJS(o.entities,[et]));
    },List.filter(function(et)
    {
     return!(Pervasives.GetJS(o.entities,[et])==null);
    },Text.entity_types())))):List.T.Empty,
    $3:traits
   });
   ClientExtensions.debug("NLU",(function($1)
   {
    return function($2)
    {
     return $1("Utterance: "+Chad$Web_GeneratedPrintf.p$23($2)+" ");
    };
   }(Global.id))(utterance));
   return m({
    $:1,
    $0:utterance
   });
  },function(a,s,e)
  {
   ClientExtensions.error((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Wit.ai returned: "+Utils.prettyPrint($2)+" "+Utils.prettyPrint($3));
   }))(Global.id))(s))(e));
   return m(null);
  });
 };
 Text.trait_types=function()
 {
  SC$4.$cctor();
  return SC$4.trait_types;
 };
 Text.entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.entity_types;
 };
 Text.create_account_entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.create_account_entity_types;
 };
 Text.local_search_query_entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.local_search_query_entity_types;
 };
 Text.datetime_entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.datetime_entity_types;
 };
 Text.contact_entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.contact_entity_types;
 };
 Text.agenda_entry_entity_types=function()
 {
  SC$4.$cctor();
  return SC$4.agenda_entry_entity_types;
 };
 Text.QuickAccounts=function(a)
 {
  return a==="accounts"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"accounts",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"accounts",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.JournalEntry=function(a)
 {
  var j;
  return Strings.StartsWith(a,"journal ")&&Strings.Replace(a,"journal ","")!==""?(j=Strings.Replace(a,"journal ",""),{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"journal",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"journal",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"journal_entry",
      $1:"",
      $2:j,
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }):null;
 };
 Text.QuickJournal=function(a)
 {
  var $1;
  return a==="journal"||a==="diary"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"journal",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"journal",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.QuickNumber=function(a)
 {
  var $1,a$1,a$2,a$3,a$4,a$5;
  return(a$1=Text.One(a),a$1!=null&&a$1.$==1?($1=a$1.$0,true):(a$2=Text.Two(a),a$2!=null&&a$2.$==1?($1=a$2.$0,true):(a$3=Text.Three(a),a$3!=null&&a$3.$==1?($1=a$3.$0,true):(a$4=Text.Four(a),a$4!=null&&a$4.$==1?($1=a$4.$0,true):(a$5=Text.Five(a),a$5!=null&&a$5.$==1&&($1=a$5.$0,true))))))?{
   $:1,
   $0:$1
  }:null;
 };
 Text.Five=function(a)
 {
  var $1;
  return a==="5"||a==="five"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"five",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"five",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.Four=function(a)
 {
  var $1;
  return a==="4"||a==="four"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"four",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"four",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.Three=function(a)
 {
  var $1;
  return a==="3"||a==="three"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"three",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"three",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.Two=function(a)
 {
  var $1;
  return a==="2"||a==="two"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"two",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"two",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.One=function(a)
 {
  var $1;
  return a==="1"||a==="one"?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"one",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"questionresponse",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:{
     $:1,
     $0:List.ofArray([new Entity$1({
      $:0,
      $0:"wit/ordinal",
      $1:"",
      $2:"one",
      $3:{
       $:1,
       $0:1
      }
     })])
    }
   })
  }:null;
 };
 Text.QuickNo=function(a)
 {
  var $1;
  return a==="no"||(a==="nope"||(a==="no way"||(a==="nah"||(a==="don't do it"||a==="stop"))))?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"no",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"reject",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.QuickYes=function(a)
 {
  var $1;
  return a==="yes"||(a==="ok"||(a==="sure"||(a==="yeah"||(a==="yep"||(a==="uh huh"||(a==="go ahead"||a==="go"))))))?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"yes",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"verify",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.QuickHelp=function(a)
 {
  var $1;
  return a==="help"||(a==="help me"||(a==="what's this?"||a==="huh"))?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"help",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"help",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.QuickHello=function(a)
 {
  var $1;
  return a==="hello"||(a==="hey"||(a==="yo"||a==="hi"))?{
   $:1,
   $0:new Utterance$1({
    $:0,
    $0:"hello",
    $1:{
     $:1,
     $0:new Intent$1({
      $:0,
      $0:"greet",
      $1:{
       $:1,
       $0:1
      }
     })
    },
    $2:null,
    $3:null
   })
  }:null;
 };
 Text.Voices=function(a)
 {
  return a==="voices"?{
   $:1,
   $0:null
  }:null;
 };
 Text.DebugEntry=function(a)
 {
  return Strings.StartsWith(a,"debug-entry ")?{
   $:1,
   $0:Strings.Replace(a,"debug-entry ","")
  }:null;
 };
 Text.DebugBehavioralTraits=function(a)
 {
  return Strings.StartsWith(a,"debug-bt ")?{
   $:1,
   $0:Strings.Replace(a,"debug-bt ","")
  }:null;
 };
 Text.DebugEmotionalTraits=function(a)
 {
  return Strings.StartsWith(a,"debug-et ")?{
   $:1,
   $0:Strings.Replace(a,"debug-et ","")
  }:null;
 };
 Text.DebugTriples=function(a)
 {
  return Strings.StartsWith(a,"debug-triples ")?{
   $:1,
   $0:Strings.Replace(a,"debug-triples ","")
  }:null;
 };
 Text.DebugLemmas=function(a)
 {
  return Strings.StartsWith(a,"debug-lemmas ")?{
   $:1,
   $0:Strings.Replace(a,"debug-lemmas ","")
  }:null;
 };
 Text.DebugEntities=function(a)
 {
  return Strings.StartsWith(a,"debug-entities ")?{
   $:1,
   $0:Strings.Replace(a,"debug-entities ","")
  }:null;
 };
 Text.Debug=function(a)
 {
  return a==="debug"?{
   $:1,
   $0:null
  }:null;
 };
 Text.Blank=function(a)
 {
  return a===""?{
   $:1,
   $0:null
  }:null;
 };
 Domain.Study=function(a)
 {
  return a.get_Traits()!=null?{
   $:0,
   $0:null
  }:{
   $:1,
   $0:null
  };
 };
 NLU$1.Number=function(a)
 {
  var $1,a$1,$2,a$2,$3,a$3,$4,a$4,$5,a$5,$6,a$6,$7,a$7,$8,a$8,$9,a$9;
  return(a$1=NLU$1.Intent_("1",a),a$1!=null&&a$1.$==1&&(a$1.$0[0]==null&&(a$1.$0[1]==null&&($1=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($1.get_Intent().$0.get_Name())
  }:(a$2=NLU$1.Intent_("2",a),a$2!=null&&a$2.$==1&&(a$2.$0[0]==null&&(a$2.$0[1]==null&&($2=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($2.get_Intent().$0.get_Name())
  }:(a$3=NLU$1.Intent_("3",a),a$3!=null&&a$3.$==1&&(a$3.$0[0]==null&&(a$3.$0[1]==null&&($3=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($3.get_Intent().$0.get_Name())
  }:(a$4=NLU$1.Intent_("4",a),a$4!=null&&a$4.$==1&&(a$4.$0[0]==null&&(a$4.$0[1]==null&&($4=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($4.get_Intent().$0.get_Name())
  }:(a$5=NLU$1.Intent_("5",a),a$5!=null&&a$5.$==1&&(a$5.$0[0]==null&&(a$5.$0[1]==null&&($5=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($5.get_Intent().$0.get_Name())
  }:(a$6=NLU$1.Intent_("6",a),a$6!=null&&a$6.$==1&&(a$6.$0[0]==null&&(a$6.$0[1]==null&&($6=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($6.get_Intent().$0.get_Name())
  }:(a$7=NLU$1.Intent_("7",a),a$7!=null&&a$7.$==1&&(a$7.$0[0]==null&&(a$7.$0[1]==null&&($7=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($7.get_Intent().$0.get_Name())
  }:(a$8=NLU$1.Intent_("8",a),a$8!=null&&a$8.$==1&&(a$8.$0[0]==null&&(a$8.$0[1]==null&&($8=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($8.get_Intent().$0.get_Name())
  }:(a$9=NLU$1.Intent_("9",a),a$9!=null&&a$9.$==1&&(a$9.$0[0]==null&&(a$9.$0[1]==null&&($9=a,true))))?{
   $:1,
   $0:Numeric.ParseInt32($9.get_Intent().$0.get_Name())
  }:null;
 };
 NLU$1.StrA=function(a)
 {
  if(a!=null&&a.$==1)
   try
   {
    return{
     $:1,
     $0:((Provider.DecodeArray(Provider.Id()))())(JSON.parse(a.$0))
    };
   }
   catch(m)
   {
    return null;
   }
  else
   return null;
 };
 NLU$1.PStr=function(a)
 {
  var $1;
  return a!=null&&a.$==1&&(typeof a.$0=="string"&&($1=a.$0,true))?{
   $:1,
   $0:$1
  }:null;
 };
 NLU$1.No=function(a)
 {
  var $1,a$1;
  return(a$1=NLU$1.Intent_("reject",a),a$1!=null&&a$1.$==1&&(a$1.$0[0]==null&&(a$1.$0[1]==null&&($1=a,true))))?{
   $:1,
   $0:$1
  }:null;
 };
 NLU$1.Yes=function(a)
 {
  var $1,a$1;
  return(a$1=NLU$1.Intent_("verify",a),a$1!=null&&a$1.$==1&&(a$1.$0[0]==null&&(a$1.$0[1]==null&&($1=a,true))))?{
   $:1,
   $0:$1
  }:null;
 };
 NLU$1.EntityManyofMany=function(roles,a)
 {
  return{
   $:1,
   $0:Map.OfArray(Arrays.ofSeq(List.map(function(r)
   {
    return List.exists(function(e)
    {
     return e.get_Role()===r;
    },a)?[r,{
     $:1,
     $0:List.filter(function(_e)
     {
      return _e.get_Role()===r;
     },a)
    }]:[r,null];
   },roles)))
  };
 };
 NLU$1.EntityManyOf1=function(r,a)
 {
  var $1;
  return a!=null&&a.$==1&&(List.exists(function(e)
  {
   return e.get_Role()===r;
  },a.$0)&&($1=a.$0,true))?{
   $:1,
   $0:List.filter(function(e)
   {
    return e.get_Role()===r;
   },$1)
  }:null;
 };
 NLU$1.Entity1OfAny=function(r,a)
 {
  var $1;
  return a!=null&&a.$==1&&(List.exists(function(e)
  {
   return e.get_Role()===r;
  },a.$0)&&($1=a.$0,true))?{
   $:1,
   $0:List.head(List.sortBy(function(e)
   {
    return e.get_Role();
   },List.filter(function(e)
   {
    return e.get_Role()===r;
   },$1)))
  }:null;
 };
 NLU$1.Entity1Of1=function(r,a)
 {
  var $1,entity;
  return a!=null&&a.$==1&&(a.$0.$==1&&(a.$0.$1.$==0&&((entity=a.$0.$0,entity.get_Role()===r||entity.get_Name()===r)&&($1=a.$0.$0,true))))?{
   $:1,
   $0:$1
  }:null;
 };
 NLU$1.Intent_=function(n,a)
 {
  return a.get_Intent()!=null&&a.get_Intent().$0.get_Name()===n?{
   $:1,
   $0:[a.get_Traits(),a.get_Entities()]
  }:null;
 };
 NLU$1.quick_number=function(n)
 {
  return new Utterance$1({
   $:0,
   $0:"",
   $1:{
    $:1,
    $0:new Intent$1({
     $:0,
     $0:"questionresponse",
     $1:{
      $:1,
      $0:1
     }
    })
   },
   $2:null,
   $3:{
    $:1,
    $0:List.ofArray([new Entity$1({
     $:0,
     $0:"wit/ordinal",
     $1:"",
     $2:Global.String(n),
     $3:{
      $:1,
      $0:1
     }
    })])
   }
  });
 };
 NLU$1.quick_utter=function(name)
 {
  return new Utterance$1({
   $:0,
   $0:"",
   $1:{
    $:1,
    $0:new Intent$1({
     $:0,
     $0:name,
     $1:{
      $:1,
      $0:1
     }
    })
   },
   $2:null,
   $3:null
  });
 };
 SC$4.$cctor=function()
 {
  SC$4.$cctor=Global.ignore;
  SC$4.agenda_entry_entity_types=List.ofArray(["wit$agenda_entry:agenda_entry"]);
  SC$4.contact_entity_types=List.ofArray(["wit$contact:contact","wit$contact:query_param_name"]);
  SC$4.datetime_entity_types=List.ofArray(["wit$datetime:datetime","wit$datetime:query_param_date"]);
  SC$4.local_search_query_entity_types=List.ofArray(["wit$local_search_query:local_search_query","wit$datetime:query_resource"]);
  SC$4.create_account_entity_types=List.ofArray(["account_name:account_name","account_type:account_type","account_parent:account_parent"]);
  SC$4.entity_types=List.append(Text.agenda_entry_entity_types(),List.append(Text.contact_entity_types(),List.append(Text.datetime_entity_types(),List.append(Text.local_search_query_entity_types(),Text.create_account_entity_types()))));
  SC$4.trait_types=List.ofArray(["domain","speech_act"]);
  SC$4.intentConfidenceThreshold=0.85;
  SC$4.entityConfidenceThreshold=0.7;
 };
 EmotionalTrait=Knowledge.EmotionalTrait=Runtime.Class({
  get_Frequency:function()
  {
   return this.$2;
  },
  get_Hierarchy:function()
  {
   return this.$1;
  },
  get_Label:function()
  {
   return this.$0;
  }
 },null,EmotionalTrait);
 BehavioralTrait=Knowledge.BehavioralTrait=Runtime.Class({
  get_Frequency:function()
  {
   return this.$2;
  },
  get_Hierarchy:function()
  {
   return this.$1;
  },
  get_Label:function()
  {
   return this.$0;
  }
 },null,BehavioralTrait);
 Relation=Knowledge.Relation=Runtime.Class({
  toString:function()
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("("+Utils.prettyPrint($2)+", "+Utils.prettyPrint($3)+", "+Utils.prettyPrint($4)+")");
   },4))(Global.id))(this.get_T1()))(this.get_Name()))(this.get_T2());
  },
  get_T2:function()
  {
   return this.$2;
  },
  get_Name:function()
  {
   return this.$1;
  },
  get_T1:function()
  {
   return this.$0;
  }
 },null,Relation);
 Triple=Knowledge.Triple=Runtime.Class({
  toString:function()
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("("+Chad$Web_GeneratedPrintf.p$5($2)+", "+Chad$Web_GeneratedPrintf.p$7($3)+", "+Chad$Web_GeneratedPrintf.p$21($4)+")");
   },4))(Global.id))(this.get_Subject()))(this.get_Verb()))(this.get_Object());
  },
  get_Object:function()
  {
   var o;
   o=this.$1;
   return o!=null?{
    $:1,
    $0:o.$0.get_T2()
   }:null;
  },
  get_Verb:function()
  {
   return this.$0.get_T2();
  },
  get_Subject:function()
  {
   return this.$0.get_T1();
  }
 },null,Triple);
 Subject=Knowledge.Subject=Runtime.Class({
  toString:function()
  {
   return this.$==1?Global.String(this.$0):this.$0;
  }
 },null,Subject);
 Verb=Knowledge.Verb=Runtime.Class({
  toString:function()
  {
   return this.$0;
  }
 },null,Verb);
 Object=Knowledge.Object=Runtime.Class({
  toString:function()
  {
   return this.$==1?Global.String(this.$0):this.$0;
  }
 },null,Object);
 ExpertAIEntity=Knowledge.ExpertAIEntity=Runtime.Class({
  get_Relevance:function()
  {
   return this.$3;
  },
  get_Positions:function()
  {
   return this.$2;
  },
  get_Lemma:function()
  {
   return this.$1;
  },
  get_Type:function()
  {
   return this.$0;
  }
 },null,ExpertAIEntity);
 ExpertAILemma=Knowledge.ExpertAILemma=Runtime.Class({
  get_Positions:function()
  {
   return this.$2;
  },
  get_Score:function()
  {
   return this.$1;
  },
  get_Value:function()
  {
   return this.$0;
  }
 },null,ExpertAILemma);
 WritingJournlEntry.New=function(UserName,Date$1,WritingPrompt,Text$1,KnowledgeTriples,KnowledgeLemmas,KnowledgeEntities,KnowledgeBehaviouralTraits,KnowledgeEmotionalTraits)
 {
  return{
   UserName:UserName,
   Date:Date$1,
   WritingPrompt:WritingPrompt,
   Text:Text$1,
   KnowledgeTriples:KnowledgeTriples,
   KnowledgeLemmas:KnowledgeLemmas,
   KnowledgeEntities:KnowledgeEntities,
   KnowledgeBehaviouralTraits:KnowledgeBehaviouralTraits,
   KnowledgeEmotionalTraits:KnowledgeEmotionalTraits
  };
 };
 Knowledge.ExpertAIEntity1OfAnyType=function(s,entities)
 {
  return entities==null?null:Seq.tryPick(function(t)
  {
   var $1;
   return($1=Knowledge.ExpertAIEntityType(s,t.$0),$1!=null&&$1.$==1)?{
    $:1,
    $0:t
   }:null;
  },entities.$0);
 };
 Knowledge.EmotionalTrait1OfAny=function(s,traits)
 {
  return Seq.tryPick(function(t)
  {
   var $1;
   return($1=Knowledge.EmotionalTraitLabel(s,t.$0),$1!=null&&$1.$==1)?{
    $:1,
    $0:t
   }:null;
  },traits);
 };
 Knowledge.SubjectVerbObject1OfAny=function(s,svr,v,vor,o,triples)
 {
  return triples==null?null:Seq.tryPick(function(t)
  {
   var $1,$2,$3,$4,$5,$6,$7,$8;
   return($2=Knowledge.TripleSubject(s,t.$0.$0),$2!=null&&$2.$==1)&&(($3=Knowledge.TripleRelation(svr,t.$0.$1),$3!=null&&$3.$==1)&&(($4=Knowledge.TripleVerb(v,t.$0.$2),$4!=null&&$4.$==1)&&(($5=t.$1,$5!=null&&$5.$==1)&&(($6=Knowledge.TripleVerb(v,t.$1.$0.$0),$6!=null&&$6.$==1)&&(($7=Knowledge.TripleRelation(vor,t.$1.$0.$1),$7!=null&&$7.$==1)&&($8=Knowledge.TripleObject(o,t.$1.$0.$2),$8!=null&&$8.$==1))))))?{
    $:1,
    $0:t
   }:null;
  },triples.$0);
 };
 Knowledge.SubjectVerb1OfAny=function(s,svr,v,triples)
 {
  return triples==null?null:Seq.tryPick(function(t)
  {
   var $1,$2,$3,$4;
   return($2=Knowledge.TripleSubject(s,t.$0.$0),$2!=null&&$2.$==1)&&(($3=Knowledge.TripleRelation(svr,t.$0.$1),$3!=null&&$3.$==1)&&($4=Knowledge.TripleVerb(v,t.$0.$2),$4!=null&&$4.$==1))?{
    $:1,
    $0:t
   }:null;
  },triples.$0);
 };
 Knowledge.EmotionalTraitLabel=function(s,a)
 {
  return a.toUpperCase()===s.toUpperCase()?{
   $:1,
   $0:null
  }:null;
 };
 Knowledge.ExpertAIEntityType=function(s,a)
 {
  return a.toUpperCase()===s.toUpperCase()?{
   $:1,
   $0:null
  }:null;
 };
 Knowledge.TripleObject=function(s,a)
 {
  var $1;
  return a.$==0&&(a.$0.toUpperCase()===s.toUpperCase()&&($1=a.$0,true))?{
   $:1,
   $0:null
  }:null;
 };
 Knowledge.TripleVerb=function(s,a)
 {
  return a.$0.toUpperCase()===s.toUpperCase()?{
   $:1,
   $0:null
  }:null;
 };
 Knowledge.TripleRelation=function(s,a)
 {
  return a.toUpperCase()===s.toUpperCase()?{
   $:1,
   $0:null
  }:null;
 };
 Knowledge.TripleSubject=function(s,a)
 {
  var $1;
  return a.$==0&&(a.$0.toUpperCase()===s.toUpperCase()&&($1=a.$0,true))?{
   $:1,
   $0:null
  }:null;
 };
 MicState.MicReady={
  $:5
 };
 MicState.MicAudioEnd={
  $:4
 };
 MicState.MicAudioStart={
  $:3
 };
 MicState.MicDisconnected={
  $:2
 };
 MicState.MicConnecting={
  $:1
 };
 MicState.MicNotInitialized={
  $:0
 };
 ClientState.ClientUnderstand={
  $:2
 };
 ClientState.ClientReady={
  $:1
 };
 ClientState.ClientNotInitialzed={
  $:0
 };
 Interpreter=CUI.Interpreter=Runtime.Class({
  get_Options:function()
  {
   return(this.get_Unwrap())[2];
  },
  get_Text:function()
  {
   return(this.get_Unwrap())[1];
  },
  get_Voice:function()
  {
   return(this.get_Unwrap())[0];
  },
  get_Unwrap:function()
  {
   return[this.$0,this.$1[0],this.$1[1]];
  }
 },null,Interpreter);
 CUI$1=CUI.CUI=Runtime.Class({
  ListMenuItems:function(items,trigger)
  {
   var width,x;
   width=(x=List.max(List.map(function(s)
   {
    return s.length;
   },items)),(function($1)
   {
    return function($2)
    {
     return $1("width:"+Global.String($2)+"em");
    };
   }(Global.id))(x));
   this.EchoDoc(Doc.Element("div",[ClientExtensions.cls("list-group"),AttrProxy.Create("style",width)],List.mapi(function(i,s)
   {
    var _i;
    _i=Global.String(i+1);
    return Doc.Element("a",[ClientExtensions.cls("list-group-item list-group-item-action"),ClientExtensions.href("javascript:;"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return trigger(_i,_i);
     };
    })],[Doc.Element("span",[ClientExtensions.cls("badge bg-light rounded-pill")],[Doc.TextNode(_i)]),Doc.TextNode(s)]);
   },items)));
  },
  SayVoices:function()
  {
   var $this,_voices,voices;
   $this=this;
   _voices=Global.speechSynthesis.getVoices();
   if(!(_voices==null))
    {
     voices=ClientExtensions.toArray(_voices);
     $this.Say$1((function($1)
     {
      return function($2)
      {
       return $1("There are currently "+Global.String($2)+" voices installed on this computer or device.");
      };
     }(Global.id))(Arrays.length(voices)));
     Arrays.iteri(function(i,v)
     {
      return $this.Say$1(((((Runtime.Curried(function($1,$2,$3,$4)
      {
       return $1("Voice "+Global.String($2)+". Name: "+Utils.toSafe($3)+", Local: "+Utils.prettyPrint($4)+".");
      },4))(Global.id))(i))(v.name))(v.localService));
     },voices);
    }
  },
  Wait:function(f)
  {
   this.Wait$1(function()
   {
    Concurrency.Start(f,null);
   });
  },
  Wait$1:function(f)
  {
   this["Echo'"]("please wait...");
   this.Term.pause();
   f();
   this.Term.resume();
  },
  sayRandom:function(phrases,t)
  {
   this.Say$1(NLG.getRandomPhrase(phrases,t));
  },
  SayAngry:function(m)
  {
   var $this,b;
   $this=this;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Combine(Global.speechSynthesis.speaking?(Global.speechSynthesis.cancel(),SDK.chime(),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
    {
     Global.addMessage($this.Avatar,m,"","");
     $this.Avatar.processMessages(0);
     return Concurrency.Zero();
    }));
   })),null);
  },
  EchoDoc:function(d)
  {
   var x,a;
   Arrays.get($(".terminal-output").get(),0).childNodes.length;
   x=Doc.Element("div",[AttrProxy.Create("style","margin-bottom:1em")],[d]);
   a=ClientExtensions.terminalOutput();
   Templates.LoadLocalTemplates("");
   Doc.RunAppend(a,x);
  },
  Say:function(text)
  {
   var $this,b;
   function getSynth()
   {
    return Global.speechSynthesis;
   }
   $this=this;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    var synth;
    synth=getSynth();
    return Concurrency.Combine(Concurrency.While(function()
    {
     return synth.speaking||synth.pending;
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(1000),function()
     {
      return Concurrency.Return(null);
     });
    })),Concurrency.Delay(function()
    {
     $this.Avatar.addMessage(List.reduce(function(x,y)
     {
      return x+y;
     },List.map(function(s)
     {
      return s+" ";
     },text)));
     $this.Avatar.processMessages(0);
     return Concurrency.Zero();
    }));
   })),null);
  },
  Say$1:function(text)
  {
   var $this,b;
   function getSynth()
   {
    return Global.speechSynthesis;
   }
   $this=this;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    var synth;
    synth=getSynth();
    return Concurrency.Combine(Concurrency.While(function()
    {
     return synth.speaking||synth.pending;
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(1000),function()
     {
      return Concurrency.Return(null);
     });
    })),Concurrency.Delay(function()
    {
     $this.Avatar.addMessage(text);
     $this.Avatar.processMessages(0);
     return Concurrency.Zero();
    }));
   })),null);
  },
  Debug:function(loc,m)
  {
   ClientExtensions.debug(loc,m);
  },
  "EchoHtml'":function(text)
  {
   var rawOpt,r;
   rawOpt=(r={},r.raw=true,r);
   this.Term.disable();
   this.Term.echo(text,rawOpt);
   this.Term.enable();
  },
  "Echo'":function(text)
  {
   this.Term.disable();
   this.Term.echo(text);
   this.Term.enable();
  }
 },null,CUI$1);
 CUI$1.ListMenuItems$106$95=function(trigger,_i)
 {
  return function()
  {
   return function()
   {
    return(trigger(_i))(_i);
   };
  };
 };
 CUI$1.New=function(Voice$1,Mic,Term,Avatar,Caption,AudioHandlers,TypingDNA)
 {
  return new CUI$1({
   Voice:Voice$1,
   Mic:Mic,
   Term:Term,
   Avatar:Avatar,
   Caption:Caption,
   AudioHandlers:AudioHandlers,
   TypingDNA:TypingDNA
  });
 };
 Dialogue=Web.Dialogue=Runtime.Class({
  get_Utterances:function()
  {
   return this.$4;
  },
  get_Output:function()
  {
   return this.$3;
  },
  get_DialogueQuestions:function()
  {
   return this.$2;
  },
  get_Props:function()
  {
   return this.$1;
  },
  get_Cui:function()
  {
   return this.$0;
  }
 },null,Dialogue);
 Question=Web.Question=Runtime.Class({
  toString:function()
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1("Name: "+Utils.toSafe($2)+" Module: "+Utils.toSafe($3)+" Type: "+Chad$Web_GeneratedPrintf.p$22($4)+" ");
   },4))(Global.id))(this.get_Name()))(this.get_Module()))(this.get_Type());
  },
  get_Target:function()
  {
   return this.$4;
  },
  get_Params:function()
  {
   return this.$3;
  },
  get_Type:function()
  {
   return this.$2;
  },
  get_Module:function()
  {
   return this.$1;
  },
  get_Name:function()
  {
   return this.$0;
  }
 },null,Question);
 QuestionType.ConceptCompletion={
  $:5
 };
 QuestionType.Disjunctive={
  $:4
 };
 DialogueModule["Response'_"]=function(d,n,a)
 {
  var $1,a$1,a$2,a$3,a$4,a$5,a$6,p;
  return(a$1=DialogueModule.PropNotSet_(d,"user",a),a$1!=null&&a$1.$==1?(a$2=DialogueModule.Form(d,n,a$1.$0),a$2!=null&&a$2.$==1?($1=a$2.$0,true):(a$3=DialogueModule.PropNotSet_(d,"user",a),a$3!=null&&a$3.$==1&&(a$4=DialogueModule.NotForm(d,n,a$3.$0),a$4!=null&&a$4.$==1&&($1=a$4.$0,true)))):(a$5=DialogueModule.PropNotSet_(d,"user",a),a$5!=null&&a$5.$==1&&(a$6=DialogueModule.NotForm(d,n,a$5.$0),a$6!=null&&a$6.$==1&&($1=a$6.$0,true))))?(p=DialogueModule.have(d,n)?{
   $:1,
   $0:DialogueModule.prop(d,n)
  }:null,$1.get_Text()!==""?{
   $:1,
   $0:[$1,{
    $:1,
    $0:$1.get_Text()
   },p]
  }:{
   $:1,
   $0:[$1,null,p]
  }):null;
 };
 DialogueModule.Response_=function(d,n,a)
 {
  var $1,a$1,a$2,a$3,a$4,a$5,a$6,p;
  return(a$1=DialogueModule.PropSet_(d,"user",a),a$1!=null&&a$1.$==1?(a$2=DialogueModule.Form(d,n,a$1.$0),a$2!=null&&a$2.$==1?($1=a$2.$0,true):(a$3=DialogueModule.PropSet_(d,"user",a),a$3!=null&&a$3.$==1&&(a$4=DialogueModule.NotForm(d,n,a$3.$0),a$4!=null&&a$4.$==1&&($1=a$4.$0,true)))):(a$5=DialogueModule.PropSet_(d,"user",a),a$5!=null&&a$5.$==1&&(a$6=DialogueModule.NotForm(d,n,a$5.$0),a$6!=null&&a$6.$==1&&($1=a$6.$0,true))))?(p=DialogueModule.have(d,n)?{
   $:1,
   $0:DialogueModule.prop(d,n)
  }:null,$1.get_Text()!==""?{
   $:1,
   $0:[$1,{
    $:1,
    $0:$1.get_Text()
   },p]
  }:{
   $:1,
   $0:[$1,null,p]
  }):null;
 };
 DialogueModule.NotForm=function(d,n,a)
 {
  return d.get_DialogueQuestions().length>0&&(d.get_DialogueQuestions())[0].get_Name()===n&&a.get_Text()!==""?{
   $:1,
   $0:a
  }:null;
 };
 DialogueModule.Form=function(d,n,a)
 {
  return d.get_DialogueQuestions().length>0&&(d.get_DialogueQuestions())[0].get_Name()===n&&a.get_Intent()!=null&&a.get_Intent().$0.get_Name()===n&&Unchecked.Equals(a.get_Intent().$0.get_Confidence(),{
   $:1,
   $0:1
  })&&Unchecked.Equals(a.get_Traits(),null)&&Unchecked.Equals(a.get_Entities(),null)?{
   $:1,
   $0:a
  }:null;
 };
 DialogueModule["Intent'_"]=function(d,n,a)
 {
  var $1,a$1,m;
  return(a$1=DialogueModule.PropNotSet_(d,"user",a),a$1!=null&&a$1.$==1&&((m=a$1.$0,m.get_Intent()!=null&&m.get_Intent().$0.get_Name()===n)&&($1=a$1.$0,true)))?{
   $:1,
   $0:[$1.get_Traits(),$1.get_Entities()]
  }:null;
 };
 DialogueModule.Intent_=function(d,n,a)
 {
  var $1,a$1,m;
  return(a$1=DialogueModule.PropSet_(d,"user",a),a$1!=null&&a$1.$==1&&((m=a$1.$0,m.get_Intent()!=null&&m.get_Intent().$0.get_Name()===n)&&($1=a$1.$0,true)))?{
   $:1,
   $0:[$1.get_Traits(),$1.get_Entities()]
  }:null;
 };
 DialogueModule["User'_"]=function(d,a)
 {
  var $1,a$1;
  return(a$1=DialogueModule.PropNotSet_(d,"user",a),a$1!=null&&a$1.$==1&&(d.get_DialogueQuestions().length===0&&($1=a$1.$0,true)))?{
   $:1,
   $0:$1
  }:null;
 };
 DialogueModule.User_=function(d,a)
 {
  var $1,a$1;
  return(a$1=DialogueModule.PropSet_(d,"user",a),a$1!=null&&a$1.$==1&&(d.get_DialogueQuestions().length===0&&($1=a$1.$0,true)))?{
   $:1,
   $0:$1
  }:null;
 };
 DialogueModule.PropNotSet_=function(d,n,a)
 {
  return!DialogueModule.have(d,n)?{
   $:1,
   $0:a
  }:null;
 };
 DialogueModule.PropSet_=function(d,n,a)
 {
  return DialogueModule.have(d,n)?{
   $:1,
   $0:a
  }:null;
 };
 DialogueModule.Agenda_=function(d,debug,m,a)
 {
  return d.get_DialogueQuestions().length>0&&(d.get_DialogueQuestions())[0].get_Module()===m?{
   $:1,
   $0:null
  }:null;
 };
 DialogueModule.debugInterpreterEnd=function(d,debug,name)
 {
  debug(((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1(Utils.toSafe($2)+" ending utterances:"+Utils.prettyPrint($3)+", questions: "+Utils.prettyPrint($4)+".");
  },4))(Global.id))(name))(d.get_Utterances()))(d.get_DialogueQuestions()));
 };
 DialogueModule.debugInterpreterStart=function(d,debug,name)
 {
  debug(((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1(Utils.toSafe($2)+" starting utterances:"+Utils.prettyPrint($3)+", questions: "+Utils.prettyPrint($4)+".");
  },4))(Global.id))(name))(d.get_Utterances()))(d.get_DialogueQuestions()));
 };
 DialogueModule.frame=function(utterances)
 {
  return List.ofSeq(Seq.take(utterances.length>=5?5:utterances.length,utterances));
 };
 DialogueModule.didNotUnderstand=function(d,debug,name)
 {
  debug((function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2)+" interpreter did not understand utterance.");
   };
  }(Global.id))(name));
  DialogueModule.popu(d,debug);
  DialogueModule.say(d,"Sorry I didn't understand what you meant.");
  !DialogueModule.have(d,"user")?DialogueModule.say(d,"You must login to use most functions in Selma."):void 0;
 };
 DialogueModule["endt'"]=function(d,debug,f)
 {
  var q;
  q=(d.get_DialogueQuestions())[0];
  DialogueModule.popu(d,debug);
  DialogueModule.popq(d,debug);
  debug((function($1)
  {
   return function($2)
   {
    return $1("End turn "+Utils.toSafe($2)+".");
   };
  }(Global.id))(q.get_Name()));
  f();
 };
 DialogueModule.endt=function(d,debug,m,f)
 {
  DialogueModule.popu(d,debug);
  DialogueModule.popq(d,debug);
  DialogueModule.have(d,m)?DialogueModule.remove(d,debug,m):void 0;
  debug((function($1)
  {
   return function($2)
   {
    return $1("End turn "+Utils.toSafe($2)+".");
   };
  }(Global.id))(m));
  f();
 };
 DialogueModule.cancel=function(d,debug,qn)
 {
  var q;
  q=(d.get_DialogueQuestions())[0];
  if(q.get_Name()!==qn)
   (((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Chad$Web_GeneratedPrintf.p$27($2)+" at the top of the stack does not have the name "+Utils.toSafe($3)+".");
   }))(Operators.FailWith))(q))(qn);
  DialogueModule.popq(d,debug);
  debug((function($1)
  {
   return function($2)
   {
    return $1("Cancel "+Chad$Web_GeneratedPrintf.p$27($2)+".");
   };
  }(Global.id))(q));
 };
 DialogueModule["trigger'"]=function(d,debug,target,name,data,e)
 {
  DialogueModule.pushu(d,debug,new Utterance$1({
   $:0,
   $0:JSON.stringify(data),
   $1:{
    $:1,
    $0:new Intent$1({
     $:0,
     $0:name,
     $1:{
      $:1,
      $0:1
     }
    })
   },
   $2:null,
   $3:{
    $:1,
    $0:e
   }
  }));
  target(d);
 };
 DialogueModule.trigger=function(d,debug,target,name,data)
 {
  DialogueModule.pushu(d,debug,new Utterance$1({
   $:0,
   $0:JSON.stringify(data),
   $1:{
    $:1,
    $0:new Intent$1({
     $:0,
     $0:name,
     $1:{
      $:1,
      $0:1
     }
    })
   },
   $2:null,
   $3:null
  }));
  target(d);
 };
 DialogueModule.handle=function(d,debug,m,f)
 {
  DialogueModule.popu(d,debug);
  debug((function($1)
  {
   return function($2)
   {
    return $1("Handle utterance "+Utils.toSafe($2)+".");
   };
  }(Global.id))(m));
  f();
 };
 DialogueModule.dispatch=function(d,debug,targetModule,target)
 {
  debug(((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("Dispatch to module "+Utils.toSafe($2)+" utterances: "+Utils.prettyPrint($3)+" questions: "+Utils.prettyPrint($4)+".");
  },4))(Global.id))(targetModule))(d.get_Utterances()))(d.get_DialogueQuestions()));
  target(d);
 };
 DialogueModule.popq=function(d,debug)
 {
  var q;
  q=d.get_DialogueQuestions().shift();
  debug((function($1)
  {
   return function($2)
   {
    return $1("Pop "+Chad$Web_GeneratedPrintf.p$27($2)+".");
   };
  }(Global.id))(q));
 };
 DialogueModule.pushq=function(d,debug,q)
 {
  d.get_DialogueQuestions().unshift(q);
  debug((function($1)
  {
   return function($2)
   {
    return $1("Push "+Chad$Web_GeneratedPrintf.p$27($2)+".");
   };
  }(Global.id))(q));
 };
 DialogueModule.popu=function(d,debug)
 {
  var m;
  m=d.get_Utterances().shift();
  debug((function($1)
  {
   return function($2)
   {
    return $1("Pop "+Chad$Web_GeneratedPrintf.p$13($2)+".");
   };
  }(Global.id))(m));
 };
 DialogueModule.pushu=function(d,debug,m)
 {
  debug((function($1)
  {
   return function($2)
   {
    return $1("Push "+Chad$Web_GeneratedPrintf.p$13($2)+".");
   };
  }(Global.id))(m));
  d.get_Utterances().unshift(m);
 };
 DialogueModule.remove=function(d,debug,k)
 {
  debug((function($1)
  {
   return function($2)
   {
    return $1("Remove property "+Utils.toSafe($2)+".");
   };
  }(Global.id))(k));
  d.get_Props().Remove(k);
 };
 DialogueModule.add=function(d,debug,k,v)
 {
  d.get_Props().Add(k,v);
  debug((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Add property "+Utils.toSafe($2)+":"+Utils.prettyPrint($3)+".");
  }))(Global.id))(k))(v));
 };
 DialogueModule.prop=function(d,k)
 {
  return d.get_Props().ContainsKey(k)?d.get_Props().get_Item(k):(function($1)
  {
   return function($2)
   {
    return $1("The "+Utils.toSafe($2)+" dialogue property does not exist.");
   };
  }(Operators.FailWith))(k);
 };
 DialogueModule.have=function(d,k)
 {
  return d.get_Props().ContainsKey(k);
 };
 DialogueModule["sayRandom'"]=function(d,p)
 {
  DialogueModule.sayRandom(d,p,"");
 };
 DialogueModule.sayRandom=function(d,p,v)
 {
  var t;
  t=NLG.getRandomPhrase(p,v);
  d.get_Output().unshift(t);
  d.get_Cui().Say$1(t);
 };
 DialogueModule.say=function(d,t)
 {
  d.get_Output().unshift(t);
  DialogueModule["say'"](d,t);
 };
 DialogueModule["say'"]=function(d,t)
 {
  d.get_Cui().Say$1(t);
 };
 DialogueModule.echo=function(d,t)
 {
  (d.get_Cui())["EchoHtml'"](t);
 };
 QuestionDialogs.userAuthenticationDialog=function(d,debug,q,u)
 {
  var t,n,passPhrase;
  function say(t$1)
  {
   DialogueModule.say(d,t$1);
  }
  function setupBox1(b)
  {
   b.input="text";
   b.showCancelButton=true;
   b.confirmButtonText="Ok";
  }
  function setupBox2(b)
  {
   b.confirmButtonClass="invisible";
   b.showCancelButton=true;
  }
  function collectFaceAndTypingData()
  {
   var c;
   c=ClientExtensions.createDialogueBoxCanvas();
   ClientExtensions.startCamera(self.document.body,c);
  }
  function box(t$1)
  {
   var c,data;
   c=t$1[0];
   data=t$1[1];
   ClientExtensions.questionBox("Biometric Authentication","",{
    $:1,
    $0:ClientExtensions.boxesWithTitles(["2","3"])
   },{
    $:1,
    $0:[640,480]
   },{
    $:1,
    $0:setupBox1
   },{
    $:1,
    $0:collectFaceAndTypingData
   },function(o)
   {
    var pattern,r,text,image;
    if(o.isConfirmed)
     {
      pattern=d.get_Cui().TypingDNA.getTypingPattern((r={},r.type=1,r.text=passPhrase,r.caseSensitive=false,r));
      text=o.value;
      image=ClientExtensions.getCameraCanvas().toDataURL();
      debug((function($1)
      {
       return function($2)
       {
        return $1("User image is "+Utils.toSafe($2)+"...");
       };
      }(Global.id))(Strings.Substring(image,0,10)));
      ClientExtensions.stopCamera();
      debug((((Runtime.Curried3(function($1,$2,$3)
      {
       return $1("User entered typing pattern "+Utils.toSafe($2)+" for text "+Utils.toSafe($3));
      }))(Global.id))(pattern))(text));
      text.toLowerCase()!==passPhrase.toLowerCase()?(say("Sorry you did not enter the passphrase correctly. Please try again."),box([c,data])):ClientExtensions.questionBox("Biometric Authentication","",null,null,{
       $:1,
       $0:setupBox2
      },{
       $:1,
       $0:function()
       {
        ClientExtensions.getDialogueBoxContent().appendChild(ClientExtensions.getMic());
        d.get_Cui().AudioHandlers.Add("VoiceAuthentication",function(v)
        {
         JSON.stringify(((Provider.Id())())(v));
         ClientExtensions.confirmQuestionBox();
        });
       }
      },function(o$1)
      {
       if(!o$1.isConfirmed)
        {
         d.get_Cui().AudioHandlers.Remove("VoiceAuthentication");
         say("OK but you must login for me to help you.");
        }
      });
     }
    else
     say("OK but you must login for me to help you.");
   });
  }
  t=q.get_Target();
  n=q.get_Name();
  passPhrase=(function($1)
  {
   return function($2)
   {
    return $1("Hello my name is "+Utils.toSafe($2)+" and I am an administrator");
   };
  }(Global.id))(u);
  say((function($1)
  {
   return function($2)
   {
    return $1("Enter the phrase "+Utils.toSafe($2)+".");
   };
  }(Global.id))(passPhrase));
  box([0,[]]);
 };
 Questions.menu=function(d,m,n,c,p,t)
 {
  return new Question({
   $:0,
   $0:n,
   $1:m,
   $2:{
    $:2,
    $0:c,
    $1:t
   },
   $3:null,
   $4:function()
   {
    (d.get_Cui())["EchoHtml'"](p);
    d.get_Cui().Say$1(p);
   }
  });
 };
 Questions.ask=function(d,debug,q)
 {
  var m,v,r,t;
  DialogueModule.pushq(d,debug,q);
  (q.get_Target())(d);
  m=q.get_Type();
  if(m.$==0)
   QuestionDialogs.userAuthenticationDialog(d,debug,q,m.$0);
  else
   m.$==1?(v=m.$0,r=m.$1,d.get_Cui().EchoDoc(Doc.Concat([Doc.TextNode("    "),Bs.btnPrimary("Yes",function()
   {
    return function()
    {
     d.get_Cui().Term.enable();
     return v();
    };
   }),Doc.TextNode("     "),Bs.btnSecondary("No",function()
   {
    return function()
    {
     d.get_Cui().Term.enable();
     return r();
    };
   })])),d.get_Cui().Term.disable()):m.$==2?(t=m.$1,d.get_Cui().ListMenuItems(m.$0,function($1,$2)
   {
    return(t($1))($2);
   }),d.get_Cui().EchoDoc(Doc.Concat([Bs.btnInfo("Help",function()
   {
    return function()
    {
     return(t("help"))("help");
    };
   }),Doc.TextNode("    "),Bs.btnSecondary("Cancel",function()
   {
    return function()
    {
     return(t("cancel"))("cancel");
    };
   })]))):m.$==3?void 0:void 0;
  self.scrollTo(0,Operators.toInt(self.document.body.scrollHeight));
 };
 Symptoms.update=function(d)
 {
  var m,$1,a,$2,$3,a$1,$4,$5,a$2,$6;
  function say(t)
  {
   DialogueModule.say(d,t);
  }
  function Intent$2(n,a$3)
  {
   return DialogueModule.Intent_(d,n,a$3);
  }
  DialogueModule.debugInterpreterStart(d,function(m$1)
  {
   Symptoms.debug(m$1);
  },Symptoms.name());
  m=DialogueModule.frame(d.$4);
  if(m.$==1&&(a=NLU$1.Yes(m.$0),a!=null&&a.$==1&&(($2=DialogueModule.Response_(d,"painVideo",a.$0),$2!=null&&$2.$==1)&&m.$1.$==0)))
   d.$0["EchoHtml'"]("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SkAqOditKN0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
  else
   m.$==1&&(a$1=Intent$2("medjournal",m.$0),a$1!=null&&a$1.$==1&&(($4=a$1.$0[1],$4!=null&&$4.$==1)&&(m.$1.$==0&&($3=a$1.$0[1].$0,true))))?(say("ok I added that entry to your medication journal."),say("You should be careful not to take too many painkillers over a short period of time.")):m.$==1&&(a$2=DialogueModule.User_(d,m.$0),a$2!=null&&a$2.$==1&&(($6=Intent$2("kbquery",a$2.$0),$6!=null&&$6.$==1)&&(m.$1.$==0&&($5=a$2.$0,true))))?void 0:DialogueModule.didNotUnderstand(d,function(m$1)
   {
    Symptoms.debug(m$1);
   },Symptoms.name());
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   Symptoms.debug(m$1);
  },Symptoms.name());
 };
 Symptoms.debug=function(m)
 {
  ClientExtensions.debug(Symptoms.name(),m);
 };
 Symptoms.name=function()
 {
  SC$5.$cctor();
  return SC$5.name;
 };
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.name="Symptoms";
 };
 Journal.update$241$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("3"))("3");
 });
 Journal.update$239$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("2"))("2");
 });
 Journal.update$237$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("1"))("1");
 });
 Journal.update$199$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("3"))("3");
 });
 Journal.update$197$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("2"))("2");
 });
 Journal.update$195$96=Runtime.Curried3(function(trigger,$1,$2)
 {
  return(trigger("1"))("1");
 });
 Journal.update=function(d)
 {
  var cui,remove,trigger,writing_prompts,symptom_writing_prompts,m,$1,a,a$1,$2,a$2,a$3,a$4,a$5,$3,a$6,a$7,a$8,a$9,a$10,a$11,a$12,j,b,$4,a$13,a$14,$5,a$15,a$16,a$17,a$18,$6,a$19,a$20,a$21,a$22,a$23,a$24,a$25,j$1,b$1,$7,a$26,$8,$9,a$27,a$28,$10,$11,a$29,$12;
  function echo(t$1)
  {
   DialogueModule.echo(d,t$1);
  }
  function say(t$1)
  {
   DialogueModule.say(d,t$1);
  }
  function doc(a$30)
  {
   cui.EchoDoc(a$30);
  }
  function prop(k)
  {
   return DialogueModule.prop(d,k);
  }
  function add(k,v)
  {
   return DialogueModule.add(d,function(m$1)
   {
    Journal.debug(m$1);
   },k,v);
  }
  function d$1(m$1)
  {
   Journal.debug(m$1);
  }
  function popu()
  {
   DialogueModule.popu(d,function(m$1)
   {
    Journal.debug(m$1);
   });
  }
  function d$2(m$1)
  {
   Journal.debug(m$1);
  }
  function t(d$3)
  {
   Journal.update(d$3);
  }
  function User$1(a$30)
  {
   return DialogueModule.User_(d,a$30);
  }
  function Intent$2(n,a$30)
  {
   return DialogueModule.Intent_(d,n,a$30);
  }
  function processEntry()
  {
   var text,writingPrompt,triples,lemmas,entities,emotionalTraits,behaviouralTraits,wje,b$2;
   text=prop("journalentry_text");
   writingPrompt=prop("journalentry_writingprompt");
   triples=prop("journalentry_triples");
   lemmas=prop("journalentry_mainlemmas");
   entities=prop("journalentry_entities");
   emotionalTraits=prop("journalentry_emotionaltraits");
   behaviouralTraits=prop("journalentry_behaviouraltraits");
   say(Global.String(writingPrompt));
   remove("journalentry_behaviouraltraits");
   remove("journalentry_emotionaltraits");
   remove("journalentry_entities");
   remove("journalentry_mainlemmas");
   remove("journalentry_triples");
   remove("journalentry_writingprompt");
   remove("journalentry_text");
   remove("journalentry");
   wje=WritingJournlEntry.New("l",Date.now(),writingPrompt,text,triples,lemmas,entities,behaviouralTraits,emotionalTraits);
   Concurrency.Start((b$2=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.addWritingJournalEntry:948476581",[wje]),function(a$30)
    {
     return a$30.$==1?Concurrency.Zero():Concurrency.Zero();
    });
   })),null);
  }
  function addEntry(e)
  {
   var b$2;
   b$2=null;
   return Concurrency.Delay(function()
   {
    add("journalentry_text",e);
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getTriples:604286546",[e]),function(a$30)
    {
     var triples;
     return a$30.$==1?Concurrency.Return({
      $:1,
      $0:a$30.$0
     }):(triples=a$30.$0,(Journal.debug((function($13)
     {
      return function($14)
      {
       return $13("Got "+Global.String($14)+" sentences from NLU server");
      };
     }(Global.id))(triples.get_Length())),add("journalentry_triples",triples),echo("Triples:"),Concurrency.Combine(Concurrency.For(triples,function(a$31)
     {
      echo((function($13)
      {
       return function($14)
       {
        return $13("<span style='color:white;background-color:#00FA9A'>"+Utils.printList(function($15)
        {
         return Chad$Web_GeneratedPrintf.p$3($15);
        },$14)+"</span>");
       };
      }(Global.id))(a$31));
      return Concurrency.Zero();
     }),Concurrency.Delay(function()
     {
      return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getMainLemmas:254363423",[e]),function(a$31)
      {
       var e$1,lemmas;
       return a$31.$==1?(e$1=a$31.$0,(Journal.debug(e$1),Concurrency.Return({
        $:1,
        $0:e$1
       }))):(lemmas=a$31.$0,Concurrency.Combine(Concurrency.For(lemmas,function(a$32)
       {
        Journal.debug((function($13)
        {
         return function($14)
         {
          return $13(Chad$Web_GeneratedPrintf.p$2($14));
         };
        }(Global.id))(a$32));
        return Concurrency.Zero();
       }),Concurrency.Delay(function()
       {
        add("journalentry_mainlemmas",lemmas);
        echo("Lemmas:");
        return Concurrency.Combine(Concurrency.For(lemmas,function(a$32)
        {
         echo((function($13)
         {
          return function($14)
          {
           return $13("<span style='color:white;background-color:#FFC0CB'>"+Chad$Web_GeneratedPrintf.p$2($14)+"</span>");
          };
         }(Global.id))(a$32));
         return Concurrency.Zero();
        }),Concurrency.Delay(function()
        {
         return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getEntities:-1414011567",[e]),function(a$32)
         {
          var e$2,entities;
          return a$32.$==1?(e$2=a$32.$0,(Journal.debug(e$2),Concurrency.Return({
           $:1,
           $0:e$2
          }))):(entities=a$32.$0,Concurrency.Combine(Concurrency.For(entities,function(a$33)
          {
           Journal.debug((function($13)
           {
            return function($14)
            {
             return $13(Chad$Web_GeneratedPrintf.p$1($14));
            };
           }(Global.id))(a$33));
           return Concurrency.Zero();
          }),Concurrency.Delay(function()
          {
           add("journalentry_entities",entities);
           echo("Entities:");
           return Concurrency.Combine(Concurrency.For(entities,function(a$33)
           {
            echo((function($13)
            {
             return function($14)
             {
              return $13("<span style='color:white;background-color:#7B68EE'>"+Chad$Web_GeneratedPrintf.p$1($14)+"</span>");
             };
            }(Global.id))(a$33));
            return Concurrency.Zero();
           }),Concurrency.Delay(function()
           {
            return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getEmotionalTraits:1894919880",[e]),function(a$33)
            {
             var e$3,t$1;
             return a$33.$==1?(e$3=a$33.$0,(Journal.debug(e$3),Concurrency.Return({
              $:1,
              $0:e$3
             }))):(t$1=a$33.$0,Concurrency.Combine(Concurrency.For(t$1,function(a$34)
             {
              Journal.debug((function($13)
              {
               return function($14)
               {
                return $13(Chad$Web_GeneratedPrintf.p$11($14));
               };
              }(Global.id))(a$34));
              return Concurrency.Zero();
             }),Concurrency.Delay(function()
             {
              add("journalentry_emotionaltraits",t$1);
              echo("Emotional Traits:");
              return Concurrency.Combine(Concurrency.For(t$1,function(a$34)
              {
               echo((function($13)
               {
                return function($14)
                {
                 return $13("<span style='color:white;background-color:#FF4500'>"+Chad$Web_GeneratedPrintf.p$11($14)+"</span>");
                };
               }(Global.id))(a$34));
               return Concurrency.Zero();
              }),Concurrency.Delay(function()
              {
               return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getBehavioralTraits:-153359710",[e]),function(a$34)
               {
                var e$4,t$2;
                return a$34.$==1?(e$4=a$34.$0,(Journal.debug(e$4),Concurrency.Return({
                 $:1,
                 $0:e$4
                }))):(t$2=a$34.$0,(add("journalentry_behaviouraltraits",t$2),Concurrency.Combine(Concurrency.For(t$2,function(a$35)
                {
                 Journal.debug((function($13)
                 {
                  return function($14)
                  {
                   return $13(Chad$Web_GeneratedPrintf.p$12($14));
                  };
                 }(Global.id))(a$35));
                 return Concurrency.Zero();
                }),Concurrency.Delay(function()
                {
                 echo("Behavioral Traits:");
                 return Concurrency.Combine(Concurrency.For(t$2,function(a$35)
                 {
                  echo((function($13)
                  {
                   return function($14)
                   {
                    return $13("<span style='color:white;background-color:#FFFF00'>"+Chad$Web_GeneratedPrintf.p$12($14)+"</span>");
                   };
                  }(Global.id))(a$35));
                  return Concurrency.Zero();
                 }),Concurrency.Delay(function()
                 {
                  return Concurrency.Return({
                   $:0,
                   $0:null
                  });
                 }));
                }))));
               });
              }));
             })));
            });
           }));
          })));
         });
        }));
       })));
      });
     }))));
    });
   });
  }
  DialogueModule.debugInterpreterStart(d,function(m$1)
  {
   Journal.debug(m$1);
  },Journal.name());
  cui=d.$0;
  remove=function(k)
  {
   DialogueModule.remove(d,d$1,k);
  };
  trigger=Runtime.Curried(DialogueModule.trigger,2,[d,d$2,t]);
  writing_prompts=List.ofArray(["Describe a place that makes me feel fearful or angry.","Something happened in the past week that made me feel angry or upset","I remember this dream I had\ufffd"]);
  symptom_writing_prompts=List.ofArray(["Describe the symptoms you are having right now.","Describe the symptoms you have had for the past month.","Describe any symptoms that your condition causes."]);
  m=DialogueModule.frame(d.$4);
  if(m.$==1&&(a=User$1(m.$0),a!=null&&a.$==1&&(a$1=Intent$2("journal",a.$0),a$1!=null&&a$1.$==1&&(a$1.$0[1]==null&&m.$1.$==0))))
   {
    say("Choose one of the following the writing prompts:");
    cui.Say(writing_prompts);
    echo((function($13)
    {
     return function($14)
     {
      return $13("1. "+Utils.toSafe($14));
     };
    }(Global.id))(writing_prompts.get_Item(0)));
    echo((function($13)
    {
     return function($14)
     {
      return $13("2. "+Utils.toSafe($14));
     };
    }(Global.id))(writing_prompts.get_Item(1)));
    echo((function($13)
    {
     return function($14)
     {
      return $13("3. "+Utils.toSafe($14));
     };
    }(Global.id))(writing_prompts.get_Item(2)));
    doc(Doc.Concat([Doc.Element("ol",[ClientExtensions.cls("pagination")],[Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return(trigger("1"))("1");
     };
    })],[Doc.TextNode("1")])]),Doc.TextNode("     "),Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return(trigger("2"))("2");
     };
    })],[Doc.TextNode("2")])]),Doc.TextNode("     "),Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return(trigger("3"))("3");
     };
    })],[Doc.TextNode("3")])])])]));
   }
  else
   m.$==1&&(a$2=User$1(m.$0),a$2!=null&&a$2.$==1&&(a$3=NLU$1.Number(a$2.$0),a$3!=null&&a$3.$==1&&(m.$1.$==1&&(a$4=User$1(m.$1.$0),a$4!=null&&a$4.$==1&&(a$5=Intent$2("journal",a$4.$0),a$5!=null&&a$5.$==1&&(a$5.$0[1]==null&&(m.$1.$1.$==0&&($2=a$3.$0,true))))))))?$2<=0||$2>3?say("Choose a writing prompt from 1 to 3."):(add("journalentry",true),add("journalentry_writingprompt",$2),echo((function($13)
   {
    return function($14)
    {
     return $13("<span style='color:white;background-color:#7B68EE'>"+Utils.prettyPrint($14)+"</span>");
    };
   }(Global.id))(writing_prompts.get_Item($2-1))),say("Enter your journal entry and I'll analyze it and add it to your journal.")):m.$==1&&(a$6=User$1(m.$0),a$6!=null&&a$6.$==1&&(a$7=Intent$2("journal",a$6.$0),a$7!=null&&a$7.$==1&&(a$8=NLU$1.Entity1Of1("journal_entry",a$7.$0[1]),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(a$9=User$1(m.$1.$0),a$9!=null&&a$9.$==1&&(a$10=NLU$1.Number(a$9.$0),a$10!=null&&a$10.$==1&&(m.$1.$1.$==1&&(a$11=User$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(a$12=Intent$2("journal",a$11.$0),a$12!=null&&a$12.$==1&&(a$12.$0[1]==null&&(m.$1.$1.$1.$==0&&($3=[a$8.$0,a$10.$0],true))))))))))))?(j=$3[0],popu(),Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    say("Ok let me analyze what you've written and add that to your journal.");
    return Concurrency.Bind(addEntry(j.get_Value()),function(a$30)
    {
     return a$30.$==1?(say("Sorry I was not able to add your journal entry. Could you try again? Press the up arrow to return to the text you just wrote."),Concurrency.Zero()):(popu(),popu(),processEntry(),Concurrency.Zero());
    });
   })),null)):m.$==1&&(a$13=User$1(m.$0),a$13!=null&&a$13.$==1&&(a$14=Intent$2("symptom_journal",a$13.$0),a$14!=null&&a$14.$==1&&(a$14.$0[1]==null&&m.$1.$==0)))?(say("Choose one of the following the writing prompts:"),echo("Choose one of the following the writing prompts for your symptom journal:"),cui.Say(symptom_writing_prompts),echo((function($13)
   {
    return function($14)
    {
     return $13("1. "+Utils.toSafe($14));
    };
   }(Global.id))(symptom_writing_prompts.get_Item(0))),echo((function($13)
   {
    return function($14)
    {
     return $13("2. "+Utils.toSafe($14));
    };
   }(Global.id))(symptom_writing_prompts.get_Item(1))),echo((function($13)
   {
    return function($14)
    {
     return $13("3. "+Utils.toSafe($14));
    };
   }(Global.id))(symptom_writing_prompts.get_Item(2))),doc(Doc.Concat([Doc.Element("ol",[ClientExtensions.cls("pagination")],[Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
   {
    return function()
    {
     return(trigger("1"))("1");
    };
   })],[Doc.TextNode("1")])]),Doc.TextNode("     "),Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
   {
    return function()
    {
     return(trigger("2"))("2");
    };
   })],[Doc.TextNode("2")])]),Doc.TextNode("     "),Doc.Element("li",[ClientExtensions.cls("page-item")],[Doc.Element("a",[ClientExtensions.cls("page-link"),ClientExtensions.href("#"),AttrProxy.HandlerImpl("click",function()
   {
    return function()
    {
     return(trigger("3"))("3");
    };
   })],[Doc.TextNode("3")])])])]))):m.$==1&&(a$15=User$1(m.$0),a$15!=null&&a$15.$==1&&(a$16=NLU$1.Number(a$15.$0),a$16!=null&&a$16.$==1&&(m.$1.$==1&&(a$17=User$1(m.$1.$0),a$17!=null&&a$17.$==1&&(a$18=Intent$2("symptom_journal",a$17.$0),a$18!=null&&a$18.$==1&&(a$18.$0[1]==null&&(m.$1.$1.$==0&&($5=a$16.$0,true))))))))?$5<=0||$5>3?say("Choose a writing prompt from 1 to 3."):(add("journalentry",true),add("journalentry_writingprompt",$5),echo((function($13)
   {
    return function($14)
    {
     return $13("<span style='color:white;background-color:#7B68EE'>"+Utils.prettyPrint($14)+"</span>");
    };
   }(Global.id))(symptom_writing_prompts.get_Item($5-1))),say("Enter the symptoms you are having and I'll analyze it and add it to your journal.")):m.$==1&&(a$19=User$1(m.$0),a$19!=null&&a$19.$==1&&(a$20=Intent$2("journal",a$19.$0),a$20!=null&&a$20.$==1&&(a$21=NLU$1.Entity1Of1("journal_entry",a$20.$0[1]),a$21!=null&&a$21.$==1&&(m.$1.$==1&&(a$22=User$1(m.$1.$0),a$22!=null&&a$22.$==1&&(a$23=NLU$1.Number(a$22.$0),a$23!=null&&a$23.$==1&&(m.$1.$1.$==1&&(a$24=User$1(m.$1.$1.$0),a$24!=null&&a$24.$==1&&(a$25=Intent$2("symptom_journal",a$24.$0),a$25!=null&&a$25.$==1&&(a$25.$0[1]==null&&(m.$1.$1.$1.$==0&&($6=[a$21.$0,a$23.$0],true))))))))))))?(j$1=$6[0],popu(),Concurrency.Start((b$1=null,Concurrency.Delay(function()
   {
    say("Ok let me analyze your symptoms.");
    return Concurrency.Bind(addEntry(j$1.get_Value()),function(a$30)
    {
     return a$30.$==1?(say("Sorry I was not able to add your journal entry. Could you try again? Press the up arrow to return to the text you just wrote."),Concurrency.Zero()):(popu(),popu(),processEntry(),Concurrency.Zero());
    });
   })),null)):m.$==1&&(a$26=NLU$1.Yes(m.$0),a$26!=null&&a$26.$==1&&(($8=DialogueModule.Response_(d,"painVideo",a$26.$0),$8!=null&&$8.$==1)&&m.$1.$==0))?cui["EchoHtml'"]("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SkAqOditKN0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"):m.$==1&&(a$27=User$1(m.$0),a$27!=null&&a$27.$==1&&(a$28=Intent$2("medjournal",a$27.$0),a$28!=null&&a$28.$==1&&(($10=a$28.$0[1],$10!=null&&$10.$==1)&&(m.$1.$==0&&($9=a$28.$0[1].$0,true)))))?(say("ok I added that entry to your medication journal."),say("You should be careful not to take too many painkillers over a short period of time.")):m.$==1&&(a$29=User$1(m.$0),a$29!=null&&a$29.$==1&&(($12=Intent$2("kbquery",a$29.$0),$12!=null&&$12.$==1)&&(m.$1.$==0&&($11=a$29.$0,true))))?void 0:DialogueModule.didNotUnderstand(d,function(m$1)
   {
    Journal.debug(m$1);
   },Journal.name());
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   Journal.debug(m$1);
  },Journal.name());
 };
 Journal.debug=function(m)
 {
  ClientExtensions.debug(Journal.name(),m);
 };
 Journal.name=function()
 {
  SC$6.$cctor();
  return SC$6.name;
 };
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.name="Journal";
 };
 Tests.update=function(d)
 {
  var cui,handle,trigger,endt,ask,triggerJournal,testCategories,physicalHealthTests,mentalHealthTests,cognitiveTests,psychologicalTests,sdmtCharacters,m,$1,$2,$3,a,$4,$5,a$1,a$2,$6,a$3,$7,a$4,$8,a$5,$9,a$6,$10,a$7,$11,a$8,$12,a$9,$13,a$10,$14,a$11,$15,a$12,$16,a$13,$17,a$14,$18,a$15,$19,a$16,$20,a$17,$21,$22,a$18,a$19,$23,$24,$25,a$20,$26,$27,$28,$29,a$21,$30,$31,$32,$33,$34,$35,$36,$37;
  function echo(t$1)
  {
   DialogueModule.echo(d,t$1);
  }
  function say(t$1)
  {
   DialogueModule.say(d,t$1);
  }
  function doc(a$22)
  {
   cui.EchoDoc(a$22);
  }
  function add(k,v)
  {
   return DialogueModule.add(d,function(m$1)
   {
    Tests.debug(m$1);
   },k,v);
  }
  function popu()
  {
   DialogueModule.popu(d,function(m$1)
   {
    Tests.debug(m$1);
   });
  }
  function d$1(m$1)
  {
   Tests.debug(m$1);
  }
  function d$2(m$1)
  {
   Tests.debug(m$1);
  }
  function t(d$6)
  {
   Tests.update(d$6);
  }
  function d$3(m$1)
  {
   Tests.debug(m$1);
  }
  function d$4(m$1)
  {
   Tests.debug(m$1);
  }
  function menu(n,c,p,t$1)
  {
   return Questions.menu(d,"Tests",n,c,p,t$1);
  }
  function Intent$2(n,a$22)
  {
   return DialogueModule.Intent_(d,n,a$22);
  }
  function Response(n,a$22)
  {
   return DialogueModule.Response_(d,n,a$22);
  }
  function d$5(m$1)
  {
   Tests.debug(m$1);
  }
  DialogueModule.debugInterpreterStart(d,function(m$1)
  {
   Tests.debug(m$1);
  },Tests.name());
  cui=d.$0;
  handle=Runtime.Curried(DialogueModule.handle,2,[d,d$1]);
  trigger=Runtime.Curried(DialogueModule.trigger,2,[d,d$2,t]);
  endt=Runtime.Curried(DialogueModule.endt,2,[d,d$3]);
  ask=function(q)
  {
   Questions.ask(d,d$4,q);
  };
  triggerJournal=Runtime.Curried(DialogueModule.trigger,2,[d,d$5,function(d$6)
  {
   Journal.update(d$6);
  }]);
  testCategories=List.ofArray(["Physical Health Tests","Mental Health Tests","Cognitive Tests","Psychological Tests"]);
  physicalHealthTests=List.ofArray(["Bladder Control Scale","Bowel Control Scale","Modified Fatigue Impact Scale","MOS Pain Effects Scale","Sexual Satisfaction Scale"]);
  mentalHealthTests=List.ofArray(["Mental Health Inventory","Modified Social Support Survey"]);
  cognitiveTests=List.ofArray(["Perceived Deficits Questionnaire","Paced Auditory Serial Test","Single Digit Modality Test"]);
  psychologicalTests=List.ofArray(["Beck's Depression Inventory"]);
  sdmtCharacters=List.ofArray(["\u2540","\u2560","\u2599","\u25ae","\u25b3","\u25c9","\u25e0","\u25f0","\u2593"]);
  m=DialogueModule.frame(d.$4);
  if(m.$==1&&(($2=Intent$2("list_test_categories",m.$0),$2!=null&&$2.$==1)&&m.$1.$==0))
   (handle("list_test_categories"))(function()
   {
    ask(menu("menuTestCategories",testCategories,"Choose one of the test categories from the list.",trigger));
   });
  else
   m.$==1&&(a=Response("menuTestCategories",m.$0),a!=null&&a.$==1&&(($4=Intent$2("cancel",a.$0[0]),$4!=null&&$4.$==1)&&m.$1.$==0))?(endt("menuTestCategories"))(function()
   {
    doc(Doc.Concat([Bs.btnPrimary("tests",function()
    {
     return function()
     {
      return(trigger("list_test_categories"))("list_test_categories");
     };
    }),Doc.TextNode("     "),Bs.btnInfo("help",function()
    {
     return function()
     {
      return(trigger("help"))("help");
     };
    })]));
   }):m.$==1&&(a$1=Response("menuTestCategories",m.$0),a$1!=null&&a$1.$==1&&(a$2=NLU$1.Number(a$1.$0[0]),a$2!=null&&a$2.$==1&&(m.$1.$==0&&($5=a$2.$0,true))))?(endt("menuTestCategories"))(function()
   {
    if($5===1)
     ask(menu("menuPhysicalHealthTests",physicalHealthTests,"Choose a physical health test from the list.",trigger));
    else
     if($5===2)
      ask(menu("menuMentalHealthTests",mentalHealthTests,"Choose a mental health test from the list.",trigger));
     else
      if($5===3)
       ask(menu("menuCognitiveTests",cognitiveTests,"Choose a cognitive test from the list.",trigger));
      else
       if($5===4)
        ask(menu("menuPsychologicalTests",psychologicalTests,"Choose a psychological test from the list.",trigger));
       else
        say("Choose one of the test categories to see a list of tests available.");
   }):m.$==1&&(a$3=Response("menuPhysicalHealthTests",m.$0),a$3!=null&&a$3.$==1?($7=Intent$2("cancel",a$3.$0[0]),$7!=null&&$7.$==1)?m.$1.$==0:(a$4=Response("menuMentalHealthTests",m.$0),a$4!=null&&a$4.$==1?($8=Intent$2("cancel",a$4.$0[0]),$8!=null&&$8.$==1)?m.$1.$==0:(a$5=Response("menuCognitiveTests",m.$0),a$5!=null&&a$5.$==1?($9=Intent$2("cancel",a$5.$0[0]),$9!=null&&$9.$==1)?m.$1.$==0:(a$6=Response("menuPsychologicalTests",m.$0),a$6!=null&&a$6.$==1&&(($10=Intent$2("cancel",a$6.$0[0]),$10!=null&&$10.$==1)&&m.$1.$==0)):(a$7=Response("menuPsychologicalTests",m.$0),a$7!=null&&a$7.$==1&&(($11=Intent$2("cancel",a$7.$0[0]),$11!=null&&$11.$==1)&&m.$1.$==0))):(a$8=Response("menuCognitiveTests",m.$0),a$8!=null&&a$8.$==1?($12=Intent$2("cancel",a$8.$0[0]),$12!=null&&$12.$==1)?m.$1.$==0:(a$9=Response("menuPsychologicalTests",m.$0),a$9!=null&&a$9.$==1&&(($13=Intent$2("cancel",a$9.$0[0]),$13!=null&&$13.$==1)&&m.$1.$==0)):(a$10=Response("menuPsychologicalTests",m.$0),a$10!=null&&a$10.$==1&&(($14=Intent$2("cancel",a$10.$0[0]),$14!=null&&$14.$==1)&&m.$1.$==0)))):(a$11=Response("menuMentalHealthTests",m.$0),a$11!=null&&a$11.$==1?($15=Intent$2("cancel",a$11.$0[0]),$15!=null&&$15.$==1)?m.$1.$==0:(a$12=Response("menuCognitiveTests",m.$0),a$12!=null&&a$12.$==1?($16=Intent$2("cancel",a$12.$0[0]),$16!=null&&$16.$==1)?m.$1.$==0:(a$13=Response("menuPsychologicalTests",m.$0),a$13!=null&&a$13.$==1&&(($17=Intent$2("cancel",a$13.$0[0]),$17!=null&&$17.$==1)&&m.$1.$==0)):(a$14=Response("menuPsychologicalTests",m.$0),a$14!=null&&a$14.$==1&&(($18=Intent$2("cancel",a$14.$0[0]),$18!=null&&$18.$==1)&&m.$1.$==0))):(a$15=Response("menuCognitiveTests",m.$0),a$15!=null&&a$15.$==1?($19=Intent$2("cancel",a$15.$0[0]),$19!=null&&$19.$==1)?m.$1.$==0:(a$16=Response("menuPsychologicalTests",m.$0),a$16!=null&&a$16.$==1&&(($20=Intent$2("cancel",a$16.$0[0]),$20!=null&&$20.$==1)&&m.$1.$==0)):(a$17=Response("menuPsychologicalTests",m.$0),a$17!=null&&a$17.$==1&&(($21=Intent$2("cancel",a$17.$0[0]),$21!=null&&$21.$==1)&&m.$1.$==0)))))?DialogueModule["endt'"](d,function(m$1)
   {
    Tests.debug(m$1);
   },function()
   {
    ask(menu("menuTestCategories",testCategories,"Choose one of the test categories from the list.",trigger));
   }):m.$==1&&(a$18=Response("menuCognitiveTests",m.$0),a$18!=null&&a$18.$==1&&(a$19=NLU$1.Number(a$18.$0[0]),a$19!=null&&a$19.$==1&&(m.$1.$==0&&($22=a$19.$0,true))))?(endt("menuCognitiveTests"))(function()
   {
    if($22===2)
     {
      doc(Doc.TextNode("    "));
      say("You last took this test Monday. You're scheduled to take this test agan this week.");
      echo("The Paced Auditory Serial Addition Test (PASAT) is a measure of cognitive function that\r\n                          specifically assesses auditory information processing speed and flexibility, as well as calculation ability.");
      doc(Doc.Concat([Doc.TextNode("     "),Bs.btnPrimary("start",function()
      {
       return function()
       {
        return(trigger("start_test_pasat"))("start_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnInfo("about",function()
      {
       return function()
       {
        return(trigger("about_test_pasat"))("about_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnDark("my history",function()
      {
       return function()
       {
        return(trigger("history_test_pasat"))("history_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnSecondary("cancel",function()
      {
       return function()
       {
        return(trigger("cancel"))("cancel");
       };
      })]));
     }
    else
     if($22===3)
      {
       doc(Doc.TextNode("    "));
       say("You last took this test Monday. You're scheduled to take this test agan this week.");
       echo("The Single Digit Modalities Test (SDMT) is a measure of cognitive function that\r\n                          specifically assesses information processing speed and episodic memory.");
       doc(Doc.TextNode("     "));
       doc(Doc.Concat([Bs.btnPrimary("start",function()
       {
        return function()
        {
         return(trigger("start_test_sdmt"))("start_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnInfo("about",function()
       {
        return function()
        {
         return(trigger("about_test_sdmt"))("about_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnDark("my history",function()
       {
        return function()
        {
         return(trigger("history_test_sdmt"))("history_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnSecondary("cancel",function()
       {
        return function()
        {
         return(trigger("cancel"))("cancel");
        };
       })]));
      }
     else
      say("Choose a cognitive test from the list.");
   }):m.$==1&&(($24=Intent$2("start_test_pasat",m.$0),$24!=null&&$24.$==1)&&m.$1.$==0)?(handle("start_test_pasat"))(function()
   {
    say("You are going to hear a seriesof single digit numbers that will be presented at the rate of one every 3 seconds. \r\n                                     Listen for the first two numbers, add them up, and tell me your answer. \r\n                                     When you hear the next number, add it to the one you heard right before it. \r\n                                     Continue to add the next number to each preceding one. Remember you are not being asked to give me a running total, but rather the sum of the last two numbers that you heard.");
    echo("Listen to the instructions and click the Yes button when ready.");
    ask(new Question({
     $:0,
     $0:"verify_start_test_pasat",
     $1:Tests.name(),
     $2:{
      $:1,
      $0:function()
      {
       (trigger("verify"))("yes");
      },
      $1:function()
      {
       (trigger("reject"))("no");
      }
     },
     $3:null,
     $4:function()
     {
      say("Are you ready to begin?");
      echo("Are you ready to begin?");
     }
    }));
   }):m.$==1&&(a$20=NLU$1.Yes(m.$0),a$20!=null&&a$20.$==1&&(($26=Response("verify_start_test_pasat",a$20.$0),$26!=null&&$26.$==1)&&m.$1.$==0))?($("#testprofile").removeClass("invisible"),$("#testprofile-name").text("PASAT"),$(self.document.getElementById("#testprofile-timer")).asPieProgress(JQueryPieProgressOptions.New("pie_progress",0,120,0,120,1200,"linear",function()
   {
    var minutes,seconds;
    minutes=Operators.toInt(Math.floor(this.now/60));
    seconds=Operators.toInt(this.now%60);
    return Global.String(minutes)+": "+(seconds>10?Global.String(seconds):"0"+Global.String(seconds));
   })),$(self.document.getElementById("#testprofile-timer")).asPieProgress("start")):m.$==1&&(($28=Intent$2("start_test_sdmt",m.$0),$28!=null&&$28.$==1)&&m.$1.$==0)?(handle("start_test_sdmt"))(function()
   {
    say("You will see a sequence of 9 symbols. Using the symbol-digit key that you see displayed here, enter the 9 digits that match the symbol according to the key.");
    echo("Listen to the instructions and click the Yes button when ready.");
    doc(Doc.TextNode("    "));
    ask(new Question({
     $:0,
     $0:"verify_start_test_sdmt",
     $1:Tests.name(),
     $2:{
      $:1,
      $0:function()
      {
       (trigger("verify"))("yes");
      },
      $1:function()
      {
       (trigger("reject"))("no");
      }
     },
     $3:null,
     $4:Global.ignore
    }));
   }):m.$==1&&(a$21=NLU$1.Yes(m.$0),a$21!=null&&a$21.$==1&&(($30=Response("verify_start_test_sdmt",a$21.$0),$30!=null&&$30.$==1)&&m.$1.$==0))?(endt("verify_start_test_sdmt"))(function()
   {
    add("testentry",true);
    $("#testprofile").hasClass("invisible")?$("#testprofile").removeClass("invisible").addClass("visible"):void 0;
    doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],List.map(function(c)
    {
     return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
    },sdmtCharacters))]),Doc.Element("tbody",[],[Doc.Element("tr",[],List.mapi(function(i)
    {
     return Doc.Element("td",[AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(Global.String(i+1))]);
    },sdmtCharacters))])]));
    $(self.document.getElementById("pp1")).asPieProgress(JQueryPieProgressOptions.New("pie_progress",0,90,0,90,900,"linear",function()
    {
     var minutes,seconds;
     minutes=Operators.toInt(Math.floor(this.now/60));
     seconds=Operators.toInt(this.now%60);
     return Global.String(minutes)+": "+(seconds>10?Global.String(seconds):"0"+Global.String(seconds));
    }));
    say("You have 90 seconds to complete this round.");
    echo("Round 1");
    doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],Arrays.map(function(c)
    {
     return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
    },ClientExtensions.shuffleArray(Arrays.ofList(sdmtCharacters))))])]));
    doc(Doc.Concat([Doc.TextNode("    "),Bs.btnWarning("1",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("2",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("3",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("4",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("5",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("6",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("7",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("8",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("9",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnSuccess("next",function()
    {
     return function()
     {
      return(trigger("next_test_sdmt"))("next_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnDanger("stop",function()
    {
     return function()
     {
      return(trigger("stop_test_sdmt"))("stop_test_sdmt");
     };
    })]));
    $(self.document.getElementById("pp1")).asPieProgress("start");
    say("Enter the 9 digits corresponding to the symbols shown.");
   }):m.$==1&&(($32=Intent$2("r_test_sdmt",m.$0),$32!=null&&$32.$==1)&&m.$1.$==0)?(popu(),echo("Round 2"),$("#testprofile-round").text("Round 2"),doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],Arrays.map(function(c)
   {
    return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
   },ClientExtensions.shuffleArray(Arrays.ofList(sdmtCharacters))))])])),doc(Doc.Concat([Doc.TextNode("    "),Bs.btnWarning("1",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("2",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("3",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("4",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("5",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("6",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("7",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("8",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("9",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnSuccess("next",function()
   {
    return function()
    {
     return(trigger("next_test_sdmt"))("next_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnDanger("stop",function()
   {
    return function()
    {
     return(trigger("stop_test_sdmt"))("stop_test_sdmt");
    };
   })])),say("Enter the 9 digits corresponding to the symbols shown.")):m.$==1&&(($34=Intent$2("stop_test_sdmt",m.$0),$34!=null&&$34.$==1)&&m.$1.$==0)?(popu(),$(self.document.getElementById("pp1")).asPieProgress("stop"),doc(Doc.Concat([Bs.btnPrimary("knowledge",function()
   {
    return function()
    {
     return(trigger("list_kb_categories"))("list_kb_categories");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("tests",function()
   {
    return function()
    {
     return(trigger("list_test_categories"))("list_test_categories");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("symptoms",function()
   {
    return function()
    {
     return(triggerJournal("symptom_journal"))("symptom_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("mood",function()
   {
    return function()
    {
     return(triggerJournal("mood_journal"))("mood_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("caregiver",function()
   {
    return function()
    {
     return(triggerJournal("caregiver_journal"))("caregiver_journal");
    };
   }),Doc.TextNode("     "),Bs.btnSecondary("settings",function()
   {
    return function()
    {
     return(trigger("list_settings_categories"))("list_settings_categories");
    };
   }),Doc.TextNode("     "),Bs.btnInfo("help",function()
   {
    return function()
    {
     return(trigger("help"))("help");
    };
   })]))):m.$==1&&(($36=Intent$2("query",m.$0),$36!=null&&$36.$==1)?m.$1.$==0:($37=Intent$2("medication_journal",m.$0),$37!=null&&$37.$==1)&&m.$1.$==0)?Journal.update(d):DialogueModule.didNotUnderstand(d,function(m$1)
   {
    Tests.debug(m$1);
   },Tests.name());
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   Tests.debug(m$1);
  },Tests.name());
 };
 Tests.debug=function(m)
 {
  ClientExtensions.debug(Tests.name(),m);
 };
 Tests.name=function()
 {
  SC$7.$cctor();
  return SC$7.name;
 };
 SC$7.$cctor=function()
 {
  SC$7.$cctor=Global.ignore;
  SC$7.name="Tests";
 };
 Accounting.update=function(d)
 {
  var cui,remove,handle,trigger,endt,ask,triggerJournal,testCategories,sdmtCharacters,accountTypes,m,$1,a,a$1,$2,$3,$4,a$2,a$3,$5,a$4,a$5,$6,$7,$8,a$6,a$7,$9,a$8,$10,$11,a$9,a$10,$12,a$11,$13,$14,$15,$16,$17,$18,a$12,$19,a$13,$20,a$14,$21,a$15,$22,a$16,$23,a$17,$24,a$18,$25,a$19,$26,a$20,$27,a$21,$28,a$22,$29,a$23,$30,a$24,$31,a$25,$32,a$26,$33,$34,a$27,a$28,$35,$36,$37,a$29,$38,$39,$40,$41,a$30,$42,$43,$44,$45,$46,$47,$48,$49;
  function echo(t$1)
  {
   DialogueModule.echo(d,t$1);
  }
  function say(t$1)
  {
   DialogueModule.say(d,t$1);
  }
  function doc(a$31)
  {
   cui.EchoDoc(a$31);
  }
  function have(k)
  {
   return DialogueModule.have(d,k);
  }
  function prop(k)
  {
   return DialogueModule.prop(d,k);
  }
  function add(k,v)
  {
   return DialogueModule.add(d,function(m$1)
   {
    Accounting.debug(m$1);
   },k,v);
  }
  function d$1(m$1)
  {
   Accounting.debug(m$1);
  }
  function popu()
  {
   DialogueModule.popu(d,function(m$1)
   {
    Accounting.debug(m$1);
   });
  }
  function d$2(m$1)
  {
   Accounting.debug(m$1);
  }
  function d$3(m$1)
  {
   Accounting.debug(m$1);
  }
  function t(d$7)
  {
   Accounting.update(d$7);
  }
  function d$4(m$1)
  {
   Accounting.debug(m$1);
  }
  function d$5(m$1)
  {
   Accounting.debug(m$1);
  }
  function menu(n,c,p,t$1)
  {
   return Questions.menu(d,"Tests",n,c,p,t$1);
  }
  function Intent$2(n,a$31)
  {
   return DialogueModule.Intent_(d,n,a$31);
  }
  function Response(n,a$31)
  {
   return DialogueModule.Response_(d,n,a$31);
  }
  function d$6(m$1)
  {
   Accounting.debug(m$1);
  }
  function showMainMenu()
  {
   doc(Doc.Concat([Bs.btnPrimary("accounts",function()
   {
    return function()
    {
     return(trigger("list_account_types"))("list_account_types");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("transactions",function()
   {
    return function()
    {
     return(trigger("list_test_categories"))("list_test_categories");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("budgets",function()
   {
    return function()
    {
     return(triggerJournal("symptom_journal"))("symptom_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("reports",function()
   {
    return function()
    {
     return(triggerJournal("mood_journal"))("mood_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("caregiver",function()
   {
    return function()
    {
     return(triggerJournal("caregiver_journal"))("caregiver_journal");
    };
   }),Doc.TextNode("     "),Bs.btnSecondary("settings",function()
   {
    return function()
    {
     return(trigger("list_settings_categories"))("list_settings_categories");
    };
   }),Doc.TextNode("     "),Bs.btnInfo("help",function()
   {
    return function()
    {
     return(trigger("help"))("help");
    };
   })]));
  }
  function showAccount(name,desc)
  {
   return doc(Doc.Element("div",[ClientExtensions.cls("jumbotron")],[Doc.Element("h1",[ClientExtensions.cls("display-4")],[Doc.TextNode(name)]),Doc.Element("p",[ClientExtensions.cls("lead")],[Doc.TextNode(desc)]),Doc.Element("hr",[ClientExtensions.cls("my-4")],[]),Bs.btnPrimary("balance",function()
   {
    return function()
    {
     return(trigger("account_balance"))("account_balance");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("journal",function()
   {
    return function()
    {
     return(trigger("account_journal"))("account_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("transactions",function()
   {
    return function()
    {
     return(trigger("account_transactions"))("account_transactions");
    };
   })]));
  }
  DialogueModule.debugInterpreterStart(d,function(m$1)
  {
   Accounting.debug(m$1);
  },Accounting.name());
  cui=d.$0;
  remove=function(k)
  {
   DialogueModule.remove(d,d$1,k);
  };
  handle=Runtime.Curried(DialogueModule.handle,2,[d,d$2]);
  trigger=Runtime.Curried(DialogueModule.trigger,2,[d,d$3,t]);
  endt=Runtime.Curried(DialogueModule.endt,2,[d,d$4]);
  ask=function(q)
  {
   Questions.ask(d,d$5,q);
  };
  triggerJournal=Runtime.Curried(DialogueModule.trigger,2,[d,d$6,function(d$7)
  {
   Journal.update(d$7);
  }]);
  testCategories=List.ofArray(["Physical Health Tests","Mental Health Tests","Cognitive Tests","Psychological Tests"]);
  List.ofArray(["Bladder Control Scale","Bowel Control Scale","Modified Fatigue Impact Scale","MOS Pain Effects Scale","Sexual Satisfaction Scale"]);
  List.ofArray(["Mental Health Inventory","Modified Social Support Survey"]);
  List.ofArray(["Perceived Deficits Questionnaire","Paced Auditory Serial Test","Single Digit Modality Test"]);
  List.ofArray(["Beck's Depression Inventory"]);
  sdmtCharacters=List.ofArray(["\u2540","\u2560","\u2599","\u25ae","\u25b3","\u25c9","\u25e0","\u25f0","\u2593"]);
  accountTypes=(new AjaxRemotingProvider.New()).Sync("Chad.Web:Chad.Web.GnuCash.getaccountTypes:426057875",[]);
  m=DialogueModule.frame(d.$4);
  if(m.$==1&&(a=Intent$2("query_txns",m.$0),a!=null&&a.$==1&&(a$1=NLU$1.Entity1OfAny("account_name",a.$0[1]),a$1!=null&&a$1.$==1&&(m.$1.$==0&&(a$1.$0.get_Value()==="checking account"&&($1=a$1.$0,true))))))
   (handle("query_txns"))(function()
   {
    cui["EchoHtml'"]("\r\n                        1.\r\n                        Date: 10/17/2021\r\n                        Description: Salary\r\n                        From: Income:Salary\r\n                        Deposit: $4000\r\n                        <hr>\r\n                        2.\r\n                        Date: 10/17/2021\r\n                        Description: Interest\r\n                        From: Income:Checking Interest\r\n                        Deposit: $4000\r\n                        <hr>\r\n                        3.\r\n                        Date: 10/21/2021\r\n                        Description: Dentist\r\n                        To: Expenses:Medical\r\n                        Deposit: $200\r\n                        <hr>\r\n                        4.\r\n                        Date: 10/24/2021\r\n                        Description: \r\n                        To: Expenses:Pets\r\n                        Deposit: $56\r\n                    ");
    say("\r\n                        Here are the last 10 transactions for Bank:Checking Account.\r\n                        1.\r\n                        Date: 10/17/2021\r\n                        Description: Salary\r\n                        From: Income:Salary\r\n                        Deposit: $4000\r\n                        2.\r\n                        Date: 10/17/2021\r\n                        Description: Interest\r\n                        From: Income:Checking Interest\r\n                        Deposit: $4000\r\n                        3.\r\n                        Date: 10/21/2021\r\n                        Description: Dentist\r\n                        To: Expenses:Medical\r\n                        Deposit: $200\r\n                        4.\r\n                        Date: 10/24/2021\r\n                        Description: \r\n                        To: Expenses:Pets\r\n                        Deposit: $56\r\n                    ");
   });
  else
   m.$==1&&(($3=Intent$2("create_budget",m.$0),$3!=null&&$3.$==1)&&m.$1.$==0)?(handle("create_budget"))(function()
   {
    say("Ok I added a weekly budget of $50 to Expenses:Pets.");
    echo("Ok I added a weekly budget of $50 to Expenses:Pets.");
   }):m.$==1&&(a$2=Intent$2("create_txn",m.$0),a$2!=null&&a$2.$==1&&(a$3=NLU$1.EntityManyOf1("account_name",a$2.$0[1]),a$3!=null&&a$3.$==1&&(m.$1.$==0&&($4=a$3.$0,true))))?(handle("create_txn"))(function()
   {
    say("Ok I added a withdrawal to Expenses:Pets of $56 from Bank:Checking Account on 10/24/2021.");
    echo("Ok I added a withdrawal to Expenses:Pets of $56 from Bank:Checking Account on 10/24/2021.");
    say("You've exceeded the weekly budget of $50 you set for this account.");
    cui["EchoHtml'"]("<span color:'purple'>You've exceeded the weekly budget of $50 you set for this account.</span>");
   }):m.$==1&&(a$4=Intent$2("create_account",m.$0),a$4!=null&&a$4.$==1&&(a$5=NLU$1.Entity1OfAny("account_name",a$4.$0[1]),a$5!=null&&a$5.$==1&&(m.$1.$==0&&(a$5.$0.get_Value()==="pets"&&($5=a$5.$0,true)))))?(handle("create_account"))(function()
   {
    say("OK I created an expense account called Pets");
    showAccount("Pets","");
   }):m.$==1&&(($7=Intent$2("accounts",m.$0),$7!=null&&$7.$==1)&&m.$1.$==0)?(handle("accounts"))(function()
   {
    ask(menu("menuAccountTypes",accountTypes,"These are the kinds of accounts that are available. Choose one of the account types from the list.",trigger));
   }):m.$==1&&(a$6=Response("menuAccountTypes",m.$0),a$6!=null&&a$6.$==1&&(a$7=NLU$1.Number(a$6.$0[0]),a$7!=null&&a$7.$==1&&(m.$1.$==0&&($8=a$7.$0,true))))?(endt("menuAccountTypes"))(function()
   {
    var at,accts;
    at=accountTypes.get_Item($8-1);
    if(have("accountType"))
     remove("accountType");
    add("accountType",at);
    accts=(new AjaxRemotingProvider.New()).Sync("Chad.Web:Chad.Web.GnuCash.getAccountsByCategory:928482710",[at]);
    if(have("accounts"))
     remove("accounts");
    add("accounts",accts);
    ask(menu("menuAccounts",List.map(function(a$31)
    {
     return a$31.Name;
    },accts),"Choose an account from the list. Click on the account name or enter the number of the account.",trigger));
   }):m.$==1&&(a$8=Response("menuAccountTypes",m.$0),a$8!=null&&a$8.$==1&&(($10=Intent$2("cancel",a$8.$0[0]),$10!=null&&$10.$==1)&&m.$1.$==0))?(endt("menuAccountTypes"))(function()
   {
    showMainMenu();
   }):m.$==1&&(a$9=Response("menuAccounts",m.$0),a$9!=null&&a$9.$==1&&(a$10=NLU$1.Number(a$9.$0[0]),a$10!=null&&a$10.$==1&&(m.$1.$==0&&($11=a$10.$0,true))))?(endt("menuAccounts"))(function()
   {
    var acct;
    acct=prop("accounts").get_Item($11-1);
    Accounting.debug((function($50)
    {
     return function($51)
     {
      return $50("Selected "+Utils.toSafe($51)+".");
     };
    }(Global.id))(acct.Name));
    add("account",acct.Name);
    doc(Doc.Element("div",[ClientExtensions.cls("jumbotron")],[Doc.Element("h1",[ClientExtensions.cls("display-4")],[Doc.TextNode(acct.Name)]),Doc.Element("p",[ClientExtensions.cls("lead")],[Doc.TextNode(acct.Description)]),Doc.Element("hr",[ClientExtensions.cls("my-4")],[]),Bs.btnPrimary("balance",function()
    {
     return function()
     {
      return(trigger("account_balance"))("account_balance");
     };
    }),Doc.TextNode("     "),Bs.btnPrimary("journal",function()
    {
     return function()
     {
      return(trigger("account_journal"))("account_journal");
     };
    }),Doc.TextNode("     "),Bs.btnPrimary("transactions",function()
    {
     return function()
     {
      return(trigger("account_transactions"))("account_transactions");
     };
    })]));
   }):m.$==1&&(a$11=Response("menuAccounts",m.$0),a$11!=null&&a$11.$==1&&(($13=Intent$2("cancel",a$11.$0[0]),$13!=null&&$13.$==1)&&m.$1.$==0))?(endt("menuAccounts"))(function()
   {
    ask(menu("menuAccountTypes",accountTypes,"These are the kinds of accounts that are available. Choose one of the account types from the list.",trigger));
   }):m.$==1&&(($15=Intent$2("account_balance",m.$0),$15!=null&&$15.$==1)&&m.$1.$==0)?(handle("account_balance"))(function()
   {
    var acctName;
    acctName=prop("account");
    Seq.find(function(a$31)
    {
     return a$31.Name===acctName;
    },prop("accounts"));
    if(acctName==="Checking Account")
     {
      say("The balance on your Checking Account is $3900.");
      echo("The balance on your Checking Account is $3900.");
     }
   }):m.$==1&&(($17=Intent$2("create_balance",m.$0),$17!=null&&$17.$==1)&&m.$1.$==0)?(handle("account_balance"))(function()
   {
    var acctName;
    acctName=prop("account");
    Seq.find(function(a$31)
    {
     return a$31.Name===acctName;
    },prop("accounts"));
    if(acctName==="Checking Account")
     {
      say("The balance on your Checking Account is $3900.");
      echo("The balance on your Checking Account is $3900.");
     }
   }):m.$==1&&(a$12=Response("menuPhysicalHealthTests",m.$0),a$12!=null&&a$12.$==1?($19=Intent$2("cancel",a$12.$0[0]),$19!=null&&$19.$==1)?m.$1.$==0:(a$13=Response("menuMentalHealthTests",m.$0),a$13!=null&&a$13.$==1?($20=Intent$2("cancel",a$13.$0[0]),$20!=null&&$20.$==1)?m.$1.$==0:(a$14=Response("menuCognitiveTests",m.$0),a$14!=null&&a$14.$==1?($21=Intent$2("cancel",a$14.$0[0]),$21!=null&&$21.$==1)?m.$1.$==0:(a$15=Response("menuPsychologicalTests",m.$0),a$15!=null&&a$15.$==1&&(($22=Intent$2("cancel",a$15.$0[0]),$22!=null&&$22.$==1)&&m.$1.$==0)):(a$16=Response("menuPsychologicalTests",m.$0),a$16!=null&&a$16.$==1&&(($23=Intent$2("cancel",a$16.$0[0]),$23!=null&&$23.$==1)&&m.$1.$==0))):(a$17=Response("menuCognitiveTests",m.$0),a$17!=null&&a$17.$==1?($24=Intent$2("cancel",a$17.$0[0]),$24!=null&&$24.$==1)?m.$1.$==0:(a$18=Response("menuPsychologicalTests",m.$0),a$18!=null&&a$18.$==1&&(($25=Intent$2("cancel",a$18.$0[0]),$25!=null&&$25.$==1)&&m.$1.$==0)):(a$19=Response("menuPsychologicalTests",m.$0),a$19!=null&&a$19.$==1&&(($26=Intent$2("cancel",a$19.$0[0]),$26!=null&&$26.$==1)&&m.$1.$==0)))):(a$20=Response("menuMentalHealthTests",m.$0),a$20!=null&&a$20.$==1?($27=Intent$2("cancel",a$20.$0[0]),$27!=null&&$27.$==1)?m.$1.$==0:(a$21=Response("menuCognitiveTests",m.$0),a$21!=null&&a$21.$==1?($28=Intent$2("cancel",a$21.$0[0]),$28!=null&&$28.$==1)?m.$1.$==0:(a$22=Response("menuPsychologicalTests",m.$0),a$22!=null&&a$22.$==1&&(($29=Intent$2("cancel",a$22.$0[0]),$29!=null&&$29.$==1)&&m.$1.$==0)):(a$23=Response("menuPsychologicalTests",m.$0),a$23!=null&&a$23.$==1&&(($30=Intent$2("cancel",a$23.$0[0]),$30!=null&&$30.$==1)&&m.$1.$==0))):(a$24=Response("menuCognitiveTests",m.$0),a$24!=null&&a$24.$==1?($31=Intent$2("cancel",a$24.$0[0]),$31!=null&&$31.$==1)?m.$1.$==0:(a$25=Response("menuPsychologicalTests",m.$0),a$25!=null&&a$25.$==1&&(($32=Intent$2("cancel",a$25.$0[0]),$32!=null&&$32.$==1)&&m.$1.$==0)):(a$26=Response("menuPsychologicalTests",m.$0),a$26!=null&&a$26.$==1&&(($33=Intent$2("cancel",a$26.$0[0]),$33!=null&&$33.$==1)&&m.$1.$==0)))))?DialogueModule["endt'"](d,function(m$1)
   {
    Accounting.debug(m$1);
   },function()
   {
    ask(menu("menuTestCategories",testCategories,"Choose one of the test categories from the list.",trigger));
   }):m.$==1&&(a$27=Response("menuCognitiveTests",m.$0),a$27!=null&&a$27.$==1&&(a$28=NLU$1.Number(a$27.$0[0]),a$28!=null&&a$28.$==1&&(m.$1.$==0&&($34=a$28.$0,true))))?(endt("menuCognitiveTests"))(function()
   {
    if($34===2)
     {
      doc(Doc.TextNode("    "));
      say("You last took this test Monday. You're scheduled to take this test agan this week.");
      echo("The Paced Auditory Serial Addition Test (PASAT) is a measure of cognitive function that\r\n                          specifically assesses auditory information processing speed and flexibility, as well as calculation ability.");
      doc(Doc.Concat([Doc.TextNode("     "),Bs.btnPrimary("start",function()
      {
       return function()
       {
        return(trigger("start_test_pasat"))("start_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnInfo("about",function()
      {
       return function()
       {
        return(trigger("about_test_pasat"))("about_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnDark("my history",function()
      {
       return function()
       {
        return(trigger("history_test_pasat"))("history_test_pasat");
       };
      }),Doc.TextNode("     "),Bs.btnSecondary("cancel",function()
      {
       return function()
       {
        return(trigger("cancel"))("cancel");
       };
      })]));
     }
    else
     if($34===3)
      {
       doc(Doc.TextNode("    "));
       say("You last took this test Monday. You're scheduled to take this test agan this week.");
       echo("The Single Digit Modalities Test (SDMT) is a measure of cognitive function that\r\n                          specifically assesses information processing speed and episodic memory.");
       doc(Doc.TextNode("     "));
       doc(Doc.Concat([Bs.btnPrimary("start",function()
       {
        return function()
        {
         return(trigger("start_test_sdmt"))("start_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnInfo("about",function()
       {
        return function()
        {
         return(trigger("about_test_sdmt"))("about_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnDark("my history",function()
       {
        return function()
        {
         return(trigger("history_test_sdmt"))("history_test_sdmt");
        };
       }),Doc.TextNode("     "),Bs.btnSecondary("cancel",function()
       {
        return function()
        {
         return(trigger("cancel"))("cancel");
        };
       })]));
      }
     else
      say("Choose a cognitive test from the list.");
   }):m.$==1&&(($36=Intent$2("start_test_pasat",m.$0),$36!=null&&$36.$==1)&&m.$1.$==0)?(handle("start_test_pasat"))(function()
   {
    say("You are going to hear a seriesof single digit numbers that will be presented at the rate of one every 3 seconds. \r\n                                     Listen for the first two numbers, add them up, and tell me your answer. \r\n                                     When you hear the next number, add it to the one you heard right before it. \r\n                                     Continue to add the next number to each preceding one. Remember you are not being asked to give me a running total, but rather the sum of the last two numbers that you heard.");
    echo("Listen to the instructions and click the Yes button when ready.");
    ask(new Question({
     $:0,
     $0:"verify_start_test_pasat",
     $1:Accounting.name(),
     $2:{
      $:1,
      $0:function()
      {
       (trigger("verify"))("yes");
      },
      $1:function()
      {
       (trigger("reject"))("no");
      }
     },
     $3:null,
     $4:function()
     {
      say("Are you ready to begin?");
      echo("Are you ready to begin?");
     }
    }));
   }):m.$==1&&(a$29=NLU$1.Yes(m.$0),a$29!=null&&a$29.$==1&&(($38=Response("verify_start_test_pasat",a$29.$0),$38!=null&&$38.$==1)&&m.$1.$==0))?($("#testprofile").removeClass("invisible"),$("#testprofile-name").text("PASAT"),$(self.document.getElementById("#testprofile-timer")).asPieProgress(JQueryPieProgressOptions.New("pie_progress",0,120,0,120,1200,"linear",function()
   {
    var minutes,seconds;
    minutes=Operators.toInt(Math.floor(this.now/60));
    seconds=Operators.toInt(this.now%60);
    return Global.String(minutes)+": "+(seconds>10?Global.String(seconds):"0"+Global.String(seconds));
   })),$(self.document.getElementById("#testprofile-timer")).asPieProgress("start")):m.$==1&&(($40=Intent$2("start_test_sdmt",m.$0),$40!=null&&$40.$==1)&&m.$1.$==0)?(handle("start_test_sdmt"))(function()
   {
    say("You will see a sequence of 9 symbols. Using the symbol-digit key that you see displayed here, enter the 9 digits that match the symbol according to the key.");
    echo("Listen to the instructions and click the Yes button when ready.");
    doc(Doc.TextNode("    "));
    ask(new Question({
     $:0,
     $0:"verify_start_test_sdmt",
     $1:Accounting.name(),
     $2:{
      $:1,
      $0:function()
      {
       (trigger("verify"))("yes");
      },
      $1:function()
      {
       (trigger("reject"))("no");
      }
     },
     $3:null,
     $4:Global.ignore
    }));
   }):m.$==1&&(a$30=NLU$1.Yes(m.$0),a$30!=null&&a$30.$==1&&(($42=Response("verify_start_test_sdmt",a$30.$0),$42!=null&&$42.$==1)&&m.$1.$==0))?(endt("verify_start_test_sdmt"))(function()
   {
    add("testentry",true);
    $("#testprofile").hasClass("invisible")?$("#testprofile").removeClass("invisible").addClass("visible"):void 0;
    doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],List.map(function(c)
    {
     return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
    },sdmtCharacters))]),Doc.Element("tbody",[],[Doc.Element("tr",[],List.mapi(function(i)
    {
     return Doc.Element("td",[AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(Global.String(i+1))]);
    },sdmtCharacters))])]));
    $(self.document.getElementById("pp1")).asPieProgress(JQueryPieProgressOptions.New("pie_progress",0,90,0,90,900,"linear",function()
    {
     var minutes,seconds;
     minutes=Operators.toInt(Math.floor(this.now/60));
     seconds=Operators.toInt(this.now%60);
     return Global.String(minutes)+": "+(seconds>10?Global.String(seconds):"0"+Global.String(seconds));
    }));
    say("You have 90 seconds to complete this round.");
    echo("Round 1");
    doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],Arrays.map(function(c)
    {
     return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
    },ClientExtensions.shuffleArray(Arrays.ofList(sdmtCharacters))))])]));
    doc(Doc.Concat([Doc.TextNode("    "),Bs.btnWarning("1",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("2",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("3",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("4",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("5",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("6",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("7",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("8",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnWarning("9",function()
    {
     return function()
     {
      return(trigger("r_test_sdmt"))("r_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnSuccess("next",function()
    {
     return function()
     {
      return(trigger("next_test_sdmt"))("next_test_sdmt");
     };
    }),Doc.TextNode("    "),Bs.btnDanger("stop",function()
    {
     return function()
     {
      return(trigger("stop_test_sdmt"))("stop_test_sdmt");
     };
    })]));
    $(self.document.getElementById("pp1")).asPieProgress("start");
    say("Enter the 9 digits corresponding to the symbols shown.");
   }):m.$==1&&(($44=Intent$2("r_test_sdmt",m.$0),$44!=null&&$44.$==1)&&m.$1.$==0)?(popu(),echo("Round 2"),$("#testprofile-round").text("Round 2"),doc(Doc.Element("table",[ClientExtensions.cls("table table-bordered")],[Doc.Element("thead",[],[Doc.Element("tr",[],Arrays.map(function(c)
   {
    return Doc.Element("th",[AttrProxy.Create("scope","col"),AttrProxy.Create("style","font-size:300%;text-align:center")],[Doc.TextNode(c)]);
   },ClientExtensions.shuffleArray(Arrays.ofList(sdmtCharacters))))])])),doc(Doc.Concat([Doc.TextNode("    "),Bs.btnWarning("1",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("2",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("3",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("4",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("5",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("6",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("7",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("8",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnWarning("9",function()
   {
    return function()
    {
     return(trigger("r_test_sdmt"))("r_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnSuccess("next",function()
   {
    return function()
    {
     return(trigger("next_test_sdmt"))("next_test_sdmt");
    };
   }),Doc.TextNode("    "),Bs.btnDanger("stop",function()
   {
    return function()
    {
     return(trigger("stop_test_sdmt"))("stop_test_sdmt");
    };
   })])),say("Enter the 9 digits corresponding to the symbols shown.")):m.$==1&&(($46=Intent$2("stop_test_sdmt",m.$0),$46!=null&&$46.$==1)&&m.$1.$==0)?(popu(),$(self.document.getElementById("pp1")).asPieProgress("stop"),doc(Doc.Concat([Bs.btnPrimary("knowledge",function()
   {
    return function()
    {
     return(trigger("list_kb_categories"))("list_kb_categories");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("tests",function()
   {
    return function()
    {
     return(trigger("list_test_categories"))("list_test_categories");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("symptoms",function()
   {
    return function()
    {
     return(triggerJournal("symptom_journal"))("symptom_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("mood",function()
   {
    return function()
    {
     return(triggerJournal("mood_journal"))("mood_journal");
    };
   }),Doc.TextNode("     "),Bs.btnPrimary("caregiver",function()
   {
    return function()
    {
     return(triggerJournal("caregiver_journal"))("caregiver_journal");
    };
   }),Doc.TextNode("     "),Bs.btnSecondary("settings",function()
   {
    return function()
    {
     return(trigger("list_settings_categories"))("list_settings_categories");
    };
   }),Doc.TextNode("     "),Bs.btnInfo("help",function()
   {
    return function()
    {
     return(trigger("help"))("help");
    };
   })]))):m.$==1&&(($48=Intent$2("query",m.$0),$48!=null&&$48.$==1)?m.$1.$==0:($49=Intent$2("medication_journal",m.$0),$49!=null&&$49.$==1)&&m.$1.$==0)?Journal.update(d):DialogueModule.didNotUnderstand(d,function(m$1)
   {
    Accounting.debug(m$1);
   },Accounting.name());
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   Accounting.debug(m$1);
  },Accounting.name());
 };
 Accounting.debug=function(m)
 {
  ClientExtensions.debug(Accounting.name(),m);
 };
 Accounting.name=function()
 {
  SC$8.$cctor();
  return SC$8.name;
 };
 SC$8.$cctor=function()
 {
  SC$8.$cctor=Global.ignore;
  SC$8.name="Accounting";
 };
 User.update=function(d)
 {
  var props,cui,handle,trigger,endt,ask,triggerAccounting,triggerJournal,m,$1,a,a$1,a$2,a$3,a$4,a$5,$2,a$6,a$7,$3,a$8,a$9,a$10,$4,a$11,a$12,a$13,$5,a$14,a$15,b,$6,a$16,a$17,a$18,$7,a$19,a$20,a$21;
  function say(t$1)
  {
   DialogueModule.say(d,t$1);
  }
  function doc(a$22)
  {
   cui.EchoDoc(a$22);
  }
  function sayRandom(p,v)
  {
   return DialogueModule.sayRandom(d,p,v);
  }
  function add(k,v)
  {
   return DialogueModule.add(d,function(m$1)
   {
    User.debug(m$1);
   },k,v);
  }
  function d$1(m$1)
  {
   User.debug(m$1);
  }
  function d$2(m$1)
  {
   User.debug(m$1);
  }
  function t(d$7)
  {
   User.update(d$7);
  }
  function d$3(m$1)
  {
   User.debug(m$1);
  }
  function d$4(m$1)
  {
   User.debug(m$1);
  }
  function _Intent$1(n,a$22)
  {
   return DialogueModule["Intent'_"](d,n,a$22);
  }
  function Response(n,a$22)
  {
   return DialogueModule.Response_(d,n,a$22);
  }
  function _Response(n,a$22)
  {
   return DialogueModule["Response'_"](d,n,a$22);
  }
  function d$5(m$1)
  {
   User.debug(m$1);
  }
  function d$6(m$1)
  {
   User.debug(m$1);
  }
  function switchUserQuestion(u)
  {
   return new Question({
    $:0,
    $0:"switchUser",
    $1:User.name(),
    $2:{
     $:1,
     $0:function()
     {
      (trigger("verify"))("yes");
     },
     $1:function()
     {
      (trigger("reject"))("no");
     }
    },
    $3:null,
    $4:function()
    {
     say((function($8)
     {
      return function($9)
      {
       return $8("Do you want me to switch to the user "+Utils.toSafe($9));
      };
     }(Global.id))(u));
    }
   });
  }
  function loginUser(u)
  {
   var b$1;
   sayRandom(NLG.waitRetrievePhrases(),"user name");
   Concurrency.Start((b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getUser:1440988159",[u]),function(a$22)
    {
     var user;
     return a$22==null?(say((function($8)
     {
      return function($9)
      {
       return $8("I did not find a user with the name "+Utils.toSafe($9)+".");
      };
     }(Global.id))(u)),ask(new Question({
      $:0,
      $0:"addUser",
      $1:User.name(),
      $2:{
       $:1,
       $0:function()
       {
        (trigger("verify"))("yes");
       },
       $1:function()
       {
        (trigger("reject"))("no");
       }
      },
      $3:null,
      $4:function()
      {
       add("addUser",u);
       say((function($8)
       {
        return function($9)
        {
         return $8("Do you want me to add the user "+Utils.toSafe($9)+"?");
        };
       }(Global.id))(u));
      }
     })),Concurrency.Zero()):(user=a$22.$0,Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.updateUserLastLogin:-278775852",[user.Name]),function()
     {
      sayRandom(NLG.helloUserPhrases(),user.Name);
      say("You have 2 new messages.");
      add("user",u);
      return Concurrency.Combine(user.LastLoggedIn!=null?Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.humanize:-359853309",[user.LastLoggedIn.$0]),function(a$23)
      {
       say((function($8)
       {
        return function($9)
        {
         return $8("You last logged in "+Utils.toSafe($9)+".");
        };
       }(Global.id))(a$23));
       return Concurrency.Zero();
      }):Concurrency.Zero(),Concurrency.Delay(function()
      {
       return Concurrency.Combine($("#profile").hasClass("invisible")?($("#profile").removeClass("invisible").addClass("visible"),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
       {
        doc(Doc.Concat([Bs.btnPrimary("accounts",function()
        {
         return function()
         {
          return(triggerAccounting("accounts"))("accounts");
         };
        }),Doc.TextNode("     "),Bs.btnPrimary("transactions",function()
        {
         return function()
         {
          return(triggerAccounting("transactions"))("list_test_categories");
         };
        }),Doc.TextNode("     "),Bs.btnPrimary("budgets",function()
        {
         return function()
         {
          return(triggerJournal("symptom_journal"))("symptom_journal");
         };
        }),Doc.TextNode("     "),Bs.btnPrimary("reports",function()
        {
         return function()
         {
          return(triggerJournal("mood_journal"))("mood_journal");
         };
        }),Doc.TextNode("     "),Bs.btnPrimary("invoices",function()
        {
         return function()
         {
          return(triggerJournal("caregiver_journal"))("caregiver_journal");
         };
        }),Doc.TextNode("     "),Bs.btnPrimary("documents",function()
        {
         return function()
         {
          return(triggerJournal("caregiver_journal"))("caregiver_journal");
         };
        }),Doc.TextNode("     "),Bs.btnSecondary("settings",function()
        {
         return function()
         {
          return(trigger("list_settings_categories"))("list_settings_categories");
         };
        }),Doc.TextNode("     "),Bs.btnInfo("help",function()
        {
         return function()
         {
          return(trigger("help"))("help");
         };
        })]));
        return Concurrency.Zero();
       }));
      }));
     }));
    });
   })),null);
  }
  function addUser(u)
  {
   var b$1;
   Concurrency.Start((b$1=null,Concurrency.Delay(function()
   {
    sayRandom(NLG.waitAddPhrases(),"user");
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.addUser:-1045813033",[u]),function(a$22)
    {
     return a$22.$==1?(ClientExtensions.error((((Runtime.Curried3(function($8,$9,$10)
     {
      return $8("Error adding user "+Utils.toSafe($9)+":"+Utils.toSafe($10)+".");
     }))(Global.id))(u))(a$22.$0)),say((function($8)
     {
      return function($9)
      {
       return $8("Sorry I was not able to add the user "+Utils.toSafe($9)+" to the system.");
      };
     }(Global.id))(u)),Concurrency.Zero()):(add("user",u),add("newuser",true),say((function($8)
     {
      return function($9)
      {
       return $8("Hello "+Utils.prettyPrint($9)+", nice to meet you.");
      };
     }(Global.id))(props.get_Item("user"))),say("Click on one of the buttons below to get a list of writing prompts."),Concurrency.Zero());
    });
   })),null);
  }
  DialogueModule.debugInterpreterStart(d,function(m$1)
  {
   User.debug(m$1);
  },User.name());
  props=d.$1;
  cui=d.$0;
  handle=Runtime.Curried(DialogueModule.handle,2,[d,d$1]);
  trigger=Runtime.Curried(DialogueModule.trigger,2,[d,d$2,t]);
  endt=Runtime.Curried(DialogueModule.endt,2,[d,d$3]);
  ask=function(q)
  {
   Questions.ask(d,d$4,q);
  };
  triggerAccounting=Runtime.Curried(DialogueModule.trigger,2,[d,d$5,function(d$7)
  {
   Accounting.update(d$7);
  }]);
  triggerJournal=Runtime.Curried(DialogueModule.trigger,2,[d,d$6,function(d$7)
  {
   Journal.update(d$7);
  }]);
  m=DialogueModule.frame(d.$4);
  if(m.$==1&&(a=_Intent$1("greet",m.$0),a!=null&&a.$==1?(a$1=NLU$1.Entity1OfAny("name",a.$0[1]),a$1!=null&&a$1.$==1?m.$1.$==0&&($1=a$1.$0,true):(a$2=_Intent$1("greet",m.$0),a$2!=null&&a$2.$==1&&(a$3=NLU$1.Entity1OfAny("contact",a$2.$0[1]),a$3!=null&&a$3.$==1&&(m.$1.$==0&&($1=a$3.$0,true))))):(a$4=_Intent$1("greet",m.$0),a$4!=null&&a$4.$==1&&(a$5=NLU$1.Entity1OfAny("contact",a$4.$0[1]),a$5!=null&&a$5.$==1&&(m.$1.$==0&&($1=a$5.$0,true))))))
   (handle("loginUser"))(function()
   {
    loginUser($1.get_Value());
   });
  else
   m.$==1&&(a$6=_Intent$1("hello",m.$0),a$6!=null&&a$6.$==1&&(a$7=NLU$1.Entity1OfAny("contact",a$6.$0[1]),a$7!=null&&a$7.$==1&&(m.$1.$==0&&($2=a$7.$0,true))))?(handle("loginUser"))(function()
   {
    loginUser($2.get_Value());
   }):m.$==1&&(a$8=NLU$1.No(m.$0),a$8!=null&&a$8.$==1&&(a$9=_Response("addUser",a$8.$0),a$9!=null&&a$9.$==1&&(a$10=NLU$1.PStr(a$9.$0[2]),a$10!=null&&a$10.$==1&&(m.$1.$==0&&($3=a$10.$0,true)))))?(endt("addUser"))(function()
   {
    say((function($8)
    {
     return function($9)
     {
      return $8("Ok I did not add the user "+Utils.toSafe($9)+". But you must login for me to help you.");
     };
    }(Global.id))($3));
   }):m.$==1&&(a$11=NLU$1.Yes(m.$0),a$11!=null&&a$11.$==1&&(a$12=_Response("addUser",a$11.$0),a$12!=null&&a$12.$==1&&(a$13=NLU$1.PStr(a$12.$0[2]),a$13!=null&&a$13.$==1&&(m.$1.$==0&&($4=a$13.$0,true)))))?(endt("addUser"))(function()
   {
    addUser($4);
   }):m.$==1&&(a$14=DialogueModule.Intent_(d,"greet",m.$0),a$14!=null&&a$14.$==1&&(a$14.$0[0]==null&&(a$15=NLU$1.Entity1Of1("name",a$14.$0[1]),a$15!=null&&a$15.$==1&&(m.$1.$==0&&($5=a$15.$0,true)))))?Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getUser:1440988159",[$5.get_Value()]),function(a$22)
    {
     return a$22==null?(say((function($8)
     {
      return function($9)
      {
       return $8("Sorry, the user "+Utils.toSafe($9)+" does not exist.");
      };
     }(Global.id))($5.get_Value())),Concurrency.Zero()):(ask(switchUserQuestion(a$22.$0.Name)),Concurrency.Zero());
    });
   })),null):m.$==1&&(a$16=NLU$1.Yes(m.$0),a$16!=null&&a$16.$==1&&(a$17=Response("switchUser",a$16.$0),a$17!=null&&a$17.$==1&&(a$18=NLU$1.PStr(a$17.$0[2]),a$18!=null&&a$18.$==1&&(m.$1.$==0&&($6=a$18.$0,true)))))?(props.set_Item("user",$6),DialogueModule.have(d,"newuser")?DialogueModule.remove(d,function(m$1)
   {
    User.debug(m$1);
   },"newuser"):void 0,say((function($8)
   {
    return function($9)
    {
     return $8("Ok I switched to user "+Utils.prettyPrint($9)+".");
    };
   }(Global.id))($6))):m.$==1&&(a$19=NLU$1.No(m.$0),a$19!=null&&a$19.$==1&&(a$20=Response("switchUser",a$19.$0),a$20!=null&&a$20.$==1&&(a$21=NLU$1.PStr(a$20.$0[2]),a$21!=null&&a$21.$==1&&(m.$1.$==0&&($7=a$21.$0,true)))))?say((function($8)
   {
    return function($9)
    {
     return $8("Ok I did not switch to user "+Utils.toSafe($9)+".");
    };
   }(Global.id))($7)):DialogueModule.didNotUnderstand(d,function(m$1)
   {
    User.debug(m$1);
   },User.name());
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   User.debug(m$1);
  },User.name());
 };
 User.debug=function(m)
 {
  ClientExtensions.debug(User.name(),m);
 };
 User.name=function()
 {
  SC$9.$cctor();
  return SC$9.name;
 };
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.name="User";
 };
 Main.update=function(d)
 {
  var utterances,dispatch,handle,Agenda,m,a,a$1,$1,$2,$3,$4,a$2,a$3,a$4,$5,a$5,$6,a$6,$7,$8,a$7,$9,$10,a$8,a$9,a$10,a$11,a$12,a$13,$11,$12,$13,u;
  function echo(t)
  {
   DialogueModule.echo(d,t);
  }
  function say(t)
  {
   DialogueModule.say(d,t);
  }
  function _sayRandom(p)
  {
   DialogueModule["sayRandom'"](d,p);
  }
  function d$1(m$1)
  {
   Main.debug(m$1);
  }
  function d$2(m$1)
  {
   Main.debug(m$1);
  }
  function d$3(m$1)
  {
   Main.debug(m$1);
  }
  function Intent$2(n,a$14)
  {
   return DialogueModule.Intent_(d,n,a$14);
  }
  function _Intent$1(n,a$14)
  {
   return DialogueModule["Intent'_"](d,n,a$14);
  }
  utterances=d.$4;
  Main.debug(((((Runtime.Curried(function($14,$15,$16,$17)
  {
   return $14("Module "+Utils.toSafe($15)+" starting utterances:"+Utils.prettyPrint($16)+", questions: "+Utils.prettyPrint($17)+".");
  },4))(Global.id))(Main.name()))(utterances))(d.$2));
  dispatch=Runtime.Curried(DialogueModule.dispatch,2,[d,d$1]);
  handle=Runtime.Curried(DialogueModule.handle,2,[d,d$2]);
  Agenda=Runtime.Curried(DialogueModule.Agenda_,2,[d,d$3]);
  m=DialogueModule.frame(utterances);
  a=(Agenda(User.name()))(m);
  if(a!=null&&a.$==1)
   {
    Main.debug((function($14)
    {
     return function($15)
     {
      return $14("Agenda is "+Chad$Web_GeneratedPrintf.p$27($15)+".");
     };
    }(Global.id))((d.get_DialogueQuestions())[0]));
    User.update(d);
   }
  else
   {
    a$1=(Agenda(Tests.name()))(m);
    a$1!=null&&a$1.$==1?(Main.debug((function($14)
    {
     return function($15)
     {
      return $14("Agenda is "+Chad$Web_GeneratedPrintf.p$27($15)+".");
     };
    }(Global.id))((d.get_DialogueQuestions())[0])),Tests.update(d)):m.$==1&&(($2=_Intent$1("help",m.$0),$2!=null&&$2.$==1)?m.$1.$==0:($3=Intent$2("help",m.$0),$3!=null&&$3.$==1)&&m.$1.$==0)?(say("The following commands are available."),echo("The following commands are available:"),echo("<span style='background-color:blue;color:white'>journal</span> - Show a list of writing prompts"),echo("<span style='background-color:blue;color:white'>debug-journal</span> <text-entry> - Show a set of debug info for a journal entry.")):m.$==1&&(a$2=(a$3=DialogueModule.PropNotSet_(d,"started",m.$0),a$3!=null&&a$3.$==1?{
     $:1,
     $0:a$3.$0
    }:null),a$2!=null&&a$2.$==1&&(a$4=_Intent$1("greet",a$2.$0),a$4!=null&&a$4.$==1&&(a$4.$0[1]==null&&m.$1.$==0)))?(DialogueModule.add(d,function(m$1)
    {
     Main.debug(m$1);
    },"started",true),(handle("greet"))(function()
    {
     _sayRandom(NLG.helloPhrases());
    })):m.$==1&&(a$5=_Intent$1("greet",m.$0),a$5!=null&&a$5.$==1&&(a$5.$0[1]==null&&m.$1.$==0))?(handle("greet"))(function()
    {
     say("Hello, tell me your name to get started.");
    }):m.$==1&&(a$6=_Intent$1("greet",m.$0),a$6!=null&&a$6.$==1&&(($7=NLU$1.Entity1Of1("name",a$6.$0[1]),$7!=null&&$7.$==1)&&m.$1.$==0))?(dispatch(User.name()))(function(d$4)
    {
     User.update(d$4);
    }):m.$==1&&(a$7=_Intent$1("hello",m.$0),a$7!=null&&a$7.$==1&&(($9=NLU$1.Entity1Of1("contact",a$7.$0[1]),$9!=null&&$9.$==1)&&m.$1.$==0))?(dispatch(User.name()))(function(d$4)
    {
     User.update(d$4);
    }):m.$==1&&(a$8=_Intent$1("greet",m.$0),a$8!=null&&a$8.$==1?(a$9=NLU$1.Entity1OfAny("name",a$8.$0[1]),a$9!=null&&a$9.$==1?m.$1.$==0&&($10=a$9.$0,true):(a$10=_Intent$1("greet",m.$0),a$10!=null&&a$10.$==1&&(a$11=NLU$1.Entity1OfAny("contact",a$10.$0[1]),a$11!=null&&a$11.$==1&&(m.$1.$==0&&($10=a$11.$0,true))))):(a$12=_Intent$1("greet",m.$0),a$12!=null&&a$12.$==1&&(a$13=NLU$1.Entity1OfAny("contact",a$12.$0[1]),a$13!=null&&a$13.$==1&&(m.$1.$==0&&($10=a$13.$0,true)))))?(dispatch(User.name()))(function(d$4)
    {
     User.update(d$4);
    }):m.$==1&&(($12=Intent$2("journal",m.$0),$12!=null&&$12.$==1)&&m.$1.$==0)?(dispatch(Journal.name()))(function(d$4)
    {
     Journal.update(d$4);
    }):m.$==1&&(m.$1.$==0&&((u=m.$0,u.get_Traits()!=null&&List.exists(function(t)
    {
     return t.get_Name()==="domain"&&t.get_Value()==="accounting";
    },u.get_Traits().$0))&&($13=m.$0,true)))?(dispatch(Accounting.name()))(function(d$4)
    {
     Accounting.update(d$4);
    }):DialogueModule.didNotUnderstand(d,function(m$1)
    {
     Main.debug(m$1);
    },Main.name());
   }
  DialogueModule.debugInterpreterEnd(d,function(m$1)
  {
   Main.debug(m$1);
  },Main.name());
 };
 Main.debug=function(m)
 {
  ClientExtensions.debug(Main.name(),m);
 };
 Main.name=function()
 {
  SC$10.$cctor();
  return SC$10.name;
 };
 SC$10.$cctor=function()
 {
  SC$10.$cctor=Global.ignore;
  SC$10.name="Main";
 };
 Client.run=function()
 {
  var term,interpreter,options,Dialogue$1,a;
  function push(m)
  {
   Client.Utterances().unshift(m);
   return Dialogue$1;
  }
  term=(interpreter=Runtime.ThisFunc(function(term$1,command)
  {
   return((Client.Main().get_Text())(term$1))(command);
  }),(options=Client.Main().get_Options(),void Global.$("#term").terminal(interpreter,options)));
  Client.set_CUI(CUI$1.New(Client.CUI().Voice,Client.CUI().Mic,term,Client.CUI().Avatar,Client.CUI().Caption,Client.CUI().AudioHandlers,Client.CUI().TypingDNA));
  Dialogue$1=new Dialogue({
   $:0,
   $0:Client.CUI(),
   $1:Client.Props(),
   $2:Client.Questions(),
   $3:Client.Output(),
   $4:Client.Utterances()
  });
  a=Doc.Concat([Bs.btnPrimary("hello",function()
  {
   return function()
   {
    Client.initMic(Client["main'"]);
    Client.initSpeech();
    return Main.update(push(NLU$1.quick_utter("greet")));
   };
  }),Doc.TextNode("     "),Bs.btnInfo("help",function()
  {
   return function()
   {
    Client.initMic(Client["main'"]);
    Client.initSpeech();
    return Main.update(push(NLU$1.quick_utter("help")));
   };
  })]);
  Client.CUI().EchoDoc(a);
  return Doc.get_Empty();
 };
 Client.Main=function()
 {
  SC$11.$cctor();
  return SC$11.Main;
 };
 Client["main'"]=function(c,c$1)
 {
  var Dialogue$1,intent,a,_trait,a$1,entity,a$2,$1,m;
  Dialogue$1=new Dialogue({
   $:0,
   $0:Client.CUI(),
   $1:Client.Props(),
   $2:Client.Questions(),
   $3:Client.Output(),
   $4:Client.Utterances()
  });
  Client.debug((((Runtime.Curried3(function($2,$3,$4)
  {
   return $2("Voice: "+Utils.prettyPrint($3)+" "+Utils.prettyPrint($4));
  }))(Global.id))(c))(c$1));
  intent=(a=Voice["Intent'"](c,c$1),a!=null&&a.$==1?{
   $:1,
   $0:a.$0
  }:null);
  _trait=(a$1=Voice["Trait'"](c$1),a$1!=null&&a$1.$==1?{
   $:1,
   $0:List.ofArray([a$1.$0])
  }:null);
  entity=(a$2=Voice["Entity'$1"](c$1),a$2!=null&&a$2.$==1?{
   $:1,
   $0:List.ofArray([a$2.$0])
  }:null);
  if(intent==null&&(_trait==null&&entity==null))
   ;
  else
   {
    Client.debug(((((Runtime.Curried(function($2,$3,$4,$5)
    {
     return $2("Voice: "+Chad$Web_GeneratedPrintf.p$14($3)+" "+Chad$Web_GeneratedPrintf.p$17($4)+" "+Chad$Web_GeneratedPrintf.p$19($5));
    },4))(Global.id))(intent))(_trait))(entity));
    Main.update((m=new Utterance$1({
     $:0,
     $0:"",
     $1:intent,
     $2:_trait,
     $3:entity
    }),(Client.Utterances().unshift(m),Dialogue$1)));
   }
 };
 Client.initMic=function(interpret)
 {
  var M,mic;
  Client.set_CUI((M={
   $:1,
   $0:new Wit.Microphone(document.getElementById("microphone"))
  },CUI$1.New(Client.CUI().Voice,M,Client.CUI().Term,Client.CUI().Avatar,Client.CUI().Caption,Client.CUI().AudioHandlers,Client.CUI().TypingDNA)));
  mic=Client.CUI().Mic.$0;
  mic.onconnecting=function()
  {
   Client.set_MicState(MicState.MicConnecting);
   return Client.debug("Mic connecting...");
  };
  mic.ondisconnected=function()
  {
   Client.set_MicState(MicState.MicDisconnected);
   return Client.debug("Mic disconnected.");
  };
  mic.onaudiostart=function()
  {
   Client.set_MicState(MicState.MicAudioStart);
   return Client.debug("Mic audio start...");
  };
  mic.onaudioend=function()
  {
   var e,i,kv,h;
   Client.debug("Mic audio end.");
   i=Client.CUI().AudioHandlers;
   e=i.GetEnumerator$1();
   try
   {
    while(e.MoveNext())
     {
      kv=e.Current();
      Client.debug((function($1)
      {
       return function($2)
       {
        return $1("Executing audio handler "+Utils.toSafe($2)+".");
       };
      }(Global.id))(kv.K));
      Client.set_MicState({
       $:7,
       $0:kv.K
      });
      h=kv.V;
      Client.CUI().AudioHandlers.Remove(kv.K);
      h(ClientExtensions.lastMicData());
     }
    return;
   }
   finally
   {
    e.Dispose();
   }
  };
  mic.onerror=function(s)
  {
   Client.set_MicState({
    $:6,
    $0:s
   });
   return Client.debug((function($1)
   {
    return function($2)
    {
     return $1("Mic error : "+Utils.toSafe($2)+".");
    };
   }(Global.id))(s));
  };
  mic.onready=function()
  {
   Client.set_MicState(MicState.MicReady);
   return Client.debug("Mic ready.");
  };
  mic.onresult=function(i,e)
  {
   return Client.ClientState().$==2?Client.echo("I'm still trying to understand what you said before."):Client.ClientState().$==0?ClientExtensions.error("Client is not intialized."):Client.MicState().$==7?null:!(i==null||e==null)?(Client.set_MicState({
    $:8,
    $0:i,
    $1:e
   }),Client.debug((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Mic result: "+Utils.prettyPrint($2)+" "+Utils.prettyPrint($3)+".");
   }))(Global.id))(i))(e)),interpret(i,e)):Client.debug("Mic: No result returned.");
  };
  mic.connect("AR6WFBX5MP46GIRF6S22HZLZ5I4I5UDW");
 };
 Client.sayRandom=function(t,phrases)
 {
  Client.say(NLG.getRandomPhrase(phrases,t));
 };
 Client.say=function(text)
 {
  Client.Output().unshift(text);
  Client["say'"](text);
 };
 Client["say'"]=function(text)
 {
  Client.CUI().Say$1(text);
 };
 Client.initSpeech=function()
 {
  var voices;
  voices=ClientExtensions.toArray(Client.synth().getVoices());
  if(Arrays.length(voices)>0)
   {
    Arrays.iter(function(v)
    {
     if(Unchecked.Equals(Client.CUI().Voice,null)&&(v.name.indexOf("Microsoft Zira")!=-1||v.name.toLowerCase().indexOf("female")!=-1))
      {
       Client.set_CUI(CUI$1.New({
        $:1,
        $0:v
       },Client.CUI().Mic,Client.CUI().Term,Client.CUI().Avatar,Client.CUI().Caption,Client.CUI().AudioHandlers,Client.CUI().TypingDNA));
       Client.debug((function($1)
       {
        return function($2)
        {
         return $1("Using browser speech synthesis voice "+Utils.toSafe($2)+".");
        };
       }(Global.id))(Client.CUI().Voice.$0.name));
      }
    },voices);
    !Unchecked.Equals(Client.CUI().Voice,null)?(Client.CUI().Avatar.nativeVoice=true,Client.CUI().Avatar.nativeVoiceName=Client.CUI().Voice.$0.name,Client.debug((function($1)
    {
     return function($2)
     {
      return $1("Using browser speech synthesis voice "+Utils.toSafe($2)+".");
     };
    }(Global.id))(Client.CUI().Voice.$0.name))):void 0;
   }
  if(Unchecked.Equals(Client.CUI().Voice,null))
   Client.debug("No female browser speech synthesis voice is available. Using CMU SLT Female voice via TTS.");
 };
 Client.synth=function()
 {
  SC$11.$cctor();
  return SC$11.synth;
 };
 Client.Utterances=function()
 {
  SC$11.$cctor();
  return SC$11.Utterances;
 };
 Client.Questions=function()
 {
  SC$11.$cctor();
  return SC$11.Questions;
 };
 Client.Output=function()
 {
  SC$11.$cctor();
  return SC$11.Output;
 };
 Client.Props=function()
 {
  SC$11.$cctor();
  return SC$11.Props;
 };
 Client.wait=function(f)
 {
  ClientExtensions["Terminal.Echo'"](Client.CUI().Term,"please wait");
  Client.CUI().Term.pause();
  f();
  Client.CUI().Term.resume();
 };
 Client.debug=function(m)
 {
  ClientExtensions.debug("CLIENT",m);
 };
 Client.echo=function(m)
 {
  ClientExtensions["Terminal.EchoHtml'"](Client.CUI().Term,(function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(Global.id))(m));
 };
 Client.cui=function()
 {
  return Client.CUI();
 };
 Client.ClientState=function()
 {
  SC$11.$cctor();
  return SC$11.ClientState;
 };
 Client.set_ClientState=function($1)
 {
  SC$11.$cctor();
  SC$11.ClientState=$1;
 };
 Client.MicState=function()
 {
  SC$11.$cctor();
  return SC$11.MicState;
 };
 Client.set_MicState=function($1)
 {
  SC$11.$cctor();
  SC$11.MicState=$1;
 };
 Client.CUI=function()
 {
  SC$11.$cctor();
  return SC$11.CUI;
 };
 Client.set_CUI=function($1)
 {
  SC$11.$cctor();
  SC$11.CUI=$1;
 };
 SC$11.$cctor=function()
 {
  var sdk,web,r;
  SC$11.$cctor=Global.ignore;
  function main(term,command)
  {
   var $1,e,b,a,e$1,b$1,a$1,e$2,b$2,a$2,dt,b$3,a$3,et,b$4,a$4,bt,b$5,$2,voices,$3,a$5,a$6,a$7,a$8,a$9,a$10,m,b$6,Dialogue$1,a$11,a$12,p;
   function push(m$1)
   {
    Client.Utterances().unshift(m$1);
    return Dialogue$1;
   }
   Client.set_CUI(CUI$1.New(Client.CUI().Voice,Client.CUI().Mic,term,Client.CUI().Avatar,Client.CUI().Caption,Client.CUI().AudioHandlers,Client.CUI().TypingDNA));
   if(Unchecked.Equals(Client.CUI().Mic,null))
    Client.initMic(Client["main'"]);
   if(Unchecked.Equals(Client.CUI().Voice,null))
    Client.initSpeech();
   if(Client.ClientState().$===0)
    Client.set_ClientState(ClientState.ClientReady);
   Dialogue$1=new Dialogue({
    $:0,
    $0:Client.CUI(),
    $1:Client.Props(),
    $2:Client.Questions(),
    $3:Client.Output(),
    $4:Client.Utterances()
   });
   if(Dialogue$1.get_Props().ContainsKey("journalentry"))
    {
     Client.debug("Routing input as journal entry.");
     Journal.update(push(new Utterance$1({
      $:0,
      $0:"journal",
      $1:{
       $:1,
       $0:new Intent$1({
        $:0,
        $0:"journal",
        $1:{
         $:1,
         $0:1
        }
       })
      },
      $2:null,
      $3:{
       $:1,
       $0:List.ofArray([new Entity$1({
        $:0,
        $0:"journal_entry",
        $1:"",
        $2:command,
        $3:{
         $:1,
         $0:1
        }
       })])
      }
     })));
    }
   else
    if(Dialogue$1.get_Props().ContainsKey("testentry"))
     {
      Client.debug("Routing input as test entry.");
      Tests.update(push(new Utterance$1({
       $:0,
       $0:"r_test_sdmt",
       $1:{
        $:1,
        $0:new Intent$1({
         $:0,
         $0:"r_test_sdmt",
         $1:{
          $:1,
          $0:1
         }
        })
       },
       $2:null,
       $3:null
      })));
     }
    else
     {
      a$11=Text.Blank(command);
      if(a$11!=null&&a$11.$==1)
       Client["say'"]("Tell me what you want me to do or ask me a question.");
      else
       {
        a$12=Text.Debug(command);
        if(a$12!=null&&a$12.$==1)
         {
          Client.debug((function($4)
          {
           return function($5)
           {
            return $4("Utterances: "+Utils.prettyPrint($5));
           };
          }(Global.id))(Client.Utterances()));
          Client.debug((function($4)
          {
           return function($5)
           {
            return $4("Questions: "+Utils.prettyPrint($5));
           };
          }(Global.id))(Client.Questions()));
          e=Client.Props().GetEnumerator$1();
          try
          {
           while(e.MoveNext())
            {
             p=e.Current();
             Client.debug((((Runtime.Curried3(function($4,$5,$6)
             {
              return $4(Utils.toSafe($5)+": "+Utils.prettyPrint($6));
             }))(Global.id))(p.K))(p.V));
            }
          }
          finally
          {
           e.Dispose();
          }
          Client.CUI().Wait((b=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.GnuCash.getAcccounts:-1212601436",[]),function(a$13)
           {
            return a$13==null?Concurrency.Zero():(Client.debug((function($4)
            {
             return function($5)
             {
              return $4("Accounts: "+Utils.printList(function($6)
              {
               return GeneratedPrintf.p($6);
              },$5));
             };
            }(Global.id))(a$13.$0)),Concurrency.Zero());
           });
          })));
         }
        else
         {
          a=Text.DebugEntities(command);
          a!=null&&a.$==1?(e$1=a.$0,Client.CUI().Wait((b$1=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getEntities:-1414011567",[e$1]),function(a$13)
           {
            var entities;
            return a$13.$==1?(Client.debug(a$13.$0),Concurrency.Zero()):(entities=a$13.$0,Concurrency.Combine(Concurrency.For(entities,function(a$14)
            {
             Client.debug((function($4)
             {
              return function($5)
              {
               return $4(Chad$Web_GeneratedPrintf.p$1($5));
              };
             }(Global.id))(a$14));
             return Concurrency.Zero();
            }),Concurrency.Delay(function()
            {
             Client.echo("Entities:");
             return Concurrency.For(entities,function(a$14)
             {
              Client.echo((function($4)
              {
               return function($5)
               {
                return $4("<span style='color:white;background-color:#7B68EE'>"+Chad$Web_GeneratedPrintf.p$1($5)+"</span>");
               };
              }(Global.id))(a$14));
              return Concurrency.Zero();
             });
            })));
           });
          })))):(a$1=Text.DebugLemmas(command),a$1!=null&&a$1.$==1?(e$2=a$1.$0,Client.CUI().Wait((b$2=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getMainLemmas:254363423",[e$2]),function(a$13)
           {
            var lemmas;
            return a$13.$==1?(Client.debug(a$13.$0),Concurrency.Zero()):(lemmas=a$13.$0,Concurrency.Combine(Concurrency.For(lemmas,function(a$14)
            {
             Client.debug((function($4)
             {
              return function($5)
              {
               return $4(Chad$Web_GeneratedPrintf.p$2($5));
              };
             }(Global.id))(a$14));
             return Concurrency.Zero();
            }),Concurrency.Delay(function()
            {
             Client.echo("Lemmas:");
             return Concurrency.For(lemmas,function(a$14)
             {
              Client.echo((function($4)
              {
               return function($5)
               {
                return $4("<span style='color:white;background-color:#FFC0CB'>"+Chad$Web_GeneratedPrintf.p$2($5)+"</span>");
               };
              }(Global.id))(a$14));
              return Concurrency.Zero();
             });
            })));
           });
          })))):(a$2=Text.DebugTriples(command),a$2!=null&&a$2.$==1?(dt=a$2.$0,Client.CUI().Wait((b$3=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getTriples:604286546",[dt]),function(a$13)
           {
            var c;
            return a$13.$==1?(Client.debug(a$13.$0),Concurrency.Zero()):(c=a$13.$0,Concurrency.Combine(Concurrency.For(c,function(a$14)
            {
             return Concurrency.For(a$14,function(a$15)
             {
              Client.debug((function($4)
              {
               return function($5)
               {
                return $4(Chad$Web_GeneratedPrintf.p$3($5));
               };
              }(Global.id))(a$15));
              return Concurrency.Zero();
             });
            }),Concurrency.Delay(function()
            {
             Client.echo("Triples:");
             return Concurrency.For(c,function(a$14)
             {
              Client.echo((function($4)
              {
               return function($5)
               {
                return $4("<span style='color:white;background-color:#00FA9A'>"+Utils.printList(function($6)
                {
                 return Chad$Web_GeneratedPrintf.p$3($6);
                },$5)+"</span>");
               };
              }(Global.id))(a$14));
              return Concurrency.Zero();
             });
            })));
           });
          })))):(a$3=Text.DebugEmotionalTraits(command),a$3!=null&&a$3.$==1?(et=a$3.$0,Client.CUI().Wait((b$4=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getEmotionalTraits:1894919880",[et]),function(a$13)
           {
            var t;
            return a$13.$==1?(Client.debug(a$13.$0),Concurrency.Zero()):(t=a$13.$0,Concurrency.Combine(Concurrency.For(t,function(a$14)
            {
             Client.debug((function($4)
             {
              return function($5)
              {
               return $4(Chad$Web_GeneratedPrintf.p$11($5));
              };
             }(Global.id))(a$14));
             return Concurrency.Zero();
            }),Concurrency.Delay(function()
            {
             Client.echo("Emotional Traits:");
             return Concurrency.For(t,function(a$14)
             {
              Client.echo((function($4)
              {
               return function($5)
               {
                return $4("<span style='color:white;background-color:#FF4500'>"+Chad$Web_GeneratedPrintf.p$11($5)+"</span>");
               };
              }(Global.id))(a$14));
              return Concurrency.Zero();
             });
            })));
           });
          })))):(a$4=Text.DebugBehavioralTraits(command),a$4!=null&&a$4.$==1?(bt=a$4.$0,Client.CUI().Wait((b$5=null,Concurrency.Delay(function()
          {
           return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("Chad.Web:Chad.Web.Server.getBehavioralTraits:-153359710",[bt]),function(a$13)
           {
            var t;
            return a$13.$==1?(Client.debug(a$13.$0),Concurrency.Zero()):(t=a$13.$0,Concurrency.Combine(Concurrency.For(t,function(a$14)
            {
             Client.debug((function($4)
             {
              return function($5)
              {
               return $4(Chad$Web_GeneratedPrintf.p$12($5));
              };
             }(Global.id))(a$14));
             return Concurrency.Zero();
            }),Concurrency.Delay(function()
            {
             Client.echo("Behavioral Traits:");
             return Concurrency.For(t,function(a$14)
             {
              Client.echo((function($4)
              {
               return function($5)
               {
                return $4("<span style='color:white;background-color:#FF4500'>"+Chad$Web_GeneratedPrintf.p$12($5)+"</span>");
               };
              }(Global.id))(a$14));
              return Concurrency.Zero();
             });
            })));
           });
          })))):($2=Text.Voices(command),$2!=null&&$2.$==1?(voices=ClientExtensions.toArray(ClientExtensions.speechSynthesis().getVoices()),Client["say'"]((function($4)
          {
           return function($5)
           {
            return $4("There are currently "+Global.String($5)+" voices installed on this computer or device.");
           };
          }(Global.id))(Arrays.length(voices))),Arrays.iteri(function(i,v)
          {
           return Client["say'"](((((Runtime.Curried(function($4,$5,$6,$7)
           {
            return $4("Voice "+Global.String($5)+". Name: "+Utils.toSafe($6)+", Local: "+Utils.prettyPrint($7)+".");
           },4))(Global.id))(i))(v.name))(v.localService));
          },voices)):Client.ClientState().$==1?(a$5=Text.QuickHello(command),(a$5!=null&&a$5.$==1?($3=a$5.$0,true):(a$6=Text.QuickHelp(command),a$6!=null&&a$6.$==1?($3=a$6.$0,true):(a$7=Text.QuickYes(command),a$7!=null&&a$7.$==1?($3=a$7.$0,true):(a$8=Text.QuickNo(command),a$8!=null&&a$8.$==1?($3=a$8.$0,true):(a$9=Text.QuickNumber(command),a$9!=null&&a$9.$==1&&($3=a$9.$0,true))))))?(Client.debug((function($4)
          {
           return function($5)
           {
            return $4("Quick Text: "+Chad$Web_GeneratedPrintf.p$13($5)+".");
           };
          }(Global.id))($3)),Main.update(push($3)),Client.set_ClientState(ClientState.ClientReady)):(a$10=Text.JournalEntry(command),a$10!=null&&a$10.$==1?(m=a$10.$0,Client.debug((function($4)
          {
           return function($5)
           {
            return $4("Journal entry: "+Chad$Web_GeneratedPrintf.p$13($5)+".");
           };
          }(Global.id))(m)),Main.update(push(m)),Client.set_ClientState(ClientState.ClientReady)):Client.CUI().Wait((b$6=null,Concurrency.Delay(function()
          {
           Client.set_ClientState(ClientState.ClientUnderstand);
           Text.getUtterance(command,function(meaning)
           {
            var a$13,m$1;
            a$13=Text.HasUtterance(meaning);
            if(a$13!=null&&a$13.$==1)
             {
              m$1=a$13.$0;
              Client.debug(((((Runtime.Curried(function($4,$5,$6,$7)
              {
               return $4("Text: Intent: "+Chad$Web_GeneratedPrintf.p$14($5)+", Traits: "+Chad$Web_GeneratedPrintf.p$17($6)+", Entities: "+Chad$Web_GeneratedPrintf.p$19($7)+".");
              },4))(Global.id))(m$1.get_Intent()))(m$1.get_Traits()))(m$1.get_Entities()));
              Main.update(push(m$1));
             }
            else
             {
              Client.debug("Text: Did not receive a meaning from the server.");
              Client["say'"]("Sorry I did not understand what you said.");
             }
           });
           Client.set_ClientState(ClientState.ClientReady);
           return Concurrency.Zero();
          }))))):Client.ClientState().$==0?ClientExtensions.error("Client is not initialized."):Client["say'"]("I'm still trying to understand what you said before."))))));
         }
       }
     }
   return self.scrollTo(0,Operators.toInt(self.document.body.scrollHeight));
  }
  SC$11.CUI=CUI$1.New(null,null,null,(SDK.applicationId="4277115329081938617",sdk=new Global.SDKConnection(),web=new Global.WebAvatar(),web.version=8.5,web.connection=sdk,web.avatar="20031372",web.voice="cmu-slt",web.voiceMod="default",web.width=$(self).width()<=479?90:175,web.createBox(),web.addMessage(""),web.processMessages(0),web),false,new Dictionary.New$5(),new Global.TypingDNA());
  SC$11.MicState=MicState.MicNotInitialized;
  SC$11.ClientState=ClientState.ClientNotInitialzed;
  SC$11.Props=new Dictionary.New$5();
  SC$11.Output=[];
  SC$11.Questions=[];
  SC$11.Utterances=[];
  SC$11.synth=Global.speechSynthesis;
  SC$11.Main=new Interpreter({
   $:0,
   $0:function(t)
   {
    Client["main'"](t[0],t[1]);
   },
   $1:[function($1)
   {
    return function($2)
    {
     return main($1,$2);
    };
   },(r={},r.name="Main",r.greetings="Welcome to Chad. Enter 'hello' or 'hello my name is...(you) to initialize speech.",r.prompt="&#x2328;  ",r)]
  });
 };
 Chad$Web_GeneratedPrintf.p$21=function($1)
 {
  return $1==null?"null":"Some "+Chad$Web_GeneratedPrintf.p$10($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$22=function($1)
 {
  return $1.$==5?"ConceptCompletion":$1.$==4?"Disjunctive":$1.$==3?"WritingPrompt ("+Utils.printList(Utils.prettyPrint,$1.$0)+", "+"<fun>"+")":$1.$==2?"Menu ("+Utils.printList(Utils.prettyPrint,$1.$0)+", "+"<fun>"+")":$1.$==1?"Verification (<fun>, <fun>)":"UserAuthentication "+Utils.prettyPrint($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$23=function($1)
 {
  return"Utterance' ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return Chad$Web_GeneratedPrintf.p$24($2);
  },$1.$1)+", "+Utils.printList(function($2)
  {
   return Chad$Web_GeneratedPrintf.p$25($2);
  },$1.$2)+", "+Utils.printList(function($2)
  {
   return Chad$Web_GeneratedPrintf.p$26($2);
  },$1.$3)+")";
 };
 Chad$Web_GeneratedPrintf.p$26=function($1)
 {
  return"Trait' ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$25=function($1)
 {
  return"Entity' ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")";
 };
 Chad$Web_GeneratedPrintf.p$24=function($1)
 {
  return"Intent' ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
 Chad$Web_GeneratedPrintf.p$27=function($1)
 {
  return"Question ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Chad$Web_GeneratedPrintf.p$22($1.$2)+", "+Chad$Web_GeneratedPrintf.p$28($1.$3)+", "+"<fun>"+")";
 };
 Chad$Web_GeneratedPrintf.p$28=function($1)
 {
  return $1==null?"null":"Some "+Utils.printArray(Utils.prettyPrint,$1.$0);
 };
 Chad$Web_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"OTHER":$1.$==4?"CASH":$1.$==3?"EXPENSE":$1.$==2?"ASSET":$1.$==1?"INCOME":"BANK";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("Guid = "+Utils.prettyPrint($1.Guid))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Chad$Web_GeneratedPrintf.p($1.Type))+"; "+("ParentGuid = "+Utils.prettyPrint($1.ParentGuid))+"; "+("Description = "+Utils.prettyPrint($1.Description))+"}";
 };
 Chad$Web_GeneratedPrintf.p$1=function($1)
 {
  return"ExpertAIEntity ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+Utils.prettyPrint($2[1])+")";
  },$1.$2)+", "+Utils.prettyPrint($1.$3)+")";
 };
 Chad$Web_GeneratedPrintf.p$2=function($1)
 {
  return"ExpertAILemma ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.printList(function($2)
  {
   return"("+Utils.prettyPrint($2[0])+", "+Utils.prettyPrint($2[1])+")";
  },$1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$6=function($1)
 {
  return"Relation ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==1?"Relation "+Chad$Web_GeneratedPrintf.p$6($1.$0):"Subject "+Utils.prettyPrint($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$7=function($1)
 {
  return"Verb "+Utils.prettyPrint($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$4=function($1)
 {
  return"Relation ("+Chad$Web_GeneratedPrintf.p$5($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Chad$Web_GeneratedPrintf.p$7($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==1?"Relation "+Chad$Web_GeneratedPrintf.p$6($1.$0):"Object "+Utils.prettyPrint($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$9=function($1)
 {
  return"Relation ("+Chad$Web_GeneratedPrintf.p$7($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Chad$Web_GeneratedPrintf.p$10($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$8=function($1)
 {
  return $1==null?"null":"Some "+Chad$Web_GeneratedPrintf.p$9($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$3=function($1)
 {
  return"Triple ("+Chad$Web_GeneratedPrintf.p$4($1.$0)+", "+Chad$Web_GeneratedPrintf.p$8($1.$1)+")";
 };
 Chad$Web_GeneratedPrintf.p$11=function($1)
 {
  return"EmotionalTrait ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(Utils.prettyPrint,$1.$1)+", "+Utils.prettyPrint($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$12=function($1)
 {
  return"BehavioralTrait ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(Utils.prettyPrint,$1.$1)+", "+Utils.prettyPrint($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$16=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$15=function($1)
 {
  return"Intent ("+Utils.prettyPrint($1.$0)+", "+Chad$Web_GeneratedPrintf.p$16($1.$1)+")";
 };
 Chad$Web_GeneratedPrintf.p$14=function($1)
 {
  return $1==null?"null":"Some "+Chad$Web_GeneratedPrintf.p$15($1.$0);
 };
 Chad$Web_GeneratedPrintf.p$18=function($1)
 {
  return"Trait ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Chad$Web_GeneratedPrintf.p$16($1.$2)+")";
 };
 Chad$Web_GeneratedPrintf.p$17=function($1)
 {
  return $1==null?"null":"Some "+Utils.printList(function($2)
  {
   return Chad$Web_GeneratedPrintf.p$18($2);
  },$1.$0);
 };
 Chad$Web_GeneratedPrintf.p$20=function($1)
 {
  return"Entity ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Chad$Web_GeneratedPrintf.p$16($1.$3)+")";
 };
 Chad$Web_GeneratedPrintf.p$19=function($1)
 {
  return $1==null?"null":"Some "+Utils.printList(function($2)
  {
   return Chad$Web_GeneratedPrintf.p$20($2);
  },$1.$0);
 };
 Chad$Web_GeneratedPrintf.p$13=function($1)
 {
  return"Utterance ("+Utils.prettyPrint($1.$0)+", "+Chad$Web_GeneratedPrintf.p$14($1.$1)+", "+Chad$Web_GeneratedPrintf.p$17($1.$2)+", "+Chad$Web_GeneratedPrintf.p$19($1.$3)+")";
 };
}(self));
