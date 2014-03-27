var leftFont : GUIStyle;
//var centerFont : GUIStyle;
var theSkin : GUISkin;

var theRunner : GameObject;
var theHit : GameObject;
var theEyes : GameObject;
private var gui_resume : String;
private var gui_startagain : String;
private var gui_exit : String;
private var wipeTimer : float = 0;
private var gui_wipe : String;
private var gui_far : String;
private var gui_veryfar : String;
private var gui_free : String;
private var gui_veryfree : String;
private var gui_morning : String;
private var ifWarning : boolean = true;
private var ifWipe : boolean = true;
/*private var isSafe : boolean = true;
private var isFar : boolean = true;
private var isVeryFar : boolean = true;
private var isFree : boolean = true;
private var isVeryFree : boolean = true;*/
private var isMorning : boolean = true;
private var isFree : boolean = true;
private var showTimer : float = 0;

function Start () {

}

function Update () {

	var nature : NaturePower = GetComponent(NaturePower);
	if (nature.ifWipe) wipeTimer += Time.deltaTime;
	if (TheLanguage.language == 0){
		gui_resume = "繼續遊戲";
		gui_startagain = "重新開始";
		gui_exit = "退出遊戲";
		gui_wipe = "你已被大自然清除出這個世界，將回到你的過去。";
		gui_far = "你躲避了龍眼樹林的清除行為，自此你也在此獲得了你的自由。";
		gui_veryfar = "你已征服了龍眼樹林，因為你已戰勝並了解了它。";
		gui_free = "你不再被龍眼樹林視為危險，在此你可以體驗一切，感受一切。";
		gui_veryfree = "你已成為龍眼樹林的一部分，天明前，這裏的一切都為你所擁有。";
		gui_morning = "早晨快到了，迷糊之中，你的夢也該醒了。";
		}
	else if (TheLanguage.language == 1){
		gui_resume = "继续游戏";
		gui_startagain = "重新开始";
		gui_exit = "退出游戏";
		gui_wipe = "你已被大自然清除出这个世界，将回到你的过去。";
		gui_far = "你躲避了龙眼树林的清除行为，自此你也在此获得了你的自由。";
		gui_veryfar = "你已征服了龙眼树林，因为你已战胜并了解了它。";
		gui_free = "你不再被龙眼树林视为危险，在此你可以体验一切，感受一切。";
		gui_veryfree = "你已成为龙眼树林的一部分，天明前，这里的一切都为你所拥有。";
		gui_morning = "早晨快到了，迷糊之中，你的梦也该醒了。";
		}
	else if(TheLanguage.language == 2) {
		gui_resume = "Resume";
		gui_startagain = "Restart";
		gui_exit = "Exit";
		gui_wipe = "You are wiped of of the Nuture and you'll get back to your past.";
		gui_far = "You avoided the removing action and defeat the Nature. So you are free then.";
		gui_veryfar = "You conquered the Nature and know it very well.";
		gui_free = "You are no longer danger to the Longan Forest and you can enjoy everything here.";
		gui_veryfree = "You are a part of the Longan Forest and before the morning, everything belongs to you.";
		gui_morning = "It's dawn now and in the confused mode. Your dream finally ended and you waked up.";
		}

}

function OnGUI () {

	GUI.skin = theSkin;

	var nature : NaturePower = GetComponent(NaturePower);
	if ((nature.isMorning)&&(isMorning)) Morning();
	else if ((nature.isFree)&&(isFree)) Free();
/*	else if ((nature.isVeryFree)&&(isVeryFree)) VeryFree();
	else if ((nature.isFree)&&(isFree)) Free();
	else if ((nature.isVeryFar)&&(isVeryFar)) VeryFar();
	else if ((nature.isFar)&&(isFar)) Far();*/
	else if ((nature.ifWipe)&&(ifWipe)) Wipe();
	else if ((nature.ifWarning)&&(ifWarning)) Warning();
//	else if ((nature.isSafe)&&(isSafe)) Safe();
	else Screen.showCursor = false;
	
}

