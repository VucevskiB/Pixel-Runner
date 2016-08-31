#pragma strict

function Start () {

}

function Update () {

}
function LoadScene () {
	if( this.gameObject.name == "Start"){
     Application.LoadLevel ("menu");
 	}else{
 		Application.Quit();
 	}

 }