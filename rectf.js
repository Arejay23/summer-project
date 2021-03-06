function validateID(){
	var id=document.getElementById("id").value;
	var idRGEX=/^[0-9]+$/;
	if(!idRGEX.test(id))
	{
		alert("Please enter a valid ID.");
		return false;
	}
	return true;
	}
	
function validateLine(){
	var line=document.getElementById('line').value;
	var lineRGEX=/^[0-9]+$/;	
	if(!lineRGEX.test(line))
	{
		alert("Please enter a valid Line value.");
		return false;
	}
	return true;
	}	
	
function validateSec(){
	var section=document.getElementById('sec').value;
	var secRGEX=/^[a-zA-Z0-9]+$/;	
	if(!secRGEX.test(section))
	{
		alert("Please enter a valid Section value.");
		return false;
	}
	return true;
	}	
	
function validateStationName(){
	var station=document.getElementById('sname').value;
	var stationRGEX=/^[a-zA-Z ]+$/;	
	if(!stationRGEX.test(station))
	{
		alert("Please enter a valid station name.");
		return false;
	}
	return true;
	}	
	
function validateSStationName(){
	var sstation=document.getElementById('ssname').value;
	var sstationRGEX=/^[A-Z]+$/;
	if(!sstationRGEX.test(sstation))
	{
		alert("Please enter a valid short station name.");
		return false;
	}
	return true;
	}	
	
function validateEquipmentNo(){
	var equipno=document.getElementById('equipment').value;
	var equipnoRGEX=/^[A-Z0-9\d-_]+$/;
	if(!equipnoRGEX.test(equipno))
	{
		alert("Please enter a valid equipment number.");
		return false;
	}
	return true;
	}	
	
function validateEquipmentID(){
	var equipID=document.getElementById('eid').value;
	var equipIDRGEX=/^[A-Z0-9\d-_]+$/;
	if(!equipIDRGEX.test(equipID))
	{
		alert("Please enter a valid equipment ID.");
		return false;
	}
	return true;
	}

	
function validateSubEquipment(){
	var subequip=document.getElementById('sub').value;
	var subequipRGEX=/^[A-Z]+$/;
	if(!subequipRGEX.test(subequip))
	{
		alert("Please enter a valid sub equipment.");
		return false;
	}
	return true;
	}
	
function validateRectTime(){
	var recttime=document.getElementById('rect').value;
	var recttimeRGEX=/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
	if(!recttimeRGEX.test(recttime))
	{
		alert("Please enter a valid rectification time.");
		return false;
	}
	return true;
	}
	
function validateDuration(){
	var dur=document.getElementById('duration').value;
	var durRGEX=/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
	if(!durRGEX.test(dur))
	{
		alert("Please enter a valid duration.");
		return false;
	}
	return true;
	}
	
function validateRectDetails(){
	var rect=document.getElementById('rdetails').value;
	var recRGEX=/^[a-zA-Z ]+$/;
	if(!recRGEX.test(rect))
	{
		alert("Please enter valid rectification details");
	    return false;
	}
	return true;
	}
	
	
function validateOrigin(){
	var origin=document.getElementById('origin').value;
	var originRGEX=/^[a-zA-Z]+$/;
	if(!originRGEX.test(origin))
	{
		alert("Please enter a valid origin.");
		return false;
	}
	return true;
	}
	
function validateAttended(){
	var attendedby=document.getElementById('attended').value;
	var attendedRGEX=/^[A-Za-z0-9 \.\/]+$/;
	if(!attendedRGEX.test(attendedby))
	{
		alert("Please enter a valid person name who attended.");
		return false;
	}
	return true;
	}
	
function superValidate()
{
	var test = validateID() & validateLine() & validateSec() & validateStationName() & validateSStationName() & validateEquipmentNo() & validateEquipmentID()  &validateSubEquipment() &validateRectTime() &validateDuration() &validateRectDetails() &validateOrigin() &validateAttended();
    return test;
}
