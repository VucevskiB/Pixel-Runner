#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter2D (other : Collider2D) {
	if(other.gameObject.tag == "stop"){
		//Debug.Log("sdaas");
		cameramovement.finish_stop = true;
	}
}