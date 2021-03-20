function trim(str) {
  let arr = str.split(' ');
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == '' || arr[i] == '\n') {
      arr.splice(i, 4);
    }
  }
  alert(arr.join(' '));
}

trim('    asddsf dsf sdf dsf вапвап    ');
----------------------------------------------------------------------------


 function toLowerCase(str) {
      let res = ''
      for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        if (code > 64 && code < 91) {
          res += String.fromCharCode(code + 32)
        } else {
          res += str.charAt(i)
        }
      }
      alert(res);
    }

toLowerCase('aSdFfAs');
-------------------------------------------------------


function calculate(p, y, e) {
	alert(Math.log(Math.pow(p, 2) + Math.pow(y, 3)) + Math.pow(e, p));
}

calculate ( 3, 3, 3);
----------------------------------------------------------


let Emplyee = function(id, name, surname, salary, workExperience, isPrivileges, gender){
	this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary; 
  this.workExperience = workExperience;
  this.isPrivileges = isPrivileges; 
  this.gender = gender;
  this.getFullName = function () {
  	return (this.surname + ' ' + this.name);
  }
  this.getSalaryRate = function() {
  	if (this.workExperience < 3 && this.salary < 200) {
    return('low');
    }
    else 
    	if (this.workExperience > 3 && this.workExperience <=7 && this.salary > 4000) {
      return('modarate');
      }
     else 
     	if (this.isPrivileges == true && this.workExperience >=7 && this.salary > 7000){
      return('high');
      }
  }
}

