let iframe_block 		= document.getElementById('iframe_block');
let iframe 				= document.getElementById('iframe');
let browserOpenButton 	= document.getElementById("browserOpenButton"); 
let mobileOpenButton 	= document.getElementById("mobileOpenButton"); 
let sideNav = document.getElementById('mySidenav');
let isMobile            = false; 
let globalSize          = 'normal'; 

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  isMobile              = true; 
  globalSize            = 'maximal'; 
} 

if(iframe_block.style.visibility==="hidden")
  sideNav.style.display="block";
if(iframe.style.visibility==="hidden")
  sideNav.style.display="block";

  

if(isMobile) { 
  browserOpenButton.style.display = 'none'; 
} 

if(!isMobile) { 
  mobileOpenButton.style.display = 'none'; 
} 
    
window.addEventListener('resize', reSize); 
function reSize() { 
  if(globalSize === "normal") { 
    var window_height = windowHeight(); 
    iframe_block.style.width = "675px";
    if(window_height >= 800) { 
      removeClassTwoAddClassOne(); 
      iframe_block.style.height = "800px";
    } 
    if(window_height < 800) {
      removeClassOneAddClassTwo(); 
      iframe_block.style.height = "100vh";
    } 
  } 
} 

function windowHeight() {
  var docElemProp = window.document.documentElement.clientHeight,
  body = window.document.body;
  return window.document.compatMode === "CSS1Compat" && docElemProp || body && body.clientWidth || docElemProp;
}

function openChatWindow() {
  sideNav.style.display="none";
  reIdentifyIframeWebsite(); 
  if(globalSize === 'normal') { 
    removeClassTwoAddClassOne(); 
    reSize(); 
  } 
  if(globalSize === "maximal") { 
    removeClassOneAddClassTwo(); 
    if(!isMobile) { 
      if(document.body.clientHeight > windowHeight()) { 
        // Website has a scrollbar on the left. => "- 17px"
        iframe_block.style.width = "calc(100vw - 17px)";
        iframe_block.style.height = "100vh";
      } else if(document.body.clientHeight <= windowHeight()) { 
        // Website has no scrollbar on the left. 
        iframe_block.style.width = "calc(100vw - 17px)";
        iframe_block.style.height = "100vh";
      } 
    } 
    if(isMobile) { 
      // There is only a very thin scrollbar on mobile devices. 
      iframe_block.style.width = "100vw";
      iframe_block.style.height = "85vh";
    } 
  } 
  iframe_block.style.visibility = 'visible'; 
  iframe.style.visibility = 'visible';
}

function reIdentifyIframeWebsite() { 
  if(iframe.getAttribute('src') == 'about:blank') {
    iframe.setAttribute('src','https://oth-regensburg.eu-de.mybluemix.net'); 
  }
} 

function minimizeChatWindow() {
  removeClassTwoAddClassOne(); 
  reIdentifyIframeWebsite(); 
  iframe_block.style.visibility = 'hidden'; 
  iframe.style.visibility = 'hidden';
  sideNav.style.display="block";
  showOpenButton(); 
}

function hideOpenButton() {
  if(isMobile) { 
    mobileOpenButton.style.visibility = 'hidden'; 
  } 
  if(!isMobile) { 
    browserOpenButton.style.visibility = 'hidden'; 
  } 
} 

function showOpenButton() {
  if(isMobile) { 
    mobileOpenButton.style.visibility = 'visible'; 
  } 
  if(!isMobile) { 
    browserOpenButton.style.visibility = 'visible'; 
  } 
}

function removeClassOneAddClassTwo() { 
  iframe_block.classList.remove("chatbot"); 
  iframe_block.classList.add("chatbot-2"); 
  iframe.classList.remove("chat-window"); 
  iframe.classList.add("chat-window-2"); 
} 

function removeClassTwoAddClassOne() { 
  iframe_block.classList.remove("chatbot-2"); 
  iframe_block.classList.add("chatbot"); 
  iframe.classList.remove("chat-window-2"); 
  iframe.classList.add("chat-window"); 
} 

window.addEventListener('message', processMessage);
function processMessage(event) {
    console.log('process event');
if (event.origin !== "https://oth-regensburg.eu-de.mybluemix.net") {
  throw new Error('Recevied Event from invalid domain!');
}
if (event.data === 'minimize_requested') {
  minimizeChatWindow();
}
if (event.data === 'max_size_requested') {
  if(!isMobile) { 
    globalSize = "maximal"; 
  } 
  openChatWindow(); 
}
if (event.data === 'norm_size_requested') {
  if(!isMobile) { 
    globalSize = "normal"; 
  } 
    openChatWindow(); 
    }
}