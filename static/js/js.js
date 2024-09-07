
/**/
if(window.location.href.substring(0,8)!="file:///" && window.location.href.substring(0,17)!="http://localhost/" && window.location.href.substring(0,17)!="https://localhost/" && window.location.href.substring(0,17)!="http://127.0.0.1/" && window.location.href.substring(0,17)!="https://127.0.0.1/"){



/*=======================================================Global======================================================================================*/
/*--cookie添加、查询--*/

    function setCookie(name,value,time)
    {
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;";
    };
    function getsec(str)
    {
       var str1=str.substring(1,str.length)*1;
       var str2=str.substring(0,1);
       if (str2=="s")
       {
            return str1*1000;
       }
       else if (str2=="h")
       {
           return str1*60*60*1000;
       }
       else if (str2=="d")
       {
           return str1*24*60*60*1000;
       };
    };
    function getCookie(name)
    {
            var offset = document.cookie.indexOf(name + "=");
            if (offset != -1)
            {
                offset += name.length + 1;
                var end = document.cookie.indexOf(";", offset);
                if (end == -1)
                {
                    end = document.cookie.length;
                }
                return document.cookie.substring(offset, end);
            }
            else
            {
                return "";
            };
    };

    function ttkefu_setCookie(name,value,time)
    {
        var strsec = ttkefu_getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;";
    };
    function ttkefu_getsec(str)
    {
       var str1=str.substring(1,str.length)*1;
       var str2=str.substring(0,1);
       if (str2=="s")

       {
            return str1*1000;
       }
       else if (str2=="h")
       {
           return str1*60*60*1000;
       }
       else if (str2=="d")
       {
           return str1*24*60*60*1000;
       };
    };
    function ttkefu_getCookie(name)
    {
            var offset = document.cookie.indexOf(name + "=");
            if (offset != -1)
            {
                offset += name.length + 1;
                var end = document.cookie.indexOf(";", offset);
                if (end == -1)
                {
                    end = document.cookie.length;
                }
                return document.cookie.substring(offset, end);
            }
            else
            {
                return "";
            };
    };

function ttkefu_gb2utf8(data){

	if(document.characterSet=="UTF-8"){
        if(data.length>30){
        	data=data.substring(0,30) +"...";
        }
    	return data;
    }
       
	return escape(data);

};

/*--来路、关键词、客户编号--*/
    var src1,sjs,ttmp,lailu,guanjianzi;
    function getlailu(){
        var url=document.referrer;
        var reg=new RegExp("https://","g");
        url=url.replace(reg,"");
        var righturl=url.split("/");
        return righturl[0]
    }
    lailu=getlailu();
    
    function getKeyword(){
        var url=document.referrer,reg=new RegExp("https://","g"),keyword="";
        url=url.replace(reg,"");
        var keywordsname = {s0:"word",s1:"q",s2:"p",s3:"w",s4:"query",s5:"name",s6:"_searchkey",s7:"wd",s8:"bs"};
        for(var one in keywordsname){
            keyword=getQueryString(url,keywordsname[one])
            if(keyword!=null&&keyword!="") return keyword
        }
        if(url.indexOf("so.com/")>=0 || url.indexOf("baidu.com/")>=0 || url.indexOf("soso.com/")>=0 || url.indexOf("sogou.com/")>=0 || url.indexOf("quark.sm.cn")>=0){        
            if(keyword=="" || keyword==null){            	
               keyword=window.document.title;
               keyword=getMinKW(keyword);
               if(keyword.length>200){
                  keyword=keyword.substring(0,200)+"...";
               }
               return keyword;
            }
        }
        if(keyword="") return null
    }
    function getMinKW(str){
         var TeShuFuHao = {s0:"-",s1:"_",s2:"|",s3:"/",s4:",",s5:" ",s6:"、",s7:"，"};
      for(var loopN=0;loopN<7;loopN++){
         for(var one in TeShuFuHao){
            var arrStr=str.split(TeShuFuHao[one]);
            str=arrStr[0];
        }
      }
      return str;
    }
    guanjianzi=getKeyword();
	if(guanjianzi){
    }else{
    	guanjianzi="";
    }
    function getkfltjs(){
        var jsonkfltjs=window.localStorage.getItem("kfltjs");
        var saveTimeCha=-1;
        var savesjs;
        if(jsonkfltjs==null) jsonkfltjs="";
        if(jsonkfltjs!=""){
          var json=eval("("+jsonkfltjs+")");
            savesjs=json.txt;
            var	millSecsDiff=parseInt(new Date()-Date.parse(json.Time));
            //计算出相差天数
             var daysDiff = Math.floor(millSecsDiff / (24 * 3600 * 1000));
             saveTimeCha=daysDiff*24;
            //计算出小时数
            var leave1 = millSecsDiff % (24 * 3600 * 1000);//计算天数后剩余的毫秒数
            var hoursDiff = Math.floor(leave1 / (3600 * 1000));
            saveTimeCha=saveTimeCha+hoursDiff;
        }
       // if (jsonkfltjs=="" || saveTimeCha>=24) {
        if (jsonkfltjs=="") {
            savesjs=17172024122641;
            //setCookie("kfltjs",sjs,"d3000");
            var date=new Date();
            var str=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    
            window.localStorage.setItem("kfltjs","{\"Time\":\'"+str+"',\"txt\":\'"+savesjs+"\'}");
        } 
        return savesjs;
    }
    sjs=getkfltjs();
    
/*--当前页面信息采集--*/
/*强制留名*/
var ttkefu_isleave_name="False";
/**/
var ttkefu_limitwbsite="",ttkefu_pageurl="",ttkefu_pageurl1="",ttkefu_pagetitle="",ttkefu_pagetitle1="",ttkefu_Ut="",ttkefu_minipagetitle="";



/*--页面事件注册--*/
function ttkefu_EventReg(){

	/*消息监听*/
    ttkefu_Event_Listener();
    
    /*元素拖动*/
    ttkefu_Event_Drag();
        
    /*音频播放结束事件*/
    ttkefu_Event_SoundEnded();
    
    
    
}
function ttkefu_Event_Listener(){
        /*消息监听*/
        if(window.addEventListener){
            //跨域消息传递
             window.addEventListener("message",ttkefu_HandleMsg,false);
             
        }else if(window.attachEvent){
            //兼容ie8之流
            window.attachEvent('onmessage',ttkefu_HandleMsg);
        }
}

function ttkefu_Event_Drag(){
	
    
	
}

function ttkefu_addEvent(obj,iEvent,EventHandler){
        if(window.addEventListener){
             obj.addEventListener(iEvent,EventHandler,false);
             
        }else if(window.attachEvent){
            obj.attachEvent('on'+iEvent,EventHandler);
        }
}

function ttkefu_Event_SooundImgClick(){

        /*图片点击事件wws*/
        var limg=document.getElementsByClassName("voceStyle");
        for(var i=0;i<limg.length;i++){
            var iImg=limg.item(i);
            if(!iImg.getAttribute("addevent")){
                    iImg.addEventListener("click",function(){
                            iImg.setAttribute("addevent","1");
                            //语言文件处理voicesrc
                            var ivoicesrc=iImg.getAttribute("voicesrc");
                            if(iImg.getAttribute("src").indexOf("sound_stop.png")>0){
                                //1.设置图标为播放状态					
                                iImg.setAttribute("src","/images/sound_play.gif");
                                
                                //2.播放音频文件
                                document.getElementById('soundfile').setAttribute("src",ivoicesrc);
                                document.getElementById('soundfile').play();
                                                    
                            }else{
                                //1.设置图标为停止状态	
                                iImg.setAttribute("src","/images/sound_stop.png");
                                
                                //2.去除音频文件
                                document.getElementById('soundfile').removeAttribute("src");
                            }
                    });
            }

        }
}

/*音频播放结束事件*/
function ttkefu_Event_SoundEnded(){
     if(document.getElementById('soundfile')==null){
        console.log("音频播放结束事件--注册失败");
     	return;
     }
    document.getElementById('soundfile').addEventListener('ended', function () { 
            var iSrc=document.getElementById('soundfile').getAttribute("src");
            //
            var limg=document.getElementsByClassName("voceStyle");
            for(var i=0;i<limg.length;i++){
                var iImg=limg.item(i);
                if(iImg.getAttribute("voicesrc")==iSrc){ 
                        //1.设置图标为停止状态	 
                        iImg.setAttribute("src","/images/sound_stop.png");
                } 
            }
    }, false);
}

/*--公用函数--*/
function ttkefu_IsNum(str){
	 /*大于等于0正整数*/
	return /^(0|([1-9]\d*))$/.test(str);
}
/*拖动*/
var ttkefu_diffX=0,ttkefu_diffY=0,ttkefu_Drag_Start=0;
function ttkefu_Drag(drag){







            var drag = document.getElementById(drag);
            // //点击某物体时，用drag对象即可，move和up是全局区域，
            // 也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)  
            drag.onmousedown = function(event){
			   ttkefu_Drag_Start=1;
			   console.log("drag.onmousedown");
               var event = event || window.event;  //兼容IE浏览器
               //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
               ttkefu_diffX = event.clientX - drag.offsetLeft;
               ttkefu_diffY = event.clientY - drag.offsetTop;
               if(typeof drag.setCapture !== 'undefined'){
                      drag.setCapture();
               }
            }
            drag.onmouseup = function(event){
			   ttkefu_Drag_Start=0;
			   console.log("drag.onmouseup");
            }		
			
            document.onmousemove = function(event){
				console.log("document.onmousemove");
				if(ttkefu_Drag_Start==1){
						var event = event || window.event;
						var moveX = event.clientX - ttkefu_diffX;
						var moveY = event.clientY - ttkefu_diffY;
						if(moveX < 0){
							moveX = 0
						}else if(moveX > window.innerWidth - drag.offsetWidth){
							moveX = window.innerWidth - drag.offsetWidth
						}
						if(moveY < 0){
							moveY = 0
						}else if(moveY > window.innerHeight - drag.offsetHeight){
							moveY =  window.innerHeight - drag.offsetHeight
						}
						drag.style.left = moveX + 'px';
						drag.style.top = moveY + 'px'
				}
            }
            
            document.onmouseup = function(event){
				console.log("document.onmouseup");
				if(ttkefu_Drag_Start==1){
						this.onmousemove = null;
						this.onmouseup = null;
						 //修复低版本ie bug  
						if(typeof drag.releaseCapture!='undefined'){  
						   drag.releaseCapture();  
						}  
				}
            }
}

/*渐隐渐现*/
var ttkefu_fadeOut_i=0
function ttkefu_fadeOut(ele,speed){
		clearTimeout(ttkefu_fadeOut_i);
        var ele=document.getElementById(ele);
        ele.style.opacity=1;
        var opacitynum=ele.style.opacity;
        
        var speed=speed-1000;
        ttkefu_fadeOut_i=setTimeout(function(){
        	ttkefu_opacityOff(ele,100)
        },speed);
}

function ttkefu_opacityOff(ele,speed){

	clearTimeout(ttkefu_fadeOut_i);
    
    if(ele.style.opacity>0){
        ele.style.opacity=ele.style.opacity-0.1;
        
        ttkefu_fadeOut_i=setTimeout(function(){
        	ttkefu_opacityOff(ele,100)
        },100);
    }
}

function ttkefu_fadeIn(ele,hideTime){

		clearTimeout(ttkefu_fadeOut_i);
        var ele=document.getElementById(ele);
        ele.style.display="";
        ele.style.opacity=0.1;
        
        ttkefu_opacityIn(ele,100,hideTime);
}
function ttkefu_opacityIn(ele,speed,hideTime){

	clearTimeout(ttkefu_fadeOut_i);
    if(ele.style.opacity<1){
        ele.style.opacity=parseFloat(ele.style.opacity)+0.1;
       // console.log("ttkefu_opacityIn_opacity:"+ele.style.opacity);
        
        ttkefu_fadeOut_i=setTimeout(function(){
        	ttkefu_opacityIn(ele,100,hideTime)
        },100);
    }else{
    	/*hideTime>0执行渐隐*/
        if(hideTime>0){
        	ttkefu_fadeOut(ele.id,hideTime);
        }
        
    }
}



/*正则区*/
function ttkefu_Replace_Img(str){
	return str.replace(/<\s?img[^>]*>/gi,'');
}

/*postMessage*/
function ttkefu_PostMessage(MsgData){
	/**/
    var vFraName=MsgData.FraName;
    
	/*frames[vFraName].postMessage(MsgData.Msg, '*');*/
    
    /*自定义网址状态:0.未能应用1.应用中*/
	
   		document.getElementById(vFraName).contentWindow.postMessage(MsgData.Msg, '*');
    
    
    
}
function ttkefu_HandleMsg(e){
    //
    if(console){
    	console.log("ttkefu_HandleMsg");
    	console.log(e);
    }
    var MsgData=e.data;
    if(MsgData.types){
    	  if(ttkefu_HandleMsg_JieTu){
    	  		ttkefu_HandleMsg_JieTu(MsgData);
          }
    }else{
    	  if(MsgData.ActName){
          		 
                 if(MsgData.ActName=="ttkefu_Ifa_MbMinWindow"){
               
                        /*手机迷你窗口*/
                         switch(MsgData.CmdKey){
                         
                            case "LinkParas_ttkefu_Ifa_MbMinWindow":
                            		/*记录对话连接-对话初始化完成*/
                                    var vLinkParas=MsgData.CmdVal;
                                    var vLinkParasAry=vLinkParas.split('|');
                                    var vKfId=vLinkParasAry[0];
                                    var vIcoStyle=vLinkParasAry[1];
                                    ttkefu_Mb_Min_LinkKfId_Set({KfId:vKfId});
                                    ttkefu_setCookie("ttkefu_Mb_Min_LinkIcoStyle",vIcoStyle,"d1");
                                    /*显示对话状态图标-隐藏其他图标*/
                                    ttkefu_Mb_MinWindow_TakingIco_Show();
                                    
                                    /*更新未读计数器以及弹出消息状态*/
                                    ttkefu_MinWidow_NoReadMsg_Contrl({row:1110});
                                    
                            break;
                            
                            case "state_ttkefu_Ifa_MbMinWindow":
                            		/*心跳-更新ttkefu_Mb_Min_LinkKfId*/
                                    ttkefu_Mb_MinWidow_LinkingSet();                   
                            break;
                         
                            case "Count_ttkefu_Ifa_MbMinWindow":
                                    /*更新未读记录数*/
                                    ttkefu_MinWidow_EditNoRead({Num:MsgData.CmdVal,row:1055});
                            break;
                            
                            case "Msg_ttkefu_Ifa_MbMinWindow":
                                    /*最新一条未读消息*/
                                    ttkefu_Mb_MinWidow_ShowMsg({Msg:MsgData.CmdVal,Name:MsgData.Name});
                            break;
                                                        
                            case "Shake_ttkefu_Ifa_MbMinWindow":
                                   ttkefuminitishiwrapper_MbMinWindowDisplay=1;
                                    /*震动*/
                                    ttkefu_Mb_MinWindow_Show();
                            break;
                            
                            
                            case "KfLx_ttkefu_Ifa_MbMinWindow":
                                    /*客服离线-手机版-小窗口-重置*/
                                    ttkefu_Mb_MinWindow_Reset();
                            break;
                            
                            case "KfLx_restLoad_ttkefu_Ifa_MbMinWindow":
                                    /*客服离线-手机版-小窗口-重置*/
                                    ttkefu_Mb_MinWindow_Reset();
                                    //重新加载页面
                                    ttkefu_Mb_Kf_Tan({icostyle:0,row:4788});
                                    
                            break;
                            
                            
                            case "KfEndTalking_ttkefu_Ifa_MbMinWindow":
                            		/*结束对话-手机版-小窗口-重置*/
                                    ttkefu_Mb_MinWindow_Reset();
                            break;
                            
                            
                         }
                 }
          }
    }
}


/*窗口打开 device:0.Pc 1.手机 || openstyle:0.大窗口 1.小窗口 || */
var ttkefu_fk_device="0",ttkefu_fk_pc_openstyle="0";

function ttkefu_WindowOpen(url,paras){
	var vleft="0";
    if(paras.left){
    	vleft=paras.left;
    }
    
    var vwidth="849px";
    if(paras.width){
    	vwidth=paras.width;
    }
    
    var vheight="619px";
    if(paras.height){
    	vheight=paras.height;
    }
    
	window.open(url,"57452","top=0,left="+vleft+",width="+vwidth+",height="+vheight+",scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes");

//    if(!document.getElementById("ttkefu_open_a")){
//        var vA=document.createElement("a");
//        vA.id="ttkefu_open_a";
//        vA.target="_blank";
//        document.getElementsByTagName("body")[0].appendChild(vA);
//    }
//    document.getElementById("ttkefu_open_a").style.display="none";
//    document.getElementById("ttkefu_open_a").setAttribute("href",url);
//    document.getElementById("ttkefu_open_a").click();
}

/*=====================================手机版=====================================*/
/*手机版-小窗口初始化*/
var G_ttkefu_Mb_Min_LinkKfId="";
if(ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")){
	G_ttkefu_Mb_Min_LinkKfId=ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")
}
var G_ttkefu_Mb_Min_IcoAndYq_Dispaly="",G_ttkefu_Mb_Min_TalkingIco_Dispaly="none";
if(G_ttkefu_Mb_Min_LinkKfId!=""){
	G_ttkefu_Mb_Min_IcoAndYq_Dispaly="none";
    G_ttkefu_Mb_Min_TalkingIco_Dispaly="";
}

function ttkefu_Mb_MinWindow_Init(){
        
    /*小窗口默认地址*/ 
    var vLinkUrl="";       
    if(ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")){
        
            var vKfId=ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId");
            var vIcoStyle=ttkefu_getCookie("ttkefu_Mb_Min_LinkIcoStyle");
            if(vKfId!="" && vIcoStyle!=""){
            
                    /*生成记忆对话地址*/
                    vLinkUrl=ttkefu_Com_TalkLinkParas({Talking:1,R5s6eT:vKfId,icostyle:vIcoStyle});
                    ttkefu_Mb_MinWindow_SetLinkUrl(vLinkUrl);
                    
                    /*读取设置未读记录*/
                    ttkefu_Mb_MinWindow_SetNoReadByCookie();
                    
                    /*小窗口默认状态-打开or隐藏*/ 
                    if(ttkefu_getCookie("ttkefu_MinWidow_Close_State")){
                        /*显示*/
                        var vttkefu_MinWidow_Close_State=ttkefu_getCookie("ttkefu_MinWidow_Close_State");
                        if(vttkefu_MinWidow_Close_State=="1" && vLinkUrl!=""){
                            ttkefu_Mb_MinWindow_Show();
                        }
                    }
            }
    }
}
/*手机版-事件监听*/
function ttkefu_Mb_EventReg(){
	
    /*手机版-浏览器进出后台监听*/
    ttkefu_Mb_VisChange();
}
/*手机版-浏览器进入后台*/
function ttkefu_Mb_VisChange(){

        document.addEventListener("visibilitychange",function(){ 
            if(document.hidden) {
                /*页面被挂起*/
                ttkefu_Mb_PageHide();
                
            }
            else {
                /*页面呼出*/
                ttkefu_Mb_PageShow();
            }
        });
}

/*手机版-页面被挂起*/
function ttkefu_Mb_PageHide(){

		
}

/*手机版-页面呼出*/
function ttkefu_Mb_PageShow(){
	
}

/*手机版-小窗口-结束对话*/
function ttkefu_Mb_MinWindow_StopConsult(){

        /*手机版-小窗口-结束对话*/
        ttkefu_PostMessage({FraName:"ttkefu_Ifa_MbMinWindow",Msg:{ActName:"ttkefu_Ifa_MbMinWindow",CmdKey:"StopConsult_ttkefu_Ifa_MbMinWindow"}});

}

/*手机版-小窗口-重置*/
function ttkefu_Mb_MinWindow_Reset(){
    
        /*清除对话客服Id(刷新时的地址)*/
        ttkefu_setCookie("ttkefu_Mb_Min_LinkKfId","","s1");
        
        /*设置Iframe重新加载生成新对话*/
        ttkefu_Mb_MinWindow_SetLoad("0");
        
        
            /*隐藏对话状态图标-显示其他图标*/
            ttkefu_Mb_MinWindow_TakingIco_Hide();
        
}

/*手机版-小窗口-读取设置未读记录*/
function ttkefu_Mb_MinWindow_SetNoReadByCookie(){
        if(ttkefu_getCookie("ttkefu_Min_NoRead")){
            var vNum=parseInt(ttkefu_getCookie("ttkefu_Min_NoRead"));
            if(vNum>=0){            
                /*更新未读记录数*/

                ttkefu_MinWidow_EditNoRead({Num:vNum,row:1146});
            }
        }
}

/*公用对话连接参数 icostyle 必填*/
function ttkefu_Com_TalkLinkParas(MsgData){
	/*url参数整理*/
            var GoUrl="/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?fgid=6886&t5Ys2R=57452&lang=0";
            
            /*必填*/
            GoUrl=GoUrl+"&dkfs="+MsgData.icostyle;
            
            
            /*T-指定客服*/
            if(MsgData.R5s6eT){
            	GoUrl=GoUrl+"&R5s6eT="+MsgData.R5s6eT;
            }
            /*T-手机小窗口记忆标记*/
            if(MsgData.Talking){
            	GoUrl=GoUrl+"&Talking="+MsgData.Talking;
            }
            
			
            /*T-手机小窗口新打开次数*/
            	GoUrl=GoUrl+"&MwOpenNum="+ttkefu_Mb_MinWindow_FreeOpenNum_Get();
            
            
            /*邀请模式*/
            GoUrl=GoUrl+"&sj_yaoqing_ms="+"0";
            GoUrl=GoUrl+"&tS4wJ7="+sjs;
            GoUrl=GoUrl+"&Purl="+ttkefu_pageurl;
            GoUrl=GoUrl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
            GoUrl=GoUrl+"";
            
	return  GoUrl;   
}

/*手机版 | icostyle:0.邀请框 1.客服列表 2.浮动图标*/
function ttkefu_Mb_Open(MsgData){

	/*url参数整理*/
            var GoUrl=ttkefu_Com_TalkLinkParas(MsgData);
            
	/*打开窗口*/
    		MsgData.GoUrl=GoUrl;
        	
            ttkefu_Mb_BigWindow(MsgData);
        	
}


/*手机版-小窗口-开启*/
function ttkefu_Mb_MinWindow(MsgData){
	console.log(MsgData);
        
    /*重置计数器*/
    tkefu_Mb_MinWindow_SetNoReadNum(0);

    /*首次打开初始化*/
    
    if(document.getElementById("ttkefu_Ifa_MbMinWindow").getAttribute("load")=="0"){
    	  ttkefu_Mb_MinWindow_Open_Init(MsgData);
    }
    
    /*显示*/
    ttkefu_Mb_MinWindow_Show();
    
    /*通知聊天窗口-停止记录未读消息记录*/
    document.getElementById("ttkefu_Ifa_MbMinWindow").onload=function(){
    	ttkefu_MinWidow_NoReadMsg_Contrl({row:1305});
    }
    
}
//0:隐藏聊天窗口,1:显示聊天窗口
var ttkefuminitishiwrapper_MbMinWindowDisplay=1;

/*手机版-小窗口-显示*/
function ttkefu_Mb_MinWindow_Show(){
  if(ttkefuminitishiwrapper_MbMinWindowDisplay==1){    
	document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="";    
  }else{    
	document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="none";
  }
    /*状态记忆*/
    ttkefu_setCookie("ttkefu_MinWidow_Close_State","1","d1");
    /*重置计数器*/
    ttkefu_MinWidow_EditNoRead({Num:0,row:1233});
    
}
/*手机版-小窗口-连接地址*/
function ttkefu_Mb_MinWindow_SetLinkUrl(GoUrl){
   if(0==2){
	document.getElementById("ttkefu_Ifa_MbMinWindow").style.height="60%";
	document.getElementById("ttkefuminitishiwrapperdiv_MbMinWindow_Min").style.top="40%";
    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.bottom="60%";
   }else{
	document.getElementById("ttkefu_Ifa_MbMinWindow").style.height="85%";
	//document.getElementById("ttkefuminitishiwrapperdiv_MbMinWindow_Min").style.top="15%";
    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.bottom="85%";
    
 
    
   
   
    
 


       }
       document.getElementById("ttkefu_Ifa_MbMinWindow").src=GoUrl;
    }





/*手机版-小窗口-load设置-仅对话连接为1,0代表重新加载地址*/
function ttkefu_Mb_MinWindow_SetLoad(state){
	document.getElementById("ttkefu_Ifa_MbMinWindow").setAttribute("load",state);
}
/*手机版-小窗口-开启-初始化*/
function ttkefu_Mb_MinWindow_Open_Init(MsgData){
	var vGoUrl=ttkefu_Com_TalkLinkParas(MsgData);
    ttkefu_Mb_MinWindow_SetLinkUrl(vGoUrl);
           
}
/*手机版-小窗口-设置记录数*/
function tkefu_Mb_MinWindow_SetNoReadNum(vNoReadNum){
		/**/
        ttkefu_MinWidow_EditNoRead({Num:vNoReadNum,row:1252});
}

/*手机版-大窗口*/
function ttkefu_Mb_BigWindow(MsgData){
    /**/
    ttkefu_WindowOpen(MsgData.GoUrl,{});
}

/*手机迷你窗口-关闭*/
function ttkefuMinWidowClose(){

     /*关闭邀请框*/
    if(document.getElementById("sj_ttkefuyaoqing")){
    	document.getElementById("sj_ttkefuyaoqing").style.display="none";
    }
       
		 /*隐藏聊天小窗口*/
	    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="none";
        
        /*重置计数器*/
        tkefu_Mb_MinWindow_SetNoReadNum(0);
        
        /*记录状态*/
        ttkefu_setCookie("ttkefu_MinWidow_Close_State","0","d1");
        
        /*更新未读计数器以及弹出消息状态*/
        ttkefu_MinWidow_NoReadMsg_Contrl({row:1357});
        
}
/*手机迷你窗口-关闭*/
function ttkefu_MinWidow_Close(){

     /*关闭邀请框*/
    if(document.getElementById("sj_ttkefuyaoqing")){
    	document.getElementById("sj_ttkefuyaoqing").style.display="none";
    }
       
		 /*隐藏聊天小窗口*/
	    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="none";
        
        /*重置计数器*/
        tkefu_Mb_MinWindow_SetNoReadNum(0);
        
        /*记录状态*/
        ttkefu_setCookie("ttkefu_MinWidow_Close_State","0","d1");
        
        /*更新未读计数器以及弹出消息状态*/
        ttkefu_MinWidow_NoReadMsg_Contrl({row:1357});
        
}

/*手机迷你窗口-更新未读记录数*/
function ttkefu_MinWidow_EditNoRead(MsgData){
		
		var vNoReadNum=MsgData.Num;
		/*记录未读记录数*/
		ttkefu_setCookie("ttkefu_Min_NoRead",vNoReadNum,"d1");
		
        if(document.getElementById("ttkefu_Mb_MinWindow_TakingIco_Num")){
            /*未读记录数显示*/
            if(parseInt(vNoReadNum)>0){
                    document.getElementById("ttkefu_Mb_MinWindow_TakingIco_Num").innerHTML=vNoReadNum;
                    document.getElementById("ttkefu_Mb_MinWindow_TakingIco_Num").style.display="";
            }else{
                    document.getElementById("ttkefu_Mb_MinWindow_TakingIco_Num").innerHTML=0;
                    document.getElementById("ttkefu_Mb_MinWindow_TakingIco_Num").style.display="none";
            }
        }
}

/*手机迷你窗口-未读记录及弹出消息-控制器*/
function ttkefu_MinWidow_NoReadMsg_Contrl(MsgData){
		
		
        if(document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display=="none"){
        		/*开启记录未读记录弹出显示未读消息*/
				ttkefu_PostMessage({FraName:"ttkefu_Ifa_MbMinWindow",Msg:{ActName:"ttkefu_Ifa_MbMinWindow",CmdKey:"Close_ttkefu_Ifa_MbMinWindow"}});
        }else{
        		/*关闭记录未读记录弹出显示未读消息*/
        		ttkefu_PostMessage({FraName:"ttkefu_Ifa_MbMinWindow",Msg:{ActName:"ttkefu_Ifa_MbMinWindow",CmdKey:"StopWrite_ttkefu_Ifa_MbMinWindow"}});
        }
}

/*手机迷你窗口-对话状态图标-显示*/
function ttkefu_Mb_icoAndYq(state){

	    /*浮动图标*/
    		//侧边图标背景色
            if(document.getElementById("ttkefu_Mb_Ico_Wrapper")){
				document.getElementById("ttkefu_Mb_Ico_Wrapper").style.display=state;
            }
            //侧边图标Vip
            if(document.getElementById("ttkefu_Mb_Ele_0")){
            	document.getElementById("ttkefu_Mb_Ele_0").style.display=state;
            }
            //侧边图标第三方客服
            if(document.getElementById("sj_ttkefu_ico")){
            	document.getElementById("sj_ttkefu_ico").style.display=state;
            }
            
            //底部图标
            if(document.getElementById("ttkefuico")){
            	document.getElementById("ttkefuico").style.display=state;
            }
                        
            
	  /*邀请框-循环邀请的-通过ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")来阻止 */
      		if(document.getElementById("sj_ttkefuyaoqing")){	
            	document.getElementById("sj_ttkefuyaoqing").style.display=state;
            }
}



/*手机迷你窗口-对话状态图标-显示*/
function ttkefu_Mb_MinWindow_TakingIco_Show(){
	
    /*隐藏-手机迷你窗口-对话状态图标*/
    ttkefu_Mb_icoAndYq("none");
    
    /*读取设置未读记录*/
    ttkefu_Mb_MinWindow_SetNoReadByCookie();

	/*显示-手机小窗口-对话状态图标*/
	document.getElementById("ttkefu_Mb_MinWindow_TakingIcoDiv").style.display="";
    
    /*设置手机小窗口为已加载状态*/
    ttkefu_Mb_MinWindow_SetLoad("1");
    
    /*绑定拖动事件*/
    //ttkefu_Drag("ttkefu_Mb_MinWindow_TakingIcoDiv");
    
}

/*手机迷你窗口-对话状态图标-隐藏*/
function ttkefu_Mb_MinWindow_TakingIco_Hide(){

    /*显示-手机迷你窗口-对话状态图标*/
	ttkefu_Mb_icoAndYq("");
	
    /*更新未读记录数*/
    ttkefu_MinWidow_EditNoRead({Num:0,row:1347});
    
    /*隐藏-手机小窗口-对话状态图标*/
    document.getElementById("ttkefu_Mb_MinWindow_TakingIcoDiv").style.display="none";
}

/*手机迷你窗口-最新消息*/
function ttkefu_Mb_MinWidow_ShowMsg(MsgData){
		var vName=MsgData.Name;
        var vMsg=MsgData.Msg;
        
        document.getElementById("ttkefu_Mb_MinWindow_MsgDivTitle_Name").innerHTML=vName;
        document.getElementById("ttkefu_Mb_MinWindow_MsgDivTxt").innerHTML=vMsg;
       
        ttkefu_fadeIn("ttkefu_Mb_MinWindow_MsgDiv",5000);
}

/*手机迷你窗口-持续对话状态维持 | */
function ttkefu_Mb_MinWidow_LinkingSet(){

	if(ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")){
            var vKfId=ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId");
            if(vKfId!=""){
                    /*生成记忆对话地址*/
                    ttkefu_Mb_Min_LinkKfId_Set({KfId:vKfId,row:1380});
            }
     }
}
/*手机迷你窗口-持续对话状态维持*/
function ttkefu_Mb_Min_LinkKfId_Set(MsgData){


	if(ttkefu_getCookie("ttkefu_Mb_Min_LinkKfId")){
    		/*更新*/
            
     }else{
     		/*新增*/
            /*手机迷你窗口-新打开次数记录-适用未开通手机版且打开方式为手机小窗口*/
            ttkefu_Mb_MinWindow_FreeOpenNum_Set();
     }


    /*生成记忆对话地址*/
    ttkefu_setCookie("ttkefu_Mb_Min_LinkKfId",MsgData.KfId,"s120");
    
}
/*手机迷你窗口-新打开次数记录-适用未开通手机版且打开方式为手机小窗口*/
function ttkefu_Mb_MinWindow_FreeOpenNum_Set(){
	
    var vOpenNum=ttkefu_Mb_MinWindow_FreeOpenNum_Get();
	
    ttkefu_setCookie("ttkefu_Mb_MinWindow_FreeOpenNum",vOpenNum,"d3000");
}

function ttkefu_Mb_MinWindow_FreeOpenNum_Get(){
	
    var vOpenNum=1;
	if(ttkefu_getCookie("ttkefu_Mb_MinWindow_FreeOpenNum")){
    	vOpenNum=parseInt(ttkefu_getCookie("ttkefu_Mb_MinWindow_FreeOpenNum"))+1;
    }
	
    return vOpenNum;
}



/*手机-客服发起强制对话 or 访客点击邀请框-*/
function ttkefu_Mb_Kf_Tan(MsgData){

	/*关闭邀请框*/
    if(document.getElementById("sj_ttkefuyaoqing")){
    	document.getElementById("sj_ttkefuyaoqing").style.display="none";
    }
	/*消息提示框*/
    if(document.getElementById("ttkefu_Mb_Ele_110")){
    	document.getElementById("ttkefu_Mb_Ele_110").style.display="none";
    }

	ttkefu_Mb_Open(MsgData);    
}



/*初始加载*/
function ttkefu_Load(){
	        
        /*ttkefu事件注册*/
        ttkefu_EventReg();
        
        
    	       
}

/**/
var ttkefu_Load_i=setTimeout(function(){ ttkefu_Load();},1000);
/*if (document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
    }, false)
}
*/



function myReplace(str,key,key2){
    
    return str.replace(new RegExp(key,'g'),key2);
}

function FSenWords(str)
{
	var vSenWords="枪|炸药|色";
    var vAry=vSenWords.split("|");
    
    for(var i=0;i<vAry.length;i++)
    {
    	str=myReplace(str,vAry[i],"*");
    }
	
    return str;
}


function getQueryString(url,name){ 
	if(url==undefined || url==null || url.length<3)return null;
	var pt="?"+name+"=";
	var index;
	index=url.indexOf(pt);
	if(index<0){
		pt="&"+name+"=";
		index=url.indexOf(pt);
		if(index<0)return null
	}
	var url1=url.substring(index+pt.length);
	index=url1.indexOf("&");
	var temp=index<0?url1:url1.substring(0,index);
	return temp
}
var ttkefu_city="";
if (getCookie("mmaain")==document.domain&&getCookie("kuse")=="57452"){
	mmaain=document.domain;
	setCookie("mmaain",mmaain,"s20");
    setCookie("kuse","57452","d1");
	src1="";
}else{
	mmaain=document.domain;
    setCookie("mmaain",mmaain,"s20");
    setCookie("kuse","57452","d1");
    var Mreferrer=document.referrer;
    if(Mreferrer.length>200){
    	Mreferrer=Mreferrer.substring(0,200)+"...";
    }
    src1="/online.jsp?k=7364&lailu="+Mreferrer+"&urll="+encodeURIComponent(document.location.href)+"&tS4wJ7="+sjs+"&t5Ys2R=57452&fid=6886&guanjianzi="+guanjianzi+"&zxrs=1";
    console.log(guanjianzi);
}

document.write("<iframe id='ttkefu_by' name='by' xyz='0' style='display:none;' frameborder='0' width='0' height='0' src='"+src1+"'  ></iframe>");
document.write("<iframe id='info' name='info'  style='display:none;' frameborder='0' width='0' height='0' src=''  ></iframe>");
        
        
/*获取浏览器版本*/
function ttkefu_getBrowserInfo(){
     var Sys = {};
     if(!!window.ActiveXObject || "ActiveXObject" in window)
     {
         Sys.browser ="msie";
         Sys.ver ="11";
     }else{
         var ua = navigator.userAgent.toLowerCase();
         var re =/(msie|firefox|chrome|opera|version|iphone|ipad|ipod).*?([\d.]+)/;
         var m = ua.match(re);
         Sys.browser = m[1].replace(/version/, "'safari");
         Sys.ver = m[2];
     }
     
     return Sys;
}

function tana(dkfs){

    
    /**/
	window.open("/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?u=6886&t5Ys2R=57452&tS4wJ7="+sjs+"&fgid=6886&s2N6eL=57452&isshowstyle=1&dkfs="+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle)+"&xx="+Math.random(),"57452","top=0,left=100,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")
	
}

