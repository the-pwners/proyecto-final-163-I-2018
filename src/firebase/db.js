import firebase from 'firebase';

const db = {
  dbRef: firebase.database(),

  professors () {
    return this.dbRef.ref('/2018/professors').once('value');
  },

  assignatures () {
    return this.dbRef.ref('/assignatures/').once('value');
  },

  setAssignature (professorID, assignature, assignatureName) {
    return this.dbRef.ref('/2018/professors/' + professorID +
                          '/assignatures/' + assignatureName)
      .set(assignature);
  },

  setProfessor (professorID, model) {
    return this.dbRef.ref('/2018/professors/' + professorID)
      .set(model);
  },
};

export default db;
