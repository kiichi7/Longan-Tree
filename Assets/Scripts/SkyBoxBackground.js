
private var leftOrRight : boolean;

function Start () {

	transform.Rotate(Vector3.up, Random.Range(0,360), Space.World);

	if (Random.Range(0,2) == 0) leftOrRight = true;
	else leftOrRight = false;
	
}

function Update () {
	
	if (leftOrRight) transform.Rotate(Vector3.up, Time.deltaTime * 2, Space.World);
	else transform.Rotate(Vector3.up, - Time.deltaTime * 2, Space.World);

}