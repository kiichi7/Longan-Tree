#pragma strict

private var lastPosition : Vector3 = Vector3(0, 0, 0);

function Start () {

}

function Update () {
	//Debug.Log("now" + transform.position);
	//Debug.Log("last" + lastPosition);
	lastPosition = transform.position;
}