function randtantel(){
	var iLeft = (window.screen.availWidth-330)/2;
    
    window.open("/conversationormessage/ourcustomerservice/customerlist/randtel.jsp?u=6886&tS4wJ7="+sjs+"&kfid=7364&fgid=6886&s2N6eL=57452&isshowstyle=1&dkfs=tel","57452","top=200,left="+iLeft+",width=320,height=450,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")
}

function ttkefu_randtantel(){
	var iLeft = (window.screen.availWidth-330)/2;

	window.open("/conversationormessage/ourcustomerservice/customerlist/randtel.jsp?u=6886&tS4wJ7="+sjs+"&kfid=7364&fgid=6886&s2N6eL=57452&isshowstyle=1&dkfs=tel","57452","top=200,left="+iLeft+",width=320,height=450,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")
}

function listtana(weburl,nicheng){
    var str=weburl;
	 
     	/*新窗口*/
        if(str.substr(str.indexOf("=")+1,str.indexOf("&")-str.indexOf("=")-1)==mini_dialog.zhidingkefu)
        {
        	/*新窗口客服与迷你窗口客服相同则关闭迷你窗口*/
            mini_dialog.isfirst=-1;
            mini_dialog.closewindow();  
        }
		window.open(weburl,"57452","top=0,left=100,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")

	
}

function tanb(kuid,use,dkfs,nicheng){


	try{
		var win=window.open('/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle)+"",'','top=120,left=200,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes');
		if(win==null){
			window.location.href='/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
	}
	}catch(e){
		window.location.href='/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
	}
    
}

function tanac(str,dkfs){
	
	window.open("/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?u=6886&t5Ys2R=57452&tS4wJ7="+sjs+"&zixun="+encodeURIComponent(str)+"&fgid=6886&s2N6eL=57452&dkfs="+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle)+"","57452","top=0,left=100,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")
    
}

