import { Injectable } from '@angular/core'
//@angular/http 이 angular 기본 모듈이었는데..
//7.2 버전부터.. 기본 모듈에서 제거되어.. 사용하겠다면 별도로
//설치해서 사용해야 한다...
import { Http, Response } from '@angular/http'

//비동기 프로그램을 위해 rxjs 를 이용
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map'

//서버 데이터 저장...
import { User } from '../user'

@Injectable()
export class UserService {
    userUrl="server/data.json"

    //Http... @angular/http 에서 만들어놓은 service이다.
    //DI 로 이용하면 된다..
    constructor(private http: Http){}

    //component에서 호출하는 함수...
    getUser(): Observable<User[]>{
        return this.http.get(this.userUrl)
            .pipe(map((res: Response) => res.json()))
    }
}

//url 이 내부 url 이어서.. 서버 파일을 이 앱에 추가..
//angular 내장 서버에서 못돌린다..
//정식으로 build 시키고.. vscode 의 서버로 돌리겠다..

//rxjs를 이용했고.. angular 설치시 자동 설치되는 모듈이지만..
//build 시 es5 스타일로 코드 변형하면.. rxjs 의 호환성 문제가
//발생한다..
//호환성만을 목적으로하는 rxjs-compat 을 추가 설치해야 한다..
//>npm install rxjs-compat --save

//build...
//>ng build

