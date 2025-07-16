class ApiResponse {
    constructor ( statusCode , data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode <400
        this.errors = this.errors

        if(statck ){
            this.statck = statck
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export{ApiResponse}