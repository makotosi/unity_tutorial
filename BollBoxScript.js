#pragma strict

var ball : Transform;

function Start () {

}

function Update () {
    if(Input.GetButtonUp("Jump")){
        Instantiate(ball, transform.position, transform.rotation);
    }
}