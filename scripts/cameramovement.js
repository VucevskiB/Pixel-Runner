#pragma strict
var point : GameObject;
private var player : GameObject;
var distance : float;

var offset : Vector3;

var background_Y : float;



static var CameraStop : boolean = false;

static var finish_stop : boolean = false;
function Start () {
	player = GameObject.Find("player");
	finish_stop = false;
	CameraStop = false;

}

function Update () {
	if(CameraStop == true ||  finish_stop == true){
		distance =  0;
	}
	if(CameraStop == false && finish_stop == false){
		if(transform.position.x < player.transform.position.x ){
			transform.position = Vector3.Lerp(transform.position, player.transform.position, distance * Time.deltaTime);

			offset = Vector3(10,0,0);
			//background.transform.position = Vector3.Lerp(background.transform.position,background.transform.position + offset, 0.7 * Time.deltaTime );
		}
		//background.transform.position.y =background_Y;
		//background.transform.position.z = 5;
		transform.position.z = -10;
		transform.position.y = 0;
	}
}