function tanbc(kuid,use,str,dkfs){

	try{
		var win=window.open('/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&zixun='+encodeURIComponent(str)+'&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle)+"",'57452','top=120,left=200,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes');
		if(win==null){
			window.location.href='/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&zixun='+encodeURIComponent(str)+'&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
		}
	}catch(e){
		window.location.href='/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT='+kuid+'&t5Ys2R=57452&zixun='+encodeURIComponent(str)+'&fgid=6886&s2N6eL='+use+'&tS4wJ7='+sjs+'&dkfs='+dkfs+"&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
	}

}

function tantel(s,dkfs){
    var iLeft = (window.screen.availWidth-330)/2;   
    window.open(s+"&fgid=6886&dkfs="+dkfs,"_blank","top=200,left="+iLeft+",width=320,height=450,align=center,crollbars=no,resizable=yes,status=yes,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes");
}

function tanteluid(telu_id,sjs){
    var iLeft = (window.screen.availWidth-330)/2;   
    window.open("/conversationormessage/ourcustomerservice/customerlist/app/tel.jsp?userid=57452&useid="+telu_id+"&khbh="+sjs+"&fgid=6886&dkfs=1","_blank","top=200,left="+iLeft+",width=320,height=450,align=center,crollbars=no,resizable=yes,status=yes,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes");
}



function ttkefu_pagetitleLimtit(str){

	if(str!=""){
    
    	str=FSenWords(str); 
            
    	str=ttkefu_gb2utf8(str);
        
        return str;
    }
}

var isfrist="",mini_cytime,timerkkff,times2;
function onner(){
    var ycurl="/yc.jsp?k=57452&j="+sjs+"&f=6886&r="+encodeURIComponent(document.location.href)+"&s="+Math.random();
    if(isfrist==""){
        var Onner_Referrer=document.referrer;
        if(Onner_Referrer.length>200){
            Onner_Referrer=Onner_Referrer.substring(0,200)+"...";
        }
        if(Onner_Referrer.indexOf("https://www.baidu.com")>=0){
        	Onner_Referrer="https://www.baidu.com";
        }
        
        ycurl="/yc.jsp?k=57452&t="+encodeURIComponent(document.title)+"&j="+sjs+"&style_lang=0&f=6886&r="+encodeURIComponent(document.location.href)+"&g="+guanjianzi+"&s="+Math.random()+"&l="+Onner_Referrer;
        isfrist="1";
    }
    mmaain=document.domain;
	setCookie("mmaain",mmaain,"s20");
	var new_script = document.createElement("script");
	new_script.src = ycurl;
	document.getElementsByTagName("HEAD")[0].appendChild(new_script);
    
	setTimeout("onner()",18000);
    
}
function ttkefu_hide(str){
document.getElementById(str).style.display='none'
}
function TTclosedivname(str)
{
	if(document.getElementById(str)!=null){
		document.getElementById(str).style.display="none";
    }
}
///
var ttkefu_flashVideoPlayer;
//连接
function ttkefu_connection_s(url){
	var ie = navigator.appName.indexOf("ttkefu_Microsoft") != -1;
	ttkefu_flashVideoPlayer = (ie) ? window['ttkefu_Mchannel_Fid'] : document['ttkefu_Mchannel_Fid'];
	ttkefu_flashVideoPlayer.ttkefu_connection_s(url);
}
//调用flash
function ttkefu_sendMessage(){
		ttkefu_flashVideoPlayer.ttkefu_sendMessage("PRIV|"+ttkefu_Mchannel.lguseid+"|"+ttkefu_Mchannel.receivers+"|"+ttkefu_Mchannel.txt+"|");
}
//flash调用
  function ttkefu_send2JS(mymsg){
  		 
		 if(mymsg=="ttkefu_flash_connection_s_ok"){
			  ttkefu_flashVideoPlayer.ttkefu_sendMessage("flash请求连接服务器");
		  }else if(mymsg=="ttkefu_flash_connection_s_fail" || mymsg=="ttkefu_flash_send_error"){
			  //3秒后重连
			  ttkefu_Mchannel.ResetLink({err:"833",tishi:"连接失败"});
		  }else{
			  //已经与服务器建立了连接
			  if(mymsg=="$ttkefu_flash_link_ok$"){
                  
				  //账号登陆
				  ttkefu_Mchannel.LgServer();
			  }else if(mymsg=="login=ok"){
        		  document.getElementById("ttkefu_mini_tishi_parent").style.display='none';
			  	  //对话建立提醒
                  ttkefu_Mchannel.lg=true;
                  document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
				  ttkefu_Mchannel.Send("shengchengduihua");
                   ttkefu_Mchannel.TT_shengcheng=ttkefu_Mchannel.TT_shengcheng+1;
			  }else if(mymsg.indexOf("ttkefu_kaiqiyuzhi")>=0){
				 ttkefu_Mchannel.pme=true;
			  }else if(mymsg.indexOf("ttkefu_guanbiyuzhi")>=0){
				  ttkefu_Mchannel.pme=false;
              }else if(mymsg.indexOf("ttkefu_kaiqiLisWriting")>=0){
                 ttkefu_Mchannel.LisWriting=true;
              }else if(mymsg.indexOf("ttkefu_guanbiLisWriting")>=0){
                 ttkefu_Mchannel.LisWriting=false;
                 
              }else if(mymsg.indexOf("you_jieshuduihua_hao")>=0){
                 ttkekfu_yhAutoCloseTalkTs();
                  
			  }else if(mymsg.indexOf("ttkefu_xiaoxiyuzhi")>=0){
				   //访客正在输入提示
                   document.getElementById("ttkefu_minit0").style.display='none';
                   document.getElementById("ttkefu_minit1").style.display='';
                   
				   if(mymsg!="Fangkechats=ttkefu_xiaoxiyuzhi"){
				   		mini_dialog.getmsg({HH:"910"});
				   }
			  }else if(mymsg.indexOf("ttkefu_blur")>=0){
				   //访客正在输入关闭
                   document.getElementById("ttkefu_minit0").style.display='';
                   document.getElementById("ttkefu_minit1").style.display='none';
                   
				   if(mymsg!="Fangkechats=ttkefu_blur"){
				   		mini_dialog.getmsg({HH:"918"});
				   }  
			  }else if(mymsg.indexOf("m=fkjietuok")>=0){
				  if(mymsg.indexOf("m=fkjietuok0")>=0){
				  				//截图插件已安装
								mini_dialog.InStallJieTu();
				  
				  }else{
				  				//截图完成ttkefu_temp.bmp
								mini_dialog.BakCutImg({MsgData:mymsg});
				  }
															
                   
			  }else if(mymsg.indexOf("m=ttkefuretmsg")>=0){
					//客服消息撤回
                    var ikfmsglist=document.getElementsByClassName("ttkefu_kf_msg");
					var ilstele=ikfmsglist[ikfmsglist.length-1];
					ilstele.parentNode.removeChild(ilstele);
					
					var ikftimlist=document.getElementsByClassName("ttkefu_kf_timer");
					var ilsttm=ikftimlist[ikftimlist.length-1];
					ilsttm.parentNode.removeChild(ilsttm);
                    
                    
                                             
			  }else if(mymsg.length>1){
				   mini_dialog.getmsg({HH:"921"});
			  }
			  
		  }
      ttkefu_Mchannel.SendXTiaoTime1=new Date();
	  document.getElementById("ttkefusocketdiv").innerHTML=mymsg;
}

/*第三方网站反馈*/
var ttkefuGetWzLgInfo_i=0;

function ttkefuGetWzLgInfo(MsgData){

    if(MsgData.UserName==""){
        if(confirm("您尚未登录网站,点击确定将跳转至登录页面")){
            	window.location.href="";
        }else{
                /**/
                if(navigator.userAgent.toLowerCase().indexOf("micromessenger")>0){
                    WeixinJSBridge.call('closeWindow');
                }else{
                    window.close();
                    window.history.back();
                }
        }	
    }
    
    var DBdWzHy_Url="/DBdWzHy.jsp";
    DBdWzHy_Url=DBdWzHy_Url+"?UserName="+MsgData.UserName;
    DBdWzHy_Url=DBdWzHy_Url+"&UserTel="+MsgData.UserTel;
    DBdWzHy_Url=DBdWzHy_Url+"&UserMobile="+MsgData.UserMobile;
    DBdWzHy_Url=DBdWzHy_Url+"&UserFax="+MsgData.UserFax;
    DBdWzHy_Url=DBdWzHy_Url+"&UserName="+MsgData.UserFax;
    DBdWzHy_Url=DBdWzHy_Url+"&UserQQ="+MsgData.UserQQ;
    DBdWzHy_Url=DBdWzHy_Url+"&UserEmail="+MsgData.UserEmail;
    DBdWzHy_Url=DBdWzHy_Url+"&UserMsn="+MsgData.UserMsn;
    DBdWzHy_Url=DBdWzHy_Url+"&UserCompany="+MsgData.UserCompany;
    DBdWzHy_Url=DBdWzHy_Url+"&UserAddr="+MsgData.UserAddr;
    DBdWzHy_Url=DBdWzHy_Url+"&UserRemark="+MsgData.UserRemark;
    
    DBdWzHy_Url=DBdWzHy_Url+"&kuse="+"57452";
    DBdWzHy_Url=DBdWzHy_Url+"&uid="+mini_dialog.khid;
    DBdWzHy_Url=DBdWzHy_Url+"&fgid="+"6886";
    DBdWzHy_Url=DBdWzHy_Url+"&sjs="+sjs;
    DBdWzHy_Url=DBdWzHy_Url+"&kfid="+mini_dialog.kfid;
    
    DBdWzHy_Url=DBdWzHy_Url+"&call=mini_dialog.getmsg({HH:1186});";
   

    var DBdWzHy_script = document.createElement("script");
    DBdWzHy_script.src =DBdWzHy_Url;
    DBdWzHy_script.charset="utf-8";
    document.getElementsByTagName("HEAD")[0].appendChild(DBdWzHy_script);

}
 
var ttkefu_ws,ttkefu_xmlHttp;
var ttkefu_Mchannel={
	types:0,
	firstload:0,
	firststr:"",
	ws:null,
	reset_i:0,
	rec_mode:168,
	senders:"",
	receivers:"",
	lguseid:"",
	txt:"",
    isrun:false,
    device:0,
    pushtype:0,
	pushi:0,
	pushlist:new Array(),
    pushsound:1,
    pme:false,
    /*客服是否有预知操作*/
    socyz:"",
    dhpush:false,
    uid:0,
    apns:"",
	/*Ios推送 nginx*/
    Plink:"https://w1022.ttkefu.com:18430/wssios",
    ipp:"47.98.171.208",
	/*websocket推送 nginx*/
    servers:"",
    serverport:":18430/wss",
    Ci:"",
    Si:"",
    lg:false,
	nowtime:new Date(),
	zxtime:new Date(),
    LisWriting:false,
    IsSendWriting:false,

    TT_shengcheng:0,
    XinTiaoTime:0,
	SendXTiaoTime0:new Date(),
	SendXTiaoTime1:new Date(),
    ResetLinkTime:0,
	/*是否执行了退出操作*/
	ExitState:0,
	/*是否处于对话提示中*/
	TalkTs:0,
    
    
    
	initialize:function(lguseid,receivers,rec_mode){
    	//消息预知是否开启
    
        //初始化
              this.lguseid=lguseid;
              this.receivers=receivers;
              this.rec_mode=rec_mode;
              this.isrun=true;
              
			  this.ExitState=0;
			  this.TalkTs=0;
			  /*输入框设为只读*/
			  document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
        
        
        if(window.WebSocket){
        	this.SendXTiaoTime0=new Date();
            this.types=1;
            ttkefu_ToggleConnectionClicked();
        }else{
            var fls=this.flashChecker();
            if(fls.f){
                if(fls.v<9){
                    document.getElementById("ttkefu_mini_tishi_parent").style.display='none';
                }else{
                	this.SendXTiaoTime0=new Date();
                    this.types=2;
                    setTimeout(function(){ttkefu_connection_s(ttkefu_Mchannel.ipp)},100)
                }
            }
        }
	},
	LgServer:function(){
    
    
		  /*已经与服务器建立了连接*/
          ttkefu_Mchannel.SendXTiaoTime1=new Date();
          
		  /*登录*/
		  if(this.types==1){
			  ttkefu_ws.send("CONN|"+ttkefu_Mchannel.lguseid+"|0|");
		  }else if(this.types==2){
			  ttkefu_flashVideoPlayer.ttkefu_sendMessage("CONN|"+ttkefu_Mchannel.lguseid+"|0|");
		  }
         
		/*对话建立*/
 		if(!ttkefu_Mchannel.dhpush && ttkefu_Mchannel.pushtype==2){
			var dd=new Date();
			var pushtxt=dd.getHours()+":"+dd.getMinutes()+"分,访客给您发送了新对话.";
			ttkefu_Mchannel.PushTxt("5",ttkefu_Mchannel.uid,ttkefu_Mchannel.pushsound,pushtxt);
            ttkefu_Mchannel.dhpush=true;
		}
        
        /*心跳发送*/
              ttkefu_Mchannel.XinTiaoTime=setTimeout(function(){ ttkefu_Mchannel.SendXinTiao(); },50);
              
	},
	flashChecker:function(){
		var hasFlash = 0;
		var flashVersion = 0; 
		try{
			if (document.all) {
					  var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					  if (swf) {
						hasFlash = 1;
						VSwf = swf.GetVariable("$version");
						flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
					  }
			  
			} else {
			  if (navigator.plugins && navigator.plugins.length > 0) {
				var swf = navigator.plugins["Shockwave Flash"];
				if (swf) {
				  hasFlash = 1;
				  var words = swf.description.split(" ");
				  for (var i = 0; i < words.length; ++i) {
					if (isNaN(parseInt(words[i]))) continue;
					flashVersion = parseInt(words[i]);
				  }
				}
			  }
			}
		}
		catch(e){
			
		}
		return { f: hasFlash, v: flashVersion };
	},
    //删除cookie
	deleteCookie:function(name,cval){ 
		var domain = '.' + location.host;
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + "Domain" + domain + ";path=/";
	},
	ResetLink:function(MsgData){
    if(mini_dialog.state=="0"){
    	var acookie = document.cookie.split(";");
        console.log("需要删除的cookie名字："+acookie);
        console.log(acookie);
		for(i=0;i<acookie.length;i++)
		{
			var s=acookie[i].split("=");
			ttkefu_Mchannel.deleteCookie(s[0],s[1]);
		}	
		
        
		//退出检测
              if(this.ExitState==1){
                  return false;
              }
		//与服务器连接断开,重连接中
              ttkefu_Mchannel.lg=false;
              document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
              document.getElementById("ttkefu_mini_tishi").innerHTML="连接断开,重连接中["+MsgData.tishi+"]";
              document.getElementById("ttkefu_mini_tishi_parent").style.display='';

		//重连10次失败后，执行轮询
              ttkefu_Mchannel.reset_i=ttkefu_Mchannel.reset_i+1;
              if(ttkefu_Mchannel.reset_i>11){
                    ttkefu_Mchannel.lg=true;
                    document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
             //       ttkefu_Mchannel.types=0;
             //       mini_dialog.getmsg({HH:"1035"});
              }else{
                    //与服务器连接断开,3秒后重连
                    clearTimeout(ttkefu_Mchannel.ResetLinkTime);
                    ttkefu_Mchannel.ResetLinkTime=setTimeout(function(){
                          ttkefu_Mchannel.initialize(mini_dialog.chatid,mini_dialog.kfid,ttkefu_Mchannel.rec_mode);
                        },3000)
              }
            
       } 
	},
	/*心跳包发送*/
	SendXinTiao:function(){
                clearTimeout(ttkefu_Mchannel.XinTiaoTime);
                
                //仅在连接成功后执行
             //   if(ttkefu_Mchannel.lg){
                    //退出检测
                          if(this.ExitState==1){
                              return false;
                          }
                    //心跳检测
                          var XTiaoTimeCha=ttkefu_Mchannel.SendXTiaoTime0.getTime()-ttkefu_Mchannel.SendXTiaoTime1.getTime();
                          if(Math.floor(XTiaoTimeCha/1000)>120){
						  ttkefu_Mchannel.reset_i=0;
                              ttkefu_Mchannel.ResetLink({err:"1076",tishi:"长时间未响应"});
						      ttkefu_Mchannel.SendXTiaoTime1=new Date();
						  	  ttkefu_Mchannel.XinTiaoTime=setTimeout(function(){ ttkefu_Mchannel.SendXinTiao(); },120000);
                              return false;
                          }
                    //心跳发送
                          ttkefu_Mchannel.SendXTiaoTime0=new Date();
                          if(ttkefu_Mchannel.types==1){
                              ttkefu_ws.send("xintiao|"+ttkefu_Mchannel.lguseid+"|");
                          }else if(ttkefu_Mchannel.types==2){
                              ttkefu_flashVideoPlayer.ttkefu_sendMessage("xintiao|"+ttkefu_Mchannel.lguseid+"|");
                          }
                    /*回调*/
                          ttkefu_Mchannel.XinTiaoTime=setTimeout(function(){ ttkefu_Mchannel.SendXinTiao(); },60000);
                   //在线访客状态
                          mini_dialog.getmsg({HH:"1086"});
                          
                          
             //   }
	},
	Send:function(txt){
    try{
          this.txt=txt;
          if(this.types==1){
              ttkefu_ws.send("PRIV|"+this.lguseid+"|"+this.receivers+"|"+txt+"|");
          }else if(this.types==2){
              ttkefu_sendMessage();	

          }else if(this.types==0 && this.device!=1){
          
          /*    if(this.receivers==""){
              	this.receivers=mini_dialog.kfid;
              }
              
              
              var new_script = document.createElement("script");
              new_script.src ="https://"+ttkefu_Mchannel.servers+":18430/wss/pumsg.jsp?Myttkefu_fangke=dh_tishi&r="+this.receivers+"&m=fkxiaoxi&x="+Math.random();
              document.getElementsByTagName("HEAD")[0].appendChild(new_script); */
              
          }
        }
        catch(e){
        	setTimeout(function(){
               if(ttkefu_Mchannel.lg){
                  ttkefu_Mchannel.Send(txt)
               }
            },500);
        }

	},
	Push:function(MsgType,MsgId){
		if(this.pushtype==2){
			//
			var msg_script = document.createElement("script");
			msg_script.id="msg_script";
			msg_script.src ="/push1.aspx?act="+MsgType+"&d="+MsgId+"&x="+Math.random();
			document.getElementsByTagName("HEAD")[0].appendChild(msg_script);
			
		}else if(this.pushtype==1){
        	
			
		}
		
	},
 
	PushTxt:function(type,id,sd,txt){
		if(this.pushtype==2 && txt!="undefined" && mini_dialog.imlixian==0){
        	txt=this.Ubb2Txt(txt);
			if(txt.length>45){
				txt=txt.substring(0,45)+"...";
			}
            txt=encodeURI(txt);
            
			var pmsg_script = document.createElement("script");
			pmsg_script.id="pmsg_script";
			pmsg_script.src =this.Plink+"/Myttkefu_fangke=push&r="+this.apns+"&m="+txt+"&t="+type+"&i="+id+"&s="+sd+"&x="+Math.random();
			document.getElementsByTagName("HEAD")[0].appendChild(pmsg_script); 
		}
	},
	YPost:function(url,parameter,callback){
		this.createXMLHttpRequest();
        //ttkefu_xmlHttp.onreadystatechange = callback;

        ttkefu_xmlHttp.open("POST",url,true);
        ttkefu_xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
        ttkefu_xmlHttp.send(parameter);
	},
	createXMLHttpRequest:function(){
		  //Mozilla 浏览器（将XMLHttpRequest对象作为本地浏览器对象来创建）
		  if(window.XMLHttpRequest){ //Mozilla 浏览器
			  ttkefu_xmlHttp = new XMLHttpRequest();
		  }else if(window.ActiveXObject) { //IE浏览器
		  //IE浏览器（将XMLHttpRequest对象作为ActiveX对象来创建）
			  try{
				  ttkefu_xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			  }catch(e){
				  try {
					  ttkefu_xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				  }catch(e){}
			  }
		  }
		  if(ttkefu_xmlHttp == null){
			  //alert("不能创建XMLHttpRequest对象");
			  return false;
		  }
	},
    /*消息提示:访客等待超时0|访客无回复1|自动断开2*/
    TsId:0,
	InsertTs:function(MsgData){
		try{
            var m=document.createElement("div");
            m.style.margin="0px";
            m.style.padding="0px";
            m.style.width="98%";
            
			/*消息ID*/
			this.TsId=this.TsId+1;
			/*消息类型*/
			var inserttxt="";
			switch(MsgData.type){
				
				case 0:
					  inserttxt="<div align='center' style='overflow:hidden; margin:0px; padding:0px;'><p style='line-height:20px; font-size:12px; color:#889298;text-align:left; margin:8px; display:inline-block; *display:inline; *zoom:1;  padding:8px 16px; background:#e5eaed;'>"+MsgData.TiShi+"</p></div>";
				break;
				
				case 1:
                      inserttxt=mini_dialog.kfhtmlheader+MsgData.TiShi+mini_dialog.kfhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>"
				break;
				
				case 2:
					  inserttxt="<div align='center' style='overflow:hidden; margin:0px; padding:0px;'><p style='line-height:20px; font-size:12px; color:#889298;text-align:left; margin:8px; display:inline-block; *display:inline; *zoom:1;  padding:8px 16px; background:#e5eaed;'>"+MsgData.TiShi+"<span style='color:#4e97b9; padding:0px; margin:0px;'>本次对话将在<span id='DJS"+this.TsId+"'>110</span>秒后结束，回复消息将继续对话</span></p></div>";
				break;
			}
            m.innerHTML=inserttxt;
            
            document.getElementById("ttkefucontainer").appendChild(m);
document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
			/*状态提示*/
			mini_dialog.clear(timerkkff);
            timerkkff = mini_dialog.show('新消息顶部提示，可能没用目前是传到minimsg.jsp里。');
            window.focus();
            
		}catch(ex){
			//alert(ex.message);
		}
		
	},
	Ubb2Txt:function(txt){
		//表情替换
		txt=txt.replace(/\[emo\](.+?)\[\/emo\]/ig,'[表情]');
		//图片替换
		txt=txt.replace(/\[img\](.+?)\[\/img\]/ig,'[图片]');
		//超链接替换
		txt=txt.replace(/\[url href='(.+?)'\](.+?)\[\/url\]/ig,'$1');
		//文件替换
		txt=txt.replace(/\[file\](.+?)\[\/file\]/ig,'[文件]');
		
		return txt;
	},
	IWriting:function(){
		if(this.LisWriting && !this.IsSendWriting){
			ttkefu_Mchannel.Send('ttkefu_xiaoxiyuzhi');
			this.IsSendWriting=true;
		}
	}, 
	CloseWriting:function(){
		if(this.LisWriting){
			setTimeout(function(){
				ttkefu_Mchannel.Send('ttkefu_blur');
				ttkefu_Mchannel.IsSendWriting=false;
				},500);
		}
	},
	Exit:function(){
    	this.isrun=false;
		if(this.types>0){
				   try{
                        this.Send("tuichu"+sjs);
                        if(this.types==1){
                            ttkefu_ws.send("EXIT|"+this.lguseid+"|");
                        }else if(this.types==2){
                            ttkefu_flashVideoPlayer.ttkefu_sendMessage("EXIT|"+this.lguseid+"|");
                        }
				   }catch(ex){
				   
				   }
	     }
		/*输入框设为只读*/
			  document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
		/*标记连接已断开*/
			  this.lg=false;
		/*标记已退出*/

			  this.ExitState=1;
    }
}
function cxjldh(){
	ttkefu_ToggleConnectionClicked();
	setTimeout(function(){document.getElementById("sendMsgTxt_chat").removeAttribute("disabled");},5000);	
    var currentElement = document.getElementById("cxjldh_Btn");
    if (currentElement && currentElement.parentNode) {
        var parentNode = currentElement.parentNode.parentNode; 
        parentNode.style.display = "none";
    }
}

function ttkefu_ToggleConnectionClicked(){

                ttkefu_ws = new WebSocket("wss://"+ttkefu_Mchannel.servers+":18430/wss");//连接服务器
                ttkefu_ws.onopen = function(event){
                       //账号登陆
                       ttkefu_Mchannel.LgServer();
                    };
			ttkefu_ws.onmessage = function(event){    console.log(event.data);
				//获得消息
                        if(event.data=="login=quit"){
                        var currentElement = document.getElementById("cxjldh_Btn");
                        if (currentElement && currentElement.parentNode) {
                            var parentNode = currentElement.parentNode.parentNode; 
                            parentNode.removeChild(currentElement.parentNode); 
                        }
                        
                            var imsg="<span id='cxjldh_Btn' onclick='cxjldh();' class='Djsblue' style='cursor:pointer; padding:3px 18px; color:#936045; border-radius:30px;'>会话已结束,点击重新发起</span>";
                            var tishimsg="{\"datalist\":[{\"type\":\"3\",\"msg\":\""+imsg+"\",\"reffer\":\"4030\"}]}";
                            mini_dialog.insertmsg(tishimsg);
                            document.getElementById("sendMsgTxt_chat").setAttribute("disabled","disabled");
                        }

                        if(event.data=="login=ok"){
                            //对话建立提醒
                            ttkefu_Mchannel.lg=true;
                             ttkefu_Mchannel.pme=true;//打字触发消息预知socket
                             ttkefu_Mchannel.LisWriting=true;
                            var currentElement = document.getElementById("cxjldh_Btn");
                            if (currentElement && currentElement.parentNode) {
                                var parentNode = currentElement.parentNode.parentNode; 
                                parentNode.style.display = "none";
                            }
                            document.getElementById("sendMsgTxt_chat").removeAttribute("disabled");
                            document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
                            document.getElementById("ttkefu_mini_tishi_parent").style.display='none';
                            if(ttkefu_Mchannel.reset_i>0){
                            	ttkefu_ws.send("PRIV|"+ttkefu_Mchannel.lguseid+"|"+ttkefu_Mchannel.receivers+"|ResetLinkshengchengduihua|");
                            }else{
                            	ttkefu_ws.send("PRIV|"+ttkefu_Mchannel.lguseid+"|"+ttkefu_Mchannel.receivers+"|shengchengduihua|");
                            }
                            ttkefu_Mchannel.TT_shengcheng=ttkefu_Mchannel.TT_shengcheng+1;
                        }else if(event.data.length>1){
                         	
                            if(event.data.indexOf("ttkefu_kaiqiyuzhi")>=0){
                                ttkefu_Mchannel.pme=true;
                            }else if(event.data.indexOf("ttkefu_guanbiyuzhi")>=0){
                               ttkefu_Mchannel.pme=false;
                            }else if(event.data.indexOf("ttkefu_kaiqiLisWriting")>=0){
                               ttkefu_Mchannel.LisWriting=true;
                            }else if(event.data.indexOf("ttkefu_guanbiLisWriting")>=0){
                               ttkefu_Mchannel.LisWriting=false;
                          	}else if(event.data.indexOf("you_jieshuduihua_hao")>=0){
                             	ttkekfu_yhAutoCloseTalkTs();
                               
                            }else if(event.data.indexOf("ttkefu_xiaoxiyuzhi")>=0){
                                 //访客正在输入提示
                             //    document.getElementById("ttkefu_minit0").style.display='none';
                              //   document.getElementById("ttkefu_minit1").style.display='';
                                 
                                 if(event.data!="Fangkechats=ttkefu_xiaoxiyuzhi"){
                                      mini_dialog.getmsg({HH:"1245"});
                                 }
                                 mini_dialog.humResTiShiShuRu();
                            }else if(event.data.indexOf("ttkefu_blur")>=0){
                                 //访客正在输入关闭
                   				// document.getElementById("ttkefu_minit0").style.display='';
                   				// document.getElementById("ttkefu_minit1").style.display='none';
                                 
                                 if(event.data!="Fangkechats=ttkefu_blur"){
                                      mini_dialog.getmsg({HH:"1253"});
                                 } 
                                 var objA=document.getElementsByClassName("dot");
                                 var len=objA.length;
                                    for(var i=0;i<len;i++){
                                       var item=objA[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                       item.parentNode.removeChild(item);
                                    }
                            }else if(event.data.indexOf("m=fkjietuok")>=0){
                                  if(event.data.indexOf("m=fkjietuok0")>=0){
                                                //截图插件已安装
                                                mini_dialog.InStallJieTu();
                                  
                                  }else{
                                                //截图完成ttkefu_temp.bmp
                                                mini_dialog.BakCutImg({MsgData:event.data});
                                  }
			  				}else if(event.data.indexOf("m=ttkefuretmsg")>=0){
                                    //客服消息撤回
                                    var ikfmsglist=document.getElementsByClassName("ttkefu_kf_msg");
                                    var ilstele=ikfmsglist[ikfmsglist.length-1];
                                    ilstele.parentNode.removeChild(ilstele);
                                    
                                    var ikftimlist=document.getElementsByClassName("ttkefu_kf_timer");
                                    var ilsttm=ikftimlist[ikftimlist.length-1];
                                    ilsttm.parentNode.removeChild(ilsttm);
                                                                     
                            }else{
                               mini_dialog.getmsg({HH:"1256"});
                            }
                        
                        
                        }
                    ttkefu_Mchannel.SendXTiaoTime1=new Date();
                    document.getElementById("ttkefusocketdiv").innerHTML=event.data;
				};
			ttkefu_ws.onclose = function(event){
				  if(mini_dialog.chatid>0){
                    //重连
                    ttkefu_Mchannel.ResetLink({err:"1268",tishi:"客户端异常断开"});         
				  }
				};
            ttkefu_ws.onerror  = function(event){
				  //console.log(event);
				};
	
}

var ttkefu_d=new Date();

//系统消息状态配置
var ttkefu_fkleavestate="True",ttkefu_fkstaytime=300000*6,ttkefu_fknoreplystate="False",ttkefu_fknoreplytime="300",ttkefu_fkwaitstate="False",ttkefu_fkwaittime="180";
//FkSendTime:访客发送消息时间,FkTimeOut:等待超时延迟函数
var ttkefu_FkSendTime=new Date(),ttkefu_leavetime=new Date(),ttkefu_FkTimeOut=0;
//KfSendTime:客服回复消息时间,KfTimeOut:等待超时延迟函数
var ttkefu_KfSendTime=new Date(),ttkefu_KfTimeOut=0;



//访客状态0空闲1对话
var ttkefu_fk_state=0;
var mini_dialog={
    display:0,
	chatid:0,
    kfid:0,
    kfname:"",
    khid:0,
    imlixian:0,
    imlixian1:0,
    Timer:'',
    use:'',
    i:0,
    issend:0,
    /*true:对话结束false:对话中*/
    dialog:true,
    ycurl:"",
    yz:0,
    AutoClose_Ok:0,
    isfirst:0,
    iszhuanjie:0,
    windowstate:0,
    labaOpen:1,
    exiturl:'',
    zhidingkefu:0,
    state:'0',
    p:'0',
    waitno:'0',
    getmsg_i:0,
    location:'',
    kup:0,
    n:'0',
    id:0,
    mini_zs:'0',
    /*接待访客设置*/
    duihuaxuanze:1,
    statemsg:'<div id="ttkefu_closetsdiv" class="ttkefu_closetsdiv" style="padding:0px; margin:0 auto; text-align:center; overflow:hidden;background:#e5eaed; font-size:9pt; height:32px; line-height:32px; color:#ff0000;width:200px; border-radius:4px;">当前对话已结束！</div>',
    title:document.title,
    titlebg:'#6BC1FA',
    fontcolor:'#FFFFFF',
    jstime:'2024/7/17 1:15:12',
    tshtmlheader:'<div style=" width:85%; float:left; padding:; margin:0px;font-size: 9pt;overflow: hidden; "><div id="tt_kefdiv" style="padding:0px; margin:0px;float: left;margin-left: 5px; padding:1px 0px 0px 0px; max-width: 100%; min-height: 22px;min-width: 60px;"><div style="position: relative;padding:0px; margin:0px;"><div style="padding:0px; margin:0px;background-color: #FFF69B; border: 1px solid #c0ad20;border-radius: 5px 5px 5px 5px;box-shadow: 0 1px 0 #DBDBDB; "><div style="padding:0px; margin:0px;background-color: #fff69b;border-radius: 5px 5px 5px 5px;color: #030303;  min-height: 20px; min-width: 37px;overflow: hidden;padding:10px 10px 10px 10px;text-align: left; word-break: break-all; word-wrap: break-word;">',
    tshtmlfooter:'</div></div><div style="padding:0px; margin:0px;background: url(/images/yellow_arrow.png) no-repeat;height: 24px;left: -3px;position: absolute; top: 11px; width: 13px;"></div></div></div></div>', 
    fkhtmlheader:"<div style='width:85%; float:right;padding:0px; margin:0px;font-size: 9pt;overflow: hidden; '><div id='tt_fkdiv' style='padding:0px; margin:0px;float: right;margin-right: 8px;max-width: 100%;min-height: 22px;min-width: 60px;'><div style='position: relative; padding:0px; margin:0px;'><div style='padding:0px; margin:0px;background-color: #6bc1fa;border: 0px solid #6bc1fa;border-radius: 5px 5px 5px 5px;box-shadow: 0 1px 0 #D5D5D5;margin-left: 18px;'><div style='padding:0px; margin:0px;background-color:#6BC1FA; border-radius: 4px 4px 4px 4px; color: #fff; min-width: 37px; overflow: hidden; padding:10px 10px 10px 10px;text-shadow: none; vertical-align: top;word-break: break-all;word-wrap: break-word;' class='jianjiao'>",
    fkhtmlfooter:"</div></div></div></div></div>",
    kfhtmlheader:"<div class='ttkefu_kf_msg' style='width:85%; float:left;padding:0px; margin:0px;font-size: 9pt;overflow: hidden;'><div id='tt_kefdiv' style='padding:0px; margin:0px;float: left;margin-left: 5px;padding:1px 0px 0px 0px; max-width: 100%; min-height: 22px;min-width: 60px;'><div style='position: relative; padding:0px; margin:0px;'><div style='padding:0px; margin:0px; border: 0px solid #dddddd;border-radius: 5px 5px 5px 5px;box-shadow: 0 1px 0 #DBDBDB;'><div style='padding:0px; margin:0px;border-radius: 5px 5px 5px 5px;color: #030303;background-color: #ededed;  min-height: 20px; min-width: 37px;overflow: hidden;padding:10px 10px 10px 10px;text-align: left; word-break: break-all; word-wrap: break-word;' class='kfjaja'>",
    kfhtmlfooter:"</div></div></div></div></div>",
    first_to_msg:'',
    lastid:'',
    fkLstMsg:'',
    RepTypes:'0',
    RebotsVip:'0',
    act:'',    
    Client_style:'#2da3e8',
    sendtime:new Date(),
	getCSS:function(obj,style){
			if(window.getComputedStyle){
				return getComputedStyle(obj)[style];
			}
			return obj.currentStyle[style];	
	},
    /*请求初始化*/
    initAction:function(){
        switch(mini_dialog.RepTypes){
        	case '0':
            	mini_dialog.act='';
            break;
            
        	case '1':
            	mini_dialog.act='RebotsServer';
            break;
                        
        	case '2':
            	mini_dialog.act='';
            break;            
        }
    },
    /*删除客服列表*/
    clearKflb:function(){
    		if(document.getElementById("ttkefu_KfList_div")){
                    var miniP=document.getElementById("ttkefu_KfList_div").parentNode;
                    miniP.removeChild(document.getElementById("ttkefu_KfList_div"));
            }    
    },    
    /*迷你邀请*/
    yaoqing:function(){
        
        //删除结束对话提示
              var Divlist=document.getElementById("ttkefucontainer").getElementsByTagName("div");
              for(var i=0;i<Divlist.length;i++){
              	  if(Divlist[i].className=="ttkefu_closetsdiv"){
                  	  document.getElementById("ttkefucontainer").removeChild(Divlist[i]);
                  }
              }
              
         //去除输入框的只读
         	  document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
         //重置对话状态
         	   mini_dialog.state='0';
        //显示迷你窗口
        	  document.getElementById('minidialog').style.display='';
        
    },
    /*生成聊天记录*/
    CreateChats:function(){
    	//变量信息
        	 mini_dialog.state='0';
        //产品信息-产生对话后显示
             setTimeout(function(){ mini_dialog.ShowPrInfo();},1000)
    },
    /*产品信息*/
    ShowPrInfo:function(){
               if("0"=="1" && ttkefu_Curl_limit==1){
                var PJstr='<div align="center"  style="overflow:hidden; margin:0px 0px 8px 0px;padding:5px 8px;" >';
                    PJstr=PJstr+'<div  style="background:#ffffff; border-radius: 10px 10px 10px 10px;border:1px #D8DEE2 solid; line-height:20px; font-size:12px; color:#889298;text-align:left;  display:inline-block; *display:inline; *zoom:1; ">';
                    PJstr=PJstr+'<table style="height:auto; border:none;" width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="left" valign="top" style="padding:10px 8px 0px 8px;"><img src="/images/WxFace.png" width="40" height="40" ></td><td  style="padding:10px 0px 0px 0px;word-wrap: break-word; overflow: hidden; word-break: break-all;" id="ttkefu_ProInfo_span" data="【页面信息】：'+ttkefu_Ut+'" valign="top" ><div style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:161px;">'+ttkefu_pagetitle+'</div><div style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:161px;">'+ttkefu_minipagetitle+'</div></td></tr><td colspan="2" align="center" style="padding:5px 0px 10px 0px;"><span  onclick="mini_dialog.fbb()" class="Djsblue" style="cursor:pointer; border:1px #8e664d solid; padding:3px 18px; color:#936045; border-radius:30px;">发送</span></td></table>';
                    
                    PJstr=PJstr+'</div>';
                PJstr=PJstr+'</div>';
                
                
                var m_Pstr=document.createElement("div");
                m_Pstr.style.margin="0px";
                m_Pstr.style.padding="0px";
                m_Pstr.style.width="98%";
                
                /*消息类型*/
                m_Pstr.innerHTML=PJstr;
                
                document.getElementById("ttkefucontainer").appendChild(m_Pstr);
                document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
    		    }
    },
	shakeMove:function(json){
			//声明要进行抖动的元素
			var obj = json.obj;
			//声明元素抖动的最远距离
			var target = json.target;
			//默认值为20
			target = Number(target) || 20;
			//声明元素的变化样式
			var attr = json.attr;
			//默认为'left' 
			attr = attr || 'left'; 
			//声明元素的起始抖动方向
			var dir = json.dir;
			//默认为'1'，表示开始先向右抖动
			dir = Number(dir) || '1';
			//声明元素每次抖动的变化幅度
			var stepValue = json.stepValue;
			stepValue = Number(stepValue) || 2;
			//声明回调函数 
			var fn = json.fn;
			//声明步长step
			var step = 0;
			//保存样式初始值
			var attrValue = parseFloat(this.getCSS(obj,attr));
			//声明参照值value
			var value;
			//清除定时器
			if(obj.timer){return;}
			//开启定时器
			obj.timer = setInterval(function(){
                      //抖动核心代码
                      value = dir*(target - step);
                      //当步长值大于等于最大距离值target时
                      if(step >= target){
                      step = target
                      }
                      //更新样式值
                      obj.style[attr] = attrValue + value + 'px';
                      //当元素到达起始点时，停止定时器
                      if(step == target){
                      clearInterval(obj.timer);
                      obj.timer = 0;
                      //设置回调函数
                      fn && fn.call(obj); 
                      } 
                      //如果此时为反向运动，则步长值变化
                      if(dir === -1){
                      step = step + stepValue; 
                      }
                      //改变方向
                      dir = -dir; 
            
			},50); 
	
	},
    fbb:function(){
    	document.getElementById("sendMsgTxt_chat").value=document.getElementById("ttkefu_ProInfo_span").getAttribute("data");
        this.sendmsg();
    },
    tohtml:function(str){

            str=str.replace(/\[url/g,"<a target='_blank' href");
            str=str.replace(/\[\/url/g,"</a");

            str=str.replace(/\]/g,">");

  			return str;

    },
    
        /*强制留名检测*/
    qzlm:function(){
    
    	var ttkefu_qzlm_name=document.getElementById("ttkefu_qzlm_name").value;
        if(ttkefu_qzlm_name.length<2 || ttkefu_qzlm_name.length>20){
        		return "格式错误,姓名应在2-20个字符之间";
           
        }
         

        var ttkefu_qzlm_qq=document.getElementById("ttkefu_qzlm_qq").value;
        if(! /^[0-9]*$/.test(ttkefu_qzlm_qq)){
        		return "QQ格式错误";
        }
              
        var ttkefu_qzlm_phone=document.getElementById("ttkefu_qzlm_phone").value;
        if(! /1[0-9]{10}/.test(ttkefu_qzlm_phone)){
        		return "手机格式错误";
        }
     	
        /**/
        ttkefu_isleave_name="False";
        document.getElementById("ttkefu_qzlmDIv").style.display='none';
        document.getElementById("sendMsgTxt_chat").style.display='';
             
			   /* return "留名："+ttkefu_qzlm_name+"，手机："+ttkefu_qzlm_phone+"，QQ："+ttkefu_qzlm_qq; */
    	return "姓名："+ttkefu_qzlm_name+"，手机："+ttkefu_qzlm_phone+"，QQ："+ttkefu_qzlm_qq;
    },
    /*去除全部加载中*/
    clearLoading:function(){
    	var MaxId=parseInt(mini_dialog.id);
        for(var i=0;i<=MaxId;i++){
        	if(document.getElementById("ttkefu_d"+i)){
            	document.getElementById("ttkefu_d"+i).style.display='none';
            }
        }
    },
    act:"",
    sendmsg:function(){

    	/*强制留名检测*/
        if(ttkefu_isleave_name=="True"){
        	
        	var qzlmstr=this.qzlm();
            if(qzlmstr.indexOf("格式错误")>0){
               document.getElementById("ttkefuminitishi_alert").style.display="block";
               document.getElementById("ttkefuminitishi_txt_alert").innerHTML=qzlmstr;
            	//alert(qzlmstr);
                return false;
            }
            document.getElementById("sendMsgTxt_chat").value=qzlmstr;
        }    

        var sendminitxtmsg=document.getElementById("sendMsgTxt_chat").value;
        sendminitxtmsg=sendminitxtmsg.replace(/\s+/g,'');
        if(sendminitxtmsg==''){
        	return false;
        }
    	if(this.duihuaxuanze==0 && this.zhidingkefu==0){
        	/*生成客服列表*/
            if(document.getElementById("ttkefu_KfList_div")){
            	return false;
            }else{
            	document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
                var new_script = document.createElement("script");
                //act:err:82
                new_script.src = "/minimsg.jsp?f=0&zhidingkefu=0&fgid=6886&act="+mini_dialog.act+"&tS4wJ7="+sjs;
                new_script.charset="utf-8";
                document.getElementsByTagName("HEAD")[0].appendChild(new_script);
            	return false;
            }
        }
       //
    	clearTimeout(times2);
		var nnntime = new Date();
		var minsec = Date.parse(nnntime) - Date.parse(mini_dialog.sendtime);
		
		if(minsec<1000&&mini_dialog.i<31 ){
        	mini_dialog.i=mini_dialog.i+1;
        }else if(mini_dialog.i>30){
        	mini_dialog.i=30; 
        }else if(mini_dialog.i>=1){
        	mini_dialog.i=mini_dialog.i-1;
        }else{
        	mini_dialog.i=0;
        }
	
		mini_dialog.sendtime=nnntime;
		if(mini_dialog.i>0 ){
        	
            document.getElementById("ttkefu_mini_tishi").innerHTML="操作太过频繁,请"+mini_dialog.i+"秒后再试";
            document.getElementById("ttkefu_mini_tishi_parent").style.display='';
            document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
			times2=setTimeout('mini_dialog.sendmsg()',1000)
		} else {
        	document.getElementById("ttkefu_mini_tishi_parent").style.display='none';
            document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
			
            if(mini_dialog.state=="1"){
            /*对话已结束*/
                var m=document.createElement("div");
                m.id="ttkefu_closetsdiv";
                m.className="ttkefu_closetsdiv";
                m.innerHTML=mini_dialog.tshtmlheader+"当前对话已结束！"+mini_dialog.tshtmlfooter+"<div style='height:10px;padding:0px; margin:0px;font-size: 9pt;line-height: 19px;margin: 0px 0px 0px 0px;overflow: hidden; clear:both; ' class='ttkefu_jg'></div>";
                document.getElementById("ttkefucontainer").appendChild(m);
                document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
				document.getElementById("sendMsgTxt_chat").value="";
			}else if(document.getElementById("sendMsgTxt_chat").value.length>300){
            /*聊天文字不能大于300字*/
                var m=document.createElement("div");
                m.innerHTML="<div style='padding:0px; margin:0px; text-align:center; overflow:hidden;background:#e5eaed; font-size:9pt; height:28px; line-height:28px; color:#ff0000;'>聊天文字不能大于300字!</div>";
                document.getElementById("ttkefucontainer").appendChild(m);
                document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
            }else if(document.getElementById("sendMsgTxt_chat").value==""){
            /*聊天文字不能为空*/
                var m=document.createElement("div");
                m.innerHTML="<div style='padding:0px; margin:0px; text-align:center; overflow:hidden;background:#e5eaed; font-size:9pt; height:28px; line-height:28px; color:#ff0000;'>聊天文字不能为空!</div>";
                document.getElementById("ttkefucontainer").appendChild(m);
                document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
            }else if(document.getElementById("sendMsgTxt_chat").value==""){
            /*接待访客模式*/
            
            }else{
            /*消息发送*/
            
                  var txtttt=document.getElementById("sendMsgTxt_chat").value;
                  /*记录最后一条消息*/
                  mini_dialog.fkLstMsg=txtttt;
                  txtttt=txtttt.replace("[emo]","<img alt='表情' src='/images/face/qq/");
                  txtttt=txtttt.replace("[/emo]",".gif' />");
                  var sendtxt="<span class='ttkefu_fk_msg'>"+txtttt+"</span>";
                  sendtxt=sendtxt.replace(/\r\n/ig,"<br/>") ;
                  sendtxt=sendtxt.replace(/\n/ig,"<br/>") ;
                  	//图片替换
					sendtxt=sendtxt.replace(/\[img\]/ig,"<img onload=ly_pic_load.autowidth(this)  src=");
					sendtxt=sendtxt.replace(/\[\/img\]/ig," >");

                  
                  
                  //sendtxt=sendtxt.replace(" ","&nbsp;");
                  sendtxt=mini_dialog.tohtml(sendtxt);
                  
                  mini_dialog.id=mini_dialog.id+1;
                  var jsonstr="{\"datalist\":[{\"type\":\"1\",\"msg\":\""+sendtxt+"\",\"id\":\""+mini_dialog.id+"\",\"reffer\":\"0\"}]}";
 				  mini_dialog.issend=1;
                  /*form*/
                  
                  /*END---form*/
                  if(document.getElementById("sendMsgTxt_chat").value!=""){
					var dd=new Date();
                    
					var sendtxtp=dd.getHours()+":"+dd.getMinutes()+"分,访客:"+document.getElementById("sendMsgTxt_chat").value; 
                    ttkefu_Mchannel.PushTxt("2",ttkefu_Mchannel.lguseid,ttkefu_Mchannel.pushsound,sendtxtp);
                  }
                  
                  mini_dialog.addtimes();
                  mini_dialog.insertmsg(jsonstr);
                  
                  mini_dialog.getmsg({HH:"1431"});
                  
                  ttkefu_Mchannel.CloseWriting();
                  if(mini_dialog.getmsg_i>0){
                  	//连接成功后执行
                  }else{
                  	 mini_dialog.first_to_msg="{\"datalist\":[{\"type\":\"1\",\"msg\":\""+sendtxt+"\"}]}";
                  }
                  
                  
			}
		}  

    },    
    getmsg:function(MsgData){
    	/*同步网站会员登录检测*/
        if(ttkefuGetWzLgInfo_i==1 && mini_dialog.kfid>0){
				var ts_script = document.createElement("script");
				ts_script.src ="?x="+Math.random();
				document.getElementsByTagName("HEAD")[0].appendChild(ts_script);
                setTimeout(function(){
                    if(ttkefuGetWzLgInfo_i==1){
                        alert("会员登录接口请求失败,非https网站仅支持B对话链接,使用时将链接https://改为http://");
                    }				
                },5000)	;
                
				return false;        
        }
    
        /*发消息*/
        var sendmsgtxt="",ttkefu_posturl="";
        if(mini_dialog.issend==1 || (false && document.getElementById("sendMsgTxt_chat").value!="")){
        	
            sendmsgtxt=document.getElementById("sendMsgTxt_chat").value;
            sendmsgtxt=sendmsgtxt.replace(/\r\n/ig,"<br/>") ;
            sendmsgtxt=sendmsgtxt.replace(/\n/ig,"<br/>") ;
           // sendmsgtxt=sendmsgtxt.replace(" ","&nbsp;"); 
            //sendmsgtxt=sendmsgtxt.replace(/\%/g,"%25");
        
        	//仅当点击发送时获取发送内容
            if(mini_dialog.issend==1)
            {
            	ttkefu_posturl="&txt="+escape(sendmsgtxt)+"&txti="+mini_dialog.id;
            }
            if(false && document.getElementById("sendMsgTxt_chat").value!="")
            {
                ttkefu_posturl=ttkefu_posturl+"&v="+escape(sendmsgtxt);
            }

            //仅当点击发送时清空输入框内容
        	if(mini_dialog.issend==1)
            {
            	document.getElementById("sendMsgTxt_chat").value="";
            }
            
            if(mini_dialog.dialog){
                mini_dialog.dialog=false;
                mini_dialog.iarsfirst=2;
            }
        }

        /*首次应先产生对话连接,再发送消息，因发消息post提交，无法更新当前对话状态*/

        if(mini_dialog.chatid>0){
        	mini_dialog.getmsg_i=mini_dialog.getmsg_i+1;
            mini_dialog.ycurl="/minimsg.jsp?c="+mini_dialog.chatid+"&f="+mini_dialog.isfirst+"&fgid=6886&ki="+mini_dialog.kfid+"&ku=57452&m=0&minikhid="+mini_dialog.khid+"&w=0&z="+mini_dialog.iszhuanjie+"&zhidingkefu="+mini_dialog.zhidingkefu+"&p="+mini_dialog.p+"&dkfs=5&style_lang=0&mini41=新消息&wp="+mini_dialog.waitno+"&mp="+mini_dialog.n+"&tS4wJ7="+sjs+"&pst="+mini_dialog.issend+ttkefu_posturl+"&l="+ttkefu_Mchannel.types+"&Gl="+MsgData.HH+"&Timer="+mini_dialog.Timer+"&act="+mini_dialog.act+"&robots="+mini_tt.data.RebotsVip;
            
		}else{
            mini_dialog.ycurl="/minimsg.jsp?f="+mini_dialog.isfirst+"&tS4wJ7="+sjs+"&kfid=7364&fgid=6886&ki="+mini_dialog.kfid+"&ku=57452&z="+mini_dialog.iszhuanjie+"&zhidingkefu="+mini_dialog.zhidingkefu+"&p="+mini_dialog.p+"&dkfs=5&style_lang=0&wp="+mini_dialog.waitno+"&mp="+mini_dialog.n+"&pst="+mini_dialog.issend+"&minikhid="+mini_dialog.khid+ttkefu_posturl+"&Gl="+MsgData.HH+"&act="+mini_dialog.act+"&robots="+mini_tt.data.RebotsVip;
          //  mini_dialog.isfirst=2;

        }
        mini_dialog.p='1';
        var new_script = document.createElement("script");
        new_script.src = mini_dialog.ycurl;
        new_script.charset="utf-8";
        document.getElementsByTagName("HEAD")[0].appendChild(new_script);
        mini_dialog.yz=0;
        //重置发送,因post快于连接提交，在连接中用该参数确认为post后的链接提交
        mini_dialog.issend=0;
        clearTimeout(mini_cytime);
        if(ttkefu_Mchannel.types==0 && mini_dialog.act==''){
        	mini_cytime=setTimeout("mini_dialog.getmsg({HH:'1501'})",5000);
        }
        //自动断开
              ttkekfu_AutoCloseTalkTs();
    },
    tishifk:function(){
        //客服上线提示imlixian:服务器端更新imlixian1访客端更新
        if(mini_dialog.imlixian1==1 && mini_dialog.imlixian==0){
        	var fk_tishimsg='{"datalist":[{"type":"3","msg":"<span style=color:#ff0000;>"+mini_dialog.kfname+"上线了</span>"}]}';
            mini_dialog.insertmsg(fk_tishimsg);
        	
            mini_dialog.imlixian1=0;
        }        
    
    },
    yuzhimsg:function(){

    	if(false && mini_dialog.chatid>0 && ttkefu_Mchannel.lguseid!='' && ttkefu_Mchannel.pme ){
        	mini_dialog.kup=1;
            ttkefu_Mchannel.Send("ttkefu_xiaoxiyuzhi"+document.getElementById("sendMsgTxt_chat").value+"&ttkefu_khbh="+sjs);
            mini_dialog.kup=0;
            ttkefu_Mchannel.IsSendWriting=true;
         }
        //发送正在输入
        var sendminitxtmsg=document.getElementById("sendMsgTxt_chat").value;
        sendminitxtmsg=sendminitxtmsg.replace(/\s+/g,'');
        if(sendminitxtmsg!=''){
            ttkefu_Mchannel.IWriting();
        }        
    
         
    },
    boxs:'',
    miniwindow:function(){
        if(mini_dialog.windowstate==0)
        {
          document.getElementById("minidialog").style.height="39px";
          document.getElementById("minidialog").style.width="250px";
           document.getElementById("ttkefuminidialogtitle").style.margin="0px 90px";
           mini_dialog.boxs= document.getElementById("minidialog").style.boxShadow;
         document.getElementById("minidialog").style.boxShadow="none";
		   
            document.getElementById("ttkefuminidialogtitle").style.height="44px";
            document.getElementById("ttkefuminidialogtitle").style.lineHeight="34px";
            document.getElementById("ttkefutitle").style.height="39px";
            document.getElementById("ttkefutitle").style.lineHeight="34px"; 
		  
          
          document.getElementById("ttkefu_minwindow_min").style.display="none";
          //document.getElementById("ttkefu_minwindow_max").style.background="url(/images/maxmize.gif)  no-repeat";
          document.getElementById("ttkefu_minwindow_max").style.margin="17px 10px 0px 0px";
          
          document.getElementById("ttkefu_minwindow_close").style.display="none";
          
          document.getElementById("chat_div_main").style.display="none";
          document.getElementById("cinv_dialogtool").style.display="none";

          setCookie("miniwindowstate","1","d1");
          setTimeout(function(){mini_dialog.windowstate=1;},500);
          
          
        }
    },
    
    replaceURLWithHTMLLinks:function(text){
    
                    /*清理历史数据-替换掉非资源链接*/
            //var reg =/^<[Aa]\s+href\s*=\s*(['"])(.+?)\1>.*?(?<!\.(txt|doc|docx|rar|zip))<\/[Aa]>$/ig;
            var reg=/^<[Aa]\s+href\s*=\s*(['"])(.+?)\1>(((?!\.(jpg|bmp|gif|png|txt|doc|docx|rar|zip)).)*)<\/[Aa]>$/ig;
            text=text.replace(reg,"$2");
    
            /*转换为html*/                        
            var exp =/(^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]((?!\.(jpg|bmp|gif|png|txt|doc|docx|rar|zip)).)*$)/ig;
                        
            return text.replace(exp,"<a href=$1 target=_blank >$1</a>");
    },
    replaceURLWithHTMLLinksHttp:function(text){                 
                        var reg =/<a[^>]*href=[ '"]([^"]*)[' "][^>]*>(.*?)<\/a>/ig; 
                        var aMap = new Map();
                        var loop=0;
                        text=text.replace(reg,function(str1){
                            loop++;
                            aMap.set('replaceURLWithHTML'+loop, str1);                                
                             return 'replaceURLWithHTML'+loop;
                        });
                        
                        reg=/<img.*?>/ig;
                        var myMap = new Map();
                        loop=0;
                        text=text.replace(reg,function(str1){
                            loop++;
                            myMap.set('URLWithHTMLimg'+loop, str1);                                
                             return 'URLWithHTMLimg'+loop;
                        });
            
                        reg =/(http:\/\/|https:\/\/|[a-zA-Z0-9]+\.)((\w|=|\%|\?|\.|\/|&|-)+)/ig;
                        text= text.replace(reg, function(str1){ var s=str1;s=s.replace('&nbsp','');str1 = str1.replace('&nbsp;','');str1 = str1.replace('&nbsp',''); if(s.indexOf("http")==-1) s="http://"+s;  return '<a href='+s+' target=_blank>'+str1+'</a>';});
                        
                        aMap.forEach(function(value, key) {
                            text=text.replace(key,value);
                        });
                        
                        myMap.forEach(function(v, k) {
                            text=text.replace(k,v);
                        });        
                        

            return text;
    },             
    Ubb2Html:function(txt){
        //表情替换
        txt=txt.replace(/\[emo\]/ig,'<img alt=表情 src=/images/face/qq/');
        txt=txt.replace(/\[\/emo\]/ig,'.gif >');
        
        //图片替换
        txt=txt.replace(/\[img\]/ig,'<img onload=ly_pic_load.autowidth(this)  src=');
        txt=txt.replace(/\[\/img\]/ig,' >');
        
        //超链接替换
    //					txt=txt.replace(/\[url=(.+?)\]/ig,'<a href=$1  target=_blank>');
    //					txt=txt.replace(/\[\/url\]/ig,'</a>');
    
        
        txt=txt.replace(/\[url=(.+?)\]/ig,'$1');
        txt=txt.replace(/\[\/url\]/ig,'');
        
        //语音文件替换
        txt=txt.replace(/\[voice>/ig,'<img class=voceStyle src=/images/sound_stop.png voicesrc=');
        txt=txt.replace(/\[\/voice>/ig,' />');
        //文件替换
        txt=txt.replace(/\[file=(.+?)\]/ig,'<a href=$1  target=_blank>');
        txt=txt.replace(/\[\/file\]/ig,'</a>');
        
        return txt;
	},               
    /*消息内容自动识别url*/
    FilterUrl:function(str){
                            
            /*Ubb处理*/
            str=mini_dialog.Ubb2Html(str);
            /*超链接处理*/                        
            str=mini_dialog.replaceURLWithHTMLLinks(str);
            
            return str;
    },                
    /*消息内容自动识别url加http*/
    FilterUrlHttp:function(str){
                            
            /*Ubb处理*/
            str=mini_dialog.Ubb2Html(str);
            /*超链接处理*/                        
            str=mini_dialog.replaceURLWithHTMLLinksHttp(str);
            
            return str;
    },    
    createXmlHR:function(){
		  //Mozilla 浏览器（将XMLHttpRequest对象作为本地浏览器对象来创建）
		  if(window.XMLHttpRequest){ //Mozilla 浏览器
			  return new XMLHttpRequest();
		  }else if(window.ActiveXObject) { //IE浏览器
		  //IE浏览器（将XMLHttpRequest对象作为ActiveX对象来创建）
			  try{
				  return new ActiveXObject("Msxml2.XMLHTTP");
			  }catch(e){
				  try {
					  return new ActiveXObject("Microsoft.XMLHTTP");
				  }catch(e){}
			  }
		  }		  
	},    
    DTTRPost:function(url,callback){
    var xmlHttpRequest= mini_dialog.createXmlHR();
        if(callback!=""){
        	xmlHttpRequest.onreadystatechange = callback;
        }
        xmlHttpRequest.open("GET",url,true);
        //xmlHttpRequest.setRequestHeader("Access-Control-Allow-Origin","https://www.ttkefu.com"); 
        //xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
        xmlHttpRequest.setRequestHeader("Content-type","text/html; charset=UTF-8");
     //   xmlHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");
        xmlHttpRequest.send();	
	},            
    conn:function(ReqUrl,pstParas,call){					
               /* $.post(ReqUrl,pstParas,function(Jsonstr){
                        eval("var Json="+Jsonstr+";")
                        //call(Json);
                });		*/					
                
                $.ajax({
				type: "POST",
			//	async: false,
			//	cache: false,
			//	timeout:120000,
				url: ReqUrl,
				data: pstParas,
				dataType: "jsonp",
				//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             //	jsonp: "jsonp",
				//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            // 	jsonpCallback:call,
				
				success: function(Json) {
					//	mini_dialog.GetRecomand(Json);console.log(Json);
                     //   console.log(123);
				},
				error: function() {
				//	console.log('网络错误');
				}
        });
                				
    },
    GTrebotanswer:function(vid){
        var url="/DTTSer.jsp?act=GTrebot_answer&kuse=57452&fgid=6886&id="+vid+"&jsoncallback=mini_dialog.Getrebot_answer";  
        var new_script = document.createElement("script"); 
        new_script.src =url;
        document.getElementsByTagName("HEAD")[0].appendChild(new_script);
        document.getElementsByTagName("HEAD")[0].removeChild(new_script);
    },
     Getrebot_answer:function(Request){         console.log(Request);
           if(Request!=null){
                var msg=JSON.stringify(Request.msg);                
                var Jsondata='{"datalist":[{"type":"1","msg":'+msg+',"Getrebot_answer":"img"}]}';
            	mini_dialog.insertmsg(Jsondata);
             }   		
    },
    DTTRecomandRefreash:function(vid){

    //var url="/DTTSer.jsp";      
    var url="/DTTSer.jsp?act=GTHotLst&kuse=57452&fgid=6886&jsoncallback=mini_dialog.GetRecomand";  
    var new_script = document.createElement("script"); 
    new_script.src =url;
    document.getElementsByTagName("HEAD")[0].appendChild(new_script);
    document.getElementsByTagName("HEAD")[0].removeChild(new_script);
      //  mini_dialog.conn(url,{act:"GTHotLst",kuse:"57452",fgid:"6886",jsoncallback:"mini_dialog.GetRecomand"},mini_dialog.GetRecomand);        
    },
    GetRecomand:function(Request){         console.log(Request);
           if(Request.datalist!=null){
                var msg=JSON.stringify(Request.datalist[0].msg);
            //	msg=msg.replace(/quest/g,"rebot_quest");
            //	msg=msg.replace(/answer/g,"rebot_answer");
                
                var Jsondata='{"datalist":[{"type":"7","msg":'+msg+',"GTHotLst":"7"}]}';
               // setCookie("hotListBlockdata",Jsondata,"d1");console.log(Jsondata);
            	mini_dialog.insertmsg(Jsondata);
             }
   		/* if(Request.currentTarget.readyState==4 && Request.currentTarget.status==200 && Request.currentTarget.responseText!=""){
            var Jsonstr=Request.currentTarget.responseText;
            Jsonstr=Jsonstr.replace(/quest/g,"rebot_quest");
            Jsonstr=Jsonstr.replace(/answer/g,"rebot_answer");
            eval("var Json="+Jsonstr+";")
            if(Json.err==0){
            if(Json.Msg!=null){
                var Jsondata='{"datalist":[{"type":"7","msg":'+JSON.stringify(Json.Msg)+'}]}';
               // setCookie("hotListBlockdata",Jsondata,"d1");console.log(Jsondata);
            	mini_dialog.insertmsg(Jsondata);
             }
        	
            }
        }   */
    },
    saveFile:function(vid){
        var parameter;
        if(mini_dialog.chatid==0){
            mini_dialog.alert('对话时方可使用'); return ;
        }
      document.getElementById('info').src="/conversationormessage/ourcustomerservice/customerlist/ttsave.jsp?kid="+mini_dialog.chatid;
      mini_dialog.alert('导出文件成功');
    },
    getanswer:function(obj){
        var sendtxt=obj.getAttribute("rebot_answer");
          var jsonstr="{\"datalist\":[{\"type\":\"1\",\"msg\":\""+sendtxt+"\",\"id\":\"\",\"reffer\":\"0\"}]}";
          mini_dialog.insertmsg(jsonstr);
    },
     /*提示 客服正在输入*/
     humResTiShiShuRu:function(){	
         var len=document.getElementsByClassName("dot").length;
         if(len==0){
            var htmlstr="";
            var NowTime=new Date();
            var sendtime=NowTime.getHours()+":"+NowTime.getMinutes()+":"+NowTime.getSeconds();
            var SendTxt="<span class='dot'><span class='dot1' style='background:"+mini_dialog.Client_style+"'> </span><span class='dot2' style='background:"+mini_dialog.Client_style+"'> </span><span class='dot3' style='background:"+mini_dialog.Client_style+"'> </span></span>";
                    htmlstr=htmlstr+"<div class='ttkefu_kf_timer' style='color: #999;font-size: 12px; width:100%; display:block; margin:0px; text-align: center;'>"+sendtime+"</div>";
                    htmlstr=htmlstr+mini_dialog.kfhtmlheader+SendTxt+mini_dialog.kfhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
          if(htmlstr!="")
          {
             var m=document.createElement("div");
            m.style.margin="0px";
            m.style.padding="0px";
            m.style.width="98%";
            m.innerHTML=htmlstr;
            document.getElementById("ttkefucontainer").appendChild(m);
          }
          document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
         }
     },		
      /*提示 客服新消息替换提示消息*/
     humResTiShiShuRuTiHuan:function(MsgData){		
       var SendTxt="";
        var len=document.getElementsByClassName("dot").length;
         if(len>0)
         {
            SendTxt=mini_dialog.FilterUrlHttp(MsgData.msg);
            document.getElementsByClassName("dot")[0].parentNode.innerHTML=SendTxt;
         }
     },		 		 

    insertmsg:function(data){
      if(data!="")
      {
     // console.log(data);
               data=data.replace(/\r\n/ig,"<br/>") ;
               data=data.replace(/\n/ig,"<br/>") ;
               data=data.replace(/\r/ig,"<br/>") ;
               data=data.replace(/\t/ig," ") ;
               
          var json=eval("("+data+")");
          if(json.datalist==undefined) return;
          var m=document.createElement("div");
          m.style.margin="0px";
          m.style.padding="0px";
          m.style.width="98%";
          var htmlstr="";
          var TTKfMsg="";
          var KfMsg_ls="";
          //仅针对首次发送消息产生
          for(ji=0;ji<json.datalist.length;ji++)
          {
          	if(json.datalist[ji].msg!=""){
                var sendMsg=json.datalist[ji].msg;
                    if(json.datalist[ji].type=="1")
                    {
                      //   sendMsg=sendMsg.replace("<img onload=ly_pic_load.autowidth(this) src","<img  style='width:100px;' class=ImgInChats onload=ly_pic_load.loading(this) src=/images/imgloading.gif alt=加载中。。。 lysrc") ;
                      //   sendMsg=sendMsg.replace("<img onload=ly_pic_load.autowidth(this)  src","<img  style='width:100px;' class=ImgInChats onload=ly_pic_load.loading(this) src=/images/imgloading.gif alt=加载中。。。 lysrc") ;
                    	if(sendMsg.indexOf("<span class='ttkefu_fk_msg'><img")==0 || sendMsg.indexOf("<img")==0 || sendMsg.indexOf("<span class='ttkefu_fk_msg'>【页面信")==0){
                       
                       		sendMsg=mini_dialog.FilterUrl(sendMsg);
                       }
                       else{
                           if(json.datalist[ji].Getrebot_answer=="img"){
                               var expA =/<a[^>]*>|<\/a>/ig;
                               sendMsg=sendMsg.replace(expA,function(str1){ return '';});
                        //       sendMsg=sendMsg.replace("<img src","<img  style='width:100px;' class=ImgInChats onload=ly_pic_load.loading(this) src=/images/imgloading.gif alt=加载中。。。 lysrc") ;
    
                               sendMsg=mini_dialog.FilterUrlHttp(sendMsg);
                           }else{
                               sendMsg=mini_dialog.FilterUrlHttp(sendMsg);
                           }
                       }
                        if(json.datalist[ji].sendtime)
                        {
                            htmlstr=htmlstr+"<div style='color: #999;font-size: 12px; width:100%; display:block; margin:0px; text-align: center;'>"+json.datalist[ji].sendtime+"</div>";
                        }
                        htmlstr=htmlstr+mini_dialog.fkhtmlheader;
                        if(json.datalist[ji].id){
                            htmlstr=htmlstr+"<div id='ttkefu_d"+json.datalist[ji].id+"' style='position:absolute;left:0px; top:6px; padding:0px; margin:0px; width:16px; height:16px;background:url(/images/loading2.gif);'></div>";
                        }
                        htmlstr=htmlstr+sendMsg+mini_dialog.fkhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                        
                    }
                    if(json.datalist[ji].type=="2")
                    {
                       var len=document.getElementsByClassName("dot").length;
         			  if(len==0){
                        if(json.datalist[ji].sendtime)
                        {
                            htmlstr=htmlstr+"<div class='ttkefu_kf_timer' style='color: #999;font-size: 12px; width:100%; display:block; margin:0px; text-align: center;'>"+json.datalist[ji].sendtime+"</div>";
                        }
                        
                        KfMsg_ls=json.datalist[ji].msg;
                        if(KfMsg_ls.indexOf("<img")==0 || KfMsg_ls.indexOf("发送文件:")==0){
                        	KfMsg_ls=mini_dialog.FilterUrl(KfMsg_ls);
                        }else if(KfMsg_ls.slice(-8)=="立即查阅</a>" ){					
							KfMsg_ls=mini_dialog.FilterUrl(KfMsg_ls);
                        }
                        else{
                           KfMsg_ls=mini_dialog.FilterUrlHttp(KfMsg_ls);
                       }
                        if(KfMsg_ls=="<shake1q1w>" ){
                            if(json.datalist.length==1){
                                var ox=document.getElementById("minidialog");
                                mini_dialog.shakeMove({obj:ox,attr:'right'});
                            }
							/*发送了一个震动sun*/
                            KfMsg_ls="发送了一个震动";
                        }
                        /*机器人无答案的回复wws*/
                        if(KfMsg_ls!=""){
                            if(KfMsg_ls.indexOf('{$FkLstMsg}')>=0){
                                    /*访客最后一句话-去除ubb*/
                                    var ilstmsg=mini_dialog.fkLstMsg;                           
                                    ilstmsg=ilstmsg.replace(/\[[^\]]+\]/g,'');;
                                    KfMsg_ls=KfMsg_ls.replace('{$FkLstMsg}',ilstmsg);
                            }
                        }
                        
                        htmlstr=htmlstr+mini_dialog.kfhtmlheader+KfMsg_ls+mini_dialog.kfhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                      }else{
                      	mini_dialog.humResTiShiShuRuTiHuan(json.datalist[ji]);
                      }
                    }
                    /*提示类消息*/
                    if(json.datalist[ji].type=="3")
                    {
                    
                        if(document.getElementById("ttkefucontainer").lastChild.innerHTML.indexOf(json.datalist[ji].msg)<0)
                        {
                            htmlstr=htmlstr+"<div style='width:200px; border-radius:4px;padding:0px; margin:5px auto 0px auto; text-align:center; overflow:hidden;background:#e5eaed; font-size:9pt; height:32px; line-height:32px; color:#ff0000;'>"+json.datalist[ji].msg+"</div><div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                        }
                    }
                    if(json.datalist[ji].type=="4")
                    {
                        htmlstr=htmlstr+"<div  style='color: #999;font-size: 12px;width:100%; display:block; margin-bottom:10px; text-align: center;clear:both;'>"+json.datalist[ji].msg+"</div>";
                    }
                    
                    if(json.datalist[ji].type=="5")
                    {
                        /*--*/
                        while(document.getElementById("ttkefu_pd")){
                            var objdiv=document.getElementById("ttkefu_pd");
                            objdiv.parentNode.removeChild(objdiv);
                        }
                        m.id="ttkefu_pd";
                        htmlstr=htmlstr+"<div style=' border-radius:4px;padding:0px; margin:5px auto 0px auto; text-align:left; overflow:hidden;background:#e5eaed; font-size:9pt; line-height:18px; color:#ff0000;'>"+json.datalist[ji].msg+"</div><div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                    }
                    
                    if(json.datalist[ji].type=="6")
                    {
                        m.id="ttkefu_KfList_div";
                        htmlstr=htmlstr+"<div style=' border-radius:4px;padding:0px; margin:5px auto 0px auto; text-align:left; overflow:hidden;background:#ffffff; font-size:9pt; line-height:18px; color:#ff0000;' id='ttkefu_KfList'><font style='width:100%;float:left;text-indent:0px; border-bottom:1px #cccccc solid; margin:0px 0px 2px 0px;'>请选择客服</font></div><div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                         m.innerHTML=htmlstr;
                         document.getElementById("ttkefucontainer").appendChild(m);
                        TTKfMsg=json.datalist[ji].msg;
                        var ttkefuii_zxs=0;
                        for(var ttkefuii=0; ttkefuii<TTKfMsg.length; ttkefuii++){
                            TTKfMsg[ttkefuii].Bh=ttkefuii+1;
                            mini_dialog.CreateKfList(TTKfMsg[ttkefuii]);
                            ttkefuii_zxs=ttkefuii_zxs+1;
                            if(ttkefuii_zxs>0 && ttkefuii_zxs<TTKfMsg.length){
                                mini_dialog.CreateKfList({a:0});
                            }
                            
                        }
                        document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
                        return false;
                    } 
                    
                    if(json.datalist[ji].type=="7")
                    {
                        m.id="ttkefu_JqrList_div";
                        htmlstr=htmlstr+mini_dialog.kfhtmlheader+"<div id='ttkefu_JqrList_content_div' style='padding:0px;margin:0px;'><div style='padding: 6px 0px;width: 98%;border-bottom: 1px solid rgb(204, 204, 204); margin-bottom: 10px;'>热门问题<a  href='JavaScript:mini_dialog.DTTRecomandRefreash(123);' style='float:right;' ><img width='16' height='16' src='/images/reload.png' ></a></div><div id='hotListBlock_168'></div></div>"+mini_dialog.kfhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
                        m.innerHTML=htmlstr;
                        if(document.getElementById("ttkefu_JqrList_div")==null) document.getElementById("ttkefucontainer").appendChild(m);
                        
                        //
                        document.getElementById("ttkefu_JqrList_content_div").parentNode.parentNode.parentNode.style.width="96%";
                        document.getElementById("ttkefu_JqrList_content_div").parentNode.parentNode.parentNode.parentNode.style.width="96%";
                        document.getElementById("ttkefu_JqrList_content_div").parentNode.parentNode.parentNode.parentNode.parentNode.style.width="100%";
                        
                        var vMsgList=json.datalist[ji].msg;
                        	document.getElementById("hotListBlock_168").innerHTML='';
                        for(var ttkefuii=0; ttkefuii<vMsgList.length; ttkefuii++){
                             
                              var vdivli=document.createElement("div");
                              vdivli.style.margin="0px";
                              vdivli.style.padding="2px 0px";
                              vdivli.style.width="98%";
							  vdivli.style.fontSize="12px";
                              vdivli.style.cursor="default";
                              //vdivli.style.borderBottom="1px #ccc solid";
                              var xh="";
                              var wt="wt";
                              var nr=vMsgList[ttkefuii].rebot_quest;
                              vdivli.setAttribute("class",wt);
                              vdivli.setAttribute("title",nr);
                              vdivli.setAttribute("vid",vMsgList[ttkefuii].id);
                              vdivli.setAttribute("rebot_answer",vMsgList[ttkefuii].rebot_answer);
                              if(vMsgList[ttkefuii].rebot_quest.length>=17){vMsgList[ttkefuii].rebot_quest=vMsgList[ttkefuii].rebot_quest.substr(0,17)+"...";};
                              vdivli.innerHTML="·"+vMsgList[ttkefuii].rebot_quest;
                              
                              vdivli.onclick=function(){
                                      mini_dialog.id=mini_dialog.id+1;
                                      var sendtxt=this.getAttribute("rebot_answer");
                                      var jsonstr="{\"datalist\":[{\"type\":\"1\",\"msg\":\""+sendtxt+"\",\"id\":\""+mini_dialog.id+"\",\"reffer\":\"0\"}]}";
                                      mini_dialog.insertmsg(jsonstr);
                                      
                                      //
                                      document.getElementById("ttkefu_d"+mini_dialog.id).style.display="none";
                              }
                              	document.getElementById("hotListBlock_168").appendChild(vdivli);
                             //   document.getElementById("ttkefu_JqrList_content_div").appendChild(vdivli);
                        }
                        	document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
                           // data=data.replace('"GTHotLst":"7"','"GTHotLst":""');
                        window.localStorage.setItem("hotListBlockdata", data);
                        return false;
                    } 
            }
            
            /*reffer:存在临时插入不存在reffer参数.服务器反馈成功 */
            if(json.datalist[ji].reffer){
            	/*--访客发送消息等成功有时结束不掉，结束倒计时--*/
                ttkefu_noleave();
            }else{
                /*更新离开时间*/
            	ttkefu_noleave();
            }
            
          }
          if(htmlstr!="")
          {
            m.innerHTML=htmlstr;
            document.getElementById("ttkefucontainer").appendChild(m);
            if(htmlstr.indexOf("voicesrc")>0){
				ttkefu_Event_SooundImgClick();
            }   
          }
          document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
	  }
    },
		/*截图反馈*/
		BakCutImg:function(BakData){
               
				var vMsg=BakData.MsgData;
				if(vMsg.indexOf("_")>0){
					var vCutImg="[img]https://pic1022.ttkefu.com/?"+vMsg.split("_")[1]+"[/img]";
                    document.getElementById("sendMsgTxt_chat").value=vCutImg;
					mini_dialog.sendmsg();
				}else{
					 mini_dialog.alert("截图完成，Ctrl+V粘贴到输入框即可发送");
				}
                
		},
		/*截图插件安装检测*/
		InStallJieTu:function(){
				setCookie("ttkefu_jietu","1","d3000");
		},
		InStallJieTuCk:function(){
				
				if(getCookie("ttkefu_jietu")==""){
                			//
                            document.getElementById("ttkefu_jietu_Install_minitishi").style.display="block";
				}
		},   
    CreateKfList:function(MsgData){
                var ttkefu_font=document.createElement("font");
                
                if(MsgData.a>0){
                        ttkefu_font.id="ttkefu_font"+MsgData.a;
                        ttkefu_font.style.color="#000000";
                        ttkefu_font.style.margin="5px 0px 0px 0px";
                        ttkefu_font.style.textAlign="center";
                        ttkefu_font.style.padding="5px 0px";
                        ttkefu_font.style.cursor="pointer";
        
                        ttkefu_font.setAttribute("kf",MsgData.a);
                        ttkefu_font.setAttribute("zt",MsgData.c);
                        ttkefu_font.setAttribute("nc",MsgData.b);
                        ttkefu_font.setAttribute("gh",MsgData.e);
                        
                        var ttkefu_font_glbh=MsgData.b,ttkefu_font_zxbz=MsgData.c,ttkefu_font_bm=MsgData.d;
                        var ttkefu_font_glbhshow=ttkefu_font_glbh;
                        if(ttkefu_font_glbh.length>6){
                            ttkefu_font_glbhshow=ttkefu_font_glbh.substring(0,6)+"...";
                        }
                        var ttkefu_font_bmshow=ttkefu_font_bm;
                        if(ttkefu_font_bm.length>6){
                            ttkefu_font_bmshow=ttkefu_font_bm.substring(0,6)+"...";
                        }
                        
                        ttkefu_font.innerHTML=ttkefu_font_glbhshow+" <font style='color:#666666;'>["+ttkefu_font_bmshow+"]</font>";
                        
                        ttkefu_font.onclick=function(){
                                if(this.getAttribute("zt")=="离线"){
                                        listtana('/conversationormessage/ourcustomerservice/customerlist/app/chat_boxs.jsp?R5s6eT="+this.getAttribute("kf")+"&t5Ys2R=57452&s2N6eL=this.getAttribute("gh")&fgid=6886&tS4wJ7='+sjs,this.getAttribute("nc"));
                                    
                                }else{
                                        mini_dialog.zhidingkefu=this.getAttribute("kf");
                                        mini_dialog.kfid=mini_dialog.zhidingkefu;
                                        //ie不支持remove
                                        //document.getElementById("ttkefu_KfList_div").remove(0);
                                        
                                        var miniP=document.getElementById("ttkefu_KfList_div").parentNode;
                                        miniP.removeChild(document.getElementById("ttkefu_KfList_div"));
                                        
                                        document.getElementById("sendMsgTxt_chat").removeAttribute("readonly");
                                        if(document.getElementById("sendMsgTxt_chat").value!=""){
                                        	  document.getElementById("ttkefuMiniSendbtn").click();
                                        }else{
                                        	  mini_dialog.getmsg({HH:"1980"});
                                        }
                                }
                            
                        }
                            
                        ttkefu_font.onmouseover=function(){
                            if(this.getAttribute("zt")!="离线"){
                                ttkefu_minwindow_Over(ttkefu_font);
                            }
                        }
                        
                        ttkefu_font.onmouseout=function(){
                            if(this.getAttribute("zt")!="离线"){
                                ttkefu_minwindow_Out(ttkefu_font);
                            }
                        }
                }else{
                	  //竖线
                        ttkefu_font.style.margin="5px 0px 0px 0px";
                        ttkefu_font.style.color="#cccccc";
                        ttkefu_font.style.textAlign="center";
                        ttkefu_font.style.padding="5px 0px";
                        ttkefu_font.style.cursor="pointer";
                        ttkefu_font.innerHTML=" | ";                  
                }
                
                document.getElementById("ttkefu_KfList").appendChild(ttkefu_font);
    
    },
    alert:function(msg){
        document.getElementById("ttkefuminitishi_txt_alert").innerHTML=msg;
        document.getElementById("ttkefuminitishi_alert").style.display="";    
    },
    maxwindow:function(){
    	if(mini_dialog.windowstate==1)
        {
          document.getElementById("minidialog").style.height="auto";
          document.getElementById("minidialog").style.width="285px";
           document.getElementById("ttkefuminidialogtitle").style.margin="0 auto";
			document.getElementById("minidialog").style.boxShadow=mini_dialog.boxs;

		   
            document.getElementById("ttkefuminidialogtitle").style.height="31px";
            document.getElementById("ttkefuminidialogtitle").style.lineHeight="22px";
            document.getElementById("ttkefutitle").style.height="26px";
            document.getElementById("ttkefutitle").style.lineHeight="22px";
            
            document.getElementById("ttkefu_minwindow_max").style.margin="10px 0px 0px 0px";
          
          
          
          document.getElementById("ttkefu_minwindow_min").style.display="";
          //document.getElementById("ttkefu_minwindow_max").style.background="url(/images/yxjreply0.gif)  no-repeat";
          
          
          document.getElementById("ttkefu_minwindow_close").style.display="";
          
          document.getElementById("chat_div_main").style.display="";
          document.getElementById("cinv_dialogtool").style.display="";
          mini_dialog.windowstate=0;
          document.getElementById("ttkefucontainer_wrapper").scrollTop=document.getElementById("ttkefucontainer_wrapper").scrollHeight;
          setCookie("miniwindowstate","0","d1");
        }
        else
        {

            	/*关闭当前循环以及迷你窗口*/
                document.getElementById('minidialog').style.display='none';
                clearTimeout(mini_cytime);
           		/*弹出新窗口*/
                if(mini_dialog.dialog&&mini_dialog.zhidingkefu==0)
                {
                    /*tana('2');*/
                    window.open("/conversationormessage/ourcustomerservice/customerlist/chat_boxs.jsp?u=6886&t5Ys2R=57452&tS4wJ7="+sjs+"&fgid=6886&s2N6eL=57452&isshowstyle=1&dkfs=2&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle)+"","57452","top=0,left=100,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes")
                }
                else
                {
                   var weburl="/conversationormessage/ourcustomerservice/customerlist/chat_boxs.jsp?R5s6eT="+mini_dialog.zhidingkefu+"&t5Ys2R=57452&s2N6eL="+mini_dialog.use+"&fgid=6886&tS4wJ7="+sjs+"&dkfs=2&lang=0&Purl="+ttkefu_pageurl+"&Pt="+ttkefu_pagetitleLimtit(ttkefu_pagetitle);
                   window.open(weburl,"57452","top=0,left=100,width=849,height=619,scrollbars=no,resizable=yes,status=no,z-look=yes,alwaysRaised=yes,location=no,depended=no,center:yes");
                }

            
        }
    },
    closetishi:function(){
 		
       if(mini_dialog.isfirst>0)
        {
          document.getElementById("ttkefuminitishiwrapperdiv").style.height="151px";
document.getElementById("ttkefuminitishi").style.height="151px";
          document.getElementById("ttkefuminitishi_txt").innerHTML="是否关闭该对话？请您对我的服务给予评价！";
          document.getElementById('ttkefuminitishi').style.display='';
          document.getElementById('ttkefuminitishiwrapper').style.display='';             
          
          document.getElementById('ttkefuminiqueding').onclick=function(){mini_dialog.pingfen(1);}
          
                  
        }
        else
        {
        	document.getElementById("ttkefuminitishiwrapperdiv").style.height="128px";
        	document.getElementById("ttkefuminitishi_txt").innerHTML="结束对话？";
            document.getElementById('ttkefuminitishi').style.display='';
            document.getElementById('ttkefuminitishiwrapper').style.display='';    
            document.getElementById('ttkefuminiqueding').onclick=function(){mini_dialog.closewindow();}
        }
    },
    pingfen:function(IsExit){
         if(mini_dialog.chatid==0) {
         	mini_dialog.alert('对话时方可使用'); return ;
         }
        document.getElementById('ttkefuminitishi').style.display='none';
        document.getElementById('ttkefuminitishiwrapper').style.display='none';
        document.getElementById("ttkefuminitishi").style.height="291px";
        document.getElementById("ttkefuminitishiwrapperdiv").style.height="238px";
        document.getElementById('minittkefutitletxt').innerHTML='';
        document.getElementById('ttkefuminitishi_close').style.display='none';
        /*document.getElementById('ttkefuminitishi_title').style.fontWeight="normal";*/
          
      //  document.getElementById('ttkefuminitxtlimit').style.display='';
        <!--document.getElementById('ttkefuminitishi_txt').innerHTML='<input type="radio" name="ttkefuminirad" checked="checked" value="1" />非常满意 <input type="radio" name="ttkefuminirad" value="2" />满意 <input type="radio" name="ttkefuminirad" value="3" />一般 <br /><input type="radio" name="ttkefuminirad" value="4" />较差 <input type="radio" name="ttkefuminirad" value="5" />极差<br />您的建议<br /><textarea name="ttkefuminitxt" id="ttkefuminitxt" style="height:71px;" cols="20"></textarea>';-->
        document.getElementById('ttkefuminitishi_txt').innerHTML='<span id="wen" style="display:block;margin-bottom:15px;font-size: 16px;font-family: 微软雅黑;">您对本次服务满意吗？</span><div class="kschatwindowstandard_popup_evaluate_starshow"><p class="kschatwindowstandard_star_evaluation" id="ksdefault_selected" style="margin-bottom:15px" onMouseOver="rate(this,event)"><img class="ttkefuminirad" src="/img/icon_starmini_on.png" alt="" _num="5"><img class="ttkefuminirad" src="/img/icon_starmini_on.png" alt="" _num="4"><img class="ttkefuminirad" src="/img/icon_starmini_on.png" alt="" _num="3"><img class="ttkefuminirad" src="/img/icon_starmini_on.png" alt="" _num="2"><img class="ttkefuminirad" src="/img/icon_starmini_on.png" alt="" _num="1"></p><div id="aaa" style="display: flex;color:#ff9a55;margin-bottom:15px;justify-content: center;align-items: center;padding: 0 10px;"><img src="/img/icon_satisfied_very.png" style="margin-right:10px" alt="">非常满意 </div></div><textarea name="ttkefuminitxt" id="ttkefuminitxt" style="height:56px;outline:none;resize:none;padding:5px;border:1px solid #dbdbdb" placeholder="还有哪些地方需要改进？" cols="20"></textarea>';
        document.getElementById('ttkefuminitishi_txt').style.padding="5px 0px 5px 10px";
      //  document.getElementById('ttkefuminiquxiao').style.display="none";

        document.getElementById('ttkefuminiqueding').onclick=function(){mini_dialog.tijiaopingfen(mini_dialog.chatid,IsExit);}
        document.getElementById('ttkefuminitishi').style.display='';
        <!--document.getElementById('ttkefuminitishiwrapper').style.display='none';-->
        document.getElementById('ttkefuminitishiwrapper').style.display='';
    },
    tijiaopingfen:function(chatid,IsExit){
        document.getElementById('ttkefuminitishi').style.display='none';
        document.getElementById('ttkefuminitishiwrapper').style.display='none';
           document.getElementById('ttkefuminitishi').style.height='128px';
           /*  document.getElementById('ttkefuminitishi').style.boxShadow='none';
              document.getElementById('ttkefuminitishi').style.background='';
               document.getElementById('ttkefuminitishidiv').style.background='';*/
       /*关闭循环*/
      if(mini_dialog.isfirst>0)
       {
       	if(IsExit!=0)	mini_dialog.stoploop();
       }
       
       /*数据验证*/
       var ttkefuminipftxt=document.getElementById('ttkefuminitxt').value;
       if(ttkefuminipftxt.length>150)
       {
            document.getElementById("ttkefuminitxtlimit").style.color="#ff0000";
            return;
       }
       else
       {
       	  document.getElementById("ttkefuminitxtlimit").style.color="#555555";
       }
       var mypingfen=0;
       for(i=0;i<5;i++)
       {
       		item=document.getElementsByClassName("ttkefuminirad")[i];
       		if(item.getAttribute("src")=="/img/icon_starmini_on.png")
            {
       			mypingfen=item.getAttribute("_num");
            }
       }

       /*评分数据*/       
        var new_script = document.createElement("script");
        if(IsExit==0){
        	new_script.src ="/conversationormessage/ourcustomerservice/customerlist/pingfenyemian.jsp?act=minipingfen&pf="+mypingfen+"&jy="+encodeURIComponent(ttkefuminipftxt)+"&id="+chatid;
         }
        else{
        	new_script.src ="/conversationormessage/ourcustomerservice/customerlist/pingfenyemian.jsp?act=minipingfen&pf="+mypingfen+"&jy="+encodeURIComponent(ttkefuminipftxt)+"&id="+chatid;
        }
        new_script.charset="utf-8";
        document.getElementsByTagName("HEAD")[0].appendChild(new_script);
        
        /*显示窗口*/
        
        document.getElementById("ttkefuminitishiwrapperdiv").style.height="128px";
        document.getElementById('minittkefutitletxt').innerHTML="";
        document.getElementById('ttkefuminitishi_close').style.display='';
        document.getElementById('ttkefuminitishi_txt').style.padding="0px 10px 10px 20px";
        document.getElementById('ttkefuminitishi_txt').innerHTML="提交成功，谢谢"; 
        document.getElementById('ttkefuminiqueding').onclick=function(){mini_dialog.closetishiwindow();}
      //  document.getElementById('ttkefuminiquxiao').style.display="none";
        document.getElementById('ttkefuminitxtlimit').style.display="none";
       // document.getElementById('wen').style.display="none";
        document.getElementById('ttkefuminitishi').style.display='';

        document.getElementById('ttkefuminitishiwrapper').style.display='';
        
        
        
    },
    shoucang:function(){
         /*关闭循环*/
         if(mini_dialog.isfirst>0)
         {
              mini_dialog.stoploop();
         }
/*		if(document.all)
        {window.external.AddFavorite('','');}
        else if(window.sidebar)
        {window.sidebar.addPanel('','','')};*/
       
    },
    closetishisign:function(){
    	if(document.getElementById('ttkefuminitishi_close').style.backgroundColor=="")
        {
        	document.getElementById('ttkefuminitishi_close').style.backgroundColor="#CC0000";
            document.getElementById('ttkefuminitishi_close').style.color="#ffffff";
        }
        else
        {
        	document.getElementById('ttkefuminitishi_close').style.backgroundColor="";
            document.getElementById('ttkefuminitishi_close').style.color="#555555";
        }
    },
    closetishiwindow:function(){
    
        document.getElementById('ttkefuminitishi').style.display='none';
        document.getElementById('ttkefuminitishiwrapper').style.display='none';
        
        document.getElementById('ttkefu_jietu_Install_minitishi').style.display='none';
        document.getElementById('ttkefu_jietu_minitishiwrapper').style.display='none';
        
        document.getElementById('ttkefuminitishi_jietu').style.display='none';
        document.getElementById('ttkefuminitishi_alert').style.display='none';
        document.getElementById('ttkefuminitishiwrapper_jietu_BigImg').style.display='none';
        
    }, 
    closeBigImg:function(){
    	document.getElementById('ttkefuminitishiwrapper_jietu_BigImg').style.display='none';
    },
    closewindow:function(){
          if(mini_dialog.isfirst>0)
          {
            mini_dialog.exiturl="/minimsg.jsp?act=exit&ki="+mini_dialog.kfid+"&minikhid="+mini_dialog.khid+"&fgid=6886&dkfs=&c="+mini_dialog.chatid;
            var new_script = document.createElement("script");
            new_script.src = mini_dialog.exiturl;
            document.getElementsByTagName("HEAD")[0].appendChild(new_script);
          }
          document.getElementById('minidialog').style.display='none';
          document.getElementById('ttkefuminitishi').style.display='none';
          document.getElementById('ttkefuminitishiwrapper').style.display='none';
         
          clearTimeout(mini_cytime);
          mini_dialog.clear(timerkkff);
          var Jsinv_text="您好请问有什么可以帮您的？";
          
          document.getElementById("ttkefucontainer").innerHTML=''+mini_dialog.kfhtmlheader+Jsinv_text+mini_dialog.kfhtmlfooter+"<div class='ttkefu_jg' style='height:10px;padding:0px; margin:0px;font-size: 9pt; margin: 0px 0px 0px 0px;overflow: hidden; clear:both; '></div>";
          
          mini_dialog.chatid=0;
          mini_dialog.kfid=0;
          mini_dialog.khid=0;
          mini_dialog.use='';
          mini_dialog.i=0;
          mini_dialog.dialog=true;
          mini_dialog.isfirst=0;
          mini_dialog.iszhuanjie=0;
          mini_dialog.zhidingkefu=0;
          mini_dialog.state='0';
          mini_dialog.p='0';
          document.getElementById("ttkefuminitishi_txt").innerHTML="是否关闭该对话？请您对我的服务给予评价！";

      
    },
    stoploop:function(){
          if(mini_dialog.isfirst>0)
          {
            mini_dialog.exiturl="/minimsg.jsp?act=exit&ki="+mini_dialog.kfid+"&minikhid="+mini_dialog.khid+"&fgid=6886&dkfs=&c="+mini_dialog.chatid;
            var new_script = document.createElement("script");
            new_script.src = mini_dialog.exiturl;
            document.getElementsByTagName("HEAD")[0].appendChild(new_script);
            clearTimeout(mini_cytime);
            mini_dialog.clear(timerkkff);
          }
          clearTimeout(mini_cytime);
          mini_dialog.clear(timerkkff);
          var Jsinv_text="您好请问有什么可以帮您的？";
          
          document.getElementById("ttkefucontainer").innerHTML=''+mini_dialog.kfhtmlheader+Jsinv_text+mini_dialog.kfhtmlfooter+'<div style="height:10px;padding:0px; margin:0px;font-size: 9pt;line-height: 19px;margin: 0px 0px 0px 0px;overflow: hidden; clear:both; " class="ttkefu_jg"></div>';
          
          mini_dialog.chatid=0;
          mini_dialog.kfid=0;
          mini_dialog.khid=0;
          mini_dialog.use='';
          mini_dialog.i=0;
          mini_dialog.dialog=true;
          mini_dialog.isfirst=0;
          mini_dialog.iszhuanjie=0;
          mini_dialog.zhidingkefu=0;
          mini_dialog.state='0';
          mini_dialog.p='0';
    },   
    exit:function(){
          if(mini_dialog.isfirst>0)
          {
            mini_dialog.exiturl="/minimsg.jsp?act=exit&ki="+mini_dialog.kfid+"&minikhid="+mini_dialog.khid+"&fgid=6886&dkfs=&c="+mini_dialog.chatid;
            var new_script = document.createElement("script");
            new_script.src = mini_dialog.exiturl;
            document.getElementsByTagName("HEAD")[0].appendChild(new_script);
          }
          clearTimeout(mini_cytime);
          mini_dialog.clear(timerkkff);
          var Jsinv_text="您好请问有什么可以帮您的？";
          
          document.getElementById("ttkefucontainer").innerHTML=''+mini_dialog.kfhtmlheader+Jsinv_text+mini_dialog.kfhtmlfooter+'<div class="ttkefu_jg" style="height:10px;padding:0px; margin:0px;font-size: 9pt;line-height: 19px;margin: 0px 0px 0px 0px;overflow: hidden; clear:both; "></div>';
          
          mini_dialog.chatid=0;
          mini_dialog.kfid=0;
          mini_dialog.khid=0;
          mini_dialog.use='';
          mini_dialog.i=0;
          mini_dialog.dialog=true;
          mini_dialog.isfirst=0;
          mini_dialog.iszhuanjie=0;
          mini_dialog.zhidingkefu=0;
          mini_dialog.state='0';
          mini_dialog.p='0';
          document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
          document.getElementById("ttkefutitle").innerHTML="当前对话已结束！";
          document.getElementById("ttkefuonlineKefuName").innerHTML="";
          
    },

    AutoDkexit:function(){
          if(mini_dialog.isfirst>0)
          {
            mini_dialog.exiturl="/minimsg.jsp?act=exit&ki="+mini_dialog.kfid+"&minikhid="+mini_dialog.khid+"&fgid=6886&dkfs=&c="+mini_dialog.chatid;
            var new_script = document.createElement("script");
            new_script.src = mini_dialog.exiturl;
            document.getElementsByTagName("HEAD")[0].appendChild(new_script);
          }
          clearTimeout(mini_cytime);
          mini_dialog.clear(timerkkff);
          mini_dialog.chatid=0;
          mini_dialog.kfid=0;
          mini_dialog.khid=0;
          mini_dialog.use='';
          mini_dialog.i=0;
          mini_dialog.dialog=true;
          mini_dialog.isfirst=0;
          mini_dialog.iszhuanjie=0;
          mini_dialog.zhidingkefu=0;
          mini_dialog.state='0';
          mini_dialog.p='0';
          document.getElementById("sendMsgTxt_chat").setAttribute("readonly","true");
          document.getElementById("ttkefutitle").innerHTML="当前对话已结束！";
          document.getElementById("ttkefuonlineKefuName").innerHTML="";
          
    },    
    sendtxtfoucs:function(){
    	mini_dialog.clear(timerkkff);
        document.getElementById("uploadFileBox1").style.display="none";
       
    },
    xmyc:function(){
    	 xmycxx=document.getElementById("ttkefu_qzlm_name");
         if(xmycxx.value=="姓名"){
            xmycxx.value="";
         }
    },
    xmxs:function(){
    	 xmycmm=document.getElementById("ttkefu_qzlm_name");
         if(xmycmm.value==""){
            xmycmm.value="姓名";
         }
    },
    QQyc:function(){
         ycqq=document.getElementById("ttkefu_qzlm_qq");
         if(ycqq.value=="QQ"){
            ycqq.value="";
         }
    },
    QQxs:function(){
           xsqq=document.getElementById("ttkefu_qzlm_qq");
         if(xsqq.value==""){
            xsqq.value="QQ";
         }
    },
    peyc:function(){
         ycpe=document.getElementById("ttkefu_qzlm_phone");
         if(ycpe.value=="手机号"){
            ycpe.value="";
         }
    },
    pexs:function(){
           xspe=document.getElementById("ttkefu_qzlm_phone");
         if(xspe.value==""){
            xspe.value="手机号";
         }
    },
    sendtxtblur:function(){
		ttkefu_Mchannel.CloseWriting();
    },
    show:function(msgtype)
    {
        /*标题栏闪烁提示*/
              var step=0, 
              _title =mini_dialog.title;
              var timer = setInterval(function(){
                               step++; 
                               if (step==3) {step=1} 
                               if (step==1) {
                                  document.title="【　　　】"+_title;
                                  document.getElementById("ttkefutitle").style.color="#FF0000";
                                  document.getElementById("ttkefuonlineKefuName").style.color="#FF0000";
                                  document.getElementById("ttkefuminidialogtitle").style.background="#FFFF00  url(/images/kf.png) no-repeat 10px center";
                               }
                               if (step==2) {
                                  document.title="【"+msgtype+"】"+_title;
                                  document.getElementById("ttkefutitle").style.color=mini_dialog.fontcolor;
                                  document.getElementById("ttkefuonlineKefuName").style.color=mini_dialog.fontcolor;
                                  document.getElementById("ttkefuminidialogtitle").style.background=mini_dialog.titlebg+"  url(/images/kf.png) no-repeat 10px center";}
               }, 500);
                                                
        /*声音提示*/                             
            if(mini_dialog.labaOpen==1){
       		  document.getElementById('soundMsg').setAttribute('src','/sound/type.mp3');
             }
        /*如果窗口没有最大化则最大化*/
              if(mini_dialog.windowstate==1){
                  mini_dialog.maxwindow()
              }
        
        document.getElementById("sendMsgTxt_chat").focus();
        return [timer, _title];    
    }, 
	clear : function(timerArr) {
    	if(timerArr) { 
        	clearInterval(timerArr[0]);
            setTimeout(function(){document.title = timerArr[1]},500);
            document.getElementById("ttkefuminidialogtitle").style.background=mini_dialog.titlebg+"  url(/images/kf.png) no-repeat 10px center";
            document.getElementById("ttkefutitle").style.color=mini_dialog.fontcolor;
            document.getElementById("ttkefuonlineKefuName").style.color=mini_dialog.fontcolor;
            
            } 
     },
     addtimes:function(){
        var mynowtime=new Date();
        mynowtime=mynowtime.getFullYear()+"-"+(mynowtime.getMonth()+1)+"-"+(mynowtime.getDate()+1)+" "+(mynowtime.getHours()+1)+":"+(mynowtime.getMinutes()+1)+":"+(mynowtime.getSeconds()+1);
        /*1分钟添加一次时间*/
        if(mini_dialog.GetDateDiff(mini_dialog.jstime,mynowtime,"minute")>=1)
        {
            mini_dialog.jstime=mynowtime;
            var nowday=new Date();
            var m=document.createElement("div");
            m.style.margin="0px";
            m.style.padding="0px";
            m.innerHTML="<div style='margin:0px;padding:0px;color: #999;font-size: 12px; text-align: center;'>"+nowday.getHours()+":"+nowday.getMinutes()+":"+nowday.getSeconds()+"</div>";
            document.getElementById("ttkefucontainer").appendChild(m);
            document.getElementById('ttkefucontainer').scrollTop=document.getElementById('ttkefucontainer').scrollHeight;
        }
     },
     GetDateDiff:function(startTime, endTime, diffType) { 
        /*将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式*/ 
        startTime = startTime.replace(/\-/g, "/"); 
        endTime = endTime.replace(/\-/g, "/"); 
        /*将计算间隔类性字符转换为小写*/  
        diffType = diffType.toLowerCase(); 
        var sTime = new Date(startTime); //开始时间 
        var eTime = new Date(endTime); //结束时间 
        /*作为除数的数字 */ 
        var divNum = 1; 
        switch (diffType) { 
        case "second": 
        divNum = 1000; 
        break; 
        case "minute": 
        divNum = 1000 * 60; 
        break; 
        case "hour": 
        divNum = 1000 * 3600; 0
        break; 
        case "day": 
        divNum = 1000 * 3600 * 24; 
        break; 
        default: 
        break; 
       } 
      return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum)); 
     },
	importhtml:function(){
			//获取当前页面部分内容
			var txt="<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html><head></head><body>";
			var tongjiwrapper=document.getElementById("ttkefucontainer").innerHTML;
			txt=txt+tongjiwrapper+"</body></html>"; 
            var mynowtime=new Date();
            mynowtime=mynowtime.getFullYear()+"-"+(mynowtime.getMonth()+1)+"-"+(mynowtime.getDate()+1);
            							  
			var htmlname="聊天记录-"+mynowtime;
			ttkefuimport.document.location="about:blank";								  
			ttkefuimport.document.open("text/html","utf-8"); 
			ttkefuimport.document.write(txt);
			ttkefuimport.document.execCommand("SaveAs", true, htmlname+'.htm');
			ttkefuimport.close(); 
	},
    Ubb2Html:function(txt){
        //表情替换
        txt=txt.replace(/\[emo\]/ig,'<img alt=表情 src=/images/face/qq/');
        txt=txt.replace(/\[\/emo\]/ig,'.gif >');
        
        //图片替换
        txt=txt.replace(/\[img\]/ig,'<img onload=ly_pic_load.autowidth(this)  src=');
        txt=txt.replace(/\[\/img\]/ig,' >');
        
        //超链接替换
//					txt=txt.replace(/\[url=(.+?)\]/ig,'<a href=$1  target=_blank>');
//					txt=txt.replace(/\[\/url\]/ig,'</a>');
        
        txt=txt.replace(/\[url=(.+?)\]/ig,'$1');
        txt=txt.replace(/\[\/url\]/ig,'');
        
        
        //文件替换
        txt=txt.replace(/\[file=(.+?)\]/ig,'<a href=$1  target=_blank>');
        txt=txt.replace(/\[\/file\]/ig,'</a>');
                            
        return txt;
    },
    replaceURLWithHTMLLinks:function(text){
    
            /*清理历史数据-替换掉非资源链接*/
            //var reg =/^<[Aa]\s+href\s*=\s*(['"])(.+?)\1>.*?(?<!\.(txt|doc|docx|rar|zip))<\/[Aa]>$/ig;
            var reg=/^<[Aa]\s+href\s*=\s*(['"])(.+?)\1>(((?!\.(jpg|bmp|gif|png|txt|doc|docx|rar|zip)).)*)<\/[Aa]>$/ig;
            text=text.replace(reg,"$2");
    
            /*转换为html*/                        
            var exp =/(^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]((?!\.(jpg|bmp|gif|png|txt|doc|docx|rar|zip)).)*$)/ig;
            
            return text.replace(exp,"<a href=$1 target=_blank >$1</a>");
    },
    /*消息内容自动识别url*/
    FilterUrl:function(str){
                            
            /*Ubb处理*/
            str=mini_dialog.Ubb2Html(str);
            
            /*超链接处理*/                        
            str=mini_dialog.replaceURLWithHTMLLinks(str);
            
            return str;
    }
    
         
};
var mini_tt={
	data:{
    	RebotsVip:"",
    	Welcom:"",
        TTNoAns:"",
        robnoplyzdyblm:"",
        robnoplystate:"",
        robnoplyurl:"",
        vFToHts:"",
        TTSayNoLimt:"",
        Welcom:0
        
    },
    TAutoTime:function(){
        var mynowtime=new Date();
        return mynowtime=(mynowtime.getHours())+":"+(mynowtime.getMinutes()+1)+":"+(mynowtime.getSeconds()+1);				
    },
	Welcom:'',
    /*TT：不知道话术*/
    DTTSayNoArt:function(){
                var ino=this.data.TTNoAns;
                if(ino.indexOf('{$FkLstMsg}')>=0){
                    /*访客最后一句话*/
                    var ilstmsg="";
                    if(document.getElementById("ttkefu_d"+mini_dialog.id)){
                        var iParent=document.getElementById("ttkefu_d"+mini_dialog.id).parentNode;
                        ilstmsg=iParent.innerHTML;
                    }                    
                    ilstmsg=ilstmsg.replace(/<\/?.+?>/g,"");
                    ino=ino.replace('{$FkLstMsg}',ilstmsg);
                    ino=ino.replace('{$zdyblm}',this.data.robnoplyzdyblm);
                    /*立即搜索*/
                    if(this.data.robnoplystate=="1" && this.data.robnoplyurl!=""){
                    
                        var ilink=this.data.robnoplyurl;
                        ilink=ilink.replace("{$FkLstMsg}",ilstmsg);
                        ilink=ilink.replace("{$zdyblm}",this.data.robnoplyzdyblm);
                        
                        ino=ino+"<a href='"+ilink+"' target=_blank  style=color:#ff0000; font-weight:bold; >立即查阅</a>";
                    }
                    
                }
                return ino;
    },
    SayNo:function(){
    	
        var zdhf=this.DTTSayNoArt();
        var tishimsg="{\"datalist\":[{\"type\":\"2\",\"msg\":\""+zdhf+"\",\"reffer\":\"3966\"}]}";
		//tt:回复
		mini_dialog.insertmsg(tishimsg);
        
    },
	TTWelcom:function(){
    	var imsg=this.Welcom;
		var mynowtime=this.TAutoTime();
    	mini_dialog.insertmsg('{"datalist":[{"type":"2","reffer":"3920","msg":"'+imsg+'","sendtime":"'+mynowtime+'"}]}');
    }, 
    RobtsVipTs:function(){
        var fk_tishimsg='{"datalist":[{"type":"3","msg":"<span style=color:#ff0000;>机器人未开通或过期</span>"}]}';
        mini_dialog.insertmsg(fk_tishimsg);
    }
    
}


/**/
document.addEventListener('paste', function (event) {

        var isChrome = false;
        if (event.clipboardData || event.originalEvent) {
            //某些chrome版本使用的是event.originalEvent
            var clipboardData = (event.clipboardData || event.originalEvent.clipboardData);
            if(clipboardData.items){
                // for chrome
                var  items = clipboardData.items,
                        len = items.length,
                        blob = null;
                isChrome = true;
                for (var i = 0; i < len; i++) {
                    if (items[i].type.indexOf("image") !== -1) {
                        //getAsFile() 此方法只是living standard firefox ie11 并不支持
                        blob = items[i].getAsFile();
                    }
                }
                 console.log("len:"+len);
                if(blob!==null){
                	console.log("blob!==null");
                    var blobUrl=URL.createObjectURL(blob);
                    console.log("blobUrl="+blobUrl);
                    //blob对象显示
                    //document.getElementById("ttkefu_jietu_yulan").src=blobUrl;
                    //document.getElementById("ttkefuminitishi_jietu").style.display="";
                    
                      var reader = new FileReader();
                    //base64码显示
                     reader.onloadstart = function (event) {

                     		 console.log("reader.onloadstart");
                     }

                     reader.onprogress = function (event) {
                     		 console.log("reader.onprogress");
                     }
                     reader.onabort = function (event) {
                     		 console.log("reader.onabort");
                     }
                     //onerror
                     reader.onerror = function (event) {
                     		 console.log("reader.onerror");
                     }

                     reader.onload = function (event) {
                     		 console.log("reader.onload");
                     }
                     reader.onloadend = function (event) {
                     		 console.log("reader.onloadend");
                             // event.target.result 即为图片的Base64编码字符串
                             var base64_str = event.target.result;
                             
                             document.getElementById("ttkefu_jietu_yulan").src=base64_str;
        					 document.getElementById("ttkefuminitishi_jietu").style.display="";
                             document.getElementById("ttkefuminiqueding_jietu_val").value=base64_str;                             
                     }
                     reader.readAsDataURL(blob);
                     
                }
            }
        }
})


function ttkefu_hide(str){
document.getElementById(str).style.display='none'
}

/*访客等待超时提示：以访客发送消息成功为起始点*/
function ttkefu_FkWaitOvTime(){
	//访客聊天状态设置vip是否开启
		if(mini_dialog.AutoClose_Ok==0){
			return false;
		}

	//客服是否在线
		if(mini_dialog.imlixian==1){
			return false;
		}
	//是否处于对话结束提示中
		if(ttkefu_Mchannel.TalkTs==1){
			return false;
		}
	
	//是否正处于对话中
		if(!ttkefu_Mchannel.lg){
			return false;
		}
	
	//是否开启
		 if(ttkefu_fkwaitstate!="True"){
		 	return false;
		 }

	//是否超时
		 var Ntime=new Date();
		 var OvTime_Cha=(Ntime.getTime()-ttkefu_FkSendTime.getTime())/1000;
		 if(parseInt(OvTime_Cha)<parseInt(ttkefu_fkwaittime)){
		 	return false;
		 }

	//插入消息提示
		 ttkefu_Mchannel.InsertTs({TiShi:'\u6211\u6B63\u5728\u4E3A\u60A8\u67E5\u8BE2\u8D44\u6599\uFF0C\u8BF7\u7A0D\u5019\uFF01',type:0});
}

//访客无回复超时提示:已客服发送消息为起始点
function ttkefu_KfWaitOvTime(){
	//访客聊天状态设置vip是否开启
		if(mini_dialog.AutoClose_Ok==0){
			return false;
		}
	//客服是否在线
		if(mini_dialog.imlixian==1){
			return false;
		}

	//是否处于对话结束提示中
		if(ttkefu_Mchannel.TalkTs==1){
			return false;
		}
	
	//是否正处于对话中
		if(!ttkefu_Mchannel.lg){
			return false;
		}
	
	//是否开启
		 if(ttkefu_fknoreplystate!="True"){
		 	return false;
		 }

	//是否超时
		 var Ntime=new Date();
		 var OvTime_Cha=(Ntime.getTime()-ttkefu_KfSendTime.getTime())/1000;
		 if(parseInt(OvTime_Cha)<parseInt(ttkefu_fknoreplytime)){
		 	return false;
		 }
	//插入消息提示
		 ttkefu_Mchannel.InsertTs({TiShi:'\u5DF2\u7ECF\u5F88\u4E45\u6CA1\u6709\u6536\u5230\u60A8\u7684\u8BAF\u606F\uFF0C\u60A8\u8FD8\u6709\u5176\u4ED6\u9700\u8981\u6211\u670D\u52A1\u7684\u4E48\uFF1F',type:1});
}

//访客无操作,自动结束对话提示-以访客，客服消息发送成功为判断时间点
function ttkekfu_AutoCloseTalkTs(){
	//客服是否在线
		if(mini_dialog.imlixian==1){
			return false;
		}
	//是否处于对话结束提示中
		if(ttkefu_Mchannel.TalkTs==1){
			return false;
		}
	//是否正处于对话中
		if(!ttkefu_Mchannel.lg){
			return false;
		}
	//是否超时,单位分钟
		 var Ntime=new Date();
		 var OvTime_Cha=Ntime.getTime()-ttkefu_leavetime.getTime();
		 if(parseInt(OvTime_Cha)<parseInt(ttkefu_fkstaytime)){
		 	return false;
		 }
        
	//是否开启-关闭自动结束对话且vip功能可以使用
		 if(ttkefu_fkleavestate!="True" && mini_dialog.AutoClose_Ok==1){
		 	return false;
		 }
	//插入消息提示
		 ttkefu_Mchannel.TalkTs=1;
		 ttkefu_Mchannel.InsertTs({TiShi:'\u5982\u65E0\u5176\u5B83\u95EE\u9898\uFF0C\u7CFB\u7EDF\u5C06\u5012\u8BA1\u65F6\u7ED3\u675F\u672C\u6B21\u5BF9\u8BDD\u3002\u518D\u6B21\u54A8\u8BE2\u8BF7\u91CD\u65B0\u53D1\u8D77\uFF0C\u795D\u60A8\u6109\u5FEB\uFF0C\u518D\u89C1\uFF01',type:2});
    //倒计时开始
    	 ttkekfu_QZCloseTalk(110);
}

//友好结束对话
function ttkekfu_yhAutoCloseTalkTs(){

	//访客聊天状态设置vip是否开启
		if(mini_dialog.AutoClose_Ok==0){
			return false;
		}
	//插入消息提示
		 ttkefu_Mchannel.TalkTs=1;
		 ttkefu_Mchannel.InsertTs({TiShi:'\u5982\u65E0\u5176\u5B83\u95EE\u9898\uFF0C\u7CFB\u7EDF\u5C06\u5012\u8BA1\u65F6\u7ED3\u675F\u672C\u6B21\u5BF9\u8BDD\u3002\u518D\u6B21\u54A8\u8BE2\u8BF7\u91CD\u65B0\u53D1\u8D77\uFF0C\u795D\u60A8\u6109\u5FEB\uFF0C\u518D\u89C1\uFF01',type:2});
    //倒计时开始
    	 ttkekfu_QZCloseTalk(110);
}
//强制结束对话
var ttkefu_leavetimes=0;
function ttkekfu_QZCloseTalk(i){
		  i--;
          clearTimeout(ttkefu_leavetimes);
          if(i==0){
              /*强制结束对话*/
              mini_dialog.AutoDkexit();
          }else{
              document.getElementById("DJS"+ttkefu_Mchannel.TsId).innerHTML=i;
              clearTimeout(ttkefu_leavetimes);
              ttkefu_leavetimes=setTimeout("ttkekfu_QZCloseTalk("+i+")",1000);
          }
}
/*取消倒计时,更新自动结束对话倒计时*/
function ttkefu_noleave(){
	ttkefu_leavetime=new Date();
	clearTimeout(ttkefu_leavetimes);
	ttkefu_Mchannel.TalkTs=0;
}
onner();


/*手机版迷你窗口-消息提示框-----*/
document.write('<div id="sj_ttkefuyaoqing" style="display:none;width:90%; left:3%; bottom:50px; height:auto;margin:0px; padding:8px;background:#f3f4f6;z-index:2147483642; position: fixed; border-radius:8px; ">');
	document.write('<div id="kf_yaoqing" style="width:100%; height:auto;margin:0px; padding:0px;">');
            document.write('<div id="ttkefu_Mb_MinWindow_MsgDivTitle" style="width:auto; margin:0px 0px 0px 5px; height:30px; line-height:30px;">');
                document.write('<span  onClick="ttkefuyaoqing.hide()" style="float:right; font-size:28px; color:#000000; padding:0px 10px;" >×</span>');
                document.write('<span  style="background-image:url(/images/ul_list1.gif);background-position:0px -129px;background-repeat:no-repeat;padding:0px 0px 0px 30px;height: 28px; line-height:28px; text-align:left; color:#000000;" >客服</span>');
            document.write('</div>');
            document.write('<div id="invtexttd" onClick="ttkefuyaoqing.startchats()" style="width:auto; height:auto; line-height:28px; margin:0px 2% 0px 13px; padding:0px 0px; font-size:14px; color:#000000; ">\u60A8\u597D,\u8BF7\u95EE\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u5230\u60A8\u7684\u5417?</div>');
    document.write('</div>');
document.write('</div>');


//document.getElementById("sj_ttkefuyaoqing").style.left=(window.innerWidth-244)/2+"px";
//document.getElementById("sj_ttkefuyaoqing").style.top=(window.innerHeight-111)/2+"px";

var ttkefuyaoqing={
	kfid:0,kgid:0,kfnicheng:'',
	show:function(strtext,kfid,kgid,nicheng){
            if(kfid){this.kfid=kfid}if(kgid){this.kgid=kgid}
            document.getElementById("sj_ttkefuyaoqing").style.display="block";
            if(typeof(strtext)!="undefined" && strtext.length>1){
                document.getElementById("invtexttd").innerHTML=strtext;
            }
    },
	showtishi:function(strtext,ycolor,kfid,kgid,nicheng){
		ttkefuyaoqing.show(strtext,kfid,kgid,nicheng)
	},
	showyxjtishi:function(strtext,kfid,kgid,nicheng){
		ttkefuyaoqing.show(strtext,kfid,kgid,nicheng)
	},
	showbtmtishi:function(strtext,kfid,kgid,nicheng){
		ttkefuyaoqing.show(strtext,kfid,kgid,nicheng)
	},
	hide:function(){
		document.getElementById("sj_ttkefuyaoqing").style.display="none";
	},
	startchats:function(){
		if(this.kfid==0){
            ttkefu_Mb_Kf_Tan({icostyle:0,row:4788});
		}else{
            ttkefu_Mb_Kf_Tan({icostyle:0,R5s6eT:ttkefuyaoqing.kfid,row:4790});
		}

	}
};
 
	
			  document.write('<a id="ttkefu_Mb_Ico_Wrapper" style="display:'+G_ttkefu_Mb_Min_IcoAndYq_Dispaly+';" href="javascript:ttkefu_Mb_Open({icostyle:2,EleId:0});" ><div id="ttkefuico" row="5041"  style="width:25px; height:85px; border-top-right-radius:4px;border-bottom-right-radius:4px;   background:#006633; line-height:18px; position:fixed; color:#ffffff; left:0px; top:140px;cursor:pointer; font-size:15px; text-align:left; z-index:2147483640;" ><div  id="ttkefu_Mb_Ele_0"  style="position:relative; width:100%;height:100%;margin:0px; padding:8px 0px 0px 0px; padding-left:5px;font-size:15px;color:#ffffff;" >在线客服</div></div></a>');
	  





/*----*/
if(document.getElementById("sj_ttkefu_ico")){
	var Sjscan_ttkefu=ttkefu_getBrowserInfo();
    
    for(var i=0;i<document.getElementById("sj_ttkefu_ico").childNodes.length-1;i++)
    {
    
        document.getElementById("sj_ttkefu_ico").childNodes.item(i).onmouseover=function(){
            if(Sjscan_ttkefu.browser=="msie"){
                //this.style.filter="alpha(opacity=80)";}else{this.style.opacity="0.8";}
                
                }
            this.style.background="#cccccc";
        }
        
        document.getElementById("sj_ttkefu_ico").childNodes.item(i).onmouseout=function(){
            if(Sjscan_ttkefu.browser=="msie"){
                //this.style.filter="alpha(opacity=100)";}else{this.style.opacity="1"; }
                
             }
            if(this.id=="sj_ttkefu_ico_close"){
            	this.style.background="#E2EEE8";
            }else{
            	this.style.background="#006633";
            }
        }
        
    }
}
	/*二维码放大*/
    var ttkefu_ErWeiMa;
    function ttkefu_ErWeiMa_over(){
             clearTimeout(ttkefu_ErWeiMa);
             if(document.getElementById("ttkefuqrcode0")){
             	document.getElementById("ttkefuqrcode1").style.display="";
                document.getElementById("ttkefuqrcode2").style.display="";
                document.getElementById("ttkefuqrcode3").style.display="";
             }
    }

    
    function ttkefu_ErWeiMa_out(event){
             if(document.getElementById("ttkefuqrcode0")){
                document.getElementById("ttkefuqrcode1").style.display="none";
                document.getElementById("ttkefuqrcode2").style.display="none";
                document.getElementById("ttkefuqrcode3").style.display="none";
                //


                //非IE
                event.stopPropagation();
             }
    }
    //微信全屏关闭
    function ttkefu_ErWeiMa_quan(){
             if(document.getElementById("ttkefuqrcode0")){
                document.getElementById("ttkefuqrcode1").style.display="none";
                document.getElementById("ttkefuqrcode2").style.display="none";
                document.getElementById("ttkefuqrcode3").style.display="none";
                //

                //非IE
                event.stopPropagation();
             }
    }
    /*关闭按钮*/
    function ttkefu_ErWeiMa_close(){
             if(document.getElementById("sj_ttkefu_ico")){
                document.getElementById("sj_ttkefu_ico").style.display="none";
             }
    }
    
/*手机版迷你窗口-----*/
document.write('<div id="ttkefuminitishiwrapper_MbMinWindow" style="display:none; margin:0px; padding:0px;position:sticky;z-index:99999999999999999999999;width:100%; bottom:85%;height:0;text-align:center;">');
	document.write('<div id="ttkefuminitishiwrapperdiv_MbMinWindow" style=" opacity:0.5; width:100%; height:100%; background:#666666; position:fixed; top:0; left:0; z-index:9999100;display:none; "></div>');
	document.write('<a href="javascript:ttkefu_MinWidow_Close()" ><div onClick="ttkefu_MinWidow_Close()" id="ttkefuminitishiwrapperdiv_MbMinWindow_Min"  style=" /*background:rgb(255, 153, 0); */opacity:0;/*background-image:url(/k/xia.png);*/ width:63px; height:47px;     background-size: 40% 54%;  float: right;position: sticky;top:10%;     background-repeat: no-repeat;    background-position: 30px 10px;right:0px; z-index:999999999999999999999999; "></div></a>');document.write('<iframe id="ttkefu_Ifa_MbMinWindow" name="ttkefu_Ifa_MbMinWindow" allow="camera;microphone" load="0" style="height:90%; width:100%; background:#fff;  bottom:0; left:0%; z-index:9999101; position:fixed;" scrolling="no" frameborder="0" ></iframe>');
document.write('</div>');
/*End手机版迷你窗口-----*/

/*手机版迷你窗口-对话存在提示图标-----*/
document.write('<div id="ttkefu_Mb_MinWindow_TakingIcoDiv" style="display:'+G_ttkefu_Mb_Min_TalkingIco_Dispaly+'; margin:0px; padding:0px;position:fixed; /*_position:absolute;*/z-index:111111;width:60px; height:60px; line-height:80px; border:none;border-radius:50%;box-shadow:0px 0px 60px #f5c005; right:10px;bottom:10px; text-align:center; background:#ffffff; float:right">');
	document.write('<div id="ttkefu_Mb_MinWindow_TakingIcoDivTxt" style="position:relative; height:60px; line-height:60px;font-weight:bold; color:#ff0000;">');
		/*document.write('<img src="/images/ttkefu_Mb_MinWindow_TakingIco.png" style="width:30px; border:0px;padding:0px;margin:15px;" >');*/
    	document.write('<div id="ttkefu_Mb_MinWindow_TakingIco_Num" style="z-index:99;display:none;position:absolute; background:#ff0000;color:#ffffff;padding:0px; margin:0px; width:15px; height:15px; line-height:15px; border-radius:50%; font-size:10px;font-weight:normal; top:10px; right:10px;" ></div>');
       document.write("<style>#ttkefuico:before{content: '';width: 100%;background: #33CCCC;z-index: 2147483640;position: fixed;left: 0px;bottom: 0px;visibility: visible;}#HeaderDiv{border-radius:10px 10px 0 0}#ttkefuminitishiwrapperdiv_MbMinWindow_Min{display:block !important}#ttkefu_Ifa_MbMinWindow:before{content: '';position: fixed;bottom: 0;left: 0;width: 100%;height: 85%;}#ttkefuminitishiwrapper_MbMinWindow:before{ content: '';position: sticky;bottom: 0;left: 0;width: 100%;height: 100%;}/*#ttkefuminitishiwrapperdiv_MbMinWindow_Min:before{ content: '';    background: rgb(51, 51, 51);position: absolute;top: 15%;right: 0px;width: 63px;height: 50px;}*/#ttkefu_Mb_MinWindow_TakingIcoDiv:before{  content: '';position: fixed;bottom: 0;left: 0;width: 60px;height: 60px;}#ttkefu_Mb_MinWindow_TakingIcoDivTxt:after {content: '';position: absolute;left: 25%;bottom: 25%;background-size: cover;background-image: url('/images/ttkefu_Mb_MinWindow_TakingIco.png');background-position: 50%;background-repeat: no-repeat;width: 30px;height:30px;}#ttkefuqrcode0:after,#ttkefu_Mb_Ele_12:after,#sj_ttkefu_ico_close:after{content: '';position: absolute;left:7px;bottom: 7px;background-size: cover;background-position: 50%;background-repeat: no-repeat;width: 0.16rem;height: 0.16rem;}#ttkefuqrcode0,#ttkefu_Mb_Ele_12,#sj_ttkefu_ico_close{position:relative}</style>")
    document.write('</div>');
document.write('</div>');

document.getElementById("ttkefu_Mb_MinWindow_TakingIcoDiv").onclick=function(){
		/*显示聊天小窗口*/
	    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="";
       // ttkefu_Mb_MinWindow_SetLoad("0");
      if(document.getElementById("ttkefu_Ifa_MbMinWindow").getAttribute("src")==null){
		ttkefu_Mb_Kf_Tan({icostyle:0});
      }
      
}

 


/*End手机版迷你窗口-对话存在提示图标-----*/





/*手机版迷你窗口-消息提示框-----*/
document.write('<div id="ttkefu_Mb_MinWindow_MsgDiv" style="display:none;width:90%; left:5%; bottom:50px; height:auto;margin:0px; padding:0px;background:#f3f4f6;z-index:2147483640; position: fixed; border-radius:8px; ">');
	document.write('<div style="width:100%; height:auto;margin:0px; padding:0px;">');
            document.write('<div id="ttkefu_Mb_MinWindow_MsgDivTitle" style="width:auto; margin:0px 0px 0px 5px; height:30px; line-height:30px;">');
                document.write('<span id="ttkefu_Mb_MinWindow_MsgDivTitle_Close" style="float:right; font-size:28px; color:#000000; padding:5px 10px;" >×</span>');
                document.write('<span id="ttkefu_Mb_MinWindow_MsgDivTitle_Name" style="background-image:url(/images/ul_list1.gif);background-position:0px -129px;background-repeat:no-repeat;padding:0px 0px 0px 30px;height: 28px; line-height:28px; text-align:left; color:#000000;" ></span>');
            document.write('</div>');
            document.write('<div id="ttkefu_Mb_MinWindow_MsgDivTxt" style="width:auto; height:auto; line-height:28px; margin:0px 2% 0px 13px; padding:0px; font-size:14px; color:#000000; "></div>');
    document.write('</div>');
document.write('</div>');

document.getElementById("ttkefu_Mb_MinWindow_MsgDiv").onclick=function(){
		/*显示聊天小窗口*/
	    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="";
}

document.getElementById("ttkefu_Mb_MinWindow_MsgDivTitle_Name").onclick=function(){
	ttkefu_Mb_Kf_Tan({icostyle:0});
}

document.getElementById("ttkefu_Mb_MinWindow_MsgDivTxt").onclick=function(){
	//ttkefu_Mb_Kf_Tan({icostyle:0});
    
    /*显示聊天小窗口*/
	    document.getElementById("ttkefuminitishiwrapper_MbMinWindow").style.display="";
       
}



document.getElementById("ttkefu_Mb_MinWindow_MsgDivTitle_Close").onclick=function(){
	document.getElementById("ttkefu_Mb_MinWindow_MsgDiv").style.display="none";
}


/*End手机版迷你窗口-消息提示框-----*/


    

lastScrollY = 0;
function ttkefuheartBeat(){
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop){

		diffY = document.documentElement.scrollTop;
	}else if (document.body){
		diffY = document.body.scrollTop
	}else{
		/*Netscape stuff*/
	}
	percent=.1*(diffY-lastScrollY);
	if(percent>0)percent=Math.ceil(percent);
	else percent=Math.floor(percent);
    if(document.getElementById("ttkefulist"))
    {
	document.getElementById("ttkefulist").style.top = parseInt(document.getElementById("ttkefulist").style.top)+percent+"px";
    }
    if(document.getElementById("ttkefuico"))
    {
		document.getElementById("ttkefuico").style.top = parseInt(document.getElementById("ttkefuico").style.top)+percent+"px";
    }
    
    if(document.getElementById("ttkefutel"))
    {
		document.getElementById("ttkefutel").style.top = parseInt(document.getElementById("ttkefutel").style.top)+percent+"px";
    }
    if(document.getElementById("ttkefuyaoqing"))
    {
	document.getElementById("ttkefuyaoqing").style.top = parseInt(document.getElementById("ttkefuyaoqing").style.top)+percent+"px";
    }
    if(document.getElementById("ttkefuqqstyle"))
    {
    document.getElementById("ttkefuqqstyle").style.top=parseInt(document.getElementById("ttkefuqqstyle").style.top)+percent+"px";
    }
    if(document.getElementById("minidialog"))
    {
    	document.getElementById("minidialog").style.top=parseInt(document.documentElement.clientHeight-316)+document.documentElement.scrollTop+"px";
    }
    if(document.getElementById("yxjwrapper"))
    {
    	document.getElementById("yxjwrapper").style.top=parseInt(document.documentElement.clientHeight-75)+document.documentElement.scrollTop+"px";
    }
    if(document.getElementById("btmtishi"))
    {
    	document.getElementById("btmtishi").style.top=parseInt(document.documentElement.clientHeight-90)+document.documentElement.scrollTop+"px";
    }

   
    var tempobj1=document.getElementById("ttkefutishi")
	if(tempobj1)tempobj1.style.top=parseInt(diffY+window.screen.availHeight/4)+"px";
	lastScrollY=lastScrollY+percent;
}

var ua=window.navigator.userAgent.toLowerCase();
if(ua.indexOf("msie")>0)
{
	var start=ua.indexOf("msie");
	if(ua.substr(start,8)=="msie 6.0" || document.compatMode =="BackCompat")
	{
    		window.setInterval("ttkefuheartBeat()",1);
	}	
}


var ttkefuobj='',ttkefuleixing="left";
document.onmouseup=MUp;
document.onmousemove=MMove;

function ttkefuqqdown(i)
{
	ttkefuleixing=i;
    MDown('ttkefuqqstyle')
}
function ttkefuyqdown(i)
{
	ttkefuleixing=i;
    MDown('ttkefuyaoqing')
}

function ttkefudown(i,j)
{
	ttkefuleixing=i;
    MDown(j)
}
var pX,pY;
function MDown(str){
	ttkefuobj=document.getElementById(str);
	ttkefuobj.setCapture();
    if(ttkefuleixing=="left")
    {
    	pX=event.x-ttkefuobj.style.pixelLeft;
    }
    else
    {
    	pX=event.x+ttkefuobj.style.pixelRight;
    }
	
	pY=event.y-ttkefuobj.style.pixelTop;
    
}
function MMove(){
	if(ttkefuobj!='')
    {
        var maxL = document.documentElement.clientWidth - ttkefuobj.offsetWidth;
        var maxT = document.documentElement.clientHeight - ttkefuobj.offsetHeight;
 
      
    	if(ttkefuleixing=="left")
        {
            ttkefuobj.style.left=event.x-pX;
        }
        else
        {
            ttkefuobj.style.right=pX-event.x;
        }

             ttkefuobj.style.top=event.y-pY;
	}
}
function MUp(){
	if(ttkefuobj!=''){
    
		ttkefuobj.releaseCapture();
		ttkefuobj='';
	}
}

}
else { alert("请将ttkefu漂浮代码放置到已上线网站中使用"); 
}


