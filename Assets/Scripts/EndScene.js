var leftFont : GUIStyle;
var centerFont : GUIStyle;

private var endWords : String;
private var thanksTo : String;
private var thanksToEnd : String;
private var theirNames : String;
private var sorryWords : String;
private var statistics : String;

function Start () {
	theirNames = "orange030, Serotoninless, Effellea, Ruiner, 一个人的黎明, 指尖神话, 610097537, ";
	TheLanguage.language = 2;
	Screen.showCursor = false;
	Screen.lockCursor = true;
}

function Update () {
	
	if(TheLanguage.language == 0){
	endWords = "按任意鍵退出程序。";
	thanksTo = "鳴謝";
	thanksToEnd = "其他人以及玩家妳。";
	sorryWords = "很遺憾您所在的環境並不適合進行該遊戲，請保證良好的遊戲環境再運行此遊戲。";
	statistics = "在嘗試遊戲 " + (TimesCounter.freedTimes + TimesCounter.wipedTimes) + " 次之後，妳有 " + TimesCounter.freedTimes + " 次獲得了自由。";

	}
	else if(TheLanguage.language == 1){
	endWords = "按任意键退出程序。";
	thanksTo = "鸣谢";
	thanksToEnd = "其他人以及玩家你。";
	sorryWords = "很遗憾您所在的环境并不适合进行该游戏，请保证良好的游戏环境再运行此游戏。";
	statistics = "在尝试游戏 " + (TimesCounter.freedTimes + TimesCounter.wipedTimes) + " 次之后，你有 " + TimesCounter.freedTimes + " 次获得了自由。";
	}
	else if(TheLanguage.language == 2) {
	endWords = "Press any key to exit the program.";
	thanksTo = "Acknowledgements";
	thanksToEnd = "others and you the player.";
	sorryWords = "I'm sorry the environment is not suitable for this game at present. Please make sure the environment is ready and try the game again.";
	statistics = "After " + (TimesCounter.freedTimes + TimesCounter.wipedTimes) + " times' attempts, you get " + TimesCounter.freedTimes + " times' freedom.";
	}
	if (Input.anyKey) Application.Quit();
}

function OnGUI () {
	if (IfSuitForPlaying.ifSuitForPlaying) {
	GUI.Label(Rect(Screen.width/2 - 300, Screen.height/2-120,600,30),statistics,centerFont);
	GUI.Label(Rect(Screen.width/2 - 300, Screen.height/2-60,600,30),thanksTo,centerFont);
	GUI.Label(Rect(Screen.width/2 - 200, Screen.height/2-30,400,400),theirNames + thanksToEnd,centerFont);
	}
	else GUI.Label(Rect(Screen.width/2 - 200, Screen.height/2-60,400,400),sorryWords,centerFont);
	GUI.Label(Rect(Screen.width/2 - 300, Screen.height/2+90,600,30),endWords,centerFont);
}