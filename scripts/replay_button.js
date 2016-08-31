#pragma strict

function Start () {

}

function Update () {

}
function OnMouseOver(){
    if(Input.GetMouseButton(0)){
    	//replay
    	//Debug.Log("YAAs");
    	game_over.is_enable = false;
    	Application.LoadLevel(Application.loadedLevel);

    }
}