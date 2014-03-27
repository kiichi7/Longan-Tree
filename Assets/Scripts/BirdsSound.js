#pragma strict

var theRunner : GameObject;
//var birdsSinging : AudioClip;
private var listeningTime : float = 0;

function Start () {
	//audio.clip = birdsSinging;
	audio.volume = 0;
}

function Update () {

	var runner : RunnerMove = theRunner.GetComponent(RunnerMove);
	//Debug.Log(runner.getSpeed());
	if (audio.volume < 1/(runner.getSpeed()+1)) audio.volume += 0.001/(runner.getSpeed()+1);
	else if (audio.volume > 1/(runner.getSpeed()+1)) audio.volume -= 0.001/(runner.getSpeed()+1);
	if (audio.volume > 0.98) listeningTime += Time.deltaTime;
	else listeningTime = 0; 
	//Debug.Log(audio.volume);
}