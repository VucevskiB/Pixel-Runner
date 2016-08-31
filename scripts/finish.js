#pragma strict
var evil : GameObject;
var player : GameObject;

var homebutton : GameObject;
var nextlevel_button : GameObject;
var home_button : GameObject;

var player_Animator : Animator;
function Start () {
	evil = GameObject.Find("evil");
	player =  GameObject.Find("player");
	player_Animator = player.GetComponent.<Animator>();

	player_Animator.SetBool("dance",false);
}

function Update () {

}
function OnTriggerEnter2D(other: Collider2D) {
	if(other.gameObject.tag == "Player"){
		//evil.GetComponent.<Rigidbody2D>().velocity.x = 0;
		movement.chase_speed = 0;
		movement.speed2 = 0;
		//player.GetComponent.<RigidbodyConstraints2D>().FreezePositionX;
		player.GetComponent.<Rigidbody2D>().velocity.x = 0;

		player_Animator.SetLayerWeight(2,1);
		player_Animator.SetBool("dance",true);

		homebutton.SetActive(true);
		nextlevel_button.SetActive(true);
		home_button.SetActive(true);

		movement.finish2 = true;
		movement.start = false;

		if(PlayerPrefs.GetInt("level_num") < Application.loadedLevel)
			PlayerPrefs.SetInt("level_num", Application.loadedLevel);



	}

 }
