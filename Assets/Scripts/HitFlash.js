#pragma strict
var pic1 : Texture;
var pic2 : Texture;
var pic3 : Texture;
var pic4 : Texture;
var pic5 : Texture;
var pic6 : Texture;
var pic7 : Texture;
var pic8 : Texture;
var pic9 : Texture;
var pic10 : Texture;
var pic11 : Texture;
var pic12 : Texture;
var pic13 : Texture;
var pic14 : Texture;
var pic15 : Texture;
var pic16 : Texture;
var pic17 : Texture;
var pic18 : Texture;
var pic19 : Texture;
var pic20 : Texture;
var pic21 : Texture;
var pic22 : Texture;
var pic23 : Texture;
var pic24 : Texture;
var pic25 : Texture;
var pic26 : Texture;
var pic27 : Texture;
var pic28 : Texture;
var pic29 : Texture;
var pic30 : Texture;
var pic31 : Texture;
var pic32 : Texture;
var pic33 : Texture;
var pic34 : Texture;
var pic35 : Texture;
var pic36 : Texture;
var pic37 : Texture;
var pic38 : Texture;
var pic39 : Texture;
var pic40 : Texture;
var pic41 : Texture;
var pic42 : Texture;
var pic43 : Texture;
var pic44 : Texture;
var pic45 : Texture;
var pic46 : Texture;
var pic47 : Texture;
var pic48 : Texture;
var pic49 : Texture;
var pic50 : Texture;
var pic51 : Texture;
var pic52 : Texture;
var pic53 : Texture;
var pic54 : Texture;
var pic55 : Texture;
var pic56 : Texture;
var pic57 : Texture;
var pic58 : Texture;
var pic59 : Texture;
var pic60 : Texture;
var pic61 : Texture;
var pic62 : Texture;
var pic63 : Texture;
var pic64 : Texture;
var pic65 : Texture;
var pic66 : Texture;
var pic67 : Texture;
var pic68 : Texture;
var pic69 : Texture;
var pic70 : Texture;
var pic71 : Texture;
var pic72 : Texture;
var pic73 : Texture;
var pic74 : Texture;
var pic75 : Texture;
var pic76 : Texture;
var pic77 : Texture;
var pic78 : Texture;
var pic79 : Texture;
var pic80 : Texture;
var pic81 : Texture;
var pic82 : Texture;
var pic83 : Texture;
var pic84 : Texture;
var pic85 : Texture;
var pic86 : Texture;
var pic87 : Texture;
var pic88 : Texture;
var pic89 : Texture;
var pic90 : Texture;
var pic91 : Texture;
var pic92 : Texture;
var pic93 : Texture;
var pic94 : Texture;
var pic95 : Texture;
var pic96 : Texture;
var pic97 : Texture;
var pic98 : Texture;
var pic99 : Texture;
var pic100 : Texture;
var array : Texture[];


private var flashTimer : float = 0;
private var ifFlash : boolean = false;

function Start () {
	GetComponent(Camera).backgroundColor = Color.black;
	array = new Array (pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20,pic21,pic22,pic23,pic24,pic25,pic26,pic27,pic28,pic29,pic30,pic31,pic32,pic33,pic34,pic35,pic36,pic37,pic38,pic39,pic40,pic41,pic42,pic43,pic44,pic45,pic46,pic47,pic48,pic49,pic50,pic51,pic52,pic53,pic54,pic55,pic56,pic57,pic58,pic59,pic60,pic61,pic62,pic63,pic64,pic65,pic66,pic67,pic68,pic69,pic70,pic71,pic72,pic73,pic74,pic75,pic76,pic77,pic78,pic79,pic80,pic81,pic82,pic83,pic84,pic85,pic86,pic87,pic88,pic89,pic90,pic91,pic92,pic93,pic94,pic95,pic96,pic97,pic98,pic99,pic100);
}

function Update () {
	//if (Time.time > 2) ifFlash = true;

	if (ifFlash){
		//GUI.depth = 1;
 		//Debug.Log(GUI.depth);
		if (flashTimer > 0.2) {
		GetComponent(Camera).backgroundColor = Color.black;
		ifFlash = false;
		}
		else if (flashTimer < 0.1) {
		GetComponent(Camera).backgroundColor = Color.Lerp (Color.black, Color.red, 3.33*flashTimer);
		flashTimer += Time.deltaTime;
		}
		else if (flashTimer > 0.1) {
		GetComponent(Camera).backgroundColor = Color.Lerp (Color.black, Color.red, (2-3.33*flashTimer));
		flashTimer += Time.deltaTime;
		}
	}
}

function OnGUI() {
	if ((flashTimer > 0.00)&&(flashTimer < 0.05)){
    GUI.DrawTexture(Rect(Random.Range(0,(Screen.width-Screen.height)),0,Screen.height+(Random.Range(0,(Screen.width-Screen.height))),Screen.height), array[Random.Range(0,100)], ScaleMode.StretchToFill, true, 10.0f);
    }
    else if ((flashTimer > 0.075)&&(flashTimer < 0.125)){
    GUI.DrawTexture(Rect(Random.Range(0,(Screen.width-Screen.height)),0,Screen.height+(Random.Range(0,(Screen.width-Screen.height))),Screen.height), array[Random.Range(0,100)], ScaleMode.StretchToFill, true, 10.0f);
    }
    else if ((flashTimer > 0.150)&&(flashTimer < 0.20)){
    GUI.DrawTexture(Rect(Random.Range(0,(Screen.width-Screen.height)),0,Screen.height+(Random.Range(0,(Screen.width-Screen.height))),Screen.height), array[Random.Range(0,100)], ScaleMode.StretchToFill, true, 10.0f);
    }
}

function Flash () {
	ifFlash = true;
	GetComponent(Camera).depth = 1;
}