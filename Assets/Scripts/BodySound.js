#pragma strict
//身体与环境之间的声音由运动状况调控 见RunnerMove.js
var theRunner : GameObject;
private var lastPlay : float = 0;
private var canPlay : boolean = false;

function Start () {
audio.volume = 0.5;
}

function Update () {
lastPlay += Time.deltaTime;
canPlay = (lastPlay > 1.2);
}

var passSound1 : AudioClip;
var passSound2 : AudioClip;
var passSound3 : AudioClip;
var passSound4 : AudioClip;

public function PlayPassBy(){
	if(canPlay){
	var chooseBodySound : int = Random.Range(1,5);
	if (chooseBodySound==1) audio.clip = passSound1;
	if (chooseBodySound==2) audio.clip = passSound2;
	if (chooseBodySound==3) audio.clip = passSound3;
	if (chooseBodySound==4) audio.clip = passSound4;
	PlaySound();
	}
}

public function PlaySound(){
	var runner : RunnerMove = theRunner.GetComponent(RunnerMove);
	if (runner.getSpeed() < 2.0) audio.volume=1.56*(runner.getSpeed()-1.5);
	else audio.volume=0.8-0.04*(runner.getSpeed()-runner.initialSpeed);
	if (audio.volume<0.1) audio.volume=0.2;
	audio.pitch=0.8+0.06*(runner.getSpeed()-runner.initialSpeed);
	if (audio.pitch>1.5) audio.pitch=1.5;
	audio.Play();
	lastPlay = 0;
}