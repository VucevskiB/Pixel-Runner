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
    	//Application.LoadLevel(parseInt(this.gameObject.name)+1);
    	var num : int = Application.loadedLevel + 1;
    	Application.LoadLevel (num);

    }
}