module.exports=app=>{
    app.logger.debug('debug info');
    app.logger.info('启动时间 %d ms', Date.now())
    // app.logger.warn('warning!');
    // app.logger.error('error...')
}