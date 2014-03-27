var leftFont : GUIStyle;
var centerFont : GUIStyle;
var darkFont : GUIStyle;

var testSound1 : AudioClip;
var testSound2 : AudioClip;
var testSound3 : AudioClip;

var gui_version : String;

private var namestyle : GUIStyle;
private var languageChooseShow : boolean = true;
private var testShow : boolean = false;
private var startExplanationTime : float = 0;
private var loadingWords : String;
private var isLoading : boolean = false;
private var whichKey : int;
private var upWord : String;
private var downWord : String;
private var leftWord : String;
private var rightWord : String;
private var testExplanation : String;

function Start () {
	Screen.showCursor = false;
	Screen.lockCursor = true;
	whichKey = Random.Range(0,3);
}

function Update () {

	if(TheLanguage.language == 0){
	loadingWords = "加載中...";
	upWord = "上";
	downWord = "下";
	leftWord = "左";
	rightWord = "右";
	testExplanation = "調整音量直到剛好能分辨現在播放的聲音：\n\n如果此時播放的是呼吸聲，請按方向鍵'左'開始遊戲。\n如果此時播放的是跑步聲，請按方向鍵'下'開始遊戲。\n如果此時播放的是鳥鳴聲，請按方向鍵'右'開始遊戲。";
	}
	else if(TheLanguage.language == 1){
	loadingWords = "加载中...";
	upWord = "上";
	downWord = "下";
	leftWord = "左";
	rightWord = "右";
	testExplanation = "调整音量直到刚好能分辨现在播放的声音：\n\n如果此时播放的是呼吸声，请按方向键'左'开始游戏。\n如果此时播放的是跑步声，请按方向键'下'开始游戏。\n如果此时播放的是鸟鸣声，请按方向键'右'开始游戏。";
	}
	else if(TheLanguage.language == 2) {
	loadingWords = "Loading...";
	upWord = "Up";
	downWord = "Down";
	leftWord = "Left";
	rightWord = "Right";
	testExplanation = "Adjust the volume until being able to distinguish the voice of the Now Playing exactly:\n\nIf it's playing breathing sound, please press Arrow Key 'Left' to start the game.\nIf it's playing running sound, please press Arrow Key 'Down' to start the game.\nIf it's playing birds singing, please press Arrow Key 'Right' to start the game.";
	}
	if (testShow) {
		startExplanationTime += Time.deltaTime;
		
	}
}

