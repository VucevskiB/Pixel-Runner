#pragma strict


var boosted : boolean = false;
var jumpspeed : float;
var onground : boolean = true;

var Hit : KeyCode;

var Jump : KeyCode;
var Left : KeyCode;
var Right : KeyCode;

var Up : KeyCode;

var run_speed : float;

static var chase_speed : float;
static var speed2 : float;



var speed : float;
var fixedspeed : float;



var myAnimator : Animator;

var canrotate : boolean = true;
var canwalk : boolean = true;

var time: float ;

var distToGround: float;



static var start : boolean = false;

static var finish2 : boolean = false;

static var start_icon : boolean = true;


function Start () {
	start = false;
	myAnimator.SetBool("start", false);

	distToGround = GetComponent.<Collider2D>().bounds.extents.y;

	chase_speed = 0;
	speed2 = 0;
	finish2= false;

	start_icon = true;


}

function IsGrounded(): boolean {
   return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
 }

function Update () {


	if(GetComponent.<Rigidbody2D>().velocity.y != 0){
		//onground = false;

	}else{
		onground = true;

		//Animator grounded
		myAnimator.SetBool("grounded", true);
		// Animator landing = false
		myAnimator.SetBool("landing", false);
		myAnimator.SetLayerWeight(1,0);
	}
	if(GetComponent.<Rigidbody2D>().velocity.y < 0){
		// Animator landing == ttrue
		myAnimator.SetBool("landing", true);
	}
	chase_speed = 0;
	speed2 = 0;
	if(start == true){
		chase_speed = run_speed;
		speed2 = run_speed;

		myAnimator.SetBool("start", true);
		

	
		Jumping();
	}
	Run();

	if(Input.GetMouseButtonDown(0) && start == false && finish2 == false){
		start  = true;
		start_icon = false;
	}


	//myAnimator.SetBool("jump", false);
	

/*	
	if(Input.GetKey(Right)){
		if(canwalk == true ){
			GetComponent.<Rigidbody2D>().velocity.x = speed * Time.deltaTime;
			shoot.rotation.eulerAngles = Vector3(0,0,-90);
		}
		
		if(canrotate == true){
			//transform.rotation = Quaternion.Euler(0,0,0);
		}
		
	}else if (Input.GetKey(Left)){
		if(canwalk == true){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1 * Time.deltaTime;
			shoot.rotation.eulerAngles = Vector3(0,0,90);
			
		}
		
		if(canrotate == true){
			//transform.rotation = Quaternion.Euler(0,180,0);
		}
		
	
	}else{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	if(canwalk == false && onground == true){
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	
*/

	
}
function Jumping(){
	if(Input.GetMouseButtonDown(0)&&  onground == true){
		//set animation weight to 1
		myAnimator.SetLayerWeight(1,1);
		//set jump to true
		myAnimator.SetBool("jump", true);
		//canrotate = false;
	
		
		//GetComponent.<Rigidbody2D>().velocity.y = jumpspeed;

		onground = false;
		//set jump to false
		 //myAnimator.SetBool("jump", false);
		// animator grounded = false
		myAnimator.SetBool("grounded", false);


		//ar mode : ForceMode = ForceMode.VelocityChange;
		GetComponent.<Rigidbody2D>().AddForce(Vector2.up * jumpspeed *GetComponent.<Rigidbody2D>().mass / Time.deltaTime);
		
		speed = 200;
	}else{
		myAnimator.SetBool("jump", false);
	}
	if(Input.GetMouseButton(0)&&  onground == false){
		boosted = true;
		//GetComponent.<Rigidbody2D>().velocity.y = jumpspeed + 10;
		if(GetComponent.<Rigidbody2D>().velocity.y > 0){	
			GetComponent.<Rigidbody2D>().AddForce(Vector2.up * jumpspeed * GetComponent.<Rigidbody2D>().mass);
			//jumpspeed += 5;
		}
	}
	
}

function Run(){
	GetComponent.<Rigidbody2D>().velocity.x = speed2;
}


 function OnCollisionEnter2D(theCollision : Collision2D){
 	//canrotate = true;
 	boosted = false;
 	//onground = true;
 	speed = 210;	
 }
 function OnTriggerEnter2D(other: Collider2D) {
 	if(other.gameObject.tag == "enemy"){
 		cameramovement.CameraStop = true;
 		game_over.is_enable = true;
 		Destroy(this.gameObject);
 	}
 	onground = true;


 }
 function OnTriggerStay2D() {
 	onground = true;
 }
  function OnTriggerExit2D() {
 	onground = false;
 }

