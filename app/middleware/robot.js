module.exports = (options, app) => {
    //koa1
    return function* robotMiddleware(next){
        const source = this.get('user-agent')||''
        const match = options.ua.some(ua=>ua.test(source));
        if(match){
            this.status = 404;
            this.message ='Go away, robot.'
        }else{
            yield next;
        }
    }
    //koa2
    // return async function robotMiddleware(ctx, next) {
    //     const source = ctx.get('user-agent') || ''
    //     const match = options.ua.some(ua => ua.test(source));
    //     if (match) {
    //         ctx.status = 404;
    //         ctx.message = 'Go away, robot.'
    //     } else {
    //         await next;
    //     }
    // }
}