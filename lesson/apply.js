const person = {
  firstname: 'James',
  lastname: 'Murray',
  showFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

function getSkills(s1, s2){
  console.log(this.showFullName() +' has skills: '+s1+', '+s2);
}

// getSkills('HTML/CSS', 'JavaScript');
// person.getSkills('HTML/CSS', 'JavaScript');

getSkills.apply(person, ['HTML/CSS', 'JavaScript']);
