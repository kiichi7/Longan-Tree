var leftFont : GUIStyle;
var centerFont : GUIStyle;
var centerBigFont : GUIStyle;
var theSkin : GUISkin;

var events : GameObject;
private var menuShow : boolean;
private var aboutShow : boolean;
private var helpShow : boolean;
private var gui_name : String;
private var gui_resume : String;
private var gui_startagain : String;
private var gui_website : String;
private var gui_exit : String;
private var gui_explanation : String;
private var gui_url : String;
private var gui_about : String;
private var gui_back : String;
private var gui_aboutText : String;
private var gui_warning : String;
private var gui_iswebsiteopen : boolean = false;
private var gui_websiteopentime : float = 0;
private var gui_help : String;
private var gui_helpText : String;
private var environmentExplanation : String;
private var ifStart : boolean = true;
private var startExplanationTime : float = 0;

function Start(){
	menuShow = false;
	aboutShow = false;
	helpShow = false;
	Screen.showCursor = false;
	Screen.lockCursor = true;
}

function Update (){
	
	if (ifStart) {
		startExplanationTime += Time.deltaTime;
	}

	gui_websiteopentime += Time.deltaTime;
	if (gui_websiteopentime > 3) gui_iswebsiteopen = false;
	
	if (TheLanguage.language == 0){
		gui_name = "龍眼樹";
		gui_explanation = "警告: 遊戲依舊進行中,並沒有暫停...";
		gui_resume = "繼續遊戲";
		gui_startagain = "重新開始";
		gui_website = "官方網站";
		gui_exit = "退出遊戲";
		gui_url = "http://inpla.net/forum-445-1.html";
		gui_about = "關於作者";
		gui_back = "返回";
		gui_aboutText = "我叫彭必濤，網名也叫眼皮上的幸福、Diestr、醋拇，沒了。\n聯系我可發 E-mail 給我： pengbitao@gmail.com 或者訪問下面的網站。";
		if (gui_iswebsiteopen) gui_warning = "遊戲官方網站已打開";
		else gui_warning = "";
		gui_help = "幫助";
		gui_helpText = "遊戲中通過方向鍵或者 WASD 控制移動，鼠標控制移動方向。遊戲並沒有明確的目的，而玩家行為將最終影響遊戲結局。";
		environmentExplanation = "淩晨時分，你獨自一人來到了一片龍眼樹外的草叢。你不知道要做什麽，也不知道自己為什麽來到這裏。四處散發著野外濕潤的草香，還有那悠遠的未知的氣味。空氣也說不清是清新，還是壓抑。\n\n遠處，還有鳥鳴聲，那是淩晨時分鳥兒們的歌。而你在這裏，又是...？";
	}
	else if (TheLanguage.language == 1){
		gui_name = "龙眼树";
		gui_explanation = "警告: 游戏依旧进行中,并没有暂停...";
		gui_resume = "继续游戏";
		gui_startagain = "重新开始";
		gui_website = "官方网站";
		gui_exit = "退出游戏";
		gui_url = "http://inpla.net/forum-445-1.html";
		gui_about = "关于作者";
		gui_back = "返回";
		gui_aboutText = "我叫彭必涛，网名也叫眼皮上的幸福、Diestr、醋拇，没了。\n联系我可发 E-mail 给我： pengbitao@inpla.net 或者访问下面的网站。";
		if (gui_iswebsiteopen) gui_warning = "游戏官方网站已打开";
		else gui_warning = "";
		gui_help = "帮助";
		gui_helpText = "游戏中通过方向键或者 WASD 控制移动，鼠标控制移动方向。游戏并没有明确的目的，而玩家行为将最终影响游戏结局。";
		environmentExplanation = "凌晨时分，你独自一人来到了一片龙眼树外的草丛。你不知道要做什么，也不知道自己为什么来到这里。四处散发着野外湿润的草香，还有那悠远的未知的气味。空气也说不清是清新，还是压抑。\n\n远处，还有鸟鸣声，那是凌晨时分鸟儿们的歌。而你在这里，又是...？";
	}
	else if(TheLanguage.language == 2) {
		gui_name = "LonganTree";
		gui_explanation = "Warning: the game is still running and not pausing...";
		gui_resume = "Resume";
		gui_startagain = "Restart";
		gui_website = "Official Website";
		gui_exit = "Exit";
		gui_url = "http://inpla.net/longantree.html";
		gui_about = "About the author";
		gui_back = "Back";
		gui_aboutText = "My name is Peng Bitao. Also known as Eyelid, Diestr or Vinegar Thumb. That's all. \nYou can just email me: pengbitao@gmail.com or just go to my website down centerre.";
		if (gui_iswebsiteopen) gui_warning = "the Official Website is just opened";
		else gui_warning = "";
		gui_help = "Help";
		gui_helpText = "In this game, the player can control the role through arrow keys or WASD and mouse. There is no clear task and the player behavior will eventually lead to the game outcome.";
		environmentExplanation = "Forth under the dawn's light, you arrive in the mist. Taking a little breath, you scent the thick growth. Birds are tweeting, you perceive something. \n\nIs it a longan wood over there? You can't see it through the air. Is it the aim for which you have come here? Your have no clue but your search has to fare...";
	}
	
	if ((Input.anyKey)||(startExplanationTime > 10)) {
		ifStart = false;
	}
	
	if(Input.GetKeyDown(KeyCode.Escape)||Input.GetKeyDown(KeyCode.P)){
		if(menuShow==false){
			menuShow=true;
			GetComponent(MouseLook).enabled = false;
			GetComponent(RunnerMove).enabled = false;
			events.GetComponent(EventReminder).enabled = false;
			Screen.showCursor = true;
			Screen.lockCursor = false;
		}
		else if (menuShow==true){
			menuShow=false;
			GetComponent(MouseLook).enabled = true;
			GetComponent(RunnerMove).enabled = true;
			events.GetComponent(EventReminder).enabled = true;
			Screen.showCursor = false;
			Screen.lockCursor = true;
		}
	}

}

