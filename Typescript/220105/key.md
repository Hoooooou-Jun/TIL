# `22.01.05

## 유니온 타입

</br>

OR 연산자처럼 변수에 지정할 수 있는 타입이 여러 개인 경우 사용함.

```
let padding: string|number;
```

__Example__

```
function calcTax(state: string, income: number, dependents: number): number | undefined {
    if (state === 'NY') {
        return income * 0.06 - dependents * 300;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

console.log(calcTax('NJ', 50000, 2))
```
__타입 축소 (조건문으로 타입 분기)__
```
function padLeft(value: string, padding: any): string {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'`);
}

console.log(padLeft('Hello world', 4))
```

만일 타입 축소로 타입 분기를 하지 않고, 인자에 타입을 정의하면 타입 축소는 의미가 없다.

또한 변수가 두 개 이상의 타입을 가질 경우 any 타입이 아닌 유니온 타입을 사용하는 것이 관습이다.

</br>

__논리적으로 실행할 수 없는 never 타입__


```
function padLeft(value: string, padding: string | number): string {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    else {
        return padding; // typeof 'never'
    }
}
```