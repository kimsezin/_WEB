/* Date 객체는 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초(천분의 1초(millisecond, ms)))을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다. */

/* 1. Date Constructor */
//Date 객체는 생성자 함수이다. Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다. 
//생성된 인스턴스는 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우, 
//Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다. Date 생성자 함수로 객체를 생성하는 방법은 4가지가 있다.

//1.1 new Date()
// const date = new Date();
// console.log(date);

//1.2 new Date(milliseconds)
let date = new Date(0);
console.log(date);

date=new Date(86400000);
console.log(date);

//1.3 new Date(dateString)
//인수로 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 인수로 전달한 문자열은 Date.parse 메소드에 의해 해석 가능한 형식이어야 한다.
date = new Date('May 16,2019 17:22:10');
console.log(date);

date = new Date('2019/05/16/17:22:10');
console.log(date);

//1.4 new Date(year, month[, day, hour, minute, second, millisecond])
//인수로 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 
//이때 년, 월은 반드시 지정하여야 한다. 지정하지 않은 옵션 정보는 0 또는 1으로 초기화된다. 월은 0이 1월임

date = new Date(2019,4);
console.log(date);

date = new Date(2019, 4, 16, 17, 24, 30, 0);
console.log(date); // Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)

date = new Date('2019/5/16/17:24:30:10');
console.log(date); // Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시)

/* 2.Date Method */
//2.1 Date.now() 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

const now = Date.now();
console.log(now);

//2.2 Date.parse 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.
let d = Date.parse('Jan 2, 1970 00:00:00');
console.log(d);

d = Date.parse('Jan 2, 1970 09:00:00');
console.log(d);

d = Date.parse('1970/01/02/09:00:00');
console.log(d);

//2.3 Date.UTC 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
//Date.UTC 메소드는 new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용해야 한다. Date.UTC 메소드의 인수는 local time(KST)가 아닌 UTC로 인식된다.
d=Date.UTC(1970,0,2);
console.log(d);

d = Date.UTC('1970/1/2');
console.log(d); // NaN

//2.4 Date.prototype.getFullYear 년도를 나타내는 4자리 숫자를 반환한다.
let today = new Date();
let year = today.getFullYear();

console.log(today);
console.log(year);

//2.5 Date.prototype.setFullYear 년도를 나타내는 4자리 숫자를 설정한다. 년도 이외 월, 일도 설정할 수 있다.
today = new Date();

//년도 지정
today.setFullYear(2000);

year = today.getFullYear();
console.log(today);
console.log(year);

//년도지정
today.setFullYear(1900,0,1);

year = today.getFullYear();
console.log(today);
console.log(year);

//2.7 Date.prototype.setMonth 월을 나타내는 0 ~ 11의 정수를 설정한다. 1월은 0, 12월은 11이다. 월 이외 일도 설정할 수 있다.
today = new Date();

//월을 지정
today.setMonth(0);

let month = today.getMonth();
console.log(today);
console.log(month);

//2.8 Date.prototype.getDate 날짜(1 ~ 31)를 나타내는 정수를 반환한다.
today = new Date();
date = today.getDate();

console.log(today);
console.log(date);

//2.9 Date.prototype.setDate 날짜(1 ~ 31)를 나타내는 정수를 설정한다.
today = new Date();
today.setDate(1);

date = today.getDate();
console.log(today);
console.log(date);

//2.10 Date.prototype.getDay 요일(0 ~ 6)를 나타내는 정수를 반환한다. 
today = new Date();
day = today.getDay();

console.log(today);
console.log(day);
//2.11 Date.prototype.getHours 시간(0 ~ 23)를 나타내는 정수를 반환한다.
//2.12 Date.prototype.setHours 시간(0 ~ 23)를 나타내는 정수를 설정한다. 시간 이외 분, 초, 밀리초도 설정할 수 있다.
//분,초,밀리초 까지 가능

//2.19 Date.prototype.getTime 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다.
//2.20 Date.prototype.setTime 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 설정한다.

//2.22 Date.prototype.toDateString 사람이 읽을 수 있는 형식의 문자열로 날짜를 반환한다.
let d2 = new Date('2019/5/16/18:30');

console.log(d2.toString());
console.log(d2.toDateString());


//Date Example
(function printNow()
{
    let today = new Date();

    let dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
    let day = dayNames[today.getDay()];

    let year = today.getFullYear();
    let month = today.getMonth() +1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour > 13 ? 'PM':'AM';

    //12시간제로 변경
    hour = hour %12;
    hour = hour || 12;

    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    let now = `${year}년 ${month}월 ${date}일 ${day} ${ampm} ${hour}:${minute}:${second}`;
    console.log(now);
    setTimeout(printNow,1000);
}());