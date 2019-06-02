import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StudentService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    public updateToken(obj) {
        return this.http.post('http://localhost:3600/api' + "/students/updateToken",obj);
	}
}
@Injectable()
export class CustomService{
    getPi(){return Math.PI;}
    circle(radius:number):number{
        return Math.PI*radius*radius;
    }
}
//in Component
this.service.saveAnswers(obj)
      .subscribe((result) => {
        alert('Test is submitted')
	  })
	  
//in backend
router.post('/updateToken', (req, res) => {
    const {
        token,
        status,
        date
    } = req.body;
    Student.findOneAndUpdate(
        { 'invitation.token': token },
        {
            $set:
            {
                'invitation.status': status,
                'invitation.expireDate': date
            }
        })
        .then(result => {
            return res.status(200).json({
                data: result
            })
        })
        .catch((error) => {
            return res.json({ error: error })
        })
});