function OnGUI(){
	
	GUI.skin = theSkin;
	
	if (ifStart) {
		GUI.Label(Rect(Screen.width/2 -300, Screen.height/3,600,300),environmentExplanation,leftFont);
	}

	if (menuShow){
	
		aboutShow = false;
		helpShow = false;
		
		GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-200,200,60), gui_name,centerBigFont);
	
		if (GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2-90,200,30),gui_resume)){
			menuShow=false;
			GetComponent(MouseLook).enabled = true;
			GetComponent(RunnerMove).enabled = true;
			events.GetComponent(EventReminder).enabled = true;
			Screen.showCursor = false;
			Screen.lockCursor = true;
		}
		else if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2-50,200,30),gui_startagain)){
			Application.LoadLevel("LonganTree");
			menuShow=false;
		}
		else if (GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2-10,66.66,30),"繁體")){
			TheLanguage.language = 0;
		}
		else if (GUI.Button(Rect(Screen.width/2 - 33.33, Screen.height/2-10,66.66,30),"简体")){
			TheLanguage.language = 1;
		}
		else if (GUI.Button(Rect(Screen.width/2 + 33.33, Screen.height/2-10,66.66,30),"English")){
			TheLanguage.language = 2;
		}
		else if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_website)){
			Application.OpenURL(gui_url);
			gui_iswebsiteopen = true;
			gui_websiteopentime = 0;
		}
		else if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_about)){
			aboutShow = true;
			menuShow = false;
		}	
		else if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+110,200,30),gui_help)){
			helpShow = true;
			menuShow = false;
		}
		else if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+150,200,30),gui_exit)){
			Application.LoadLevel("GameEnder");
		}
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+190, 500, 30), gui_warning,centerFont);
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+230, 500, 30), gui_explanation,centerFont);
	}
	else if(aboutShow){
		GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,200),gui_aboutText,leftFont);
		if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_back)){
			aboutShow = false;
			menuShow = true;
		}
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+190, 500, 30), gui_warning,centerFont);
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+230, 500, 30), gui_explanation,centerFont);
	}
	else if(helpShow){
		GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,200),gui_helpText,leftFont);
		if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+110,200,30),gui_back)){
			helpShow = false;
			menuShow = true;
		}
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+190, 500, 30), gui_warning,centerFont);
		GUI.Label(Rect(Screen.width/2 - 250, Screen.height/2+230, 500, 30), gui_explanation,centerFont);
	}
	else return;
		
}