/*function Safe () {
	var nature : NaturePower = GetComponent(NaturePower);
    //留着等待播放声音
    
    showTimer += Time.deltaTime;
	if (showTimer > 3) {
	isSafe = false;
	nature.isSafe = false;
	showTimer = 0;
	}
}*/

function Warning () {
	var nature : NaturePower = GetComponent(NaturePower);
	var hitter : HitterSound = GetComponent(HitterSound);
	hitter.PlaySlowSound();
	showTimer += Time.deltaTime;
	if (showTimer > 3) {
	//ifWarning = false;
	nature.ifWarning = false;
	showTimer = 0;
	}
}

function Wipe () {
	var hitter : HitterSound = GetComponent(HitterSound);
	hitter.PlayFastSound();
	theRunner.GetComponent(GameMenu).enabled = false;
	if (wipeTimer > 3.1){
		Screen.showCursor = true;
		Screen.lockCursor = false;
		theRunner.GetComponent(RunnerMove).enabled = false;
		theRunner.GetComponent(MouseLook).enabled = false;
		theEyes.GetComponent(BlurringEffect).enabled = false;
		GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_wipe,leftFont);
		theHit.GetComponent(HitFlash).Flash();
		if((GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_startagain))||(wipeTimer > 15)){
		TimesCounter.wipedTimes ++;
		Application.LoadLevel("LonganTree");
		theRunner.GetComponent(GameMenu).enabled = true;
		ifWipe = false;
		}
		if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_exit)){
		TimesCounter.wipedTimes ++;
		Application.LoadLevel("GameEnder");
		}
	}
}
/*
function Far () {
	Screen.showCursor = true;
	theRunner.GetComponent(GameMenu).enabled = false;
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_far,leftFont);
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_resume)){
	theRunner.GetComponent(GameMenu).enabled = true;
	isFar = false;
	}
	showTimer += Time.deltaTime;
	if (showTimer > 30) {
	theRunner.GetComponent(GameMenu).enabled = true;
	isFar = false;
	showTimer = 0;
	}
}

function VeryFar () {
	Screen.showCursor = true;
	theRunner.GetComponent(GameMenu).enabled = false;
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_veryfar,leftFont);
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_resume)){
	theRunner.GetComponent(GameMenu).enabled = true;
	isVeryFar = false;
	}
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_exit)){
	Application.LoadLevel("GameEnder");
	}
}

function Free () {
	Screen.showCursor = true;
	theRunner.GetComponent(GameMenu).enabled = false;
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_free,leftFont);
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_resume)){
	theRunner.GetComponent(GameMenu).enabled = true;
	isFree = false;
	}
	showTimer += Time.deltaTime;
	if (showTimer > 30) {
	theRunner.GetComponent(GameMenu).enabled = true;
	isFree = false;
	showTimer = 0;
	}
}

function VeryFree () {
	Screen.showCursor = true;
	theRunner.GetComponent(GameMenu).enabled = false;
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_veryfree,leftFont);
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_resume)){
	theRunner.GetComponent(GameMenu).enabled = true;
	isVeryFree = false;
	}
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_exit)){
	Application.LoadLevel("GameEnder");
	}
}
*/
function Free () {

	TimesCounter.freedTimes ++;
	//播放自由之音
	isFree = false;

}

function Morning () {
	Screen.showCursor = true;
	Screen.lockCursor = false;
	theRunner.GetComponent(RunnerMove).enabled = false;
	theRunner.GetComponent(MouseLook).enabled = false;
	theRunner.GetComponent(GameMenu).enabled = false;	
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height/2-90,200,120),gui_morning,leftFont);
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+30,200,30),gui_startagain)){
		Application.LoadLevel("LonganTree");
		theRunner.GetComponent(GameMenu).enabled = true;
		isMorning = false;
	}
	if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2+70,200,30),gui_exit)){
		Application.LoadLevel("GameEnder");
	}
}