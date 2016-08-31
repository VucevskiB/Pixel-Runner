#pragma strict

function Start () {

}

function Update () {
	GetComponent.<Rigidbody2D>().velocity.x = movement.chase_speed;
}