import { Enrollment } from "./enrollment.mjs"

class Student {
Enrollment = new Enrollment()
    constructor(name){

        this.name= name
        this.courses=[]



    }


    enroll(courseName){
this.Enrollment.notify(courseName, this)
    }
}


const s = new Student('nade')

s.enroll('math')