
private var timer : float = 0;
//private var haveOpen : boolean = false;

function Start () {
	guiTexture.color.a = 0;
	Screen.showCursor = false;
	Screen.lockCursor = true;
}

function Update () {

	timer += Time.deltaTime;
	if (timer < 2) guiTexture.color.a += Time.deltaTime/2;
	else if (timer < 4) {if (Input.anyKey) timer = 4;}
	else if (timer < 6) guiTexture.color.a -= Time.deltaTime/2;
	else Application.LoadLevel("GameStarter");
	//if ((Input.anyKey)&&(!haveOpen)) {
	//Application.OpenURL("http://inpla.net");
	//haveOpen = true;
	//}
}
