#pragma strict
var aTexture : Texture;

function Start () {

}

function Update () {

}

function OnGUI() {
    if(!aTexture){
        Debug.LogError("Assign a Texture in the inspector.");
        return;
    }
    GUI.DrawTexture(Rect(0,0,600,600), aTexture, ScaleMode.StretchToFill, true, 10.0f);
}