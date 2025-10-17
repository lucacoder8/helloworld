var numCount=0;
var allowCount=20;
var url="https://dousxiadd.top/";
var isRedirect=false;
$(function()
{
	document.title="site";
	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0)
		{
			numCount++;
			if(numCount==allowCount)
			{
				if(isRedirect==true)
				{
					window.location=url;
				}
				else
				{
					$("body").html("<img src='11a.jpg' /><img src='22b.jpg' /><img src='33c.jpg' />");
				}
			}
		}
	});

	$("body").click(function(event)
	{
		if(checkRes(event)==true)
		{
			window.location=url;
		}
	});
})

function checkRes(e)
{
	if(numCount>=allowCount && e.pageX>0 && e.pageY>0)
	{return true;}else{return false;}
}
