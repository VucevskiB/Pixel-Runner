#pragma strict
var num : int;

function Start () {
	
	if(parseInt(this.gameObject.name) < PlayerPrefs.GetInt("level_num") + 1){
	 GetComponent(UI.Button).colors.normalColor = Color(183/255.0, 255/255.0, 165/255.0);
	}

	if(parseInt(this.gameObject.name) == PlayerPrefs.GetInt("level_num") + 1){
	 GetComponent(UI.Button).colors.normalColor = Color(49/255.0, 191/255.0, 185/255.0);
	}

	if(parseInt(this.gameObject.name) > PlayerPrefs.GetInt("level_num") + 1){
	 GetComponent(UI.Button).colors.normalColor = Color(174/255.0, 174/255.0, 174/255.0);
	}

}

function Update () {

}
function LoadScene () {
	if( parseInt(this.gameObject.name) <= PlayerPrefs.GetInt("level_num") + 1){
	 num = parseInt(this.gameObject.name);
     Application.LoadLevel (num);
 	}
 }