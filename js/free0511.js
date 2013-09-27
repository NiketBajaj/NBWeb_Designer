//****** Advanced DHTML Popup Pro Version 2.520.0107.210 Build: 176 ******

// Copyright (c) Digital Flow Software 2005-2009
// The present javascript code is property of Digital Flow Software.
// This code may NOT be integrated into any web based service including any service providing video or any content publishing to third parties. This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed Advanced DHTML Popup application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "Advanced DHTML Popup License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

var df,rf=false,na=navigator.userAgent,dt=document,op=(na.indexOf('Opera')!=-1),dm=(dt.getElementById)?true:false,ie5x=(dt.all&&dm),mci=(na.indexOf('Mac')!=-1);df=((ie5x||op)&&mci);decide();function decide(){if(df){return;}else{rf=true;}}
if(rf){
function initADP(){bdf=0;
// *** Begin advanced user scripting area ***
   htmlstring="<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0\" width=\"240\" height=\"360\" id=\"imsplite001\" align=\"middle\"> 	<param name=\"allowScriptAccess\" value=\"always\" /> 	<param name=\"allowFullScreen\" value=\"false\" /> 	<param name=\"movie\" value=\"http://www.impactspokesperson.com/free/imsplite001.swf\" /><param name=\"quality\" value=\"high\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"bgcolor\" value=\"#ffffff\" />	<embed src=\"http://www.impactspokesperson.com/free/imsplite001.swf\" quality=\"high\" wmode=\"transparent\" bgcolor=\"#ffffff\" width=\"240\" height=\"360\" name=\"imsplite001\" align=\"middle\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" /> 	</object>                   ";
   new adp("simpleflash",htmlstring,"Basic embedded SWF ");
   adpShow('simpleflash');
// *** End advanced user scripting area ***
}
if(window.attachEvent){window.attachEvent('onload', initADP);}else{if(typeof window.onload == 'function'){var preADP = window.onload;window.onload = function(){preADP();initADP();}}else{window.onload = initADP;}}
}
