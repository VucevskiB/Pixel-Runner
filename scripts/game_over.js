#pragma strict
static var is_enable : boolean =  false;

var text : GameObject;
var button : GameObject;
var home_button : GameObject;

var time : float =  0;
var need_time : float ;
function Start () {

}

function Update () {
	if(is_enable == true){
		time += Time.deltaTime;
		if(time > need_time){
			text.SetActive (true);
			button.SetActive(true);
			home_button.SetActive(true);
		}

	}

}