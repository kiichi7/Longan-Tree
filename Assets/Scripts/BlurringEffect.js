#pragma strict
var blurringPic : Texture;

function Start () {

	

}

function OnGUI () {

	GUI.depth = 2;
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), blurringPic, ScaleMode.StretchToFill, true, 10.0f);

}