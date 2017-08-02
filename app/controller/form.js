module.exports = app => {
    class FormController extends app.Controller {
        * post() {
            const ctx = this.ctx;
            ctx.body = ctx.request.body;
        }
    }
    return FormController;
}