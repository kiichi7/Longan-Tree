#pragma strict

var theRunner : GameObject;
var theBirdsSinging : GameObject;
private var timer : float = 0;
private var listeningTimer : float = 0;

private var ifCheck : boolean = false;
//private var warningValue : float;
private var wipeValue : float; 
private var lastCheckTime = 0;
private var checkTime = 0;

@HideInInspector
var ifWipe : boolean = false;
@HideInInspector
var ifWarning : boolean = false;
/*@HideInInspector
var isSafe : boolean = false;
@HideInInspector
var isFree : boolean = false;
@HideInInspector
var isVeryFree : boolean = false;

@HideInInspector
var isFar : boolean = false;
@HideInInspector
var isVeryFar : boolean = false;*/
@HideInInspector
var isMorning : boolean = false;
@HideInInspector
var isFree : boolean = false;

function Start () {
}

function Update () {
	var runner : RunnerMove = theRunner.GetComponent(RunnerMove);
	var birds : AudioSource = theBirdsSinging.GetComponent(AudioSource);
	timer += Time.deltaTime;
	
	checkTime = timer/10;
	//checkTime = 0;
	
	if (!ifWipe) {
	    if (lastCheckTime != checkTime) {
	        ifCheck = true;
	        lastCheckTime = checkTime;
	    }
	}
		
	if (runner.getSpeed()>1.52) {
		listeningTimer = 0;
	}
	else {
		listeningTimer += Time.deltaTime;
	}
	//Debug.Log("时间:"+timer+"数值"+TheValue ()+"距离"+GetComponent(MapCycling).GetDistance());
	//给与警告或者清除
	
	wipeValue = (timer - listeningTimer) / 6;
	//warningValue = (timer - listeningTimer) / 12;
	
    if ((ifCheck)&&(!isFree)&&(!isMorning)&&(timer>(58-15*TimesCounter.wipedTimes))) {
        if (TheValue() > wipeValue) ifWipe = true;
	    else if(Time.time > 1.1 * listeningTimer) ifWarning = true; //根据不同的checkTime播放警告音     
	    //else isSafe = true; //根据不同的checkTime播放安全音
	    ifCheck = false;				
	}
	else if ((!ifWipe)&&(timer>598)) isFree = true;
	else if ((!ifWipe)&&(timer>1498)) isMorning = true;
	
/*	//给与自由
	if ((!ifWipe)&&(!isFar)&&(!isVeryFar)) {
		if (listeningTimer>180) isVeryFree = true;
		else if (listeningTimer>60) isFree = true;
	}
	//给与统御
	if ((!ifWipe)&&(!isFree)) { 
		if (GetComponent(MapCycling).GetDistance() > 600) isVeryFar = true;
		else if (GetComponent(MapCycling).GetDistance() > 300) isFar = true;	
	}*/
	//到达早晨
	
	
}

function TheValue () {
    
    if (timer < 91) return (1.5 * (timer - listeningTimer) - GetComponent(MapCycling).GetDistance());
    else if (timer < 181) return ((8.5*((timer - listeningTimer)/90 - 0.4)*((timer - listeningTimer)/90 - 0.4) - 1.36)*(timer - listeningTimer) - GetComponent(MapCycling).GetDistance());
    else return (20 * (timer - listeningTimer) - GetComponent(MapCycling).GetDistance());
    
}


