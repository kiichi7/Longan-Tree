#pragma strict
private var timer : float = 0;
private var dC : float = 0;

function Start () {
	
}

function Update () {

	timer += Time.deltaTime;
	dC = timer/256/60;
	
	/*print (GetComponent(Skybox).material.GetColor("_Tint"));
	print (RenderSettings.fogColor);
	print (RenderSettings.ambientLight);*/
	
	GetComponent(Skybox).material.SetColor("_Tint",Color(0.438,0.438,0.438,1)+Color(dC,dC,dC,0));
	RenderSettings.fogColor = Color(0.047,0.047,0.047,1)+Color(dC,dC,dC,0);
	RenderSettings.ambientLight = Color(0.047,0.047,0.047,1)+Color(dC/2,dC/2,dC/2,0);
	
}