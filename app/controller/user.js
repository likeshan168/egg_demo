module.exports = app => {
    class UserController extends app.Controller {
        * info() {
            const ctx = this.ctx;
            ctx.body = {
                name: `hello ${ctx.params.id}`
            }
        }
    }

    return UserController;
}