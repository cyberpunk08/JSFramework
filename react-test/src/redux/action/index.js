//action 발생 함수
export const testAction = (data) => {
    return {
        type : 'TEST_ACTION',
        data //key, value 동일하면 생략 가능
    }
}