function OnGUI () {

	if(Input.GetKeyDown(KeyCode.Escape)) Application.LoadLevel("GameEnder");
	
	if (languageChooseShow) {
/*		GUI.Label(Rect(Screen.width/4 -100, Screen.height/6,200,240),
		"龍眼樹：\n龍眼，原產中國南方，栽培歷史可追溯到二千多年前的漢代。其果肉甘甜可口，且能入藥。乾龍眼通常稱為桂圓，也有部分地區不區分乾鮮，統稱龍眼或者桂園。",leftFont);
		GUI.Label(Rect(2*Screen.width/4 -100, Screen.height/6,200,240),
		"龙眼树：\n龙眼，原产中国南方，栽培历史可追溯到二千多年前的汉代。其果肉甘甜可口，且能入药。干龙眼通常称为桂圆，也有部分地区不区分干鲜，统称龙眼或者桂园。",leftFont);
		GUI.Label(Rect(3*Screen.width/4 -100, Screen.height/6,200,240),
		"LonganTree:\nDimocarpus longan, commonly known as the longan, is a tropical tree native to South and Southeast Asia, in the Indomalaya ecozone. It produces edible fruit.",leftFont);		
*/
		GUI.Label(Rect(Screen.width/4 -100, Screen.height/4,200,350),
		"龍眼樹\n\n\n遊戲前請確保周圍環境處於極暗的環境，且環境極其安靜，並將耳機或音響的音量調至較高而又不至於刺耳的程度。否則玩家可能在遊戲中感到不適且無法獲得最佳體驗。",leftFont);
		GUI.Label(Rect(2*Screen.width/4 -100, Screen.height/4,200,350),
		"龙眼树\n\n\n游戏前请确保周围环境处于极暗的环境，且环境极其安静，并将耳机或音响的音量调至较高而又不至于刺耳的程度。否则玩家可能在游戏中感到不适且无法获得最佳体验。",leftFont);
		GUI.Label(Rect(3*Screen.width/4 -100, Screen.height/4,200,350),
		"Longan Tree\n\n\nIt is highly recommened that you should start gaming in sheer dark and quietness, with the sound volume set to a somewhat high, yet still tolerable level. Take caution when you adjust the sound volume, as the ingame sound effects might be too disturbing if too loud, or too tame if too quiet - in either case the optimal gaming experience could not be provided.",leftFont);
		
		GUI.Label(Rect(Screen.width/4 -100, 4*Screen.height/5,200,120),"按方向鍵'左'開始測試環境是否適合進行遊戲。",leftFont);		
		GUI.Label(Rect(2*Screen.width/4 -100, 4*Screen.height/5,200,120),"按方向键'下'开始测试环境是否适合进行游戏。",leftFont);		
		GUI.Label(Rect(3*Screen.width/4 -100, 4*Screen.height/5,200,120),"Press Arrow Key 'Right' to start testing if the environment is suitable for the game.",leftFont);

		if ((Input.GetKey (KeyCode.LeftArrow))||(Input.GetKey (KeyCode.A))){
		TheLanguage.language = 0;
		languageChooseShow = false;
		testShow = true;
		}
		else if ((Input.GetKey (KeyCode.DownArrow))||(Input.GetKey (KeyCode.S))){
		TheLanguage.language = 1;
		languageChooseShow = false;
		testShow = true;
		}
		else if ((Input.GetKey (KeyCode.RightArrow))||(Input.GetKey (KeyCode.D))){
		TheLanguage.language = 2;
		languageChooseShow = false;
		testShow = true;
		}
		
		GUI.Label(Rect(Screen.width -60, Screen.height -30,60,20),gui_version);
	}
	if (testShow) {
		
		if (isLoading) {
			audio.Stop();
			GUI.Label(Rect(Screen.width/2 -200, 2*Screen.height/3,400,30),loadingWords,centerFont);
			Application.LoadLevel("LonganTree");
		}
		else if (startExplanationTime>0.5){
			GUI.Label(Rect(Screen.width/2 -400, Screen.height/3,800,240),testExplanation,darkFont);
			
   	    	if (whichKey == 0){
   	    		audio.clip = testSound1;
   	    		if((Input.GetKey (KeyCode.LeftArrow))||(Input.GetKey (KeyCode.A)))isLoading = true;
   	    		else if(Input.anyKey) {
	   	    		IfSuitForPlaying.ifSuitForPlaying = false;
	   	    		Application.LoadLevel("GameEnder");
   	    		}
			}
 			else if (whichKey == 1){
 				audio.clip = testSound2;
 				if((Input.GetKey (KeyCode.DownArrow))||(Input.GetKey (KeyCode.S)))isLoading = true;
   	    		else if(Input.anyKey) {
	   	    		IfSuitForPlaying.ifSuitForPlaying = false;
	   	    		Application.LoadLevel("GameEnder");
   	    		}
			}
			else if (whichKey == 2){
				audio.clip = testSound3;
				if((Input.GetKey (KeyCode.RightArrow))||(Input.GetKey (KeyCode.D)))isLoading = true;
   	    		else if(Input.anyKey) {
	   	    		IfSuitForPlaying.ifSuitForPlaying = false;
	   	    		Application.LoadLevel("GameEnder");
   	    		}
			}
			if (!audio.isPlaying) audio.Play(); 
   	    }
	}
}