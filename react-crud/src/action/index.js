const getServerList=(serverListData) => {
    return {
        type: 'LIST_USER_ACTION',
        serverListData
    }
}

// 외부에서는 일반 action 과 동일하게 이용하는데...
// 로직을 담고 로직의 결과로 다양한 액션을 발생시키게 하는.
export const getServerDataAction = () => {
    return async dispatch => {
        try {
            const url="http://localhost:3001/users"
            const response=await fetch(url)
            const responseBody=await response.json()
  
            dispatch(getServerList(responseBody))
        }catch(error){
            console.error(error)
        }
    }
}

export const addUserDataAction = (user, history) => {
    return async dispatch => {
        try{
            const url="http://localhost:3001/users"
            const response=await fetch(url, {method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(user)    
            })


            const responseBody=await response
            if(responseBody.status === 200){
                history.push("/")
            }else{
                console.log('Response error : '+responseBody.status)
            }
            
        }catch(error){
            console.error(error)
        }
    }
}


export const updateUserDataAction = (user, history) => {
    return async dispatch => {
        try{
            const url="http://localhost:3001/users/"+user.id
            const response=await fetch(url, {
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(user)    
            })


            const responseBody=await response
            if(responseBody.status === 200){
                history.push("/")
            }else{
                console.log('Response error : '+responseBody.status)
            }
            
        }catch(error){
            console.error(error)
        }
    }
}

export const deleteUserDataAction = (id) => {
    return async dispatch => {
        try{
            const url="http://localhost:3001/users/"+id
            const response=await fetch(url, {
                method: 'delete'
                
            })

            const responseBody=await response
            if(responseBody.status === 200){
                // history.push("/")
                window.location.reload()
            }else{
                console.log('Response error : '+responseBody.status)
            }
            
        }catch(error){
            console.error(error)
        }
    }
}