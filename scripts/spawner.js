#pragma strict
//x= 24.5  y= -6.57
var ground : GameObject;
var score : float = 1;
function Start () {

}

function Update () {

}
function  OnTriggerEnter2D(other: Collider2D) {
	if(other.gameObject.tag == "trigger"){
		score++;
		var new_ground_pos  = Vector2(24.5 * score,-6.57);
		Instantiate(ground, new_ground_pos, Quaternion.identity);
		transform.position.x += 24.5;
	}
}